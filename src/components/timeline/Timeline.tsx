import React from "react";
import Image from "next/image";
import up from "./assets/up.png";
import down from "./assets/down.png";
import union from "./assets/union.svg";
import gola from "./assets/Group 21.svg";
import side from "./assets/Group 26.svg";

export default function Timeline() {
    const timelineData = [
        {
            day: "Day 1",
            date: "September 9, 2023",
            details: [
                {
                    time: "7:30AM",
                    event: "check-in starts",
                },
                {
                    time: "7:30AM",
                    event: "Doors open for participants",
                },
                {
                    time: "8:00AM",
                    event: "Opening Ceremony",
                },
                {
                    time: "8:30AM",
                    event: "Hacking Starts",
                },
                {
                    time: "9:00AM",
                    event: "Team Building Event",
                },
                {
                    time: "12:00PM",
                    event: "Lunch Break",
                },
                {
                    time: "3:30PM",
                    event: "Fun Event 1",
                },
                {
                    time: "5:00PM",
                    event: "Hacker Hangout",
                },
                {
                    time: "8:00PM",
                    event: "Fun Event 2",
                },
            ],
            position: "left",
        },
        {
            day: "Day 2",
            date: "September 10, 2023",
            position: "right",
            details: [
                {
                    time: "12:00AM",
                    event: "Discord Catch-up session",
                },
                {
                    time: "12:00PM",
                    event: "Lunch Break",
                },
                {
                    time: "2:00PM",
                    event: "Fun Event 3",
                },
                {
                    time: "6:00 PM",
                    event: "Initial Submission Due Hacking ends",
                },
                {
                    time: "9:00 PM",
                    event: "(Submissions hard deadline)",
                },
                {
                    time: "9:20 PM",
                    event: "Closing ceremony",
                },
                {
                    time: "10:00 PM",
                    event: "Demo Starts",
                },
                {
                    time: "10:30 PM",
                    event: "Demo ends",
                },
                {
                    time: "11:00 PM",
                    event: "Event Ends",
                },
            ],
        },
        {
            day: "Day 3",
            date: "September 16, 2023",
            position: "left",
            details: [
                {
                    time: "6:00 PM",
                    event: "Winner Announcement",
                },
            ],
        },
    ];
    return (
        <div className="bg-[#181025] bg-opacity-50">
            <header id="upperImages" className="relative">
                <div className="opacity-50">
                    <Image src={up} alt="up" />
                </div>
                <div className="absolute">
                    <header className="flex flex-col gap-2 ml-10 absolute bottom-10">
                        <h1 className="font-light title text-left leading-normal smallmobile:text-md text-lg sm:text-xl md:text-4xl">
                            Timeline
                        </h1>
                        <div className="bg-[#0c9794] h-2 "></div>
                    </header>
                    <Image src={union} alt="union" />
                </div>
                <div className="opacity-50">
                    <Image src={down} alt="down" />
                </div>
            </header>
            <div className="relative px-28">
                <div className="timeline-line"></div>
                {timelineData.map((data, index) => (
                    <div
                        className={`timeline-item ${
                            data.position === "left"
                                ? "left-item"
                                : "right-item"
                        }`}
                        key={index}
                    >
                        <div className="flex flex-col justify-start items-start">
                            <div
                                id="graphics"
                                className={`flex items-center flex-row  ${
                                    data.position === "left"
                                        ? "left-graphics"
                                        : "flex-row-reverse right-graphics"
                                }`}
                            >
                                <div className="relative flex items-center justify-center">
                                    <div
                                        id="golaContainer"
                                        className="relative flex items-center justify-center"
                                    >
                                        <Image src={gola} alt="gola" />
                                        <span className="absolute text-3xl inset-0 flex items-center justify-center">
                                            {data.day}
                                        </span>
                                    </div>
                                </div>
                                <div id="sidearm" className="opacity-60">
                                    <Image src={side} alt="side" />
                                </div>
                            </div>
                            <div
                                id="details"
                                className="font-gonzLight mt-2 relative"
                            >
                                <h2 className="text-4xl text-[#b137ba] text-center">
                                    {data.date}
                                </h2>
                                <div className="relative">
                                    {data.details.map((detail, idx) => (
                                        <div
                                            className="mt-5 flex items-center justify-between"
                                            key={idx}
                                        >
                                            <div>
                                                <p className="text-2xl">
                                                    {detail.time}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-2xl capitalize">
                                                    {detail.event}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="flex flex-col items-center justify-center">
                <div className="rounded-full h-10 w-10 bg-[#07d6d1] opacity-60"></div>
                <div className="h-full w-2 bg-[#07d6d1] opacity-60"></div>
                <div className="rounded-full h-10 w-10 bg-[#07d6d1] opacity-60"></div>
            </div> */}
        </div>
    );
}
