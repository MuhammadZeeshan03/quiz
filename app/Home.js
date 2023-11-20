'use client';
import { useRouter } from 'next/navigation';
import Book from '../assests/icons/book';
import UserCard from './components/UserCard';


export default function Home() {

    const router = useRouter();
    const imageStyle = {};
    return (
        <div className='flex justify-center items-center'>

            <UserCard />

            { /* Quiz Card*/}

            <div
                className="bg-gradient-to-br from-indigo-500 to-blue-400 shadow-md p-8 text-center items-center rounded-md w-48 h-56 cursor-pointer ml-10 hover:bg-blue-500 hover:shadow-lg"
                onClick={() => {
                    router.push('/quizes');
                }}
            >
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
    );

}
