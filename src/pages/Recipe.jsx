/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import './scss/Recipe.scss';

const Recipe = () => {

    let params = useParams();

    const [details, setDetails] = useState([]);
    const [activeTab, setActiveTab] = useState('instructions');

    const getDetails = async () => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=b5d8bf2cf7534a3c904bf8038d1bcdfd`
            )
            .then((res) => {
                setDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getDetails();
    }, [params.name]);

    return (
        <div className="details__wrapper">
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <div className="info">
                <button
                    onClick={() => setActiveTab("instructions")}
                    className={activeTab === "instructions" ? "active" : ""}>
                    Instructions
                </button>
                <button
                    onClick={() => setActiveTab("ingredients")}
                    className={activeTab === "ingredients" ? "active" : ""}>
                    Ingredients
                </button>
                {activeTab === "instructions" && (
                    <div>
                        <h4
                            dangerouslySetInnerHTML={{
                                __html: details.summary,
                            }}
                            className="description"></h4>
                        <h4
                            dangerouslySetInnerHTML={{
                                __html: details.instructions,
                            }}
                            className="description"></h4>
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <div>
                        <ul>
                            {details.extendedIngredients.map((ingredient) => {
                                return (
                                    <li key={ingredient.id}>
                                        {ingredient.original}
                                    </li>
                                );
                            }           
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Recipe;
