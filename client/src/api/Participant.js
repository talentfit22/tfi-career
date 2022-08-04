import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production'? '/api' : 'http://localhost:8000';

export const postParticipantApi = async (params) => {

  try {
    const postParticipant = await axios.post( `${baseUrl}/post-participant`, params)

    return postParticipant
  } catch (error) {
    console.log(error)
  }
}

export const getAllParticipantApi = async () => {
  try {
    const getParticipants = await axios.get(`${baseUrl}/get-participants`)

    return getParticipants.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteParticipant = async (id) => {
  console.log(id)
  try {
    const deleteById = await axios.delete(`${baseUrl}/delete-participant/${id}`)

    return deleteById.data
  } catch (error) {
    console.log(error)
  }
}
