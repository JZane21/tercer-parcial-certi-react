'use client'
import { Box } from "@mui/material";

interface Props{
  children:JSX.Element
}

export const LoginLayout = ({children}:Props) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundSize: 'cover',
        backgroundImage:
        "URL(https://images.pexels.com/photos/276005/pexels-photo-276005.jpeg)",
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  );
};
