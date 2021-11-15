import { combineReducers } from "redux";
import jobReducer from './jobs/jobs.reducer'
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['jobs']
}

const rootReducer = combineReducers({
    jobs: jobReducer
})

export default persistReducer(persistConfig, rootReducer)