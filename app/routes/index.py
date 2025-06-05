from fastapi import APIRouter
from fastapi.requests import Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from pathlib import Path

router = APIRouter()
BASE_DIR = Path(__file__).resolve().parent.parent
template = Jinja2Templates(directory=BASE_DIR / "templates")

@router.get('/index')
def index(request: Request):
    user={"username":"Navya"}
    return template.TemplateResponse("index.html", {"request":request, "username": user["username"]})