import { configureStore } from '@reduxjs/toolkit'
import fetchEventsReducer from './slices/fetchEvents'

export default configureStore({
  reducer: {
      fetchEvents: fetchEventsReducer
  }
})