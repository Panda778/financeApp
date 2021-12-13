import { useDispatch } from "react-redux";
import { addTodo } from "../../App/Redux/feachers/todoSlice";

import React, { useState } from "react";
import HeadTags from "../../App/Components/HeadTags/HeadTags";
import Layout from "../../App/Components/Layout/Layout";
import ToDo from "../../App/Components/ToDo/ToDo";

function todo() {
  const [text, setText] = useState("");

  const dispatch = useDispatch(addTodo);
  const addTask = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <Layout>
      <HeadTags title={"todo"} />

      <ToDo handleSubmit={addTask} text={text} setText={setText} />
    </Layout>
  );
}

export default todo;
