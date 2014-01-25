from flask import Flask
import sqlite3
app = Flask(__name__)

@app.route('/')
def index():
    return "HACK RICE"

@app.route('/cats')
def cats():
    conn = sqlite3.connect('test.db')
    c = conn.cursor()
    rows = c.execute('select * from cats')
    return str(list(rows))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
