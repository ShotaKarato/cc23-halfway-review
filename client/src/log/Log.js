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

  // function for deleting note
  const deleteNote = async (id) => {
    let response = await fetch(`http://localhost:4000/notes/${id}`, {
      method: "DELETE",
      mode: "cors",
    });
    fetchNotes();
  };

  // fetch notes when the page is loaded
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ul className="notes">
      {notes.map(({ id, title, content }, index) => {
        return (
          <li className="notes__note" data-id={id} key={index}>
            <h2 className="notes__note-title">{title}</h2>
            <p className="notes__note-content">{content}</p>
            <button className="btn--delete" onClick={() => deleteNote(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Log;
