import Link from "next/link";

function getStats(): { years: number, months: number, days: number, totalDays: number } {
    const startDate = new Date('2021-06-27');
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffMillis = currentDate.getTime() - startDate.getTime();

    // Convert milliseconds to years, months, and days
    const years = Math.floor(diffMillis / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diffMillis % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diffMillis % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    // Calculate the total number of days
    const totalDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24));

    return { years, months, days, totalDays };
}

export default function Streaks() {
    const { years, months, days, totalDays } = getStats();

    return (
        <div className="bg-slate-950 h-screen flex flex-1 justify-center items-center text-white">
            <div className="h-1/2 w-1/2 flex flex-col">
                <div className="flex-1 flex justify-center items-center border-white border-2 flex-row">
                    <div className="px-2 flex-row flex gap-2 items-end align-text-bottom">
                        <p className="text-7xl bg-red-400 flex flex-1">{years}</p>
                        <p className="bg-blue-900">years</p>
                    </div>
                    <div className="px-2 flex-row flex gap-2 items-end">
                        <p className="text-3xl">{months}</p>
                        <p>months</p>
                    </div>
                    <div className="px-2 flex-row flex gap-2 items-end">
                        <p className="text-3xl">{days}</p>
                        <p>days</p>
                    </div>
                </div>
                <div className="h-20 mt-5 border-2 border-white flex items-center justify-center">
                    {totalDays} days since June 27th 2021
                </div>
                <div>
                    <Link href="https://github.com/xavier-kong">My github profile</Link>
                </div>
                <div>
                    Home button
                </div>
            </div>
        </div>
    )
}
