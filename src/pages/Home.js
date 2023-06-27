// main page, will have nav bar and general content on robert nozick probably images
import portrait from "../images/robert_nozick_portrait.jpeg";
import book from "../images/robert-book.webp";

const Home = () => {

    return (
        <div>
            <div>
                <div>
                    <h1 className="px-6 text-5xl italic bg-gray-300 py-2">Robert Nozick</h1>
                </div>
                <ul className="flex flex-col items-center">
                    <li className="flex">
                        <div className="p-4"><img src={portrait} /></div>
                        <div className="p-12"><p>Robert nozick is the guy with the plan and he doesnt like big governemnt and hates the experience machine</p></div>
                    </li>
                    <li><img src={book} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Home;