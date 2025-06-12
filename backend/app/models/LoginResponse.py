from pydantic import BaseModel

class LoginResponse(BaseModel):
    user_id: int
    user_name: str
    message: str