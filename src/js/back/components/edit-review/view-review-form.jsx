// @flow
import React from 'react';
import type { ReviewType, CriteriaType, GradingShapeType, DisplayCriteriaType } from 'common/types';
import { assoc, merge } from 'ramda';
import Bootstrap from 'common/components/bootstrap/bootstrap';
import ReviewListItem from 'common/components/review-list-item/review-list-item';
import styles from './edit-review-form.less';


type Props = {
  shopName: string,
  language: number,
  criteria: CriteriaType,
  shape: GradingShapeType,
  shapeSize: number,
  review: ReviewType,
  displayCriteria: DisplayCriteriaType,
  onUpdateReview: (ReviewType)=>void,
}

const caps = {
  canEdit: false,
  canReport: false,
  canDelete: false,
  canVote: false
};

class EditReviewForm extends React.PureComponent<Props> {
  static displayName = 'EditReviewForm';

  render() {
    const { shopName, criteria, review, shape, shapeSize, displayCriteria, onUpdateReview } = this.props;
    return (
      <Bootstrap className={styles.preview}>
        <div id="revws-tab-content">
          <ReviewListItem
            criteria={criteria}
            displayCriteria={displayCriteria}
            shopName={shopName}
            shape={shape}
            shapeSize={shapeSize}
            review={merge(review, caps)}
            onSaveReply={reply => onUpdateReview(assoc('reply', reply, review))}
          />
        </div>
      </Bootstrap>
    );
  }
}

export default EditReviewForm;
