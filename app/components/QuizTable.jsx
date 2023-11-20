"use client";
import { useState } from "react"
import DeleteModal from "./modals/DeleteModal"
import { useRouter } from "next/navigation";

function QuizTable() {

    const [open, setOpen] = useState(undefined)
    const router = useRouter();
    const data = [
        {
            _id: "65350e593c864dc98badffde",
            name: "Security",
            progress: 0,
            total_questions: 7,
            __v: 0,
        },
        {
            _id: "6535231669034b835139e1f1",
            name: "Gary Final Quiz",
            progress: 0,
            total_questions: 12,
            __v: 0,
        },
        {
            _id: "65358f78499bae26095df8c5",
            name: "Internet Security",
            progress: 3,
            total_questions: 3,
            __v: 0,
        },
        {
            _id: "6535905b499bae26095df8d1",
            name: "ITC",
            progress: 3,
            total_questions: 3,
            __v: 0,
        },
        {
            _id: "653626363be0df0a21011085",
            name: "Enxsys",
            progress: 4,
            total_questions: 4,
            __v: 0,
        },
        {
            _id: "653627f53be0df0a210110a5",
            name: "apple",
            progress: 0,
            total_questions: 1,
            __v: 0,
        },
        {
            _id: "6537adecfd3257e53f3ee83f",
            name: "bold",
            progress: 1,
            total_questions: 1,
            __v: 0,
        },
        {
            _id: "6537f18857ee6ef06562ffd4",
            name: "e8 assesment",
            progress: 4,
            total_questions: 4,
            __v: 0,
        },
        {
            _id: "653a3fde136d681456b20231",
            name: "Postman",
            progress: 4,
            __v: 0,
            total_questions: 5,
        },
        {
            _id: "653a591136878f522d0474e3",
            name: "counting Quiz",
            progress: 3,
            total_questions: 11,
            __v: 0,
        },
        {
            _id: "654371b749f51d595aaee4b2",
            name: "This is a test quiz",
            progress: 3,
            total_questions: 3,
            __v: 0,
        },
        {
            _id: "6551bc23122b24dcb62bfb72",
            name: "dasd",
            progress: 0,
            total_questions: 123,
            __v: 0,
        },
        {
            _id: "6551bcf41d3f90ee079f9314",
            name: "Test",
            progress: 0,
            total_questions: 2,
            __v: 0,
        },
        {
            _id: "6557427e848a1b2b59b615d2",
            name: "asdasd",
            progress: 0,
            total_questions: 3,
            __v: 0,
        },
    ];

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border-r">#</th>
                            <th className="px-4 py-2 border-r">Name</th>
                            <th className="px-4 py-2 border-r">Count</th>
                            <th className="px-4 py-2 border-r">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="min-w-full bg-white border border-gray-300 "
                                >
                                    <td className="px-4 py-2 border-r">{index + 1}</td>
                                    <td className="px-4 py-2 border-r">{item.name}</td>
                                    <td className="px-4 py-2 border-r">{item.total_questions}</td>
                                    <td className="flex items-center justify-center gap-5 px-4 py-2 border-r">
                                        <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={
                                            () => {
                                                router.push(`/quizes/edit/${item._id}`)
                                            }
                                        }>
                                            Edit
                                        </button>
                                        <button className="px-4 py-2 ml-2 text-white bg-red-500 rounded" onClick={() => {
                                            console.log('delete model called');
                                            setOpen('delete')
                                        }}>
                                            Delete
                                        </button>
                                    </td>
                                    <DeleteModal
                                        open={open === 'delete'}
                                        onClose={() => {
                                            setOpen(undefined)
                                        }}
                                        className='bg-gray-200'
                                    />
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default QuizTable