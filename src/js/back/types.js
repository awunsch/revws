// @flow
import type { NameFormatType, LangString, LanguagesType, GradingShapeType, ShapeColorsType } from 'common/types';
export type { RoutingState, GoTo } from 'back/routing';

export type SettingsType = {
  theme: {
    shape: string,
    colors: ShapeColorsType,
    shapeSize: {
      product: number,
      list: number,
      create: number,
    }
  },
  display: {
    product: {
      placement: string,
      orderBy: 'date' | 'grade' | 'usefulness',
      reviewsPerPage: number | string,
      averagePlacement: 'rightColumn' | 'buttons' | 'none',
      showSignInButton: boolean,
    },
    productList: {
      show: boolean,
    },
    productComparison: {
      show: boolean,
    },
    myReviews: {
      show: boolean,
      iconClass: string,
      reviewsPerPage: number | string,
      maxRequests: number | string,
    }
  },
  moderation: {
    enabled: boolean,
    needApprove: {
      create: boolean,
      edit: boolean,
      reported: boolean
    }
  },
  review: {
    displayName: NameFormatType,
    allowGuestReviews: boolean,
    allowEmpty: boolean,
    allowVoting: boolean,
    allowReporting: boolean,
    allowDelete: boolean,
    allowEdit: boolean,
  },
  notifications: {
    admin: {
      email: string,
      language: number | string,
      reviewCreated: boolean,
      reviewUpdated: boolean,
      reviewDeleted: boolean,
      needApprove: boolean,
    },
    author: {
      thankYou: boolean,
      reviewApproved: boolean,
      reviewDeleted: boolean,
      reply: boolean,
    }
  },
  richSnippets: {
    enabled: boolean
  }
}

export type EnvironmentType = {
  productcomments: boolean,
  mailstream: boolean
}

export type GlobalDataType = {
  api: string,
  shopName: string,
  baseUrl: string,
  shapes: {
    [ string ]: GradingShapeType
  },
  language: number,
  languages: LanguagesType,
  environment: EnvironmentType
}

export type FullCriterion = {
  id: number,
  active: boolean,
  global: boolean,
  label: LangString,
  products: Array<number>,
  categories: Array<number>
}

export type FullCriteria = {
  [ number ]: FullCriterion
}

// route definition
export type RouteDefinition<T> = {
  toUrl: (T) => string,
  toState: (string) => ?T,
  component: any,
  setup?: (T, any)=>void,
  update?: (T, T, any)=>void,
  teardown?: (T, any)=>void
};

export type LoadOptions = 'all' | {
  pageSize: number,
  page: number
}

export type Load = {
  record: string,
  options: LoadOptions
};
