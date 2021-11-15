import { Fragment } from 'react'
import { connect } from "react-redux"
import JobCard from '../../components/jobCard/jobCard'

const Home = ({ allJobs }) => {
    console.log(allJobs)
    return (
        <Fragment>
            {
                allJobs.map(job => <JobCard job={job} key={job.id} />)
            }
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    allJobs: state.jobs
})

export default connect(mapStateToProps)(Home)