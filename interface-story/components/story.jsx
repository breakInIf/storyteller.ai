
import { IBM_Plex_Mono } from 'next/font/google'
import {Typewriter} from './loading'
import { Example } from './example'
const inter = IBM_Plex_Mono({ subsets: ['latin'], weight: ['200'] })
const inter1 = IBM_Plex_Mono({ subsets: ['latin'], weight: ['300'] })

export function Story({story, loading, setTextValue}){

    const exampleMessages = [
        {
          heading: 'Lonely cryptographer',
        },
        {
          heading: 'Old man and the flying rug ',
        },
        {
          heading: 'Bear with pink hair',
        },
        {
          heading: 'Lobster fighting a dolphin',
        }
      ]

    return (

        <div className="w-[40%]">
            {story.length || loading ? (
                loading ? 
                (<h3 className="w-full text-center">Writing.<Typewriter text=".." delay={400} infinite/></h3>)
                :
                (<div className="w-full max-h-[45vh] overflow-scroll">
                  <h1 className={`px-2 w-full text-center text-sm ${inter.className}`}>{story}</h1>
                </div>)
                
            ) : 
            <div className="">
                <h3 className={`w-full text-center text-sm mb-4`}>Try with...</h3>
                <div className={`w-full flex flex-col justify-center space-y-4 text-center text-sm ${inter.className}`}>
                    {exampleMessages.map((message, index) => (
                        <Example key={index} text={message.heading} setTextValue={setTextValue}/>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}