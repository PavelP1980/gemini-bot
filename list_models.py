from dotenv import load_dotenv
import os
import google.generativeai as genai

load_dotenv()  # подхватываем GEMINI_API_KEY из .env

api_key = os.getenv("GEMINI_API_KEY")
print("API key is None:", api_key is None)

genai.configure(api_key=api_key)

model = genai.GenerativeModel("models/gemini-2.0-flash")
resp = model.generate_content("Привет, Gemini!")
print(resp.text)