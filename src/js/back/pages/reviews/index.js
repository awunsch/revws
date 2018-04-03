// @flow
import type { ComponentType } from 'react';
import type { GlobalDataType } from 'back/types';
import { connect } from 'react-redux';
import { mapObject } from 'common/utils/redux';
import { getSettings } from 'back/selectors/settings';
import { getFullCriteria } from 'back/selectors/criteria';
import { saveReview } from 'back/actions/creators';
import Reviews from './reviews';
import { mergeCriteria } from 'back/utils';

const mapStateToProps = mapObject({
  settings: getSettings,
  fullCriteria: getFullCriteria
});

const actions = {
  saveReview
};

const connectRedux = connect(mapStateToProps, actions, mergeCriteria);
const ConnectedComponent: ComponentType<{data: GlobalDataType}> = connectRedux(Reviews);

export default ConnectedComponent;
