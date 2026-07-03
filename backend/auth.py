from fastapi import APIRouter
from schemas import RegisterRequest, LoginRequest
from jwt import create_access_token

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register")
def register(user: RegisterRequest):
    return {
        "message": "User registered successfully",
        "user": user
    }

@router.post("/login")
def login(user: LoginRequest):
    token = create_access_token({"sub": user.email})

    return {
        "access_token": token,
        "token_type": "bearer"
    }