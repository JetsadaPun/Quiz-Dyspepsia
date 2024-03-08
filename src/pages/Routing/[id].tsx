import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

interface QuizProps {
    id: number;
    question: string;
    options: string[];
    image: string;
}

const questions = [
    {
        id: 1,
        question: 'เมื่อคุณท้องว่างมีอาการปวดท้องหรือไม่ ?',
        options: ['ไม่มีอาการเลย', 'มีอาการบางครั้ง', 'มีอาการ'],
        image: '/q2.png'
    },
    {
        id: 2,
        question: 'รับประทานอาหารไม่ตรงเวลาบ่อยแค่ไหนต่อสัปดาห์ ?',
        options: ['2-4 ครั้ง ต่อสัปดาห์', '5-7 ครั้ง ต่อสัปดาห์', 'รับประทานอาหารตรงเวลาเสมอ'],
        image: '/q3.png'
    },
    {
        id: 3,
        question: 'รับประทานอาหารรสเปรี้ยวจัดหรือเผ็ดจัดเป็นประจำหรือไม่ ?',
        options: ['ใช่', 'ไม่'],
        image: '/q7.png'
    },
    {
        id: 4,
        question: 'รับประทานคาเฟอีนหรือแอลกอฮอล์หรือไม่ ?',
        options: ['ไม่ดื่มคาเฟอีนหรือแอลกอฮอล์เลย', 'ดื่มทุกวัน', 'รับประทานอาทิตย์ละครั้ง'],
        image: '/q5.png'
    },
    {
        id: 5,
        question: 'สัปดาห์นี้เบื่ออาหารหรือไม่อยากอาหารหรือไม่ ?',
        options: ['ไม่มีเลย', '1-3 ครั้ง', 'มากกว่า 3 ครั้ง'],
        image: '/q4.png'
    },
];

export default function Quiz() {
    const router = useRouter();
    const { id } = router.query;
    const [questionData, setQuestionData] = useState<QuizProps | null>(null);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [progressWidth, setProgressWidth] = useState("0%");
    const [results, setResult] = useState<boolean>();

    const click = () => {
        if (selectedOptions.length <= 5 && questionData!) {
            setSelectedOptions([...selectedOptions, questionData?.options[selectedOption!]]);
            console.log(selectedOptions)
        }
        console.log("Selected Option:", questionData?.options[selectedOption!]);
        if (selectedOptions.length === 5) {
            if (selectedOptions[0] === "มีอาการบางครั้ง") {
                if (selectedOptions[1] === "2-4 ครั้ง ต่อสัปดาห์") {
                    setResult(false);
                } else if (selectedOptions[1] === "5-7 ครั้ง ต่อสัปดาห์") {
                    if (selectedOptions[2] === "ใช่") {
                        if (selectedOptions[3] === "ไม่ดื่มคาเฟอีนหรือแอลกอฮอล์เลย") {
                            setResult(false)
                        } else if (selectedOptions[3] === "ดื่มทุกวัน") {
                            setResult(true)
                        } else if (selectedOptions[3] === "รับประทานอาทิตย์ละครั้ง") {
                            if (selectedOptions[4] === "ไม่มีเลย") {
                                setResult(false);
                            } else if (selectedOptions[4] === "1-3 ครั้ง" || selectedOptions[4] === "มากกว่า 3 ครั้ง") {
                                setResult(true);
                            }
                        }
                    } else if (selectedOptions[2] === "ไม่") {
                        setResult(false);
                    }
                } else if (selectedOptions[1] === "รับประทานอาหารตรงเวลาเสมอ") {
                    setResult(true);
                }
            } else if (selectedOptions[0] === "ไม่มีอาการเลย") {
                setResult(false);

            } else if (selectedOptions[0] === "มีอาการ") {
                setResult(true);
            }
            console.log("result 5 = ", results);
            
        }

        if (id != "5") {
            router.push({
                pathname: `/Routing/${questionData!.id + 1}`,
                query: { id: `${questionData!.id + 1}`, answers: encodeURIComponent(selectedOptions.join(',')) },
            });
        }
        const newProgressWidth = `${((selectedOptions.length + 1) / questions.length) * 100}%`;
        setProgressWidth(newProgressWidth);
    }

    useEffect(() => {
        if (id) {
            const question = questions.find(item => item.id === parseInt(id as string));
            if (question) {
                setQuestionData(question);
            }
        }
    }, [id]);

    useEffect(() => {
        if (id === "5") {
        if (results !== null) {
            Swal.fire({
                title: results ? `<img src = "/youuu.png" />` : `<img src = "/goodd-removebg.png" />`,
                text: results ? "คุณเป็นโรคกระเพาะ" : "คุณไม่ได้เป็นโรคกระเพาะ",
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push(`/`);
                }
            });
        }
    }
    }, [results]);

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700" >
                <div className="bg-green-500 h-6" style={{ width: progressWidth }}></div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-8 w-full h-full bg-blue-200 p-4 lg:p-16">
                <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
                    {questionData && typeof questionData.image === 'string' && (
                        <img src={questionData.image} className="object-cover" alt="Question Image" />
                    )}
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
                    <div>
                        <div className='font-extrabold text-2xl row-span-2 p-10 bg-slate-300 rounded-lg'>
                            <p className='text-center'>{questionData?.question}</p>
                        </div>
                        <div className='flex items-center justify-center gap-4 py-4'>
                            <div className="grid grid-flow-row gap-4">
                                {questionData && questionData.options.map((option, index) => (
                                    <button key={index} className={`rounded-lg bg-blue-700 text-white p-3 w-60 font-bold 
                            ${selectedOption === index ? "transition duration-300 ease-in-out scale-125 bg-fuchsia-200 text-gray-700" : ""}
                            `} onClick={click}
                                        onMouseEnter={() => setSelectedOption(index)}
                                        onMouseLeave={() => setSelectedOption(null)}>{option}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
