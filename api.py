from flask import Flask, jsonify
import sqlite3
app = Flask(__name__)

@app.route('/')
def index():
    # temporary?
    return "HACK RICE"

def get_conn():
    # bad form
    conn = sqlite3.connect('test.db')
    return conn.cursor()

def query(query):
    return get_conn().execute(query)

@app.route('/cats')
def cats():
    rows = query('select * from cats')

    # jsonify the results
    return jsonify(cats=list(rows))

@app.route('/courses')
def courses():
    rows = query('select * from courses')

    # json json
    return jsonify(courses=list(rows))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)