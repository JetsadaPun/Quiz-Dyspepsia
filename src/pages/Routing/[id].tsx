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
        question: 'How do you behave when eating?',
        options: ['Chew thoroughly', 'Chew quickly'],
        image: "/q1.png"
    },
    {
        id: 2,
        question: 'Do you stomachache when you are Hungry?',
        options: ['No,I do not ', 'Sometimes', 'Yes,I do'],
        image: '/q2.png'
    },
    {
        id: 3,
        question: 'How often do you eat meals at irregular times per week?',
        options: ['2-4 times per week', '5-7 times per week', 'I always eat on time'],
        image: '/q3.png'
    },
    {
        id: 4,
        question: 'Have you felt bored of food or not wanted to eat at all this week?',
        options: ['No,I have not', '1-3 times', 'more than 3 times'],
        image: '/q4.png'
    },
    {
        id: 5,
        question: 'Do you consume caffeine or alcohol?',
        options: ['I always drink everyday', 'I drink one per week-per month'],
        image: '/q5.png'
    },
    {
        id: 6,
        question: 'How many meals do you eat in a day?',
        options: ['1-2 meals', '3 meals', 'More than 3 meals'],
        image: '/q6.png'
    },
    {
        id: 7,
        question: 'Do you usually prefer strongly flavored foods, such as sour or spicy?',
        options: ['Yes,I do', 'No,I do not'],
        image: '/q7.png'
    },
];

export default function Quiz() {
    const router = useRouter();
    const { id } = router.query;
    const [questionData, setQuestionData] = useState<QuizProps | null>(null);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [progressWidth, setProgressWidth] = useState("0%");

    const click = () => {
        console.log("Selected Option:", questionData?.options[selectedOption!]);
        setProgressWidth("100%");
        if (id != "7") {
            router.push({
                pathname: `/Routing/${questionData!.id + 1}`,
                query: { id: `${questionData!.id + 1}` }
            });
            const newProgressWidth = `${((parseInt(id as string)) / questions.length) * 100}%`;
            setProgressWidth(newProgressWidth);
        } else {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Success!",
                cancelButtonText: "Back to home page!",
            }).then((result) => {
                if (result.dismiss) {
                    router.push(`/`);
                }
            });
        }
    }

    useEffect(() => {
        if (id) {
            const question = questions.find(item => item.id === parseInt(id as string));
            if (question) {
                setQuestionData(question);
            }
        }
    }, [id, progressWidth]);
    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700" >
                <div className="bg-green-500 h-6 rounded-full" style={{ width: progressWidth }}></div>
            </div>
            <div className="grid grid-cols-2 gap-8 w-full h-full bg-blue-200 p-16 shadow-lg">
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
