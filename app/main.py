from fastapi import FastAPI
from app.routes import index

app = FastAPI()

app.include_router(index.router)