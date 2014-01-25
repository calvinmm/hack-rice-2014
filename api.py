from flask import Flask, jsonify
import sqlite3
app = Flask(__name__)

@app.route('/')
def index():
    # temporary?
    return "HACK RICE"

@app.route('/cats')
def cats():
    # bad form but whatever
    conn = sqlite3.connect('test.db')
    c = conn.cursor()
    rows = c.execute('select * from cats')

    # jsonify the results
    return jsonify(cats=list(rows))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
