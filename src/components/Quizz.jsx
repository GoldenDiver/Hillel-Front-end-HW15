import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { getItems } from "../services/fetching";
import Question from "./Question";
import Result from "./Result";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentQuestion } from "../futures/currentQuestion/currentQuestionSlice";

export default function Quizz() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const currentQuestion = useSelector((state) => state.currentQuestion.currentQuestion);

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  function onSendClick() {
    dispatch(setCurrentQuestion(currentQuestion + 1));
  }

  return (
    <Box textAlign={"center"}>
      {items.length > 0 && items.length >= currentQuestion ? (
        items.map((data) => (
          <Question
            key={data.id}
            item={data}
            question={currentQuestion}
            onSendClick={onSendClick}
          />
        ))
      ) : items.length ? (
        <Result />
      ) : (
        <></>
      )}
    </Box>
  );
}
