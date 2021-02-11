export enum CONSTANTS {
  SET_LOADING = 'SET_LOADING',
  SET_DATA = 'SET_DATA',
  SET_ERROR = 'SET_ERROR',
}

export type IState = {
  loading: boolean;
  data: any;
  errors: Error;
};

type IAction = {
  type: CONSTANTS;
  payload: any;
};

export const initialState: IState = {
  data: undefined,
  loading: false,
  errors: undefined,
};

export const fetchReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case CONSTANTS.SET_DATA:
      return { ...state, data: action.payload };
    case CONSTANTS.SET_LOADING:
      return { ...state, loading: action.payload };
    case CONSTANTS.SET_ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
