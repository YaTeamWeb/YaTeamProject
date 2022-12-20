import telebot
from dotenv import load_dotenv
import os

load_dotenv()


class Bot:
    def __init__(self):
        self.bot = telebot.TeleBot(os.getenv("TOKEN"))

    def send_message(self, text: str, chat_id=os.getenv("CHAT_ID")):
        self.bot.send_message(chat_id=chat_id, text=text)


if __name__ == '__main__':
    bot = Bot()
    bot.send_message('Hello', chat_id='-1001806326769')
