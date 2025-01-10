export function ticketComponent(name, gitHubAccount) {
    const ticket = document.createElement('article');
    ticket.classList.add('user-ticket');
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('ticket-content');

    contentWrapper.innerHTML = `
        <div class='ticket-tag'>
            <div class='ticket-logo'>
                <img src='/assets/images/logo-full.svg' alt='ticket logo' />
            </div>
            <div class='ticket-details'>
                <p class='event-location'>Jan, 31, 2025 / Austin, TX</p>
            </div>
        </div>
        <div class='user-wrapper'>
            <div class='user-avatar'>
                <img src='/assets/images/image-avatar.jpg' alt='Jonathan avatar' />
            </div>
            <div class='user-details'>
                <p class='user-name'>${name}</p>
                <p class='user-github'>
                    <img src='/assets/images/icon-github.svg' alt='gitHub logo' />
                    <span class='github-id'>${gitHubAccount}</span>
                </p>
            </div>
            <p class='ticket-number'>#01609</p>
        </div>
    `;

    ticket.appendChild(contentWrapper);

    return ticket;
}