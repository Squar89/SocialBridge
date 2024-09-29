import requests
import json
import re
from pypdf import PdfReader

reader = PdfReader("Lista_organizacji_pozarządowych_i_innych_podmiotów_współpracujących_z_MS_aktualizacja_230924-1.pdf")
number_of_pages = len(reader.pages)
text = ""
for p in range (0,number_of_pages):
    page = reader.pages[p]
    text += page.extract_text()

krs_list = [str(s) for s in text.split() if s.isdigit() and s[0:4] == "0000" and len(s) >= 8]
print(krs_list)

api_string = "https://api-krs.ms.gov.pl/api/krs/OdpisPelny/{krs}?rejestr={rejestr}&format=json"
krs_string = "0000007324"
rejestr_string = ["P", "S"]

for krs in krs_list:
    url = api_string.replace("{krs}", krs).replace("{rejestr}", rejestr_string[1])
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        # print("Success")
        # print(json.dumps(data, indent=2))  # Pretty-print the JSON response
    else:
        url = api_string.replace("{krs}", krs).replace("{rejestr}", rejestr_string[0])
        response = requests.get(url)
        if response.status_code != 200:
            print(f"Error: {response.status_code}")
            print(krs)

