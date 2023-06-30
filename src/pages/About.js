//this page will detail the purpose and objective of this site
import photo from "../images/Robert-Nozick.webp";
const About = () => {
    return (
        <div className="text-center mx-8 mt-8 text-2xl">
            <h1 className="text-4xl text-blue-500">About us</h1>
            <div>
            Here at Robert Nozick we pride ourselves on delivering information about Robert Nozick and his philosophical viewpoints.
            We like to give everyone a glimpse into the thoughts of Robert Nozick, his most prominent philosophical viewpoints, and explain
            our own thoughts about the matter. What we really want, here at Robert Nozick, is to give everyone a chance to sit down and think.
            Think hard about our society and about how we came to this point in it. Whether you agree with Robert Nozick or you disagree with
            everything he says, we welcome you to our site and believe that you will enjoy the journey that we have all enjoyed before you. 
            Here at Robert Nozick, we just want to thank you for taking the time to visit our webpage, deticated to Robert Nozick, one of the 
            greatest Americal Philosphers of our generation.
            </div>
            <div className="flex justify-center mt-8">
                <img src={photo} alt="Robert Nozick"/>
            </div>
        </div>
    )
}

export default About;