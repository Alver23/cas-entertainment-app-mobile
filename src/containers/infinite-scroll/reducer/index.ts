// Dependencies
import { DataProvider } from 'recyclerlistview';

export enum ACTIONS {
  SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS',
  SET_ERROR = 'SET_ERROR',
  SET_LOADER = 'SET_LOADER',
  SET_DATA = 'SET_DATA',
}

export type IState = {
  loading: boolean;
  initLoading: boolean;
  refreshing: boolean;
  errors: Error;
  totalItems: number;
  dataProvider: DataProvider;
};

type ACTION_TYPE<T, P> = {
  type: T;
  payload: P;
};

export type ACTION_TYPES =
  | ACTION_TYPE<ACTIONS.SET_DATA, Array<any>>
  | ACTION_TYPE<ACTIONS.SET_ERROR, Error>
  | ACTION_TYPE<ACTIONS.SET_TOTAL_ITEMS, number>
  | { type: ACTIONS.SET_LOADER; property: string; payload: boolean };

export const initialState: IState = {
  loading: false,
  refreshing: false,
  initLoading: false,
  totalItems: 0,
  errors: undefined,
  dataProvider: new DataProvider((r1, r2) => {
    return r1 !== r2;
  }),
};

export const reducer = (state: IState, action: ACTION_TYPES): IState => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return { ...state, errors: undefined, dataProvider: state.dataProvider.cloneWithRows(action.payload) };
    case ACTIONS.SET_ERROR:
      return { ...state, errors: action.payload };
    case ACTIONS.SET_LOADER:
      return { ...state, [action.property]: action.payload };
    case ACTIONS.SET_TOTAL_ITEMS:
      return { ...state, totalItems: action.payload };
    default:
      return state;
  }
};
