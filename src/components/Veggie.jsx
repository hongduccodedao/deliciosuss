import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './scss/Veggie.scss';

const Veggie = () => {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/random?apiKey=b5d8bf2cf7534a3c904bf8038d1bcdfd&number=9&tags=vegetarian`
            )
            .then((res) => {
                setVeggie(res.data.recipes);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="wrapper">
                <h3>Our Vegetarian Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem'
                }}>
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div className="veggie-card">
                                    <Link to={"/recipe/" + recipe.id}>
                                        <div className="gradient"></div>
                                        <p className="veggie-card-title">
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
    );;
};

export default Veggie;
