import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Notes = ({ notes, onRemove }) => {
    const alert = useContext(AlertContext);

    return (
        <>
            {notes.length ? (
                <TransitionGroup component="ul" className="list-group">
                    {notes.map((note) => (
                        <CSSTransition key={note?.id} classNames="note-anim" timeout={800}>
                            <li className="list-group-item note">
                                <strong> {note?.title}</strong>
                                <span className="date">{note.date}</span>

                                <button
                                    type="button"
                                    onClick={() => {
                                        onRemove(note.id);
                                        alert.show("Заметка была удалена", "primary");
                                    }}
                                    className="btn btn-outline-danger btn-sm">
                                    &times;
                                </button>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            ) : (
                <h3 className="list-group-item pink-100  text-center">Список заметок пока что пуст</h3>
            )}
        </>
    );
};

export default Notes;
