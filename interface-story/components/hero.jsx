'use client'

import { useState } from 'react'

import {InputForm} from '@/components/input_prompt'
import {Story} from '@/components/story'


export function Hero() {

    const [story, setStory] = useState("");
    const [textValue, setTextValue] = useState("")
    const [loading, setLoading] = useState(false);

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center space-y-12">
            
            <div className="w-1/2 flex flex-col items-center justify-center text-center space-y-2">
                <h1 className="text-2xl">Storyteller.AI</h1>
                <p>Create short stories using artificial intelligence</p>
            </div>

            <Story story={story} loading={loading} setTextValue={setTextValue}></Story>
        
            <InputForm setStory={setStory} setLoading={setLoading} textValue={textValue} setTextValue={setTextValue}/>
        </main>
    )
}