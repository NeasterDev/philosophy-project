// most informational page, has my own thoughts and opinions on robert nozick and his machine
const Content = () => {
    // q1, would i enter the machine, why why not
    const answer1 = "I believe that if there was a machine such as the one Robert Nozick described, where one could be plugged in and " + 
    "have any experience they desire it would have some use cases. If someone was very unhappy with their life they could use the machine " + 
    "to experience better things and be happier, but I believe they would want to exit the machine after they had their experiences. For the " +
    "most part I agree with Rober Nozick in that pleasurable experiences are not the only things that matter to us, the need for our actions to " +
    "matter and the impacts that they have are just as important as the feelings we get inside from the experience. The truth that is our reality" + 
    ", atleast the reality that we know, is something that is necessary for the human experience and I agree that most people would not enter the " +
    "machine with the intent of never exiting because as Robert Nozick puts it, plugging into the machine is a form of \"suicude\".";

    //q2, do i believe that state should be minimal and only their to protect the rights of the individual
    const answer2 = "This questions arisies when we ask what price we are willing to pay for our security. The ideas that Robert Nozick "+ 
    "writes about show that the state should be minimal and its only purpose is to protect the rights of the individual. While I do believe that "+ 
    "the government should protect the rights of the individual it should also have other attributes. The government should also have goals that " + 
    "help the common good and not soley the individual, such as taxes to build roads or other ammentities that benefit the population as a whole." + 
    "Nozick would argue, in regards to the example of taxes paying for roads, that if one does not use the roads that are being paved, why would " +
    "he then be required to help pay for its construction? Well it is a fair point, and the individual may feel that way, but I believe that if " + 
    "it is something to help the common good of the society then it is necessary for that society to do what it can to help. I understand this can " + 
    "be a slippery slope but I think this is something that comes as government evolves and that the checks in power and the people's will being " +
    "shown through the governemnt policies that the government can still do what it can to protect the rights of the individual while also having parts " + 
    "in protecting the common good of the people." ;

    //q3, do i believe that the state of nature is that of a minimal state where groups gather together to protect one another 
    // and this in turn developes into a state and society
    const answer3 = "For Robert Nozick the state of nature is that nature exists and man was thrown into it. People enter the world " + 
    "without asking to and have to do what they can to survive and protect themselves. If a person harvests a fruit from a tree, he has " +
    "combined his labour with the labour of nature and therefore has claimed that fruit as his own; That is the state of nature. Eventually "+ 
    "his property could be in danger of being taken and so he does what he can to protect it, but what if a group tries to take the fruit from " + 
    "him? He will band together with other like-minded individuals to protect the rights of their propert. This example is what Robert Nozick believes " +
    "to be the natural state of things, which in turn is why the state should only exist to protect the rights of the individual. I tend to agree " + 
    "with Nozick on this point, I believe that we as people do like to claim property and then we form alliances and groups to band together " + 
    "to protect not only the property, but the people as well.";

    return (
        <div className="text-center mt-6 flex flex-col items-center justify-center ">
            {/* question 1 */}
            <div className="text-4xl text-blue-500">Would I Enter the Machine?</div>
            <div className="w-2/3 my-8 text-2xl">{answer1}</div>
            {/* question 2 */}
            <div className="text-4xl text-blue-500">Should there be a minimal state?</div>
            <div className="w-2/3 my-8 text-2xl">{answer2}</div>
            {/* question 3 */}
            <div className="text-4xl text-blue-500">Is a minimal state the outcome of the natural state of mankind?</div>
            <div className="w-2/3 my-8 text-2xl ">{answer3}</div>
        </div>
    )
}

export default Content;