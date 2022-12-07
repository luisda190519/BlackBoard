import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

let active = false;

const Home = async function (props) {
    let navigate = useNavigate();
    const location = useLocation();

    await axios
        .get("http://localhost:5173" + location.pathname)
        .then((response) => (active = response.data))
        .catch((err) => {
            console.error(err);
        });

    if (!active) {
        navigate("/login/student");
    }
};

export default Home;
