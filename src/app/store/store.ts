import {Action,configureStore,ThunkAction,} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
  
  export const store = configureStore({
    reducer: {
        auth: authSlice
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

   