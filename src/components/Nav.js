import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex justify-between bg-blue-300 py-1">
            {/* logo area, main button on nav bar */}
            <div className=" font-bold text-2xl m-2 hover:text-blue-500"><Link to="/philosophy-project">Robert Nozick</Link></div>
            {/* the rest of the links */}
            <ul className="flex text-xl">
                <li className="m-2 hover:text-blue-500"><Link to="/about">About</Link></li>
                <li className="m-2 hover:text-blue-500"><Link to="/content">Content</Link></li>
                <li className="m-2 hover:text-blue-500 mr-4"><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;