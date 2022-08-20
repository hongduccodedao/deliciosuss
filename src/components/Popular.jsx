import React, { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./scss/Popular.scss";
import { Link } from "react-router-dom";

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/random?apiKey=b5d8bf2cf7534a3c904bf8038d1bcdfd&number=9`
            )
            .then((res) => {
                setPopular(res.data.recipes);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="wrapper">
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem'
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div className="popular-card">
                                    <Link to={"/recipe/" + recipe.id}>
                                        <div className="gradient"></div>
                                        <p className="popular-card-title">
                                            {recipe.title}
                                        </p>
                                        <img
                                            src={recipe.image}
                                            alt={recipe.title}
                                        />
                                    </Link>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
        </div>
    );
};

export default Popular;
