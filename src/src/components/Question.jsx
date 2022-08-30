import { Box, Button, Paper, Typography } from "@mui/material";
import Answers from "./Answers";
import { useDispatch } from "react-redux";
import { setTitle } from "../futures/title/titleSlice";
import { useEffect } from "react";
import { addResult } from "../futures/result/resultSlice";

export default function Question({ item, question, onSendClick }) {
  const answers = {
    question: item.id,
    userResult: [false, false, false, false],
    realResult: [false, false, false, false],
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(`Quizz`));
  }, [dispatch]);

  function getAnswers(id, realAnswer, userAnswer) {
    answers.realResult[id - 1] = realAnswer;
    answers.userResult[id - 1] = userAnswer;
  }

  function sendClick() {
    dispatch(addResult(answers));
    onSendClick();
  }

  if (question.toString() === item.id) {
    return (
      <Paper sx={{ paddingBottom: "10px" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {item.question}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          {item.answers.map((data) => (
            <Answers
              key={data.id}
              data={data}
              getAnswers={getAnswers}
            ></Answers>
          ))}
        </Box>
        <Button variant="contained" onClick={sendClick}>
          Send
        </Button>
      </Paper>
    );
  }
}
