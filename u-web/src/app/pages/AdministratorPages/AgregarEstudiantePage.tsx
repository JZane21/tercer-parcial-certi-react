import { Box, Button, Typography } from "@mui/material";
import { FormLayout } from "../../layout/FormLayout";
import { AppContext } from "../../../context/AppProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TextQuestion } from "../../components/Administrator/TextQuestion";

export const AgregarEstudiantePage = () => {

  const CONTEXT:any = useContext(AppContext);

  const {
    handleSubmit,
  } = useForm();

  const whenSubmit = () => {

  };

  return (
  <Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
    <Typography variant="h5"
      sx={{fontWeight:'700',margin:'10px',left:0}}>
      Agregar Estudiante
    </Typography>
    <FormLayout text="Agregar Estudiante">
    <>
      <form onSubmit={handleSubmit(whenSubmit)}>
        <Box sx={{display:'flex',flexDirection:'column',height:'300px',
        p:3,width:'300px',justifyContent:'center',alignItems:'center'}}>
          {
            CONTEXT.AGREGAR_ESTUDIANTE_ORDERS.map(item => (
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
