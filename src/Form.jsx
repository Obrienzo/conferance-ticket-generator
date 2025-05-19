
function Form() {
    const formElement = document.querySelector('form');
    
    function onSubmitEvent(event) {
        event.preventDefault();
        const fullName = formElement.elements[0].value;
        const email = formElement.elements[1].value;
        const githubUsername = formElement.elements[2].value;
        alert(`Ticket generated for ${fullName} with email ${email} and GitHub username ${githubUsername}`);
        formElement.reset();
        formElement.remove();

    }

    return (
        <form onSubmit={onSubmitEvent} className="flex flex-col gap-3.5 mt-5">
            <p className="name-field">
                <label htmlFor="name">Full Name</label>
                <input className="block w-full mt-2 border border-neutral-500 rounded-lg p-2.5" type="text" name="name" id="name" required />
            </p>
            <p className="email-fiel">
                <label htmlFor="email">Email Address</label>
                <input className="block w-full mt-2 border border-neutral-500 rounded-lg p-2.5" type="email" name="email" id="email" placeholder="example@email.com" required />
            </p>
            <p className="github-username">
                <label htmlFor="username">GitHub Username</label>
                <input className="block w-full mt-2 border border-neutral-500 rounded-lg p-2.5" type="text" name="username" id="username" placeholder="@yourusername" required />
            </p>
            <button className="block text-neutral-900 bg-orange-500 p-3.5 text-center rounded-lg mt-3.5" type="submit">Generate My Ticket</button>
        </form>
    );
}

export default Form;