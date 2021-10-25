import React, { useState, useEffect } from "react";

const Log = () => {
  const [notes, setNotes] = useState([]);

  // function for fetching notes
  const fetchNotes = async () => {
    let response = await fetch("http://localhost:4000/notes", {
      method: "GET",
      mode: "cors",
    });
    let data = await response.json();
    setNotes(data);
  };

  // fetch notes when the page is loaded
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ul className="notes">
      {notes.map(({ title, content }) => {
        return (
          <li className="notes__note">
            <h2 className="notes__note-title">{title}</h2>
            <p className="notes__note-content">{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Log;
