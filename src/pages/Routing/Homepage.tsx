import React, { useState } from 'react'
import router, { useRouter } from 'next/router';
import Swal from 'sweetalert2';

function Homepage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        router.push({
            pathname: '/Routing/1',
            query: { id: 1 }
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
                <p></p>
                <p></p>
                <p></p>
            </div>`,
            width: 600,
            padding: "3em",
            color: "#716add",
        });
    }

    return (
        <div className="grid grid-cols-2 gap-8 w-screen h-screen bg-blue-200 p-16 shadow-lg">
            <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
                <img src='kapor1.png' className="object-cover" ></img>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-center">
                <div>
                    <div className='font-extrabold text-8xl text-blue-600 row-span-2'>
                        <div className='flex items-start justify-center text-2xl font-bold text-black py-12'>Mini project</div>
                        <p className='text-center'>The</p>
                        <p className='text-center'>Dyspepsia</p>
                        <p className='text-center'>Quiz</p>
                        <div className='flex items-center justify-center text-2xl font-bold text-black p-16'>Data Science and Application Programs</div>
                    </div>
                    <div className='flex items-center justify-center gap-12'>
                        <button className={`rounded-lg bg-blue-700 text-white p-3 w-40 font-bold transition duration-150 ease-in-out
                        ${isHovered ? 'transition duration-300 ease-in-out scale-125' : ''}`}
                            onClick={handleClick}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >Go to Quiz</button>
                        <button className='rounded-lg bg-fuchsia-300 text-black p-3 w-40 font-bold transition duration-150 ease-in-out'
                            onClick={clickMember}
                        >Project member</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage