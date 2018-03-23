// @flow

import type { ComponentType } from 'react';
import type { GradingShapeType, ReviewType } from 'common/types';
import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import CustomerIcon from 'material-ui-icons/ShoppingCart';
import GuestIcon from 'material-ui-icons/HelpOutline';
import VerifiedBuyerIcon from 'material-ui-icons/VerifiedUser';
import ApproveIcon from 'material-ui-icons/Check';
import RejectButton from 'material-ui-icons/Delete';
import UndeleteButton from 'material-ui-icons/Refresh';
import Paper from 'material-ui/Paper';
import EnhancedTableHead from './table-head';
import EnhancedTableToolbar from './table-toolbar';
import Grading from 'common/components/grading/grading';
import { hasRatings, averageGrade } from 'common/utils/reviews';

type InputProps = {
  onSetOrder: (orderBy: string, order: 'desc' | 'asc') => void,
  onChangePage: (number) => void,
  onChangeRowsPerPage: (number) => void,
  onReviewClick: (number) => void,
  onAuthorClick: ('customer' | 'guest', number, any) => void,
  approveReview: (id: number) => void,
  deleteReview: (id: number) => void,
  undeleteReview: (id: number) => void,
  //
  title: string,
  emptyLabel: string,
  shape: GradingShapeType,
  // list data
  order: 'asc' | 'desc',
  orderBy: ?string,
  page: number,
  rowsPerPage: number,
  total: number,
  // page data
  data: Array<ReviewType>,
}

type Props = InputProps & {
  classes: any
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  row: {
    cursor: 'pointer'
  },
  underReview: {
    backgroundColor: '#FFFEE1',
    '&:hover': {
      backgroundColor: '#f2ee8a'
    }
  },
  deleted: {
    backgroundColor: '#FF8784',
    '&:hover': {
      backgroundColor: '#ed625e'
    }
  },
  customer: {
    display: 'flex',
    alignItems: 'center',
  },
  svg: {
    width: 16,
    height: 16,
    fill: '#999',
    marginRight: 10
  },
  icon: {
    width: 28
  }
});

class EnhancedTable extends React.Component<Props> {

  render() {
    const {
      shape, emptyLabel, title, classes, total, data, order, orderBy, rowsPerPage, page, onChangePage, onChangeRowsPerPage,
      onAuthorClick, onReviewClick
    } = this.props;
    const columnsData = [
      { id: 'product', disablePadding: false, label: __('Product') },
      { id: 'author', disablePadding: true, label: __('Author') },
      { id: 'grade', disablePadding: false, label: __('Ratings') },
      { id: 'title', disablePadding: true, label: __('Review title') },
      { id: 'content', disablePadding: true, label: __('Review content') },
      { id: 'actions', disablePadding: false, label: __('Actions'), disableSort: true },
    ];
    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar title={title} total={total} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <EnhancedTableHead
              columns={columnsData}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={total}
            />
            <TableBody>
              {data.map((review: ReviewType) => {
                const { id, product, title, content, customer, displayName, authorType, authorId, verifiedBuyer  } = review;
                const ratings = hasRatings(review) ;
                const grade = averageGrade(review);
                const { icon, type } = getAuthorInfo(classes, authorType, verifiedBuyer);
                return (
                  <TableRow
                    tabIndex={-1}
                    key={id}
                    className={classnames(classes.row, this.getReviewRowClass(review))}
                    onClick={e => onReviewClick(id)}
                    hover>
                    <TableCell padding="dense">
                      { product }
                    </TableCell>
                    <TableCell padding="none">
                      <Tooltip placement='bottom-start' title={type}>
                        <div className={classes.customer} onClick={e => onAuthorClick(authorType, authorId, e)}>
                          { icon }
                          { customer || displayName}
                        </div>
                      </Tooltip>
                    </TableCell>
                    <TableCell padding="dense" style={{width: 100}}>
                      { ratings ? (
                        <Grading size={16} grade={grade} shape={shape} />
                      ) : '-'}
                    </TableCell>
                    <TableCell padding="none">
                      { title }
                    </TableCell>
                    <TableCell padding="none">
                      { content }
                    </TableCell>
                    <TableCell padding="dense" numeric={true}>
                      { this.renderActions(review) }
                    </TableCell>
                  </TableRow>
                );
              })}
              {total == 0 && (
                <TableRow style={{ height: 300 }}>
                  <TableCell colSpan={columnsData.length}>
                    <Typography type='display2' style={{textAlign: 'center', color: '#999'}}>
                      { emptyLabel }
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={5}
                  count={total}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={(e, page) => onChangePage(page)}
                  onChangeRowsPerPage={e => onChangeRowsPerPage(e.target.value)}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }

  renderActions = (review: ReviewType) => {
    const { classes, approveReview, deleteReview, undeleteReview } = this.props;
    const iconClass = classes.icon;
    const actions = [];
    if (review.deleted) {
      actions.push(
        <Tooltip key="undelete" title={__('Undelete')}>
          <IconButton className={iconClass} onClick={e => { e.stopPropagation(); undeleteReview(review.id);}}>
            <UndeleteButton />
          </IconButton>
        </Tooltip>
      );
    } else {
      if (review.underReview) {
        actions.push(
          <Tooltip key="approve" title={__('Approve')}>
            <IconButton className={iconClass} onClick={e => { e.stopPropagation(); approveReview(review.id);}}>
              <ApproveIcon />
            </IconButton>
          </Tooltip>
        );
      }
      actions.push(
        <Tooltip key="reject" title={__('Delete')}>
          <IconButton className={iconClass} onClick={e => { e.stopPropagation(); deleteReview(review.id);}}>
            <RejectButton />
          </IconButton>
        </Tooltip>
      );
    }
    return actions;
  }

  handleRequestSort = (property: string) => {
    const { order, onSetOrder } = this.props;
    onSetOrder(property, order === 'desc' ? 'asc' : 'desc');
  };

  getReviewRowClass = (review: ReviewType) => {
    const classes = this.props.classes;
    if (review.deleted) {
      return classes.deleted;
    }
    if (review.underReview) {
      return classes.underReview;
    }
    return null;
  }
}


const getAuthorInfo = (css: any, authorType: string, verified: boolean) => {
  let icon;
  let type;
  if (verified) {
    icon = <VerifiedBuyerIcon className={css.svg} />;
    type = __('Verified buyer');
  } else if (authorType === 'customer') {
    icon = <CustomerIcon className={css.svg} />;
    type = __('Customer');
  } else {
    icon = <GuestIcon className={css.svg} />;
    type = __('Guest visitor');
  }
  return { icon, type };
};

const Component: ComponentType<InputProps> = withStyles(styles)(EnhancedTable);
export default Component;
