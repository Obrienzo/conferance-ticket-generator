

function TicketCard(props) {
    return (
        <article className="bg-[url('/src/assets/images/pattern-ticket.svg')] bg-contain bg-center bg-no-repeat py-4 px-8 relative mt-6">
            <section className="flex flex-col gap-8">
                <div>
                    <img className="mb-1.5" src="/src/assets/images/logo-full.svg" alt="ticket card logo" />
                    <p className="text-xs text-neutral-300 ml-12">Jan 31, 2025 / Austin, TX</p>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-11 rounded-lg" src="/src/assets/images/image-avatar.jpg" alt="avatar icon" />
                    <div>
                        <h2 className="text-xl text-neutral-50">{props.name}</h2>
                        <div className="flex gap-0.5 items-center">
                            <img src="/src/assets/images/icon-github.svg" alt="gitHub icon" />
                            <span className="text-sm text-neutral-300">@{props.username}</span>
                        </div>
                    </div>
                </div>
            </section>
            <code className="absolute right-5 top-18 rotate-90 text-neutral-500">#01609</code>
        </article>
    );
}


export default TicketCard;