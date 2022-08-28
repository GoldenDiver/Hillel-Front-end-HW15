import { Box, Button, Paper, Typography } from "@mui/material";
import Answers from "./Answers";
import { useDispatch } from "react-redux";
import { setTitle } from "../futures/title/titleSlice";
import { useEffect } from "react";

export default function Question({ item, question, onSendClick }) {
  const answers = { question: item.id, result: [0, 0, 0, 0] };
  let res = 0;
  const col = item.answers.filter((data) => data.answer === true).length;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(`Quizz`));
  }, [dispatch]);

  function getAnswers(id, realAnswer, userAnswer) {
    if (realAnswer === true && userAnswer === true) {
      answers.result[id - 1] = 1 / col;
    } else {
      if (realAnswer === false && userAnswer === true) {
        answers.result[id - 1] = -0.5 / col;
      } else {
        answers.result[id - 1] = 0;
      }
    }
    res = answers.result.reduce((a, b) => a + b, 0);
  }

  function sendClick() {
    onSendClick(res);
  }

  if (question === item.id) {
    return (
      <Paper sx={{paddingBottom: '10px'}}>
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
