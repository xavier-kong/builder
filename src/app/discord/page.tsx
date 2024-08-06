import Image from "next/image";

function Header() {
    return (
        <div className="flex flex-row h-12 justify-center mx-10">
            <div className="w-36 items-center justify-center">
                <Image 
                    alt=""
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg"
                    width="900"
                    height="900"
                />
            </div>
            <div className="flex flex-1 flex-row items-center text-white text-xs">
                {
                    ['download', 'nitro', 'discord', 'safety', 'support', 'blog', 'careers'].map((item) => (
                        <div key={item} className="flex-1">
                            <p className="capitalize">{item}</p>
                        </div>
                    ))
                }
            </div>
            <div className="w-36 flex items-center justify-center px-10">
                <div className="bg-white rounded-3xl flex flex-1 items-center justify-center h-8 text-xs">
                    <p>Login</p>
                </div>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col flex-1">
                <div>
                    <p>GROUP CHAT THAT’S ALL FUN & GAMES</p>
                </div>
                <div>
                    <p>
                        Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.
                    </p>
                </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
                <Image 
                    alt=""
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp"
                    width="1000"
                    height="1000"
                />
            </div>
        </div>
    );
}


export default function Home() {
    return (
        <div className="bg-indigo-900 flex flex-1 flex-col h-screen">
            <Header />
            <Hero />
        </div>
    )
}
