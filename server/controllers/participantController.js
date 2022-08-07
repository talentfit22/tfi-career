const pool = require('../db')

module.exports ={
  getAllParticipant: async (req, res) =>{
    try {
      const getAllParticipants = await pool.query('SELECT * FROM participant')
      res.status(200).json(getAllParticipants.rows)
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  postParticipants: async (req, res) => {
    try {
      const {
        applied_position,
        participant_name,
        gender,
        date_of_birth ,
        email,
        phone,
        participant_address,
        domicile,
        education_level,
        major,
        university,
        job_expereince_1,
        job_experience_type_1,
        year_experience_1,
        company_1,
        start_date_position_1,
        end_date_position_1,
        job_expereince_2,
        job_experience_type_2,
        year_experience_2,
        company_2,
        start_date_position_2,
        end_date_position_2,
        current_salary,
        expected_salary
      } = req.body;

      const postParticipant = await pool.query('INSERT INTO participant ( applied_position, participant_name, gender,date_of_birth, email, phone, participant_address, domicile, education_level, major, university, job_expereince_1, job_experience_type_1, year_experience_1, company_1, start_date_position_1, end_date_position_1, job_expereince_2, job_experience_type_2, year_experience_2, company_2, start_date_position_2, end_date_position_2, current_salary, expected_salary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) RETURNING *', [applied_position, participant_name, gender,date_of_birth, email, phone, participant_address, domicile, education_level, major, university, job_expereince_1, job_experience_type_1, year_experience_1, company_1, start_date_position_1, end_date_position_1, job_expereince_2, job_experience_type_2, year_experience_2, company_2, start_date_position_2, end_date_position_2, current_salary, expected_salary])

      res.status(202).json(postParticipant.rows[0])
    } catch (error) {
      res.status(404).json(error.message)
    }
  },
  deleteParticipant: async (req, res) => {
    try {
      const { id } = req.params
      const deleteParticipantById = await pool.query('DELETE FROM participant WHERE id = $1', [id])

      res.status(200).json('data deleted successfully')
    } catch (error) {
      res.status(405).json(error.message)
    }
  }
}