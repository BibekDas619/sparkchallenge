import { JobActions } from './jobs.actiontypes'

export const addJob = (jobDetails) => ({
    type: JobActions.ADD_JOB,
    payload: jobDetails
})

export const deleteJob = (jobID) => ({
    type: JobActions.DELETE_JOB,
    payload: jobID
})

export const editJob = (jobID) => ({
    type: JobActions.EDIT_JOB,
    payload: jobID
})