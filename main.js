import { welcomeComponent } from "./modules/welcome.js";
import { ticketComponent } from "./modules/ticket.js";
import { ticketIdGenerator } from "./modules/ticketId.js";


const item = ticketComponent('Jonatan Kristof', '@jonatankristof0101');

const app = document.querySelector('#app');
app.appendChild(item);
console.log(ticketIdGenerator());