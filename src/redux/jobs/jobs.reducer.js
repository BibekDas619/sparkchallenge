import { jobs } from './allJobs'
import { JobActions } from './jobs.actiontypes'

const INITIAL_STATE = jobs


const jobReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JobActions.ADD_JOB:
            return [
                ...state,
                action.payload
            ]

        case JobActions.DELETE_JOB:
            const newJobs = state.filter(itm => itm.id !== action.payload)
            return newJobs

        case JobActions.EDIT_JOB:
            const { jobID, jobDetails } = action.payload
            const newState = state.map(job => {
                if (job.id.toString() === jobID) {
                    job.title = jobDetails.title
                    job.description = jobDetails.description
                    job.datePosted = jobDetails.datePosted
                    job.experience = jobDetails.experience
                }
                return job
            })

            return newState

        default: return state
    }
}

export default jobReducer