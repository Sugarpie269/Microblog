from fastapi import APIRouter
from datetime import date
from app.models.EmailRequest import EmailRequest
from app.models.LoginResponse import LoginResponse
import random
router = APIRouter()

otp_store = {}
@router.post('/api/login',response_model=LoginResponse)
def postLogin(emailRequest: EmailRequest):
    # check the loginData with the backend
    # if it exists send an OPT to the email ID
    # if it doesn't exist return New user
    

    # assume user exists
    # send an OPT to the email ID
    print(emailRequest)
    otp = str(random.randint(100000, 999999))
    otp_store[emailRequest.email] = otp

    print("OTP for " + emailRequest.email + " is = " + otp)

    return {"message" : "OTP sent successfully"}
