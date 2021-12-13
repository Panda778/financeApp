import React, { useState } from "react";
import { ListItem, Button, Checkbox } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { deleteTodo, handleChange, handleEditById, todosData } from "../../Redux/feachers/todoSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';


function TodoListItem({ id, text, complete }) {


  
  const todos = useSelector(todosData)
  const dispatch = useDispatch(deleteTodo, handleChange,handleEditById);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isEdit, setIsEdit] = useState(false)
  const [editText,setEditText]= useState(text)



  const handleToggle = () => {
      setIsEdit(!isEdit)
  }
  
  const handleAddText = () => {
    dispatch(handleEditById({id, editText}))
    setIsEdit(false)
  }

  return (
    <ListItem
      sx={{
        width: "100%",

        marginY: 1,
        padding: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
      key={id}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          color="secondary"
          onChange={() => dispatch(handleChange({ id }))}
          {...label}
          checked={complete}
        />
        {isEdit ? <input onChange={(e) => setEditText(e.target.value)} value={ editText}/>:   <Typography
          sx={
            complete
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {text}
        </Typography>}
      </Box>
   {isEdit?    <Box>
        <Button
          onClick={handleAddText }
        
          sx={{ cursor: "pointer" }}
          color={"error"}

        >
         <DoneOutlinedIcon/>
        </Button>
        <Button   sx={{ cursor: "pointer", fontSize: "20px" }} color={"info"}>
         &times;
        </Button>
      </Box> :
      <Box>
        <Button
          onClick={() => dispatch(deleteTodo({ id }))}
          sx={{ cursor: "pointer" }}
          color={"error"}
        >
          <DeleteForeverIcon fontSize="small" />
        </Button>
        <Button  onClick={handleToggle} sx={{ cursor: "pointer", fontSize: "20px" }} color={"info"}>
          <CreateOutlinedIcon color={"info"} fontSize="small" />
        </Button>
      </Box>}
    </ListItem>
  );
}

export default TodoListItem;
