import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function Answers({ data: { id, name, answer }, getAnswers }) {
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }

  getAnswers(id, answer, checked);

  return (
    <FormControlLabel
      label={name}
      id={id}
      control={<Checkbox checked={checked} onChange={handleChange} />}
    />
  );
}
