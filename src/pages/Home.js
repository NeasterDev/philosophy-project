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
    
    const bookInfo = "Perhaps the most well known piece of work done by Robert Nozick, Anarchy, State, and Utopia dives deep into questions about " +
                     "rights, the purpose of the state, and the state of nature and how man became to create society. Robert Nozick argues that " + 
                     "the individual has natural rights that they are born with and that no one may impede on these rights. He argues that the " + 
                     "state should only exist to protect the individual rights of the citizens. Nozick goes on to say that the state of nauture is " + 
                     "the way that humans mix labour with nature to claim property, or when human nature and the Earth's nature coexist. This natural " + 
                     "state is the way which our natural rights come to be and cannot be impeded on, and he argues that humans naturally form groups and societies to " + 
                     "protect the property and natural rights that they have.";

    const experienceMachineInfo = "Nozick first introduced the Experience Machine as a thought experiment in his book 'Anarchy, State, " +
                                  "and Utopia', but went into greater detail on this thought experiment in his book 'The Examined Life' (1989)." +
                                  "The experiment was aimed to show that people value truth and real experiences more than just the " + 
                                  "pleasures and feelings that we have inside of us. The thought experiment has you imagine that there " +
                                  "is a machine that exists that you can plug into and have any experience you desire. You could become a pro " + 
                                  "athlete and experience fame, or have the feeling of eating your favorite meal, or any experiences you desire, " + 
                                  "and you wouldn't know that you plugged into the machine once you were plugged in. Now imagine that you can setup a perfect life that is full of pleasurable experiences and you can plug into the " + 
                                  "machine forever, would you plug into the machine? That is the nature of this thought experiment and Nozick argues " + 
                                  "that almost no one would enter the machine forever because humans value real experiences and knowing that they " + 
                                  "matter, more than just wanting to have pleasurable experiences.";

    return (
        <div>
            <div>
                <ul className="flex flex-col items-center">
                    <li className="flex  mt-6">
                        <div className="flex-1 m-2"><img className="ml-8" src={portrait} alt="painting of Robert Nozick"/></div>
                        <div className="flex-1 m-2 text-xl flex flex-col justify-center items-center">
                            <h1 className="text-blue-500 px-6 text-5xl italic py-2 text-center">Robert Nozick</h1>
                            <p className="p-8">{bio}</p>
                        </div>
                    </li>
                    <li className="flex  mt-6">
                        <div className="flex-1 m-2 text-xl flex flex-col justify-center items-center">
                            <h1 className="text-blue-500 px-6 text-5xl italic py-2 text-center">Anarchy, State, and Utopia</h1>
                            <p className="p-8">{bookInfo}</p>
                        </div>
                        <div className="m-2 flex-1"><img className=" float-right mr-8" src={book} alt="Anarchy, State, and Utopia by Robert Nozick"/></div>
                    </li>
                    <li className="flex mt-6">
                        <div className="m-2 flex-1"><img className="ml-8" src={machineImg} alt="experience machine theoretical" /></div>
                        <div className="m-2 flex-1 text-xl flex flex-col justify-center items-center">
                            <h1 className="text-blue-500 px-6 text-5xl italic py-2 text-center">Experience Machine</h1>
                            <p className="p-8">{experienceMachineInfo}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;