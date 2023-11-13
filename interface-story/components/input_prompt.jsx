import { useState } from 'react';
import Textarea from 'react-textarea-autosize'
import { ButtonLoading } from './loading';
import {IoAdd} from 'react-icons/io5'
import { ModelsDropdown } from './models_dropdown';


export function InputForm({setStory, setLoading, textValue, setTextValue}){

  const [bloading, setBLoading] = useState(false)

  const handleNewStory = () => {
    setStory("")
    setTextValue("")
  }

  async function onSubmit(event) {

    event.preventDefault()
    
    const {about} = event.target.elements;
    if(about.value === "") return;
    setLoading(true)
    setBLoading(true)
    setTextValue("")

    const body = {
        'about': about.value.toLowerCase()
    }

    try{
      const response = await fetch("http://localhost:8000/story", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        setStory("Oops! Someting went wrong... Try using another model")
      }
  
      const data = await response.json()
      setStory(data.story)

    }catch(err){
        setStory("Oops! Someting went wrong... Try using another model")
    }

    setLoading(false)
    setBLoading(false)

  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form className=" w-[40%] h-12 space-x-4 flex justify-center items-center" onSubmit={onSubmit} autoComplete="off">
        <IoAdd className='w-8 h-8 cursor-pointer' title='New Story' onClick={handleNewStory}/>
          <Textarea
            tabIndex={0}
            rows={1}
            maxRows={4}
            onChange={e => setTextValue(e.target.value)}
            placeholder="Write a story about..."
            spellCheck={false}
            id='about'
            name='about'
            value={textValue}
            className="grow h-12 rounded-lg border-2 resize-none p-2 focus-within:outline-none"
          />
        {bloading ? <ButtonLoading/> : <button className="underline basis-12" type="submit">Write</button>}
      </form>
      <ModelsDropdown model={"tiiuae/falcon-7b-instruct"} models={[]}/>
    </div>
  )
}