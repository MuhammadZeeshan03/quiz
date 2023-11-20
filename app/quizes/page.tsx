'use client'
import QuizTable from '../components/QuizTable';

function page() {

    return (
        <div>
            <button onClick={() => { }} className="px-4 py-2 mb-6 border w-60 justify-center  text-white flex bg-black rounded ml-auto mr-6">
                Create quiz
            </button>

            <QuizTable />
        </div>
    )
}
export default page;