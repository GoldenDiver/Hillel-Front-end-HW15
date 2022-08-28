import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { getItem } from "../services/fetching";
import Question from "./Question";
import Result from "./Result";

const result = [];

export default function Quizz() {
  const [items, setItems] = useState([]);
  const [question, setQuestion] = useState("1");

  useEffect(() => {
    getItem().then((data) => setItems(data));
  }, []);

  function onSendClick(res) {
    setQuestion((Number(question) + 1).toString());
    result.push(res);
  }

  const questions = items.length

  return (
    <Box textAlign={"center"}>
      {Number(question) <= questions ? (
        items.map((data) => (
          <Question
            key={data.id}
            item={data}
            question={question}
            questions={questions}
            onSendClick={onSendClick}
          />
        ))
      ) : (
        <Result result={result} />
      )}
    </Box>
  );
}
