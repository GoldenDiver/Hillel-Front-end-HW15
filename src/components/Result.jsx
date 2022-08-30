import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../futures/title/titleSlice";
import { useSelector } from "react-redux";
import { setCurrentQuestion } from "../futures/currentQuestion/currentQuestionSlice";

export default function Result() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result.result);
  let res = 0;

  useEffect(() => {
    dispatch(setTitle(`Result`));
  }, [dispatch]);

  res =
    (result
      .map((data) => {
        let resAnswer = 0;
        let colTrue = 0;
        for (let i = 0; i < data.realResult.length; i++) {
          if (data.realResult[i] === true) {
            colTrue++;
            if (data.realResult[i] === data.userResult[i]) {
              resAnswer++;
            }
          }
        }
        return resAnswer / colTrue;
      })
      .reduce((a, b) => a + b, 0) *
      100) /
    result.length;

  return (
    <>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1, mt: 10 }}>
        Your result: {res + "%"}
      </Typography>
      <Stack mt={10} spacing={2} direction="row" justifyContent={"center"}>
        <Button variant="contained" onClick={() => navigate("../")}>
          HomePage
        </Button>
        <Button variant="contained" onClick={() => dispatch(setCurrentQuestion(1))}>
          Play again
        </Button>
      </Stack>
    </>
  );
}
