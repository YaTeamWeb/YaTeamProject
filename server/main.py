import uvicorn
from fastapi import FastAPI, Form, status, HTTPException
from starlette.middleware.cors import CORSMiddleware
from telegram import Bot

app = FastAPI(docs_url="/docs")
bot = Bot()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://develop--wondrous-gumdrop-d258e6.netlify.app"

                   ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/test")
async def test():
    return "All work"


@app.post("/feedback")
async def feedback(name: str = Form(),
                   email: str = Form(),
                   theme: str = Form(),
                   message: str = Form()):
    bot.send_message(f"""
    {name}
    По теме:
    {theme}
    Написал:
    {message}
    Почта: {email}""")
    raise HTTPException(
        status_code=status.HTTP_200_OK
    )


if __name__ == "__main__":
    uvicorn.run("main:app", host="https://develop--wondrous-gumdrop-d258e6.netlify.app", port=5500, reload=True)
