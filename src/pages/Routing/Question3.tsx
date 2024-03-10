import React from 'react'
import { useAnswers } from '../components/AuthProvider';
import router from 'next/router';
import { useState } from 'react';

const Question3 =() => {
    const { answers, setAnswers } = useAnswers();
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleOptionClick = (selectedAnswer: string) => {
        setAnswers(prevAnswers => prevAnswers ? [...prevAnswers, selectedAnswer] : [selectedAnswer]);
        console.log(selectedAnswer);
        router.push('/Routing/Question4');
    };

    const handleMouseEnter = (option: string) => {
        setIsMouseOver(true);
        setSelectedOption(option);
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
        setSelectedOption(null);
    };

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="grid grid-cols-1 grid-rows-[30%_70%] xl:grid-cols-2 xl:grid-rows-[100%] gap-4 lg:gap-8 w-full h-full bg-blue-200 p-4 lg:p-16">
                <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
                <img src='/q7.png' className="object-cover h-fit" alt="Question Image" style={{ maxWidth: "100%", maxHeight: "100%" }}/>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
                    <div>
                        <div className='font-extrabold sm:text-xl md:text-2xl xl:text-2xl row-span-2 p-5 xl:p-10 bg-slate-300 rounded-lg'>
                        <p className='text-center'>รับประทานอาหารรสเปรี้ยวจัดหรือเผ็ดจัดเป็นประจำหรือไม่ ?</p>
                        </div>
                        <div className='flex items-center justify-center gap-4 py-4'>
                            <div className="grid grid-flow-row gap-4">
                            <button 
                                    className={`rounded-lg bg-blue-700 text-white p-3 w-60 font-bold 
                                    ${selectedOption === 'ใช่' && isMouseOver ? "transition duration-300 ease-in-out scale-125 bg-fuchsia-200 text-gray-700" : ""}
                                    `}
                                    onMouseEnter={() => handleMouseEnter('ใช่')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleOptionClick('ใช่')}
                                >
                                    ใช่
                                </button>
                                <button 
                                    className={`rounded-lg bg-blue-700 text-white p-3 w-60 font-bold 
                                    ${selectedOption === 'ไม่' && isMouseOver ? "transition duration-300 ease-in-out scale-125 bg-fuchsia-200 text-gray-700" : ""}
                                    `}
                                    onMouseEnter={() => handleMouseEnter('ไม่')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleOptionClick('ไม่')}
                                >
                                    ไม่
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Question3;