import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./Form";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const register = [
    {
        name: "First",
        type: "text",
        label: "First Name",
    },

    {
        name: "Last",
        type: "text",
        label: "Last Name",
    },

    {
        name: "Age",
        type: "number",
        label: "Age",
    },

    {
        name: "Gender",
        type: "text",
        label: "Gender",
    },

    {
        name: "Email",
        type: "text",
        label: "Email",
    },

    {
        name: "Password",
        type: "password",
        label: "Password",
    },
];

const login = [
    {
        name: "Email",
        type: "text",
        label: "Email",
    },

    {
        name: "Password",
        type: "password",
        label: "Password",
    },
];

function getRoleParams() {
    const { role } = useParams();

    return <h1>role</h1> ;
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login/:role"
                    element={
                        <Form login={login} name="login" role={getRoleParams} />
                    }
                />
                <Route
                    path="/register/:role"
                    element={
                        <Form
                            register={register}
                            name="register"
                            role={getRoleParams}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
