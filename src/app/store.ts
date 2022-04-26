import { configureStore,ThunkAction, Action } from '@reduxjs/toolkit';
import CountryReducer from '../features/Reducers/CountryReducer';

const initState={}
export const store  = configureStore({
reducer: {  
country:CountryReducer
  },



}
)
;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
