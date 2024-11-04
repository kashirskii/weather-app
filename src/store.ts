import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './features/weather/weatherSlice'

export const store = configureStore({
  reducer: {
      weather: weatherSlice,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']