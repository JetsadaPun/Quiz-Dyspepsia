import React from 'react'
import { useAnswers } from '../components/AuthProvider';
import router from 'next/router';
import { useState } from 'react';

const  Question4 =() => {
    const { answers, setAnswers } = useAnswers();
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleOptionClick = (selectedAnswer: string) => {
        setAnswers(prevAnswers => prevAnswers ? [...prevAnswers, selectedAnswer] : [selectedAnswer]);
        console.log(selectedAnswer);
        router.push('/Routing/Question5');
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
                <img src='/q5.png' className="object-cover h-fit" alt="Question Image" style={{ maxWidth: "100%", maxHeight: "100%" }}/>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
                    <div>
                        <div className='font-extrabold sm:text-xl md:text-2xl xl:text-2xl row-span-2 p-5 xl:p-10 bg-slate-300 rounded-lg'>
                        <p className='text-center'>รับประทานคาเฟอีนหรือแอลกอฮอล์หรือไม่ ?</p>
                        </div>
                        <div className='flex items-center justify-center gap-4 py-4'>
                            <div className="grid grid-flow-row gap-4">
                            <button 
                                    className={`rounded-lg bg-blue-700 text-white p-3 w-60 font-bold 
                                    ${selectedOption === 'ไม่ดื่มคาเฟอีนหรือแอลกอฮอล์เลย' && isMouseOver ? "transition duration-300 ease-in-out scale-125 bg-fuchsia-200 text-gray-700" : ""}
                                    `}
                                    onMouseEnter={() => handleMouseEnter('ไม่ดื่มคาเฟอีนหรือแอลกอฮอล์เลย')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleOptionClick('ไม่ดื่มคาเฟอีนหรือแอลกอฮอล์เลย')}
                                >
                                    ไม่ดื่มคาเฟอีนหรือแอลกอฮอล์เลย
                                </button>
                                <button 
                                    className={`rounded-lg bg-blue-700 text-white p-3 w-60 font-bold 
                                    ${selectedOption === 'ดื่มทุกวัน' && isMouseOver ? "transition duration-300 ease-in-out scale-125 bg-fuchsia-200 text-gray-700" : ""}
                                    `}
                                    onMouseEnter={() => handleMouseEnter('ดื่มทุกวัน')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleOptionClick('ดื่มทุกวัน')}
                                >
                                    ดื่มทุกวัน
                                </button>
                                <button 
                                    className={`rounded-lg bg-blue-700 text-white p-3 w-60 font-bold 
                                    ${selectedOption === 'รับประทานอาทิตย์ละครั้ง' && isMouseOver ? "transition duration-300 ease-in-out scale-125 bg-fuchsia-200 text-gray-700" : ""}
                                    `}
                                    onMouseEnter={() => handleMouseEnter('รับประทานอาทิตย์ละครั้ง')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleOptionClick('รับประทานอาทิตย์ละครั้ง')}
                                >
                                    รับประทานอาทิตย์ละครั้ง
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Question4;