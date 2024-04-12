from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from gpiozero import Robot

app = Flask(__name__)
CORS(app, resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

droid = Robot(left=(4,17), right=(27,22))
MIN_VEL = 0.3
REG_VEL = 0.5
MAX_VEL = 0.7

@app.route('/')
def index():
    return 'Hello World'

@socketio.on("forward")
def move_droid_forward():
    print(request.sid)
    print("Moving Deliveriod Forward")
    droid.forward(MIN_VEL)

@socketio.on("stop")
def stop_droid():
    print(request.sid)
    print("Stopping Droid")
    droid.stop()

# start server
if __name__ == "__main__":
   socketio.run(app, debug=True, port=3030)
