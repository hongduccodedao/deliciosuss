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
        <div className="form" onSubmit={handleSubmit}>
            <div>
                <FaSearch />
                <input type="text" onChange={(e) => setInput(e.target.value)} />
            </div>
        </div>
    );
};
