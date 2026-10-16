from PIL import Image
import os

# 1. Full page screenshot containing the feed images
full_path = r"C:\Users\Cmax\.gemini\antigravity-ide\brain\7f9a3e7c-be52-402d-a309-f398172d8e15\facebook_judehonline_full_1792155652114.png"
full_img = Image.open(full_path)
fw, fh = full_img.size
print(f"Full image dimensions: {fw}x{fh}")

# Output folder
out_dir = r"c:\Users\Cmax\Desktop\judeh\public\images"

# Cropping images from full_img:
# A. Property Taxes post image
# In full_img:
# Let's crop:
# 1. Property Taxes post
box_taxes = (902, 532, 1400, 829)
crop_taxes = full_img.crop(box_taxes)
crop_taxes.save(os.path.join(out_dir, "fb-property-taxes.jpg"), quality=95)
print("Saved fb-property-taxes.jpg")

# 2. Market Analytics / Chart post
box_chart = (895, 1264, 1410, 1968)
crop_chart = full_img.crop(box_chart)
crop_chart.save(os.path.join(out_dir, "fb-market-chart.jpg"), quality=95)
print("Saved fb-market-chart.jpg")

# 3. Stock market / digital graph post
box_stock = (894, 1009, 1409, 1264)
crop_stock = full_img.crop(box_stock)
crop_stock.save(os.path.join(out_dir, "fb-market-trends.jpg"), quality=95)
print("Saved fb-market-trends.jpg")

# 4. Valuation Expert Banner with Jumana Judeh
box_expert = (895, 2277, 1408, 2690)
crop_expert = full_img.crop(box_expert)
crop_expert.save(os.path.join(out_dir, "fb-expert-banner.jpg"), quality=95)
print("Saved fb-expert-banner.jpg")

# 5. Assessment Notice post
box_assess = (895, 3939, 1408, 4800)
crop_assess = full_img.crop(box_assess)
crop_assess.save(os.path.join(out_dir, "fb-tax-assessment.jpg"), quality=95)
print("Saved fb-tax-assessment.jpg")

# 6. From Photos grid on the left:
# Jumana Judeh Headshot in photos grid
box_headshot = (652, 696, 756, 804)
crop_headshot = full_img.crop(box_headshot)
crop_headshot.save(os.path.join(out_dir, "jumana-headshot-fb.jpg"), quality=95)
print("Saved jumana-headshot-fb.jpg")

# Building photo in photos grid
box_bldg = (759, 696, 868, 804)
crop_bldg = full_img.crop(box_bldg)
crop_bldg.save(os.path.join(out_dir, "fb-commercial-building.jpg"), quality=95)
print("Saved fb-commercial-building.jpg")

# 7. Also from media_1792155541974.png (top of profile without modal):
top_path = r"C:\Users\Cmax\.gemini\antigravity-ide\brain\7f9a3e7c-be52-402d-a309-f398172d8e15\.tempmediaStorage\media_1792155541974.png"
top_img = Image.open(top_path)
# Round avatar in center-left of header
box_avatar = (525, 344, 700, 520)
crop_avatar = top_img.crop(box_avatar)
crop_avatar.save(os.path.join(out_dir, "jumana-avatar-hd.jpg"), quality=95)
print("Saved jumana-avatar-hd.jpg")

# Cover photo (brick building with sky)
box_cover = (490, 55, 1430, 415)
crop_cover = top_img.crop(box_cover)
crop_cover.save(os.path.join(out_dir, "fb-cover-building.jpg"), quality=95)
print("Saved fb-cover-building.jpg")
