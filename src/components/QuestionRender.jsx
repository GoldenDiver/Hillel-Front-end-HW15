import { Box, Button, Paper, Stack, styled, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import AnswersRender from "./AnswersRender";

export default function QuestionRender({ item: { question, answers, id }, onSaveClick, onDeleteClick }) {
  let newQuestion = question;
  const [edit, setEdit] = useState(false);
  let newAnswers = answers;

  function BtnEditSave() {
    if (edit) {
      return (
        <Button
          variant="outlined"
          startIcon={<SaveIcon />}
          onClick={onEditClick}
        >
          Save
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={onEditClick}
        >
          Edit
        </Button>
      );
    }
  }

  function onEditClick() {
    setEdit(!edit);
    if (edit) {
      const newItem = { id, question: newQuestion, answers: newAnswers };
      onSaveClick(newItem);
    }
  }

  function createAnswers(answer) {
    newAnswers = newAnswers.map((data) =>
      data.id === answer.id ? answer : data
    );
  }

  const StyledPaper = styled(Paper)({
    width: "100%",
    paddingTop: "15px",
    paddingBottom: "15px",
    marginTop: "5px",
  });

  const StyledBox = styled(Box)({
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  });

  function Text() {
    const [value, setValue] = useState(newQuestion);
    function handleChange(e) {
      setValue(e.target.value);
      newQuestion = e.target.value;
    }

    return (
      <TextField
        id="outlined-multiline-flexible"
        label={"Question " + id}
        multiline
        rows={10}
        value={value}
        disabled={!edit}
        onChange={handleChange}
        sx={{ width: "70%" }}
      />
    );
  }

  return (
    <StyledPaper>
      <Box padding={3} sx={{display: 'flex'}}>
        <Text />
      
      <StyledBox>
        {answers.map((data) => (
          <AnswersRender
            key={data.id}
            data={data}
            edit={edit}
            createAnswers={createAnswers}
          ></AnswersRender>
        ))}
      </StyledBox>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        padding={3}
      >
        <Button variant="outlined" startIcon={<DeleteIcon />} color={"error"} onClick={() => onDeleteClick(id)}>
          Delete
        </Button>
        <BtnEditSave />
      </Stack>
    </StyledPaper>
  );
}
