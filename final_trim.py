from PIL import Image
import os

full_path = r"C:\Users\Cmax\.gemini\antigravity-ide\brain\7f9a3e7c-be52-402d-a309-f398172d8e15\facebook_judehonline_full_1792155652114.png"
full_img = Image.open(full_path)
out_dir = r"c:\Users\Cmax\Desktop\judeh\public\images"

# 1. Perfect clean chart
box_chart = (912, 1435, 1395, 1780)
crop_chart = full_img.crop(box_chart)
crop_chart.save(os.path.join(out_dir, "fb-market-chart.jpg"), quality=95)

# 2. Perfect clean banner
box_banner = (912, 1870, 1395, 2060)
crop_banner = full_img.crop(box_banner)
crop_banner.save(os.path.join(out_dir, "fb-valuation-expert-banner.jpg"), quality=95)

# 3. Perfect clean portrait
box_portrait = (912, 1870, 1070, 2060)
crop_portrait = full_img.crop(box_portrait)
crop_portrait.save(os.path.join(out_dir, "jumana-judeh-portrait.jpg"), quality=95)

# 4. Clean Detroit Ph.D. Dissertation Research Poster from post
box_phd = (912, 2830, 1395, 3350)
crop_phd = full_img.crop(box_phd)
crop_phd.save(os.path.join(out_dir, "fb-detroit-research.jpg"), quality=95)

print("Final image set perfected!")
