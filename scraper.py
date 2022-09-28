import requests
from bs4 import BeautifulSoup
import re

start = input("Where does your worm start? ")
end = input("Where does your worm finish? ")


def wikiScrape(start, end):
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

    start_links = soup_start.find(class_="mw-parser-output").find_all('a', href=re.compile('/wiki/.+'))
    end_links = soup_end.find(class_="mw-parser-output").find_all('a', href=re.compile('/wiki/.+'))
   
    

wikiScrape(start, end)
