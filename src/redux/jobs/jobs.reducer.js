import { jobs } from './allJobs'
import { JobActions } from './jobs.actiontypes'

const INITIAL_STATE = jobs


const jobReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        case JobActions.ADD_JOB:
            return [
                ...state,
                action.payload
            ]

        case JobActions.DELETE_JOB:
            console.log(action)
            const newJobs = state.filter(itm => itm.id !== action.payload)
            return newJobs

        default: return state
    }
}

export default jobReducer