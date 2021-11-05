import { Link } from "react-router-dom";

export default function Header() {
    return (
    <div className = "header">
        <h1>
            <Link to = "/">Vocabulary Book</Link>
        </h1>
        <div className = "menu">
            <Link to = "/create_word" className = "link">
                Add Voca
            </Link>
            <a href = "/create_day" className = "link">
                Add Day
            </a>
        </div>
    </div>
    );
}