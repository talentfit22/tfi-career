import {useState} from 'react'
import './AddParticipant.css'
import moment from 'moment'

import { postParticipantApi } from '../api/Participant'

import logo from '../resources/Logo-TFI-1.png'

const AddParticipant = () => {
  const [applied_position, setAppliedPosition] = useState()
  const [participant_name, setParticipantName] = useState()
  const [gender, setGender] = useState()
  const [date_of_birth, setDateOfBirth] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [participant_address, setParticipantAddress] = useState()
  const [domicile, setDomicile] = useState()
  const [ education_level, setEducationLevel] = useState()
  const [major, setMajor] = useState()
  const [university, setUniversity] = useState()
  const [job_expereince_1, setJobExperience1] = useState()
  const [job_experience_type_1, setJobExperienceType1] = useState()
  const [year_experience_1, setYearExperience1] = useState()
  const [company_1, setCompany1] = useState()
  const [start_date_position_1, setStartDatePosition1] = useState()
  const [end_date_position_1, setEndDatePosition1] = useState()
  const [job_expereince_2, setJobExperience2] = useState()
  const [job_experience_type_2, setJobExperienceType2] = useState()
  const [year_experience_2, setYearExperience2] = useState()
  const [company_2, setCompany2] = useState()
  const [start_date_position_2, setStartDatePosition2] = useState()
  const [end_date_position_2, setEndDatePosition2] = useState()
  const [current_salary, setCurrentSalary] = useState()
  const [expected_salary, setExpectedSalary] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    const data = {
      applied_position: applied_position,
      participant_name: participant_name,
      gender: gender,
      date_of_birth: moment(date_of_birth).format('D-MM-YYYY') ,
      email: email,
      phone: phone,
      participant_address: participant_address,
      domicile: domicile,
      education_level: education_level,
      major: major,
      university: university,
      job_expereince_1: job_expereince_1,
      job_experience_type_1: job_experience_type_1,
      company_1: company_1,
      start_date_position_1: start_date_position_1,
      end_date_position_1: end_date_position_1,
      year_experience_1: year_experience_1,
      job_expereince_2: job_expereince_2,
      job_experience_type_2: job_experience_type_2,
      company_2: company_2,
      start_date_position_2: start_date_position_2,
      end_date_position_2: end_date_position_2,
      year_experience_2: year_experience_2,
      current_salary: current_salary,
      expected_salary: expected_salary
    }

    
    postParticipantApi(data)
    .then(() => {
      alert("data sent successfully")
      document.location.reload(true)
    }) 
  }

  return (
    <div className='add-participant'>
      <nav className="navbar bg-light">
        <div className="container">
          <img src={logo} alt="" width="150" height="54"/>
          Career Talent Fit Indonesia
        </div>
      </nav>

      <form className='add-participant2' onSubmit={onSubmit}>
        <label htmlFor="label">Applied position:</label>
        <input className='data-input' type="text" onChange={(e) => setAppliedPosition(e.target.value)} required/>
        <label htmlFor="name">Name:</label>
        <input className='data-input' type="text" onChange={(e) => setParticipantName(e.target.value) } required/>
        <label htmlFor="gender">Gender:</label>
        <select className='data-select' onChange={(e) => setGender(e.target.value)}>
          <option value="pilih jenis kelamin">- - Gender option - -</option>
          <option value="Laki-laki">Male</option>
          <option value="Perempuan">Female</option>
        </select>
        <label htmlFor="tanggal lahir">Date of birth:</label>
        <input  className='data-input-date' type="date" onChange={(e) => setDateOfBirth(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input className='data-input' type="text" onChange={(e) => setEmail(e.target.value)} required/>
        <label htmlFor="phone">No telephone/whatsapp:</label>
        <input className='data-input' type="text" onChange={(e) => setPhone(e.target.value)} required placeholder='exp: 0852...' />
        <label htmlFor="address">Address:</label>
        <input className='data-input' type="text" onChange={(e) => setParticipantAddress(e.target.value)} required/>
        <label htmlFor="demicile">Domicile:</label>
        <input className='data-input' type="text" onChange={(e) => setDomicile(e.target.value)} />
        <label htmlFor="education">Last education:</label>
        <input className='data-input' type="text" onChange={(e) => setEducationLevel(e.target.value)} required placeholder='SMA, SMK, Diploma, S1...' />
        <label htmlFor="major">Department/major:</label>
        <input className='data-input' type="text" onChange={(e) => setMajor(e.target.value)} />
        <label htmlFor="university">University:</label>
        <input className='data-input' type="text" onChange={(e) => setUniversity(e.target.value)} />

        <h4>Job experience I</h4>
        <label htmlFor="job-experience">Position:</label>
        <input className='data-input' type="text" onChange={(e) => setJobExperience1(e.target.value)} />
        <label htmlFor="type">Job type:</label>
        <select className='data-select' onChange={(e) => setJobExperienceType1(e.target.value)}>
          <option value="Tipe pekerjaan">- - job type - -</option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Freelance">Freelance</option>
        </select>
        <label htmlFor="year">Duration of work experience:</label>
        <div className='year-exp'>
          <input className='data-input-date' type="text" onChange={(e) => setYearExperience1(e.target.value)} placeholder='Number only. exp: 3 without(.,)'/>
          <h5>years</h5>
        </div>
        <label htmlFor="company">Company name:</label>
        <input className='data-input' type="text" onChange={(e) => setCompany1(e.target.value)} />
        <label htmlFor="date">Start date:</label>
        <input className='data-input-date' type="date" onChange={(e) => setStartDatePosition1(e.target.value)} />
        <label htmlFor="date">End date:</label>
        <input className='data-input-date' type="date" onChange={(e) => setEndDatePosition1(e.target.value)} />

        <h5>Job experience II</h5>
        <label htmlFor="job-experience">Position:</label>
        <input className='data-input' type="text" onChange={(e) => setJobExperience2(e.target.value)} />
        <label htmlFor="type">Job type:</label>
        <select className='data-select' onChange={(e) => setJobExperienceType2(e.target.value)}>
          <option value="Tipe pekerjaan">- - Job type - -</option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Freelance">Freelance</option>
        </select>
        <label htmlFor="year">Duration of work experience:</label>
        <div className='year-exp'>
          <input className='data-input-date' type="text" onChange={(e) => setYearExperience2(e.target.value)} placeholder='Number only. exp: 3 without(.,)'/>
          <h5>years</h5>
        </div>
        
        <label htmlFor="company">Company name:</label>
        <input className='data-input' type="text" onChange={(e) => setCompany2(e.target.value)} />
        <label htmlFor="date">Start date:</label>
        <input className='data-input-date' type="date" onChange={(e) => setStartDatePosition2(e.target.value)} />
        <label htmlFor="date">End date:</label>
        <input className='data-input-date' type="date" onChange={(e) => setEndDatePosition2(e.target.value)} />
        <label htmlFor="salary">Current salary:</label>
        <input className='data-input' type="text" onChange={(e) => setCurrentSalary(e.target.value)} placeholder=' exp: 1000000 without(.,)'/>
        <label htmlFor="salary">Expected salary:</label>
        <input className='data-input' type="text" onChange={(e) => setExpectedSalary(e.target.value)} placeholder='exp: 1000000 without(.,)'/>

        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddParticipant