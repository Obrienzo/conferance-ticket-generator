

function TicketCard({ avatar, name, username }) {
    return (
        <article className="relative mt-6">
            <img className="w-full h-full" src="/src/assets/images/pattern-ticket.svg" alt="ticket pattern" />
            <div className="absolute top-0 left-0 p-2.5 md:p-3.5 h-full flex flex-col justify-between">
                <div>
                    <img className="w-44 md:w-58" src="/src/assets/images/logo-full.svg" alt="logo full" />
                    <p className="text-xs md:text-sm pl-10 md:pl-14 text-slate-300">Jan 31, 2025 / Austin, TX</p>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2.5">
                    <img className="w-9 md:w-12 aspect-square rounded-md object-cover" src={avatar} alt="user avatar" />
                    <div>
                        <h2 className="text-slate-50 text-xl md:text-2xl">{name}</h2>
                        <div className="flex items-center">
                            <img className="w-4 md:w-6" src="/src/assets/images/icon-github.svg" alt="GitHub icon" />
                            <span className="text-xs md:text-sm text-slate-300">@{username}</span>
                        </div>
                    </div>
                </div>
            </div>
            <code className="absolute right-1 top-14 md:top-20 rotate-90 text-neutral-500 md:text-xl">#01609</code>
        </article>
    );
}


export default TicketCard;