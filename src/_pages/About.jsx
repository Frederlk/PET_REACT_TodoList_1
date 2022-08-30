import React from "react";

const About = () => {
    return (
        <div className="conteinaer mt-3">
            <h1>Про приложение</h1>
            <span>Это приложение создано при помощи: </span>
            <ul className="list-group mt-2">
                <li className="list-group-item">хуков</li>
                <li className="list-group-item">firebase</li>
                <li className="list-group-item">axios</li>
                <li className="list-group-item">react-transition-group</li>
            </ul>
        </div>
    );
};

export default About;
