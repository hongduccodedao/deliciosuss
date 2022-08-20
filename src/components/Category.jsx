import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { NavLink } from "react-router-dom";

import "./scss/Category.scss";

const Category = () => {
    return (
        <div className="list">
            <NavLink to={"/cuisine/Italian"} className="Slink" >
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={"/cuisine/American"} className="Slink" >
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={"/cuisine/Thai"} className="Slink" >
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={"/cuisine/Japanese"} className="Slink" >
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </div>
    );
};

export default Category;
