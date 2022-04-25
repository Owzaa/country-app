import { configureStore,applyMiddleware, ThunkAction, Action, compose } from '@reduxjs/toolkit';
import CountryReducer from '../features/Reducers/CountryReducer';
import thunk from 'redux-thunk'

const initState={
}

export const store  = configureStore({
reducer: {
countryReducer:CountryReducer
  }}
)
{ const middleware=[thunk]
 let compooseEnhancers=compose 
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
