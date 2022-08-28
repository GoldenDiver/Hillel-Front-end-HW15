import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../futures/title/titleSlice";

export default function Result({ result }) {
    const navigate = useNavigate()
  let res = (
    (result.reduce((a, b) => a + b, 0) / result.length) *
    100
  ).toString();

  const dispatch = useDispatch();
  useEffect(() => {dispatch(setTitle(`Result`))}, [dispatch]);

  return (
    <>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1, mt: 10 }}>
        Your result: {res}
      </Typography>
      <Stack mt={10} spacing={2} direction="row" justifyContent={"center"}>
        <Button variant="contained" onClick={() => navigate("../")}>
          HomePage
        </Button>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Play again
        </Button>
      </Stack>
    </>
  );
}
