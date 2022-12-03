import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./Form";

const login = [
    {
        name: "Email",
        type: "text",
    },

    {
        name: "Password",
        type: "password",
    },
];

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Form login={login} name="login" />
    </React.StrictMode>
);
