import TicketCard from "./TicketCard.jsx";

function TicketWrapper({ avatar, name, email, username }) {
    return (
        <article className="text-center">
            <h1 className="text-3xl md:text-5xl mb-3.5">Congrats, <span className="text-orange-500">{name}</span>! Your ticket is ready.</h1>
            <p className="text-sm md:text-lg">We've emailed your ticket to <span className="text-orange-500">{email}</span> and will send updates in the run up to the event.</p>
            <TicketCard avatar={avatar} name={name} username={username} />
        </article>
    );
}


export default TicketWrapper;