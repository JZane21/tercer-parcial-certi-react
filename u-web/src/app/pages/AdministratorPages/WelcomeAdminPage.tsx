import { Box, ImageListItem, Typography } from "@mui/material";
import { WELCOME_ADMIN_FIGURE } from "../../../assets/Administrador/imageList";

export const WelcomeAdminPage = () => {
  return (
  <>
    <ImageListItem sx={{width:'100%', display:'flex',
    alignItems:'center',justifyContent:'center',
    position:'relative'}}>
      <img
        src={WELCOME_ADMIN_FIGURE}
        srcSet={WELCOME_ADMIN_FIGURE}
        alt={"welcome admin figure"}
        loading="lazy"
      />
      <Typography variant="h5" flexWrap={'wrap'}
        sx={{fontWeight:'700', zIndex:'10', position:'fixed',color:'white'}}>
        ¡Bienvenido! ¿Que haremos hoy?
      </Typography>
    </ImageListItem>
  </>
  );
};
