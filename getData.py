import requests
import json
response = requests.get("https://api.covid19india.org/data.json")
print(response.status_code)
if response.status_code == requests.codes.ok:
    res=response.json()
    F1=open("result.js",'wb')
    F1.write(response.content)
    F1.close()
for a in res:
    print(a)