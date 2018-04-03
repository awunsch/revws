// @flow

import type { CriteriaType, DisplayCriteriaType, GradingShapeType, NameFormatType, ProductInfoType } from 'common/types';

export type SettingsType = {
  shopName: string,
  api: string,
  criteria: CriteriaType,
  shape: GradingShapeType,
  products: {
    [ number ]: ProductInfoType
  },
  shapeSize: {
    product: number,
    list: number,
    create: number
  },
  visitor: {
    type: 'customer' | 'guest',
    id: number,
    firstName: ?string,
    lastName: ?string,
    nameFormat: NameFormatType,
    email: string,
  },
  preferences: {
    allowEmptyReviews: boolean,
    allowGuestReviews: boolean,
    allowReviewWithoutCriteria: boolean,
    customerReviewsPerPage: number,
    customerMaxRequests: number,
    showSignInButton: boolean,
    displayCriteria: DisplayCriteriaType
  },
  loginUrl: string,
  canCreate: boolean
}
