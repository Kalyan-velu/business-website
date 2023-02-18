import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {Rectangle10, Rectangle2} from "@/component/asset/Rectangle";

const Hero = () => {
    const { ref, inView } = useInView();
    const animationX = useAnimation();
    const animationY = useAnimation();
    const animationZ = useAnimation();
    const animationBT = useAnimation();
    const pathAnimation = useAnimation();

    const pathRef = useRef(null);

    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    useEffect(() => {
        const el = pathRef.current;
        gsap.fromTo(
            el,
            { rotation: 0, opacity: 0 },
            {
                rotation: 360,
                opacity: 1,
                duration: 1,
                ease: "none",
                scrollTrigger: { trigger: el },
            }
        );
    }, [inView]);

    useEffect(() => {
        if (inView) {
            animationX.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    type: "fade",
                },
            });
            animationY.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    type: "fade",
                },
            });
            animationZ.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    type: "ease-out",
                },
            });
            animationBT.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    type: "ease-out",
                },
            });
            pathAnimation.start({
                opacity: 1,
                pathLength: 1,
                transition: {
                    duration: 2,
                    ease: "easeInOut",
                },
            });
        }
        if (!inView) {
            animationX.start({ opacity: 0, x: "-30px" });
            animationY.start({ opacity: 0, x: "30px" });
            animationZ.start({ opacity: 0, x: "-30px" });
            animationBT.start({ opacity: 0, y: "30px" });
            pathAnimation.start({ opacity: 0, pathLength: 0 });
        }
    }, [inView]);

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { delay: 1, ease: "easeInOut" } },
    };

    return (
        <div ref={ref} className="w-full h-screen pt-20 bg-white m-auto rouded-br-[100px]">
            <div className="flex flex-col p-6">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center md:flex-1 md:items-start">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="max-w-[700px] h-full md:items-start"
                        >
                            <h1
                                data-scroll
                                data-scroll-delay="0.13"
                                data-scroll-speed="4"
                                className="md:pt-20 pt-[180px] text-4xl md:text-6xl tracking-wider md:tracking-normal text-center text-gray-700"
                            >
                                Global Search.
                                <br />
                                Specialist Expertise.
                                <br />
                                Local Knowledge.
                            </h1>
                        </motion.div>
                        <div className="pt-10 max-w-[700px] text-center text-xl md:text-left">
                            <p>
                                The NMG Group is global advisory and intermediary firm focused
                                exclusive on the financial service sector.
                            </p>
                        </div>
                        <div className="pt-10">
                            <button className="flex items-center bg-[#c61526] rounded-xl justify-center p-4 text-white gap-4 text-xl hover:scale-110 transition-all ease-out">
                                Learn More <TbArrowWaveRightUp size={30} />
                            </button>
                        </div>
                    </div>
                        <div className="hidden md:flex-1 md:inline-block">
                            <div className="px-20 py-20">
                            <Image
                                src="/assets/business-people-office.png"
                                width={408}
                                height={580}
                                alt={"Image"}
                                className="relative z-20"
                            />
                            <div className="w-[408px] h-[580px] border-[5px] border-[#f5f6fc] rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl z-10 absolute top-[160px] right-[380px]"></div>
                            <div className="w-[308px] h-[480px] border-[5px] border-[#f5f6fc] rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl z-10 absolute top-[300px] right-[330px]"></div>
                        </div>
                            <motion.div className="absolute z-30 top-[270px] right-[630px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="268"
                            height="268"
                            viewBox="0 0 268 268"
                        >
                            <defs>
                                <filter
                                    id="Rectangle_12"
                                    x="0"
                                    y="0"
                                    width="268"
                                    height="268"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feGaussianBlur stdDeviation="33" result="blur" />
                                    <feFlood floodColor="#101140" floodOpacity="0.18" />
                                    <feComposite operator="in" in2="blur" />
                                    <feComposite in="SourceGraphic" />
                                </filter>
                            </defs>
                            <g
                                id="Group_8"
                                data-name="Group 8"
                                transform="translate(-571 -141)"
                            >
                                <g
                                    transform="matrix(1, 0, 0, 1, 571, 141)"
                                    filter="url(#Rectangle_12)"
                                >
                                    <rect
                                        id="Rectangle_12-2"
                                        data-name="Rectangle 12"
                                        width="70"
                                        height="70"
                                        rx="13"
                                        transform="translate(99 75)"
                                        fill="#fff"
                                    />
                                </g>
                                <motion.path
                                    animate={pathAnimation}
                                    id="Path_19"
                                    data-name="Path 19"
                                    d="M544.532,230.087h18.075a19.565,19.565,0,0,0-18.075-18.075Z"
                                    transform="translate(162.893 18.334)"
                                    fill="#c61526"
                                />
                                <motion.path
                                    animate={pathAnimation}
                                    id="Path_20"
                                    data-name="Path 20"
                                    d="M259.061,262.573V241.629a19.562,19.562,0,1,0,20.944,20.944Z"
                                    transform="translate(443.567 -9.047)"
                                    fill="none"
                                    stroke="#c61526"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                            </g>
                        </svg>
                    </motion.div>
                            <motion.div
                                    animate={animationZ}
                                    className="absolute z-30 top-[550px] right-[600px]"
                            >
                                <Rectangle10 pathAnimation={pathAnimation}/>
                            </motion.div>
                            <motion.div
                                    animate={animationY}
                                    className="absolute z-30 top-[250px] right-[180px]"
                            >
                       <Rectangle2 pathRef={pathRef}/>
                    </motion.div>
                            </div>
                </div>
        </div>
        </div>
    )
}
export default Hero