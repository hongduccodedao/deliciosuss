import axios from "axios";
import React from "react";

import { Link, useParams } from "react-router-dom";

import './scss/Searched.scss';

const Searched = () => {

    const [searched, setSearched] = React.useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=b5d8bf2cf7534a3c904bf8038d1bcdfd&query=${name}`
            )
            .then((res) => {
                setSearched(res.data.results);
            });
    };

    React.useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <div className="grid">
            {searched.map((recipe) => (
                <div className="card" key={recipe.id}>
                    <Link to={"/recipe/" + recipe.id}>
                        <img src={recipe.image} alt="" />
                        <h4>{recipe.title}</h4>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Searched;
