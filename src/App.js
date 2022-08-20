import Category from "./components/Category";
import Pages from "./pages/Pages";

import { BrowserRouter, Link } from "react-router-dom";
import { Search } from "./components/Search";
import { GiKnifeFork } from 'react-icons/gi'

import "./App.scss";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="nav">
                    <Link to="/" className="logo">
                        <GiKnifeFork />
                    </Link>
                </div>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
