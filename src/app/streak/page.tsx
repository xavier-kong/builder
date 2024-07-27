import Link from "next/link";
import { Vortex } from "../_components/vortext";

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
        <div className="w-[calc(100%)] mx-auto h-screen overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    {years} years {months} months {days} days
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-10 text-center">
                    {totalDays} days since June 27th 2021
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                    <Link href="https://github.com/xavier-kong" target="_blank">
                        <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg" />
                            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex flex-row">
                                <p>Click for my Github profile</p>
                            </div>
                        </button>
                    </Link>
                </div>
            </Vortex>
        </div>
    );
}
