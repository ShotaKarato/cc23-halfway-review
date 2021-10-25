import React from "react";
import { useForm } from "react-hook-form";

const Console = () => {
  // setup react form
  const { register, handleSubmit, reset } = useForm();
  // function to send note to database
  const postNote = async (note) => {
    let response = await fetch("http://localhost:4000/notes", {
      method: "POST",
      model: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: note,
    });
    console.log(response.status);
  };
  const submitNotes = (data) => {
    postNote(JSON.stringify(data));
    reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit(submitNotes)}>
      <fieldset className="form__wrapper">
        <label>Title</label>
        <input
          name="title"
          id="title"
          type="text"
          className="input-title"
          {...register("title", { required: true })}
        />
        <label>Content</label>
        <textarea
          name="content"
          id="content"
          className="input-content"
          {...register("content", { required: true })}
        />
      </fieldset>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Console;
