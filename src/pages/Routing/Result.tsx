import React, { useEffect } from 'react';
import { useAnswers } from '../components/AuthProvider';
import { useState } from 'react';
import router from 'next/router';
const Result = () => {
    const { answers } = useAnswers();
    const [result, setResult] = useState<boolean>();
    const { clearAnswers } = useAnswers();
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        if (answers && answers.length > 0) {
            if (answers[0] === "มีอาการบางครั้ง") {
                if (answers[1] === "2-4 ครั้ง ต่อสัปดาห์") {
                    setResult(false);
                } else if (answers[1] === "5-7 ครั้ง ต่อสัปดาห์") {
                    if (answers[2] === "ใช่") {
                        if (answers[3] === "ไม่ดื่มคาเฟอีนหรือแอลกอฮอล์เลย") {
                            setResult(false)
                        } else if (answers[3] === "ดื่มทุกวัน") {
                            setResult(true)
                        } else if (answers[3] === "รับประทานอาทิตย์ละครั้ง") {
                            if (answers[4] === "ไม่มีเลย") {
                                setResult(false);
                            } else if (answers[4] === "1-3 ครั้ง" || answers[4] === "มากกว่า 3 ครั้ง") {
                                setResult(true);
                            }
                        }
                    } else if (answers[2] === "ไม่") {
                        setResult(false);
                    }
                } else if (answers[1] === "รับประทานอาหารตรงเวลาเสมอ") {
                    setResult(true);
                }
            } else if (answers[0] === "ไม่มีอาการเลย") {
                setResult(false);
            } else if (answers[0] === "มีอาการ") {
                setResult(true);
            }
        }
    }, [answers]);

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 w-full h-full bg-blue-200 p-4 lg:p-16">
                <div className="bg-white p-4 shadow-lg rounded-lg flex items-start justify-center">
                    <div className='grid grid-rows-2 w-full'>
                        <div className='w-full justify-center items-center'>
                            <div className='font-extrabold text-2xl row-span-2 p-10 bg-slate-300 rounded-lg'>
                                <p className='text-center'>Result</p>
                            </div>
                            <div className='flex items-center justify-center gap-4 py-4'>
                                <div className="grid grid-flow-row gap-4 bg-slate-300 rounded-lg p-4 w-full">
                                    {result ? (
                                        <div className='justify-center items-center flex flex-col'>
                                            <p className='font-extrabold text-center'>คุณเป็นโรคกระเพาะ</p>
                                            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                โรคกระเพาะอาหารอักเสบสามารถรักษาให้หายได้ หากได้รับการดูแลรักษาที่ดี และผู้ป่วยมีการปรับเปลี่ยนพฤติกรรมการใช้ชีวิตของตนเอง แต่หากปรับเปลี่ยนพฤติกรรมของตนเองแล้ว อาการยังไม่ดีขึ้นควรพบแพทย์เพื่อเข้ารับการตรวจวินิจฉัยเพิ่มเติท เช่น การตรวจโดยการส่องกล้องระบบทางเดินอาหาร (Gastroscope: EGD) เพื่อหาสาเหตุและรับการรักษาอย่างถูกวิธี
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='flex flex-col justify-center items-center'>
                                            <p className='font-extrabold text-center'>คุณไม่ได้เป็นโรคกระเพาะ</p>
                                            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                เก่งมาก!! คุณรักษาสุขภาพและรับประทานอาหารได้ตรงเวลา
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full'>
                            <div className='grid grid-cols-2 gap-7 '>
                                <button className={`rounded-lg bg-blue-700 text-white p-3 font-bold transition duration-150 ease-in-out 
                                ${isHovered ? 'transition duration-300 ease-in-out scale-125' : ''}`} onClick={() => {
                                        router.push('/');
                                        clearAnswers();
                                    }}>กลับไปที่หน้าหลัก</button>
                                <button className='rounded-lg bg-fuchsia-300 text-black p-3 font-bold transition duration-150 ease-in-out' onClick={() => {
                                    router.push('/Routing/Question');
                                    clearAnswers();
                                }}>ทำแบบทดสอบอีกครั้ง</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Result;