from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to TestApp!"}

@app.get("/test-data")
def get_test_data():
    # Placeholder for retrieving test data
    return {"data": "sample test data"}

@app.post("/test-data")
def create_test_data():
    # Placeholder for creating test data
    return {"message": "Test data created successfully"}
