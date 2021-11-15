import { Fragment } from 'react'
import { connect } from "react-redux"
import JobCard from '../../components/jobCard/jobCard'
import { useNavigate } from 'react-router-dom'

const Home = ({ allJobs }) => {
    const history = useNavigate()
    return (
        <Fragment>
            <button style={{ marginTop: '80px', marginBottom: '80px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '5px', paddingBottom: '5px', fontSize: '15px', borderRadius: '0px', backgroundColor: 'blue', color: 'white', cursor: 'pointer', marginLeft: '1250px' }} onClick={() => history('/addjob')}>Add New Job</button>
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