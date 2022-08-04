import React, { useState, useEffect} from 'react';
import './SuperAdminDashboard.css'
import { useDispatch } from 'react-redux';
import { superAdminProtect, superAdminLogout } from '../api/Api';
import { unauthenticateSuperAdmin } from '../redux/slices/Slice';
import * as XLSX from 'xlsx';

import { getAllParticipantApi, deleteParticipant } from '../api/Participant';
import moment from 'moment'

const SuperAdminDashboard = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)
  const [participant, setParticipant] = useState()

  const logout = async () => {
    try {
      await superAdminLogout()

      dispatch(unauthenticateSuperAdmin())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  const protectedInfo = async () => {
    try {
      const { data } = await superAdminProtect()

      setProtectedData(data.info)

      setLoading(false)
    } catch (error) {
      logout()
    }
  }

  useEffect(() => {
    protectedInfo()
  });

  useEffect(() => {
    getAllParticipantApi()
    .then((res) =>{
      setParticipant(res)
    })
  }, [])

  const handleDelete = (id) => {
    deleteParticipant(id)
    .then(() =>{
      alert('data deleted successfully')
      document.location.reload(true)
    })
  }

  const handleExport = () => {
    let wb = XLSX.utils.book_new()

    let ws = XLSX.utils.json_to_sheet(participant.map((dataPariticipant) => {
      return{
        applied_position: dataPariticipant.applied_position,
        participant_name: dataPariticipant.participant_name,
        gender: dataPariticipant.gender,
        date_of_birth: moment(dataPariticipant.date_of_birth).format('D-MM-YYYY') ,
        email: dataPariticipant.email,
        phone: dataPariticipant.phone,
        participant_address: dataPariticipant.participant_address,
        domicile: dataPariticipant.domicile,
        education_level: dataPariticipant.education_level,
        major: dataPariticipant.major,
        university: dataPariticipant.university,
        job_expereince_1: dataPariticipant.job_expereince_1,
        job_experience_type_1: dataPariticipant.job_experience_type_1,
        year_experience_1: dataPariticipant.year_experience_1,
        company_1: dataPariticipant.company_1,
        start_date_position_1: dataPariticipant.start_date_position_1,
        end_date_position_1: dataPariticipant.end_date_position_1,
        job_expereince_2: dataPariticipant.job_expereince_2,
        job_experience_type_2:        dataPariticipant.job_experience_type_2,
        year_experience_2:        dataPariticipant.year_experience_2,
        company_2:        dataPariticipant.company_2,
                
        start_date_position_2: dataPariticipant.start_date_position_2,
        end_date_position_2: dataPariticipant.end_date_position_2,
        current_salary:  dataPariticipant.current_salary,
        expected_salary:  dataPariticipant.expected_salary
      }
    }))

    XLSX.utils.book_append_sheet(wb, ws, 'myFile')

    XLSX.writeFile(wb, 'myExcel.xlsx')
  }

  return (
    <div className='dashboard-admin'>
      {
        loading ? (
      <h1>Loading...</h1>
  ) : (
    <div>
      <h4 className='protected'>{protectedData}</h4>        
      <button onClick={() => logout()} className='btn btn-primary' type="button">logout</button>
      <br/> 
      <button className='btn btn-success' onClick={() => handleExport()}>download file</button>
      
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th className='header-table' scope="col">Applied position</th>
            <th className='header-table' scope="col">Name</th>
            <th className='header-table' scope="col">Gender</th>
            <th className='header-table' scope="col">Date of birth</th>
            <th className='header-table' scope="col">Email</th>
            <th className='header-table' scope="col">Phone</th>
            <th className='header-table' scope="col">Address</th>
            <th className='header-table' scope="col">Domicile</th>
            <th className='header-table' scope="col">Education level</th>
            <th className='header-table' scope="col">Major</th>
            <th className='header-table' scope="col">University</th>
            <th className='header-table' scope="col">Position</th>
            <th className='header-table' scope="col">Job type </th>
            <th className='header-table' scope="col">Years experience</th>
            <th className='header-table' scope="col">Company</th>
            <th className='header-table' scope="col">Start date</th>
            <th className='header-table' scope="col">End date</th>
            <th className='header-table' scope="col">Position</th>
            <th className='header-table' scope="col">Job type </th>
            <th className='header-table' scope="col">Years experience</th>
            <th className='header-table' scope="col">Company</th>
            <th className='header-table' scope="col">Start date</th>
            <th className='header-table' scope="col">End date</th>
            <th className='header-table' scope="col">Current salary</th>
            <th className='header-table' scope="col">Expected salary</th>
            <th className='header-table' scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {participant?.map((dataPariticipant, index) => {
            return (
              <tr key={index}>
                <td className='body'>{dataPariticipant.applied_position}</td>
                <td className='body'>{dataPariticipant.participant_name}</td>
                <td className='body'>{dataPariticipant.gender}</td>
                <td className='body'>
                  {moment(dataPariticipant.date_of_birth).format('D-MM-YYYY')}
                </td>
                <td className='body'>{dataPariticipant.email}</td>
                <td className='body'>{dataPariticipant.phone}</td>
                <td className='body'>{dataPariticipant.participant_address}</td>
                <td className='body'>{dataPariticipant.domicile}</td>
                <td className='body'>{dataPariticipant.education_level}</td>
                <td className='body'>{dataPariticipant.major}</td>
                <td className='body'>{dataPariticipant.university}</td>
                <td className='body'>{dataPariticipant.job_expereince_1}</td>
                <td className='body'>{dataPariticipant.job_experience_type_1}</td>
                <td className='body'>{dataPariticipant.year_experience_1}</td>
                <td className='body'>{dataPariticipant.company_1}</td>
                <td className='body'>
                  {moment(dataPariticipant.start_date_position_1).format("D-MM-YYYY") }
                </td>
                <td className='body'>
                  {moment(dataPariticipant.end_date_position_1).format("D-MM-YYYY") }
                </td>
                
                <td className='body'>{dataPariticipant.job_expereince_2}</td>
                <td className='body'>{dataPariticipant.job_experience_type_2}</td>
                <td className='body'>{dataPariticipant.year_experience_2}</td>
                <td className='body'>{dataPariticipant.company_2}</td>
                <td className='body'>
                  {moment(dataPariticipant.start_date_position_2).format("D-MM-YYYY")}
                </td>
                <td className='body'>
                  {moment(dataPariticipant.end_date_position_2).format("D-MM-YYYY")}
                </td>
                
                <td className='body'>{dataPariticipant.current_salary}</td>
                <td className='body'>{dataPariticipant.expected_salary}</td>
                <td className='body'><button className='button-delete' onClick={() => handleDelete(dataPariticipant.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
      }
    </div>
  )
}

export default SuperAdminDashboard