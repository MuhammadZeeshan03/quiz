import Image from 'next/image'
import React from 'react'


function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-6">


            <div className="flex items-center space-x-2">
                <Image
                    src="/vercel.svg"
                    width={50}
                    height={50}
                    alt="logo"

                    className="rounded-full"
                />
                <h1 className="text-white text-xl font-bold">Assessment</h1>
            </div>

            <div className="flex items-center space-x-4  grow justify-between px-5">
                <p className="text-white">Hello Admin!</p>
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300">Sign Out</button>
            </div>

        </nav>

    )
}

export default Navbar