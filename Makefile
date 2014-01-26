CC=python
API=api.py

default:
	sudo python -m SimpleHTTPServer 80

api:
	$(CC) $(API)

test:
	cd site;
	sudo python -m SimpleHTTPServer 8000

pip:
	pip install -r requirements.txt
