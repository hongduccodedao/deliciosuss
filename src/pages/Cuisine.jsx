import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import axios from "axios";

import "./scss/Cuisine.scss";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=b5d8bf2cf7534a3c904bf8038d1bcdfd&cuisine=${name}`
            )
            .then((res) => {
                setCuisine(res.data.results);
            });
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <div className="grid">
            {cuisine.map((recipe) => (
                <Link to={"/recipe/" + recipe.id}>
                    <div className="card" key={recipe.id}>
                        <img src={recipe.image} alt="" />
                        <h4>{recipe.title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cuisine;
