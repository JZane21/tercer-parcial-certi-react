import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import { useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import { FormLayout } from "../../layout/FormLayout";
import { TextQuestion } from "../../components/Administrator/TextQuestion";
import { addPersona, getPersonas } from "../../../services/uWebService";

export const AgregarMateriaPage = () => {
  const CONTEXT:any = useContext(AppContext);

  const {
    handleSubmit,
  } = useForm();

  const whenSubmit = async () => {
    const{nombre,codigo,password} = CONTEXT.valuesAgregarEst;
    if(CONTEXT.dbPersonas
      .filter(item=>item.attributes.codigo===parseInt(codigo)).length===0){
      addPersona({codigo,nombre,contrasenha:password,profesion:'estudiante'});
      const {data} = await getPersonas();
      CONTEXT.setDbPersonas(data);
    }else{
      alert('el usuario ya existe');
    }
  };

  return (
  <Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
    <Typography variant="h5"
      sx={{fontWeight:'700',margin:'10px',left:0}}>
      Agregar Materia
    </Typography>
    <FormLayout text="Agregar Materia">
    <>
      <form onSubmit={handleSubmit(whenSubmit)}>
        <Box sx={{display:'flex',flexDirection:'column',height:'300px',
        p:3,width:'300px',justifyContent:'center',alignItems:'center'}}>
          {
            CONTEXT.AGREGAR_MATERIA_ORDERS.map(item => (
              <TextQuestion
              key={item.placeholder}
              labelQuestion={item.placeholder}
              stateQuestion={item.stateValue}
              setStateQuestion={item.setStateValue}     
              />
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
            AGREGAR
          </Button>
        </Box>
      </form>
    </>
    </FormLayout>
  </Box>
  );
};
