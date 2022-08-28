import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../futures/title/titleSlice";
import { useEffect } from "react";

export default function HomePage() {
  const StyledBox = styled(Box)({ marginTop: 20, textAlign: "center" });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {dispatch(setTitle(`HomePage`))}, [dispatch]);

  return (
    <StyledBox>
      <Typography variant="h5" component="h5">
        Wellcome to my JSQuizz project
      </Typography>
      <Stack mt={5} spacing={2} direction="row" justifyContent={"center"}>
        <Button variant="contained" onClick={() => navigate("../quizz")}>
          Start quizz
        </Button>
      </Stack>
    </StyledBox>
  );
}
