import React, { useState } from 'react'
import router, { useRouter } from 'next/router';
import Swal from 'sweetalert2';

function Homepage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        router.push({
            pathname: '/Routing/Question',
        });
    };

    const clickMember = () => {
        Swal.fire({
            icon: "success",
            title: "Project Member.",
            html: `
            <div>
                <p>นางสาว จิรัชภรณ์ พินพันธ์ุ 6521600176</p>
                <p>นาย เจษฎา หงษา 6521600192</p>
                <p>นางสาว แววดาว บุญโยธา 6521600346</p>
                <p>นางสาว ฐณัชญ์พร นิลสัมฤทธิ์ 6521601806</p>
                <p>นางสาว ณัฐวดี ยุดดร 6521601822</p>
                <p>นาย ตรัยเพชญ์ แผนสมบูรณ์ 6521601831</p>
            </div>`,
            width: 600,
            padding: "3em",
            color: "#716add",
        });
    }

    return (
        <div className=''>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-screen bg-blue-200 p-4 lg:p-16 ">
                <div className="hidden xl:block bg-white p-4 shadow-lg xl:flex rounded-lg items-center justify-center ">
                    <img src='kapor1.png' className="object-cover" ></img>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
                    <div>
                        <div className='font-extrabold text-5xl md:text-6xl xl:text-8xl text-blue-600 row-span-2'>
                            <div className='flex items-start justify-center text-2xl font-bold text-black py-4 md:py-12'>Mini project</div>
                            <p className='flex text-center justify-center items-center'>The</p>
                            <p className='flex text-center justify-center items-center'>Dyspepsia</p>
                            <p className='flex text-center justify-center items-center'>Quiz</p>
                            <div className='flex items-center justify-center text-2xl font-bold text-black m-8 text-center'>Data Science and Application Programs</div>
                        </div>
                        <div className='flex items-center justify-center gap-12'>
                            <button className={`rounded-lg bg-blue-700 text-white p-3 w-25 md:w-40 font-bold transition duration-150 ease-in-out 
                        ${isHovered ? 'transition duration-300 ease-in-out scale-125' : ''}`}
                                onClick={handleClick}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >Go to Quiz</button>
                            <button className='rounded-lg bg-fuchsia-300 text-black p-3 w-25 md:w-40 font-bold transition duration-150 ease-in-out'
                                onClick={clickMember}
                            >Project member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage