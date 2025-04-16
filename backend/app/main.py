from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import TextRequest, TextResponse
from app.model import generate_text

app = FastAPI(title="Amharic GPT Text Generator")

# Allow frontend access (adjust for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate", response_model=TextResponse)
def generate(request: TextRequest):
    output = generate_text(request.prompt)
    return TextResponse(generated_text=output)
