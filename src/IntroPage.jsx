import Form from "./Form.jsx";
import TicketCard from "./TicketCard.jsx";

function IntroPage() {
    return (
        <div className="max-w-96 m-auto">
        <div className="mb-4.5">
            <img className="mx-auto" src="/src/assets/images/logo-full.svg" alt="Page logo" />
        </div>
        <section className="text-center">
            <h1 className="font-bold text-3xl mb-2.5 text-neutral-50">Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="text-neutral-300">Secure your spot at next year's biggest coding conference.</p>
        </section>
        <Form />
        <TicketCard />
        </div>
    );
}


export default IntroPage;