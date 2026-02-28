import os
from google import genai

api_key = os.getenv("GEMINI_API_KEY")
print("API key is None:", api_key is None)

client = genai.Client(api_key=api_key)

resp = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Привет, Gemini! Напиши одно короткое предложение."
)

print("MODEL ANSWER:")
print(resp.text)