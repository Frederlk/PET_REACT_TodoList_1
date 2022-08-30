import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    return (
        <CSSTransition in={alert.visible} timeout={500} classNames="alert" mountOnEnter unmountOnExit>
            <div className={`alert alert-${alert?.type || "warning"} mt-3 alert-dismissible fade show`}>
                <strong>Внимание !</strong> {alert?.text}
                <button onClick={hide} type="button" className="btn-close" aria-label="Close"></button>
            </div>
        </CSSTransition>
    );
};

export default Alert;
