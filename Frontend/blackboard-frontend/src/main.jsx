import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./Form";
import Home from "./Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const inputs = [
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
    {
        name: "name",
        type: "text",
        label: "Name",
    },
    {
        name: "description",
        type: "text",
        label: "Description",
    },
    {
        name: "quantity",
        type: "number",
        label: "Quantity",
    },
];

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/login/:role"
                    element={<Form login={inputs.slice(4, 6)} name="login" />}
                />
                <Route
                    path="/register/:role"
                    element={
                        <Form register={inputs.slice(0, 6)} name="register" />
                    }
                />
                <Route
                    path="/course/:courseID"
                    element={<Form course={inputs.slice(6)} name="course" />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
