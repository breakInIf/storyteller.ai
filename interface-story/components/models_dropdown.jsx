import { IBM_Plex_Mono } from 'next/font/google'

const inter = IBM_Plex_Mono({ subsets: ['latin'], weight: ['300'] })
const inter1 = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400'] })

export function ModelsDropdown({model,models}){


    return (

        <>
            <h2 className={`mt-2 ${inter1.className} text-xs text-center`}>Model</h2>
            <div className="rounded-xl w-[20%]">
                <h3 className={`${inter.className} text-xs text-center overflow-hidden`}>{model}</h3>
            </div>
        </>
    )
}