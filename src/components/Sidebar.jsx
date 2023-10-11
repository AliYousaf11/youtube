import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const categorybtn = "New";

const Sidebar = ({category,setCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "93%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => (
        <button
          className="category-btn"
          onClick = {()=>{ setCategory(item.name)}}
          style={{
            background: item.name === categorybtn && "#FC1530",
            color: "white",
          }}
          key={item.name}
        >
          <span style={{
            color: item.name === categorybtn ? "white" : "red",
            marginRight:'15px'
            }}>
            {item.icon}</span>

          <span style={{
            opacity: item.name === categorybtn ? "1": "0.8",
          }}>{item.name}</span> 
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
