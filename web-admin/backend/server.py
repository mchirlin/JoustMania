from flask import Flask, send_file, send_from_directory
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)

# Route for seeing a data
@app.route('/data')
def get_time():
    # Returning an api for showing in  reactjs
    return {
        'Name':"geek",
        "Age":"22",
        "Date":x,
        "programming":"python"
    }

@app.route('/')
def react():
    return send_file('../frontend/dist/index.html')

@app.route('/assets/<path:path>')
def serve_static(path):
    return send_from_directory('../frontend/dist/assets', path)

# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)