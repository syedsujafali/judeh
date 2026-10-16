import urllib.request
import re
from urllib.parse import urljoin

pages = [
    'https://judehonline.com/',
    'https://judehonline.com/valuation-team/',
    'https://judehonline.com/realtors-team/',
    'https://judehonline.com/motivational-team/',
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

all_imgs = set()
for p in pages:
    try:
        req = urllib.request.Request(p, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as r:
            html = r.read().decode('utf-8', errors='ignore')
            found = re.findall(r'(?:src|href)=["\']([^"\']+\.(?:jpg|jpeg|png|webp))["\']', html)
            for f in found:
                full = urljoin(p, f)
                all_imgs.add(full)
    except Exception as e:
        print(f"Error on {p}: {e}")

print(f"Total found on judehonline.com: {len(all_imgs)}")
for img in sorted(all_imgs):
    print(img)
