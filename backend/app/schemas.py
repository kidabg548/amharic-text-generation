from pydantic import BaseModel

class TextRequest(BaseModel):
    prompt: str

class TextResponse(BaseModel):
    generated_text: str
