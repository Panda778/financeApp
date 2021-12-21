
import React, { useState } from "react";
import HeadTags from "../../App/Components/HeadTags/HeadTags";
import Layout from "../../App/Components/Layout/Layout";
import ToDo from "../../App/Components/ToDo/ToDo";

function Todo() {


  return (
    <Layout>
      <HeadTags title={"todo"} />

      <ToDo  />
    </Layout>
  );
}

export default Todo;
