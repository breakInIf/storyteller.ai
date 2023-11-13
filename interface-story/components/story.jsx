
import { IBM_Plex_Mono } from 'next/font/google'
import {Typewriter} from './loading'
import { Example } from './example'
const inter = IBM_Plex_Mono({ subsets: ['latin'], weight: ['200'] })

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

        <div className="w-[40%] h-[45vh] overflow-scroll flex flex-col justify-center items-center">
            {story.length || loading ? (
                loading ? 
                (<h3 className="w-full text-center">Writing.<Typewriter text=".." delay={400} infinite/></h3>)
                :
                (<div className="w-full ">
                  <h1 className={`px-2 w-full text-center text-sm ${inter.className}`}>{story}</h1>
                </div>)
                
            ) : (
              <>
                <h3 className={`text-center text-sm mb-4`}>Try with...</h3>
                <div className={`flex flex-col justify-center space-y-4 text-center text-sm ${inter.className}`}>
                    {exampleMessages.map((message, index) => (
                        <Example key={index} text={message.heading} setTextValue={setTextValue}/>
                    ))}
                </div>
              </>
                )
            }
        </div>
    )
}