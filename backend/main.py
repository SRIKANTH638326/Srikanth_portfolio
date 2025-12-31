from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from .database import SessionLocal, engine
from . import models, schemas

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS (for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    return {"status": "Backend + DB working"}

@app.post("/contact")
def create_contact(
    contact: schemas.ContactCreate,
    db: Session = Depends(get_db)
):
    new_contact = models.Contact(
        name=contact.name,
        email=contact.email,
        message=contact.message
    )
    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    return {"message": "Contact saved successfully"}




def send_email_to_me(name: str, email: str, message: str):
    msg = EmailMessage()
    msg["Subject"] = "New Contact Form Message"
    msg["From"] = email
    msg["To"] = "srikanthc061@gmail.com"   # 👈 YOUR EMAIL ID

    msg.set_content(
        f"""
        Name: {name}
        Email: {email}

        Message:
        {message}
        """
    )

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login("srikanthc061@@gmail.com", "YOUR_APP_PASSWORD")
        server.send_message(msg)
import smtplib
from email.message import EmailMessage
