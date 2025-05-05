from PIL import Image
from pathlib import Path

orig_path = Path('C:/Users/br3os/Desktop/The Vault/Dev/Web/Grad Ceramony Projects/Project-Showcase/data_management/Images/Original_Images')
mobile1_path = Path('C:/Users/br3os/Desktop/The Vault/Dev/Web/Grad Ceramony Projects/Project-Showcase/data_management/Images/MobileImages1x')
mobile2_path = Path('C:/Users/br3os/Desktop/The Vault/Dev/Web/Grad Ceramony Projects/Project-Showcase/data_management/Images/MobileImages2x')
desk1_path = Path('C:/Users/br3os/Desktop/The Vault/Dev/Web/Grad Ceramony Projects/Project-Showcase/data_management/Images/DesktopImages1x')
desk2_path = Path('C:/Users/br3os/Desktop/The Vault/Dev/Web/Grad Ceramony Projects/Project-Showcase/data_management/Images/DesktopImages2x')

Image.MAX_IMAGE_PIXELS = None
sizes = [
        {'out_path': mobile1_path, 'size': (288, 528), 'name': '-mobile-1x.webp'},
        {'out_path': mobile2_path, 'size': (576, 1056), 'name': '-mobile-2x.webp'},
        {'out_path': desk1_path, 'size': (486, 528), 'name': '-desktop-1x.webp'},
        {'out_path': desk2_path, 'size': (972, 1056), 'name': '-desktop-2x.webp'},
        ]

for size in sizes:
    for img_path in orig_path.iterdir():
        img_name = img_path.name.split('.')[0] + size['name']
        img = Image.open(f'C:/Users/br3os/Desktop/The Vault/Dev/Web/Grad Ceramony Projects/Project-Showcase/data_management/Images/Original_Images/{img_path.name}')
        img.thumbnail(size['size'])
        out_path = size['out_path'] / img_name
        img.save(out_path, format='WEBP')
