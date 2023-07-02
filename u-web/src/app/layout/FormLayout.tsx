import { Box, Typography } from "@mui/material";

interface Props{
  children:JSX.Element,
  text:string
}

export const FormLayout = ({children,text}:Props) => {
  return (
  <>
    <Box
      sx={{
        position:'fixed',
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundSize:'cover',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <Box
        sx={{
          width:'max-content',
          height:'max-content',
          borderRadius: 3,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column',
          backgroundColor:'#F9FAFB',
          filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'
        }}
      >
        <Typography variant="h5"
        sx={{fontWeight:700, p:1,marginTop:2,marginBottom:-2}}>
          {text}
        </Typography>
        {children}
      </Box>
    </Box>
  </>
  );
};
