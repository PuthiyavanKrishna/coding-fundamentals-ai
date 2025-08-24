import json
import os
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(__file__), '..', 'db', 'form_data.json')

def view_data():
    with open(DB_PATH, 'r') as f:
        data = json.load(f)
    
    print(f"Total entries: {len(data)}\n")
    for entry in data:
        print(f"ID: {entry['id']}")
        print(f"Date: {entry['date']}")
        print(f"Query: {entry['query']}")
        print("-" * 40)

if __name__ == "__main__":
    view_data()