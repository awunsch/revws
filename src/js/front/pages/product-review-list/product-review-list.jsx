// @flow
import React from 'react';
import type { ReviewListType, ReviewType } from 'common/types';
import type { SettingsType } from 'front/types';
import List from './list';
import Paging from 'common/components/review-list-paging/review-list-paging';

type Props = {
  canCreate: boolean,
  productId: number,
  reviewList: ReviewListType,
  settings: SettingsType,
  loading: boolean,
  loadPage: (number, number)=>void,
  onEdit: (ReviewType)=>void,
  onCreate: (number)=>void,
  onDelete: (ReviewType)=>void,
  onReport: (ReviewType)=>void,
  onVote: (ReviewType, 'up' | 'down')=>void,
};

class FrontAppReviewList extends React.PureComponent<Props> {
  static displayName = 'FrontAppReviewList';

  render() {
    const { settings, reviewList, loading, onEdit, onDelete, onReport, onVote } = this.props;
    const isEmpty = reviewList.total === 0;
    return isEmpty ? this.renderEmptyState() : (
      <div>
        <List
          shopName={settings.shopName}
          shape={settings.shape}
          shapeSize={settings.shapeSize.product}
          reviewList={reviewList}
          loading={loading}
          onDelete={onDelete}
          onEdit={onEdit}
          onReport={onReport}
          criteria={settings.criteria}
          displayCriteria={settings.preferences.displayCriteria}
          onVote={onVote} />
        { this.renderPaging() }
        { this.renderWriteReview() }
      </div>
    );
  }

  renderPaging = () => {
    const { productId, loading, loadPage } = this.props;
    const { page, pages } = this.props.reviewList;
    if (pages > 1) {
      return (
        <Paging
          key='paging'
          page={page}
          pages={pages}
          loading={loading}
          loadPage={page => loadPage(productId, page)} />
      );
    }
    return null;
  }

  renderWriteReview = () => {
    const { canCreate, settings } = this.props;
    const { loginUrl } = settings;
    if (canCreate) {
      return this.renderCreateButton(__('Write your review!'));
    }
    if (this.showSignInButton()) {
      return (
        <div className="form-group">
          <a className="btn btn-primary" href={loginUrl}>
            {__('Sign in to write a review')}
          </a>
        </div>
      );
    }
  }

  renderEmptyState = () => {
    const { canCreate, settings } = this.props;
    const { loginUrl } = settings;
    if (canCreate) {
      return this.renderCreateButton(__('Be the first to write a review!'));
    }
    if (this.showSignInButton()) {
      return (
        <div className="form-group">
          <a className="btn btn-primary" href={loginUrl}>
            {__('Sign in to write a review')}
          </a>
        </div>
      );
    }
    return (
      <div className="form-group">
        {__('No customer reviews for the moment.')}
      </div>
    );
  }

  renderCreateButton = (label: string) => {
    const { productId, onCreate } = this.props;
    return (
      <div className="form-group">
        <a className="btn btn-primary" onClick={e => onCreate(productId)}>
          { label }
        </a>
      </div>
    );
  }

  showSignInButton = () => {
    const { preferences, visitor } = this.props.settings;
    return visitor.type === 'guest' && preferences.showSignInButton;
  }
}

export default FrontAppReviewList;
