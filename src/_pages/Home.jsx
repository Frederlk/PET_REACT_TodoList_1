import React, { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import Form from "../_components/Form";
import Loader from "../_components/Loader";
import Notes from "../_components/Notes";

const Home = () => {
    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <>
            <Form />
            <hr />
            {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
        </>
    );
};

export default Home;
