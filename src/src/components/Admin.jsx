import { Box, Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../futures/title/titleSlice";
import { createItem, deleteItem, getItems, updateItem } from "../services/fetching";
import QuestionRender from "./QuestionRender";
import AddIcon from "@mui/icons-material/Add";

export default function Admin() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(setTitle(`Admin Editor`));
    getItems().then((data) => setItems(data));
  }, [dispatch]);

  function onSaveClick(newItem) {
    setItems(items.map((data) => (data.id === newItem.id ? newItem : data)));
    updateItem(newItem);
  }

  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  function addItem() {
    const newItem = {
      question: "",
      answers: [
        { id: 1, name: "", answer: false },
        { id: 2, name: "", answer: false },
        { id: 3, name: "", answer: false },
        { id: 4, name: "", answer: false },
      ],
    };
    createItem(newItem).then(data => setItems((prewItems) => [ ...prewItems, data.data]));
  }

  function onDeleteClick(id) {
    deleteItem(id)
    const newItems = items.filter(data => data.id !== id)
    setItems(newItems)
  }

  return (
    <>
      <Box textAlign={"center"}>
        {items.map((data) => (
          <QuestionRender key={data.id} item={data} onSaveClick={onSaveClick} onDeleteClick={onDeleteClick} />
        ))}
      </Box>
      <Fab sx={fabStyle} color="primary" aria-label="add" onClick={addItem}>
        <AddIcon />
      </Fab>
    </>
  );
}
