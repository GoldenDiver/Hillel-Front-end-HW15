import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { getItems } from "../services/fetching";
import Question from "./Question";
import Result from "./Result";

export default function Quizz() {
  const [items, setItems] = useState([]);
  const [question, setQuestion] = useState(1);

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  function onSendClick() {
    setQuestion((question + 1).toString());
  }

  return (
    <Box textAlign={"center"}>
      {items.length > 0 && items.length >= question ? (
        items.map((data) => (
          <Question
            key={data.id}
            item={data}
            question={question}
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
