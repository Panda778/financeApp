import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
function InputField({ handleSubmit, text, setText }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <input
        style={{
          width: "200px",
          fontSize: "1rem",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 400,
          lineHeight: "1.4375em",
          background: "rgb(243, 246, 249)",
          border: "1px solid #e5e8ec",
          borderRadius: "10px",
          padding: " 6px 10px",
          color: " #20262d",
          transition: "width 300ms ease",

          "&:hover ": {
            background: " #eaeef3",
            borderColor: "#e5e8ec",
          },

          " &:focus": {
            outline: "none",
            width: "220px",
            transition: "width 200ms ease-out",
          },
        }}
        label={"typing"}
        placeholder={"typing"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus={true}
      />

      <Button sx={{
        borderRadius:6,
          ":hover": {
             
              transition: "all 0.4s ease 0s",
            }
      }} variant={"contained"} color={"secondary"} onClick={handleSubmit}>
        + ADD ToDo
      </Button>
    </Box>
  );
}

export default InputField;
