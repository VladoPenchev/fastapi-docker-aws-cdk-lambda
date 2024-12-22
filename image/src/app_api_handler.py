from fastapi import FastAPI
from mangum import Mangum

from app.main import random_3x3


app = FastAPI()
handler = Mangum(app) # Entry point for AWS Lambda.

@app.get("/")
def index():
    return {
        "message": "Hello from fastAPI",
        "data": random_3x3()
    }

if __name__ == '__main__':
    # Run this as a server directly
    import uvicorn
    port = 8000
    print(f'Running app on port {port}')
    uvicorn.run(app, host="0.0.0.0", port=port)