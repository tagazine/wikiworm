import requests
from bs4 import BeautifulSoup

start = input("Where does your worm start? ")
end = input("Where does your worm finish? ")

start_response = requests.get(
    url=f"https://wikipedia.org/wiki/{start}"
)

soup_start = BeautifulSoup(start_response.content, 'html.parser')

end_response = requests.get(
    url=f"https://wikipedia.org/wiki/{end}"
)

soup_end = BeautifulSoup(end_response.content, 'html.parser')

start_title = soup_start.find(id="firstHeading")
end_title = soup_end.find(id="firstHeading")

start_links = soup_start.find(id="bodyContent").find_all('a')
end_links = soup_end.find(id="bodyContent").find_all('a')


print(f"{start_title.text}:")
for link in start_links:
  #  if link['href'].find("/wiki/") == -1:
    print(link.text)


print(f"{end_title.text}:")
for link in end_links:
    #if link['href'].find("/wiki/") == -1:
    print(link.text)
