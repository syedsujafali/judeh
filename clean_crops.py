from PIL import Image
import os

full_path = r"C:\Users\Cmax\.gemini\antigravity-ide\brain\7f9a3e7c-be52-402d-a309-f398172d8e15\facebook_judehonline_full_1792155652114.png"
full_img = Image.open(full_path)
out_dir = r"c:\Users\Cmax\Desktop\judeh\public\images"

# 1. Clean Expert Banner (no like/comment buttons):
# Banner text and portrait:
box_banner = (912, 1785, 1395, 2060)
crop_banner = full_img.crop(box_banner)
crop_banner.save(os.path.join(out_dir, "fb-valuation-expert-banner.jpg"), quality=95)

# 2. Clean Portrait of Jumana Judeh MAI CCIM MCAO:
box_portrait = (912, 1785, 1070, 2060)
crop_portrait = full_img.crop(box_portrait)
crop_portrait.save(os.path.join(out_dir, "jumana-judeh-portrait.jpg"), quality=95)

# 3. Clean Market Trends Chart (no like/comment buttons):
box_chart = (912, 1400, 1395, 1855)
crop_chart = full_img.crop(box_chart)
crop_chart.save(os.path.join(out_dir, "fb-market-chart.jpg"), quality=95)

# 4. Clean Market Digital Trends:
box_trends = (912, 1009, 1395, 1260)
crop_trends = full_img.crop(box_trends)
crop_trends.save(os.path.join(out_dir, "fb-market-trends.jpg"), quality=95)

# 5. Clean Notice of Assessment:
box_notice = (912, 3550, 1395, 3900)
crop_notice = full_img.crop(box_notice)
crop_notice.save(os.path.join(out_dir, "fb-tax-assessment.jpg"), quality=95)

# 6. Clean Property Taxes:
box_taxes = (912, 532, 1395, 805)
crop_taxes = full_img.crop(box_taxes)
crop_taxes.save(os.path.join(out_dir, "fb-property-taxes.jpg"), quality=95)

print("All clean image crops saved!")
