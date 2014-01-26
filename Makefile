CC=python
API=api.py

default:
	sudo $(CC) -m SimpleHTTPServer 80

api:
	$(CC) $(API)

test:
	cd site && sudo $(CC) -m SimpleHTTPServer 8000

pip:
	pip install -r requirements.txt