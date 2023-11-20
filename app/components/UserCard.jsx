import React from 'react'
import User from '../../assests/icons/user'

const UserCard = () => {
    return (
        <div className="bg-gradient-to-br from-cyan-300 to-blue-500 shadow-md p-8 text-center items-center rounded-md w-48 h-56 cursor-pointer">
            <User
                color='white'
                height={50}
                width={50}
                className={'text-center items-center m-auto justify-center'}
            />
            <p className="text-white text-xl font-semibold mb-4">Users</p>
            <p className="text-white">24</p>
        </div>
    )
}

export default UserCard