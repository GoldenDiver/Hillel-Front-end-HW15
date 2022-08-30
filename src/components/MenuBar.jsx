import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { CheckOutlined, BuildOutlined, HomeOutlined } from "@mui/icons-material";
import { Drawer, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MenuBar({ onChangeMode }) {
  const [checked, setChecked] = useState(false);
  const title = useSelector((state) => state.title.title);
  const navigate = useNavigate()

  function handleChange(event) {
    let checked = event.target.checked;
    setChecked(checked);
    onChangeMode(checked);
  }

  const data = [
    {
      name: "Home",
      icon: <HomeOutlined />,
      onClick: () => navigate("../"),
    },
    {
      name: "Quizz",
      icon: <CheckOutlined />,
      onClick: () => navigate("../quizz"),
    },
    {
      name: "Admin Editor",
      icon: <BuildOutlined />,
      onClick: () => navigate("../admin"),
    },
  ];

  function MyDrawer() {
    const [open, setOpen] = useState(false);

    const getList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItem button key={index} onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    );
    return (
      <>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MyDrawer />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Switch
            inputProps={{ "aria-label": "controlled" }}
            checked={checked}
            onChange={handleChange}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
