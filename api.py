from flask import Flask, jsonify, request, current_app
import sqlite3
from functools import wraps

app = Flask(__name__)

# jsonp magic
def jsonp(func):
    """Wraps JSONified output for JSONP requests."""
    @wraps(func)
    def decorated_function(*args, **kwargs):
        callback = request.args.get('callback', False)
        if callback:
            data = str(func(*args, **kwargs).data)
            content = str(callback) + '(' + data + ')'
            mimetype = 'application/javascript'
            return current_app.response_class(content, mimetype=mimetype)
        else:
            return func(*args, **kwargs)
    return decorated_function

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
@jsonp
def courses():
    rows = query('select * from courses')
    names = map(lambda y: y[0], rows.description)

    return jsonify(courses=map(lambda x: dict(zip(names, x)), list(rows)))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)