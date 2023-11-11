import os
import time
import warnings
warnings.filterwarnings('ignore')

from abc import ABC, abstractmethod
from langchain.llms import HuggingFaceHub
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

HUGGINGFACE_KEY = os.environ['HUGGINGFACE_KEY']

class StoryTeller(ABC):
    """
    Abstract class for story tellers.
    Each Story Teller must implement a function that creates a prompt and 
    a method to tell the story.
    """

    @abstractmethod
    def create_prompt(self) -> str:
        """
        Create a prompt.

        Returns:
            Returns the prompt
        """
        pass

    @abstractmethod
    async def tell_story(self ,about:str, length:int = 500) -> str:
        """
        Generate  story.

        Arguments:
            -about: topic of the story
            -length: length of the story

        Returns:
            Returns the story
        """
        pass
    
class BasicStoryTeller(StoryTeller):
    """
    Just a normal story teller.
    """

    def __init__(self, model:str):
        self.model: str = model

    # @override
    def create_prompt(self) -> str:
        return "Write a short story about {about}\n"

    # @override
    def tell_story(self, about:str, length:int = 500) -> str:
        llm = HuggingFaceHub(
            repo_id=self.model, model_kwargs={"temperature": 0.9, "max_length": 500}, huggingfacehub_api_token=HUGGINGFACE_KEY
        )

        template = self.create_prompt()

        prompt = PromptTemplate(template=template, input_variables=["about"])

        llm_chain = LLMChain(prompt=prompt, llm=llm)

        story = llm_chain.run(about)
        
        t = time.time()
        full_story = ""
        while len(story) != 0:
            story = llm_chain.run(about)
            full_story += story
            template += story
            llm = HuggingFaceHub(
                repo_id=self.model, model_kwargs={"temperature": 0.9, "max_length": 500-len(story)}, huggingfacehub_api_token=HUGGINGFACE_KEY
            )
            prompt = PromptTemplate(template=template, input_variables=["about"])
            llm_chain = LLMChain(prompt=prompt, llm=llm)
            if time.time() - t  > 30: # TEMPORAL (better with n_requests maybe)
                return "error"

        return full_story

