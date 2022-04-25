import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CountryReducer from '../features/Reducers/CountryReducer';
import rootRedducer from '../features/Reducers';

const initState={
  testNmae:''
}

export const store = configureStore({
  reducer: {
countryReducer:CountryReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
