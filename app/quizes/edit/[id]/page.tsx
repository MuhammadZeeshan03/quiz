'use client'

import React from 'react'
import { useRouter } from 'next/router'

function edit({ params }) {


    return (
        <div>Edit quiz with id {params.id}</div>
    )
}

export default edit