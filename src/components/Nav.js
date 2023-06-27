import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="flex">
                <li className="m-2"><Link to="/">Home</Link></li>
                <li className="m-2"><Link to="/about">About</Link></li>
                <li className="m-2"><Link to="/content">Content</Link></li>
                <li className="m-2"><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;