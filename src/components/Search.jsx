import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import './scss/Search.scss';

export const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
    }

    return (
        <div className="form">
            <div>
                <FaSearch onSubmit={handleSubmit} />
                <input type="text" />
            </div>
        </div>
    );
};
