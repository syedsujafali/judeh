from PIL import Image
import os

full_path = r"C:\Users\Cmax\.gemini\antigravity-ide\brain\7f9a3e7c-be52-402d-a309-f398172d8e15\facebook_judehonline_full_1792155652114.png"
full_img = Image.open(full_path)
out_dir = r"c:\Users\Cmax\Desktop\judeh\public\images"

# 1. Market Chart
# Exactly the chart inside the post:
box_chart = (912, 1378, 1395, 1895)
crop_chart = full_img.crop(box_chart)
crop_chart.save(os.path.join(out_dir, "fb-market-chart.jpg"), quality=95)
print("Saved fb-market-chart.jpg")

# 2. Meet your real estate valuation expert banner
# In the post at Y around 2250:
box_expert = (912, 2185, 1395, 2375)
crop_expert = full_img.crop(box_expert)
crop_expert.save(os.path.join(out_dir, "fb-expert-banner.jpg"), quality=95)
print("Saved fb-expert-banner.jpg")

# 3. Notice of Assessment post
box_assess = (912, 3630, 1395, 3965)
crop_assess = full_img.crop(box_assess)
crop_assess.save(os.path.join(out_dir, "fb-tax-assessment.jpg"), quality=95)
print("Saved fb-tax-assessment.jpg")

# 4. Building photo (brick building with windows and grass):
box_bldg = (759, 696, 868, 795)
crop_bldg = full_img.crop(box_bldg)
crop_bldg.save(os.path.join(out_dir, "fb-commercial-building.jpg"), quality=95)
print("Saved fb-commercial-building.jpg")

# 5. Clean Jumana Judeh Headshot portrait:
box_headshot = (652, 696, 756, 795)
crop_headshot = full_img.crop(box_headshot)
crop_headshot.save(os.path.join(out_dir, "jumana-headshot-fb.jpg"), quality=95)
print("Saved jumana-headshot-fb.jpg")
