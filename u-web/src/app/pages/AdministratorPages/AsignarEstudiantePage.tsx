import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import { useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import { FormLayout } from "../../layout/FormLayout";
import { SelectQuestion } from "../../components/Administrator/SelectQuestion";
import { TextQuestion } from "../../components/Administrator/TextQuestion";
import { getPersonas, postMateriaEstudiante } from "../../../services/uWebService";

export const AsignarEstudiantePage = () => {

  const CONTEXT:any = useContext(AppContext);

  const {
    handleSubmit,
  } = useForm();

  const whenSubmit = async () => {
    const {codigo,materia} = CONTEXT.valuesAsignarEst;
    if(CONTEXT.dbPersonas
      .filter(item=>item.attributes.codigo===parseInt(codigo)).length!==0){
      if(CONTEXT.dbMateriaEstudiante
        .filter(item => item.attributes.id_estudiante===parseInt(codigo)).length!==0){
        postMateriaEstudiante(parseInt(materia),parseInt(codigo));
        const {data} = await getPersonas();
        CONTEXT.setDbMateriaEstudiante(data);
      }else{
        alert('el usuario ya esta registrado en la materia');
      }
    }else{
      alert('el usuario no existe');
    }
  };

  return (
  <Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
    <Typography variant="h5"
      sx={{fontWeight:'700',margin:'10px',left:0}}>
      Asignar Estudiante
    </Typography>
    <FormLayout text="Asignar Estudiante">
    <>
      <form onSubmit={handleSubmit(whenSubmit)}>
        <Box sx={{display:'flex',flexDirection:'column',height:'300px',
        p:3,width:'300px',justifyContent:'center',alignItems:'center'}}>
          {
            CONTEXT.ASIGNAR_ESTUDIANTE_ORDERS.map(item => (
              <Box key={item.placeholder+item.stateValue}
              sx={{width:'100%'}}>
              {
                item.placeholder === 'codigo estudiante' &&
                (
                  <TextQuestion
                  labelQuestion={item.placeholder}
                  stateQuestion={item.stateValue}
                  setStateQuestion={item.setStateValue}     
                  />
                )
              }
              {
                item.placeholder !== 'codigo estudiante' &&
                (
                  <SelectQuestion
                  labelQuestion={item.placeholder}
                  stateQuestion={item.stateValue}
                  setStateQuestion={item.setStateValue}
                  questionOptions={item.arrayOptions}
                  />
                )
              }
              </Box>
              
            ))
          }
          <Button type="submit" variant="contained"
          sx={{
            backgroundColor:'success.main',
            ":hover":{backgroundColor:'success.light'},
            ":active":{backgroundColor:'success.dark'},
            width:'150px'
          }}
          >
            ASIGNAR
          </Button>
        </Box>
      </form>
    </>
    </FormLayout>
  </Box>
  );
};
