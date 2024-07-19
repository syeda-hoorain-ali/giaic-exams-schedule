import os
import pandas as pd
from pymongo import MongoClient

#^ Creating a DataFrame of excel sheets
sheet_1: pd.DataFrame = pd.read_excel('./sheet-1.xlsx')
sheet_2: pd.DataFrame = pd.read_excel('./sheet-2.xlsx')
sheet_3: pd.DataFrame = pd.read_excel('./sheet-3.xlsx')
sheet_4: pd.DataFrame = pd.read_excel('./sheet-4.xlsx')
sheet_5: pd.DataFrame = pd.read_excel('./sheet-5.xlsx')
sheet_6: pd.DataFrame = pd.read_excel('./sheet-6.xlsx')

data: pd.DataFrame = pd.concat([sheet_1, sheet_2, sheet_3, sheet_4, sheet_5, sheet_6], ignore_index=True)

data['Day'] = pd.to_datetime(data['Day'], errors='coerce').dt.strftime('%A')  # Convert to day name
data['Time'] = pd.to_datetime(data['Time'], errors='coerce').dt.strftime('%H:%M:%S')  # Convert to time



#^ Create a DataBase and insert the data
URI: str = os.getenv("MONGODB_URI") or ''
client = MongoClient(URI)

db = client['giaic_exams']
collection = db['batch1_quatre1']

records = data.to_dict(orient='records')
collection.insert_many(records)