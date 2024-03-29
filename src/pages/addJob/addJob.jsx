import { Fragment } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addJob } from '../../redux/jobs/jobs.actions'
import { useNavigate } from 'react-router-dom'

const AddJob = ({ jobs, addDetails }) => {

    const history = useNavigate()

    const [jobDetails, setJobDetails] = useState({
        id: jobs.length + 1,
        title: '',
        description: '',
        experience: '',
        datePosted: new Date().toDateString()
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setJobDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }))


    }

    const saveJobDetails = () => {
        console.log(jobDetails)
        addDetails(jobDetails)
        history('/', { replace: true })
    }

    const addJobDetails = () => {
        setJobDetails(prevDetails => ({
            ...prevDetails,
        }))

        saveJobDetails()

    }

    return (
        <Fragment>
            <center>
                <h1>Add Job</h1>
                <div style={{ marginLeft: '250px', marginRight: '250px' }}>
                    <div style={{ paddingBottom: '20px' }}>
                        <p style={{ marginLeft: '-500px', fontSize: '30px', marginBottom: '20px' }}>Job Title</p>
                        <input style={{ marginLeft: '170px', fontSize: '20px', padding: '15px', width: '78%' }} type="text" value={jobDetails.title} name="title" onChange={handleChange} />
                    </div>
                    <div style={{ paddingBottom: '20px' }}>
                        <p style={{ marginLeft: '-470px', fontSize: '30px', marginBottom: '20px' }}>Description</p>
                        <textarea style={{ marginLeft: '170px', fontSize: '20px', padding: '15px', width: '78%' }} type="text" value={jobDetails.description} name="description" onChange={handleChange} />
                    </div>
                    <div style={{ paddingBottom: '20px' }}>
                        <p style={{ marginLeft: '-470px', fontSize: '30px', marginBottom: '20px' }}>Experience</p>
                        <select style={{ marginLeft: '165px', fontSize: '20px', padding: '15px', width: '80%' }} type="text" value={jobDetails.experience} name="experience" onChange={handleChange} >
                            <option value="0-1 years">0-1 years</option>
                            <option value="1-2 years">1-2 years</option>
                            <option value="2-3 years">2-3 years</option>
                            <option value="3-4 years">3-4 years</option>
                        </select>
                    </div>
                    <div>
                        <button style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '5px', paddingBottom: '5px', fontSize: '15px', borderRadius: '0px', backgroundColor: 'blue', color: 'white', marginLeft: '130px', cursor: 'pointer' }} onClick={addJobDetails}>Add</button>
                    </div>
                </div>
            </center>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.jobs
})

const mapDispatchToProps = (dispatch) => ({
    addDetails: (jobDetails) => dispatch(addJob(jobDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddJob)