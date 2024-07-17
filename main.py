from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import cv2
import base64

app = Flask(__name__)

# Load the model
model = tf.saved_model.load("model")

@app.route('/predict', methods=['POST'])
def predict():
    # Get image from request
    data = request.json['image']
    img_bytes = base64.b64decode(data)
    np_arr = np.frombuffer(img_bytes, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    
    # Preprocess image
    input_tensor = tf.convert_to_tensor(img)
    input_tensor = input_tensor[tf.newaxis, ...]
    
    # Run inference
    detections = model(input_tensor)
    
    # Process detections and format response
    # (This will depend on your specific model's output format)
    response = {
        'detections': detections.numpy().tolist()
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
