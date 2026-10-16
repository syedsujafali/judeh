from PIL import Image
import os

full_path = r"C:\Users\Cmax\.gemini\antigravity-ide\brain\7f9a3e7c-be52-402d-a309-f398172d8e15\facebook_judehonline_full_1792155652114.png"
full_img = Image.open(full_path)
out_dir = r"c:\Users\Cmax\Desktop\judeh\public\images"

# Perfect crop of portrait (avoid top text)
box_portrait = (912, 1850, 1070, 2060)
crop_portrait = full_img.crop(box_portrait)
crop_portrait.save(os.path.join(out_dir, "jumana-judeh-portrait.jpg"), quality=95)

# Perfect crop of banner (avoid top text and bottom buttons)
box_banner = (912, 1850, 1395, 2060)
crop_banner = full_img.crop(box_banner)
crop_banner.save(os.path.join(out_dir, "fb-valuation-expert-banner.jpg"), quality=95)

# Perfect crop of chart (avoid top text and bottom buttons)
box_chart = (912, 1435, 1395, 1835)
crop_chart = full_img.crop(box_chart)
crop_chart.save(os.path.join(out_dir, "fb-market-chart.jpg"), quality=95)

# Perfect crop of notice of assessment
box_notice = (912, 3635, 1395, 3880)
crop_notice = full_img.crop(box_notice)
crop_notice.save(os.path.join(out_dir, "fb-tax-assessment.jpg"), quality=95)

# Perfect crop of market trends
box_trends = (912, 1010, 1395, 1245)
crop_trends = full_img.crop(box_trends)
crop_trends.save(os.path.join(out_dir, "fb-market-trends.jpg"), quality=95)

print("Perfect crops completed!")
