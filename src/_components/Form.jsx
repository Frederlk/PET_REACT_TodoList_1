import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Form = () => {
    const [value, setValue] = useState("");
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const submitHandler = (e) => {
        e.preventDefault();

        if (value.trim()) {
            firebase
                .addNote(value.trim())
                .then(() => {
                    alert.show("Заметка была создана", "success");
                })
                .catch(() => alert.show("Что-то пошло не так", "danger"));
            setValue("");
        } else {
            alert.show("Введите название заметки");
        }
    };

    return (
        <form onSubmit={submitHandler} className="pt-3">
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="form-control"
                />
            </div>
        </form>
    );
};

export default Form;
