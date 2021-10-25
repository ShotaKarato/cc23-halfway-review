import React from "react";

const Console = () => {
  return (
    <form className="form">
      <fieldset className="form__wrapper">
        <label>Title</label>
        <input type="text" className="input-title" />
        <label>Content</label>
        <textarea className="input-content" />
      </fieldset>
      <button className="btn">Submit</button>
    </form>
  );
};

export default Console;
