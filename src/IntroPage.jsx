import { useState } from "react";
import Form from "./Form.jsx";
import TicketWrapper from "./TicketWrapper.jsx";


function IntroPage() {
    const [showIntro, setShowIntro] = useState(true);
    const [userData, setUserData] = useState(null);

    return (
        <div className="max-w-96 m-auto">
            {showIntro ? (<>
            <section className="text-center">
                <h1 className="font-bold text-3xl mb-2.5 text-neutral-50">Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className="text-neutral-300">Secure your spot at next year's biggest coding conference.</p>
            </section>
            <Form setShowIntro={setShowIntro} setUserData={setUserData} />
            </>) : (<><TicketWrapper {...userData} /></>)}
        </div>
    );
}


export default IntroPage;


// Trying to lif the state up to the parent IntroPage(parent) Form(children)....