import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface QuestionOption{
  value:string,
  text:string
}

interface Props{
  labelQuestion:string,
  stateQuestion:string,
  setStateQuestion:(value:string)=>void,
  questionOptions:Array<QuestionOption>
}

export const SelectQuestion = ({labelQuestion,stateQuestion,
  setStateQuestion,questionOptions}:Props) => {

  const handleChangeValue = (event: SelectChangeEvent) => {
    setStateQuestion(event.target.value);
  };

  return (
    <FormControl sx={{width:"100%"}}>
      <InputLabel id="demo-simple-select-label">{labelQuestion}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={stateQuestion}
        label={labelQuestion}
        onChange={handleChangeValue}
        sx={{width:'100%', marginBottom:'10px'}}
      >
        {
          questionOptions.map(element => (
            <MenuItem key={element.value+"-"+element.text} value={element.value}>
              {element.text}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};
