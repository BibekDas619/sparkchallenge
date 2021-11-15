import JobCardWrapper from "./jobCard.styles"
import { connect } from 'react-redux'
import { deleteJob } from '../../redux/jobs/jobs.actions'

const JobCard = ({ job, deleteJob, key }) => {

    const { id, title, description, experience, datePosted } = job
    return (<div key={key}>
        <JobCardWrapper>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Experience: {experience}</p>
            <p>Date Posted: {datePosted}</p>
            <button style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '5px', paddingBottom: '5px', fontSize: '15px', borderRadius: '0px', backgroundColor: 'brown', color: 'white', cursor: 'pointer' }} onClick={() => deleteJob(id)}>Delete</button>
            <button style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '5px', paddingBottom: '5px', fontSize: '15px', borderRadius: '0px', backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>Edit</button>
        </JobCardWrapper>
    </div >)
}

const mapDispatchToProps = (dispatch) => ({
    deleteJob: (id) => dispatch(deleteJob(id))
})

export default connect(null, mapDispatchToProps)(JobCard)