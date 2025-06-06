from fastapi import APIRouter
from datetime import date

router = APIRouter()
@router.get('/api/posts')
def getPosts():
    posts = [
        {
            'author': {'username': 'John'},
            'body': 'Beautiful day in Portland!',
            'date' : '2025-05-05'
        },
        {
            'author': {'username': 'Susan'},
            'body': 'The Avengers movie was so cool!',
            'date' : '2025-05-04'
        },
        {
            'author': {'username': 'Many'},
            'body': 'I saw the space needle today!',
            'date' : '2025-05-07'
        }
    ]
    return posts