from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import tensorflow as tf
import numpy as np
import cv2
import base64
from typing import Dict
import uvicorn

app = FastAPI()

model = tf.saved_model.load("model")


class ImageRequest(BaseModel):
    image: str


@app.post("/predict")
async def predict(request: ImageRequest):
    try:
        # Get image from request
        img_bytes = base64.b64decode(request.image)
        np_arr = np.frombuffer(img_bytes, np.uint8)
        img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        # Preprocess image
        input_tensor = tf.convert_to_tensor(img, dtype=tf.float32)
        input_tensor = input_tensor[tf.newaxis, ...]

        # Run inference
        infer = model.signatures["serving_default"]
        detections = infer(input_tensor)

        # Process detections and format response
        response = {key: value.numpy().tolist() for key, value in detections.items()}

        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8080)
