export function welcomeComponent(name, email) {
    const container = document.createElement('article');
    container.classList.add('welcome-message');
    
    container.innerHTML = `
        <h1>Congrats, <span class='client-name'>${name}</span>! Your ticket is ready.</h1>
        <p>We've emailed your ticket to <span class='client-mail'>${email}</span> and will send updates in the run up to the event.</p>
    `;

    return container;
}