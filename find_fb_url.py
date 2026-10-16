import urllib.request
import re

url = 'https://judehonline.com/'
headers = {'User-Agent': 'Mozilla/5.0'}
html = urllib.request.urlopen(urllib.request.Request(url, headers=headers)).read().decode('utf-8', errors='ignore')

fb_links = re.findall(r'https?://[^\s"\'<>]*facebook[^\s"\'<>]*', html)
print('Facebook links on judehonline.com:', fb_links)
