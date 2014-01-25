CC=python
API=api.py

default:
	$(CC) $(API)

pip:
	pip install -r requirements.txt
