
function Form({ setShowIntro, setUserData }) {

    const fileTypes = [
        'image/png',
        'image/jpeg'
    ]

    function validFileType(file) {
        return fileTypes.includes(file.type);
    }

    
    function onSubmitEvent(event) {
        event.preventDefault();
        const form = event.target;
        const avatar = form.elements.upload.files[0]; // get the file object
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const username = form.elements.username.value;

        let avatarUrl;

        if (validFileType(avatar)) {
            avatarUrl = URL.createObjectURL(avatar);
        }

        // Store the form data in parent 
        setUserData({
            avatar: avatarUrl,
            name,
            email,
            username
        })

        // Hide the intro
        setShowIntro(false);

        // Reset the form
        form.reset();

    }

    return (
        <form onSubmit={onSubmitEvent} className="flex flex-col gap-3.5 mt-5">
            <div className="file-field">
                <label htmlFor="upload">Upload Avatar</label>
                <input className="block w-full mt-2 border-dashed border-neutral-500 rounded-lg p-2.5" type="file" name="upload" id="upload" accept=".png, .jpg, .jpeg" />
                <div className="flex items-center gap-2 text-neutral-500 text-sm mt-2.5">
                    <img src="/src/assets/images/icon-info.svg" alt="Info icon" />
                    <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
                </div>
            </div>
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