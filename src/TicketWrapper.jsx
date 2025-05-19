import TicketCard from "./TicketCard.jsx";

function TicketWrapper(props) {
    return (
        <article>
            <h1>Congrats, <span>{props.name}</span>! Your ticket is ready.</h1>
            <p>We've emailed your ticket to <span>{props.email}</span> and will send updates in the run up to the event.</p>
            <TicketCard {...props} />
        </article>
    );
}


export default TicketWrapper;