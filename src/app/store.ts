import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { wordSlice } from '../features/wordsSlice';

export const store = configureStore({
  reducer: {
    words: wordSlice.reducer
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
