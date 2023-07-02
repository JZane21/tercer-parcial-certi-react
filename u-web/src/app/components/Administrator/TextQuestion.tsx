import { Box, InputLabel, TextField } from "@mui/material";

interface Props{
  labelQuestion:string,
  stateQuestion:string,
  setStateQuestion:(value:string)=>void
}

export const TextQuestion = ({labelQuestion,stateQuestion,
  setStateQuestion}:Props) => {
  return (
  <Box sx={{width:'100%',marginBottom:'10px'}}>
    <TextField sx={{width:'100%'}} value={stateQuestion}
    onChange={(event) => setStateQuestion(event.target.value)}
    id="filled-basic" label={labelQuestion} variant="filled" />
  </Box>
  );
};
