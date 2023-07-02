import { AppContext } from "../../context/AppProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { LoginLayout } from "../layouts/LoginLayout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getPersonas } from "../../services/uWebService";

export const LoginPage = () => {
  const CONTEXT:any = useContext(AppContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const whenSubmit = (datos) => {
    const codigo = parseInt(datos.codigo);
    const listUsers = CONTEXT.dbPersonas;
    const userExist =
    listUsers
    .find(person =>
      person.attributes.codigo===codigo && person.attributes.contrasenha===datos.password);
    if(userExist!==undefined){
      CONTEXT.setCodigo_usuario(userExist.attributes.codigo);

      if(userExist.attributes.profesion==='estudiante'){
        CONTEXT.setAuthEstudiante(true);
        navigate('/app/estudiante');
      }else{
        let auxList = [];
        for(let i=0; i<CONTEXT.dbMaterias.length; i++){
          auxList.
          push(
            {
              text:CONTEXT.dbMaterias[i].attributes.nombre,
              value:CONTEXT.dbMaterias[i].id
            });
        }

        CONTEXT.setMaterias(auxList);

        CONTEXT.setAuth(true);
        CONTEXT.setIdPath(`/${codigo}`);
        navigate(`/app/administrador/${codigo}`);
      }
    }else{
      alert('usuario o contraseña inexistentes');
    }
  };

  return (
    <LoginLayout>
      <Box
        sx={{
          backgroundColor:'white',
          width:'300px',
          height:'300px',
          borderRadius: 3,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column'
        }}
      >
        <Typography variant="h5"
        sx={{fontWeight:10, p:1,marginTop:2,marginBottom:-2}}>
          Log In
        </Typography>
        <form onSubmit={handleSubmit((data) => whenSubmit(data))}>
          <Box sx={{display:'flex',flexDirection:'column',
          height:'250px',justifyContent:'space-around',p:3}}>
            <TextField id="outlined-basic" label="codigo usuario" variant="outlined"
            {...register('codigo')}/>
            <TextField id="outlined-basic" label="contraseña" variant="outlined"
            {...register('password')}/>
            <Button type="submit" variant="contained"
            sx={{
              backgroundColor:'success.main',
              ":hover":{backgroundColor:'success.light'},
              ":active":{backgroundColor:'success.dark'}
            }}
            >
              INGRESAR
            </Button>
          </Box>
        </form>
      </Box>
    </LoginLayout>
  );
};
