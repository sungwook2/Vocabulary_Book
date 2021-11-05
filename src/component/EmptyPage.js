import { Link } from "react-router-dom";

export default function Emptypage() {
    return (
        <>
            <h2>Wrong way</h2>
            <Link to = "/">Go Back</Link>
        </>
    );
}