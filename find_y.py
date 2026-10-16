from PIL import Image

full_path = r"C:\Users\Cmax\.gemini\antigravity-ide\brain\7f9a3e7c-be52-402d-a309-f398172d8e15\facebook_judehonline_full_1792155652114.png"
full_img = Image.open(full_path)
out_dir = r"c:\Users\Cmax\Desktop\judeh\public\images"

# Search for the "Meet your real estate valuation expert!" banner
# Let's crop a window from Y=1900 to 2200 to find it
w = full_img.crop((890, 1920, 1410, 2220))
w.save("test_window.jpg")

# Notice of Assessment from Y=3600 to 4000
w2 = full_img.crop((890, 3700, 1410, 4000))
w2.save("test_window2.jpg")
print("Saved test windows")
