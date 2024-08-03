import Image from "next/image";

function Header() {
    return (
        <div className="flex flex-row">

        </div>
    );
}

function Hero() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div>
                    <p>GROUP CHAT THAT’S ALL FUN & GAMES</p>
                </div>
                <div>
                    <p>
                        Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.
                    </p>
                </div>
            </div>

            <div>
                <Image 
                    alt=""
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp"
                />
            </div>
        </div>
    );
}


export function Home() {
    return (
        <div className="bg-indigo-900 flex flex-1">
            <Header />
            <Hero />
        </div>
    )
}
