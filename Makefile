CC=python
API=api.py

default:
	sudo python -m SimpleHTTPServer 80

api:
	$(CC) $(API)

pip:
	pip install -r requirements.txt
