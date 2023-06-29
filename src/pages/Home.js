// main page, will have nav bar and general content on robert nozick probably images
import portrait from "../images/robert_nozick_portrait.jpeg";
import book from "../images/robert-book.jpg";
import machineImg from "../images/frame_0_delay-s.jpg";

const Home = () => {

    const bio = "Robert Nozick is an American philosopher who is best known for his book 'Anarchy, State, and Utopia', written in 1974. " + 
                "Robert Nozick was a strong believer that the government should " +
                "do no more than protect the rights of the individual, and that a person has the right to do whatever they please with their property. He is " + 
                "also well known for being responsible for the thought experiment called the 'Experience Machine' which challenged hedonism by saying " +
                "that people value real experiences and the truth more than just pleasure.";
    
    //const bookInfo = "";

    //const experienceMachineInfo = "";

    return (
        <div>
            <div>
                <ul className="flex flex-col items-center">
                    <li className="flex  mt-6">
                        <div className="flex-1 m-2"><img src={portrait} alt="painting of Robert Nozick"/></div>
                        <div className="flex-1 m-2 text-xl flex flex-col justify-center items-center">
                            <h1 className="text-blue-500 px-6 text-5xl italic py-2 text-center">Robert Nozick</h1>
                            <p className="p-8">{bio}</p>
                        </div>
                    </li>
                    <li className="flex  mt-6">
                        <div className="flex-1 m-2 text-xl flex flex-col justify-center items-center">
                            <h1 className="text-blue-500 px-6 text-5xl italic py-2 text-center">Anarchy, State, and Utopia</h1>
                            <p className="p-8">{bio}</p>
                        </div>
                        <div className="m-2 flex-1"><img src={book} alt="Anarchy, State, and Utopia by Robert Nozick"/></div>
                    </li>
                    <li className="flex mt-6">
                        <div className="m-2 flex-1"><img className="" src={machineImg} alt="experience machine theoretical" /></div>
                        <div className="m-2 flex-1 text-xl flex flex-col justify-center items-center">
                            <h1 className="text-blue-500 px-6 text-5xl italic py-2 text-center">Experience Machine</h1>
                            <p className="p-8">{bio}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;