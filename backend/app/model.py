import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

# Load model and tokenizer once on startup
MODEL_PATH = "app/final"

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = AutoModelForCausalLM.from_pretrained(MODEL_PATH).to(device)
model.eval()

def generate_text(prompt: str, max_length=100) -> str:
    inputs = tokenizer(prompt, return_tensors="pt").to(device)

    with torch.no_grad():
        output = model.generate(
            **inputs,
            max_length=max_length,
            num_beams=4,
            no_repeat_ngram_size=2,
            early_stopping=True
        )

    return tokenizer.decode(output[0], skip_special_tokens=True)
