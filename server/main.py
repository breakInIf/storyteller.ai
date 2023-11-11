from typing import Union
from fastapi import FastAPI, HTTPException,Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from story import BasicStoryTeller

### TEMP ###
import time

class StoryReq(BaseModel):
    about: str # test
    model: Union[str, None] = "tiiuae/falcon-7b-instruct"
    length: Union[int, None] = 500

app = FastAPI()

origins = [
        "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "All working"}

@app.post("/story")
async def getStory(storyReq: StoryReq):
    if storyReq.length > 1000 or storyReq.length < 0:
        raise HTTPException(status_code=400, detail="length must be gt 0 and lt 1000")

    st = BasicStoryTeller(storyReq.model)
    story = st.tell_story(storyReq.about, storyReq.length)
    
    if story == "error":
        raise HTTPException(status_code=400, detail="Time Gone!")

    return {"story": story}

@app.post("/test")
async def root(req: StoryReq):
    time.sleep(5)
    return {"story": req.about}
