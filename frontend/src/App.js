import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStories } from "./actions/actions";

import Stories from "./components/Stories";
import Form from "./components/Form";
import mainPic from "./images/Grandma.jpg";
import "./index.css";

export default function App() {
  const { currentId, setCurrentId } = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  return (
    <div>
      <div className="@container">
        <img className="imgTop" src={mainPic} alt="Toots" />
        <h1 className="text-3xl font-bold underline">Grandma's Stories</h1>
        <div className="col-auto">
          <Stories setCurrentId={setCurrentId} />
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}
