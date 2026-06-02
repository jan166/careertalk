import os, random
from PIL import Image, ImageDraw, ImageFilter

random.seed(7)
os.makedirs("assets", exist_ok=True)
W, H = 1600, 900

def make(name, base, noise=7, vignette=0.06, fibers=True, light=True):
    img = Image.new("RGB", (W, H), base)
    px = img.load()
    # subtle per-pixel grain
    for y in range(H):
        for x in range(0, W, 1):
            n = random.randint(-noise, noise)
            r, g, b = px[x, y]
            px[x, y] = (max(0, min(255, r+n)), max(0, min(255, g+n)), max(0, min(255, b+n)))
    # paper fibers / specks
    d = ImageDraw.Draw(img, "RGBA")
    if fibers:
        for _ in range(2600):
            x, y = random.randint(0, W-1), random.randint(0, H-1)
            ln = random.randint(2, 9)
            a = random.randint(6, 16)
            tone = (255, 255, 255, a) if (light and random.random() > 0.45) else (0, 0, 0, a)
            d.line([(x, y), (x+random.randint(-ln, ln), y+random.randint(-1, 1))], fill=tone, width=1)
    # soft vignette
    vig = Image.new("L", (W, H), 0)
    vd = ImageDraw.Draw(vig)
    vd.ellipse([-W*0.25, -H*0.25, W*1.25, H*1.25], fill=255)
    vig = vig.filter(ImageFilter.GaussianBlur(180))
    dark = Image.new("RGB", (W, H), (0, 0, 0))
    img = Image.composite(img, Image.blend(img, dark, vignette*2), vig)
    img.save(f"assets/{name}.png")
    print("wrote", name)

make("cream",    (233, 227, 214))
make("creamlt",  (240, 235, 224), noise=5)
make("charcoal", (43, 39, 36), noise=6, vignette=0.10, light=False)
make("blue",     (165, 191, 211), noise=6)
make("blush",    (226, 197, 198), noise=6)
make("sage",     (181, 192, 165), noise=6)
