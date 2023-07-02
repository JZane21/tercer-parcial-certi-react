import { useState, useEffect, useContext } from 'react';
import { Box, AppBar, Toolbar, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { AppContext } from '../../context/AppProvider';


const AlumnoPage = ({ codigo_usuario }) => {
  const CONTEXT = useContext(AppContext);

  const [notasYFaltas, setNotasYFaltas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
      const data = CONTEXT.dbMateriaEstudiante
      .filter(item => item.attributes.id_persona === parseInt(codigo_usuario));
      const notasYFaltasData = data.map((item) => ({
        materia: CONTEXT.dbMaterias.find(materia => materia.id === item.attributes.id_materia).attributes.nombre,
        notas: [item.attributes.primer_parcial, item.attributes.segundo_parcial, item.attributes.tercer_parcial],
        faltas: [item.attributes.primer_faltas, item.attributes.segundo_faltas, item.attributes.tercer_faltas],
      }));
      // console.log(CONTEXT.dbMaterias.find(materia => materia.id === 1));
      setNotasYFaltas(notasYFaltasData);
  };

  const calcularNotaFinal = (notas) => {
    // Lógica para calcular la nota final
    // Aquí puedes implementar tu propia lógica según tus requisitos
    return Math.round(notas.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/3);
  };

  const calcularFaltasTotales = (faltas) => {
    // Lógica para calcular las faltas totales
    // Aquí puedes implementar tu propia lógica según tus requisitos
    return faltas.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Notas
          </Typography>
        </Toolbar>
      </AppBar>
      <Box mt={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Materia</TableCell>
                <TableCell>Primer Parcial</TableCell>
                <TableCell>Segundo Parcial</TableCell>
                <TableCell>Tercer Parcial</TableCell>
                <TableCell>Nota Final</TableCell>
                <TableCell>Faltas Primer Parcial</TableCell>
                <TableCell>Faltas Segundo Parcial</TableCell>
                <TableCell>Faltas Tercer Parcial</TableCell>
                <TableCell>Faltas Totales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notasYFaltas.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.materia}</TableCell>
                  <TableCell>{item.notas[0]}</TableCell>
                  <TableCell>{item.notas[1]}</TableCell>
                  <TableCell>{item.notas[2]}</TableCell>
                  <TableCell>{calcularNotaFinal(item.notas)}</TableCell>
                  <TableCell>{item.faltas[0]}</TableCell>
                  <TableCell>{item.faltas[1]}</TableCell>
                  <TableCell>{item.faltas[2]}</TableCell>
                  <TableCell>{calcularFaltasTotales(item.faltas)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AlumnoPage;