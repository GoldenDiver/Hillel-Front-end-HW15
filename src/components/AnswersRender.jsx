import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useState } from "react";

export default function AnswersRender({
  data: { id, name, answer },
  edit,
  createAnswers,
}) {
  const [checked, setChecked] = useState(answer);
  const [value, setValue] = useState(name);

  function handleChangeCheckbox(e) {
    setChecked(e.target.checked);
    createAnswers({ id, name: value, answer: e.target.checked });
  }

  function handleChangeTextField(e) {
    setValue(e.target.value);
    createAnswers({ id, name: e.target.value, answer: checked });
  }

  return (
    <FormControlLabel
      label={
        <TextField
          id="outlined-basic"
          label={"Answer" + id}
          variant="outlined"
          value={value}
          disabled={!edit}
          onChange={handleChangeTextField}
        />
      }
      id={id}
      control={
        <Checkbox
          disabled={!edit}
          checked={checked}
          onChange={handleChangeCheckbox}
        />
      }
      sx={{ paddingTop: "10px" }}
    />
  );
}
