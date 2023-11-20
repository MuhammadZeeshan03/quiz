'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserCard from './components/UserCard';
import { useRouter } from 'next/navigation';

import Book from '../assests/icons/book';

export default function Home() {

  const router = useRouter();
  const imageStyle = {
  }
  return (
    <div className='flex justify-center '>
      <UserCard />

      <div className="bg-gradient-to-br from-indigo-500 to-blue-400  shadow-md p-8 text-center items-center rounded-md w-48 h-56 cursor-pointer ml-10" onClick={() => {
        router.push('/quizes')
      }
      }>

        <Book
          color='white'
          height={50}
          width={50}
          className={'text-center items-center m-auto justify-center'}
        />
        <p className="text-lg text-white font-semibold mb-2">Quizes</p>
        <p className=" text-white mt-7">24</p>
      </div>



    </div>
  )

}