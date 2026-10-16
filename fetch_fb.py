import urllib.request
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
}

urls = [
    'https://www.facebook.com/judehonline/',
    'https://www.facebook.com/judehonline/photos/',
]

found = set()
for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            # Look for image URLs from Facebook CDN
            raw_matches = re.findall(r'https:\\/\\/[^\"]+?fbcdn\.net[^\"]+?(?:jpg|png|webp)', content)
            for m in raw_matches:
                clean = m.replace('\\/', '/').replace('&amp;', '&')
                if 'p50x50' not in clean and 's50x50' not in clean:
                    found.add(clean)
            
            raw_matches2 = re.findall(r'https://[^\"]+?fbcdn\.net[^\"]+?(?:jpg|png|webp)', content)
            for m in raw_matches2:
                clean = m.replace('&amp;', '&')
                if 'p50x50' not in clean and 's50x50' not in clean:
                    found.add(clean)
    except Exception as e:
        print(f"Error fetching {u}: {e}")

print(f"Total found: {len(found)}")
for i, f in enumerate(list(found)[:15]):
    print(f"{i+1}: {f}")
