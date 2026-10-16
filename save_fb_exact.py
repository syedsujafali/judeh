from PIL import Image
import os

full_path = r"C:\Users\Cmax\.gemini\antigravity-ide\brain\7f9a3e7c-be52-402d-a309-f398172d8e15\facebook_judehonline_full_1792155652114.png"
full_img = Image.open(full_path)
out_dir = r"c:\Users\Cmax\Desktop\judeh\public\images"

# 1. Meet your real estate valuation expert banner (Jumana Judeh, MAI, CCIM, MCAO Certified General Appraiser)
# Looking at test_window.jpg, the banner top is slightly above Y=1920 (around 1820) to 2130
box_banner = (912, 1785, 1395, 2135)
crop_banner = full_img.crop(box_banner)
crop_banner.save(os.path.join(out_dir, "fb-valuation-expert-banner.jpg"), quality=95)

# Also let's extract just the portrait of Jumana Judeh from this banner (high quality):
box_jumana_portrait = (912, 1785, 1075, 2135)
crop_jumana_portrait = full_img.crop(box_jumana_portrait)
crop_jumana_portrait.save(os.path.join(out_dir, "jumana-judeh-portrait.jpg"), quality=95)

# 2. Notice of Assessment
# From test_window2.jpg, it's roughly 3500 to 3950
box_notice = (912, 3450, 1395, 3940)
crop_notice = full_img.crop(box_notice)
crop_notice.save(os.path.join(out_dir, "fb-tax-assessment.jpg"), quality=95)

# 3. Stock trends image:
box_trends = (912, 980, 1395, 1260)
crop_trends = full_img.crop(box_trends)
crop_trends.save(os.path.join(out_dir, "fb-market-trends.jpg"), quality=95)

print("Saved refined images successfully!")
