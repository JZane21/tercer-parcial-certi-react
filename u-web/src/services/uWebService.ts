import axios from 'axios';

const URI_APP = 'http://localhost:1337/api';

export const getPersonas = async () => {
  const response = await axios.get(`${URI_APP}/personas`);
  return response.data;
}

export const getMaterias = async () => {
  const response = await axios.get(`${URI_APP}/materias`);
  return response.data;
}

export const postMateriaEstudiante =async (id_materia,id_estudiante) => {
  return await
  axios.post(`${URI_APP}/materia-estudiantes`,{id:id_materia,id_estudiante:id_estudiante});
}

export const getMateriaPersona = async () => {
  const response = await axios.get(`${URI_APP}/materia-personas`);
  return response.data;
}

export const getMateriaEstudiante = async () => {
  const response = await axios.get(`${URI_APP}/materia-estudiantes`);
  return response.data;
}

export const addPersona = async (persona) => {
  const {codigo,nombre,contrasenha,profesion} = persona;
  return await axios.post(`${URI_APP}/personas`,{codigo,nombre,contrasenha,profesion});
}
