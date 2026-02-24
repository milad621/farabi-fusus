# PWA Icons TODO

## Icon Requirements

The PWA needs the following icon sizes for full compatibility:

### Required Icons
- `public/icon-192.png` - 192x192px (Android)
- `public/icon-512.png` - 512x512px (Android)
- `public/apple-touch-icon.png` - 180x180px (iOS)
- `public/favicon.ico` - 32x32px (Browser tab)

### Optional but Recommended
- `public/icon-72.png` - 72x72px
- `public/icon-96.png` - 96x96px
- `public/icon-128.png` - 128x128px
- `public/icon-144.png` - 144x144px
- `public/icon-152.png` - 152x152px
- `public/icon-384.png` - 384x384px

## Design Guidelines

### Icon Design
- **Base SVG:** `public/icon.svg` contains a basic design template
- **Primary Color:** #0D7377 (teal) - background
- **Secondary Color:** #C9A84C (gold) - accents
- **Text Color:** #FAF8F5 (parchment) - text
- **Symbol:** Arabic letter "ف" (Fāʾ) from "فصوص" (Fusus)
- **Style:** Minimalist, Islamic geometric aesthetic

### Generating Icons

#### Option 1: Using a service
Visit https://realfavicongenerator.net/ or https://www.pwabuilder.com/imageGenerator
Upload the `public/icon.svg` and generate all required sizes.

#### Option 2: Using ImageMagick
```bash
# Install ImageMagick
brew install imagemagick

# Generate all sizes from SVG
convert public/icon.svg -resize 192x192 public/icon-192.png
convert public/icon.svg -resize 512x512 public/icon-512.png
convert public/icon.svg -resize 180x180 public/apple-touch-icon.png
convert public/icon.svg -resize 32x32 public/favicon.ico
```

#### Option 3: Using online tools
- Canva (free): Create a 512x512px design, export as PNG
- Figma: Design and export multiple sizes
- Adobe Express: Icon generator tool

## Next Steps

1. Generate proper icons using one of the methods above
2. Place them in the `public/` directory
3. Test the PWA installation on mobile devices
4. Verify icons appear correctly in:
   - Android home screen
   - iOS home screen
   - Browser tab (favicon)
   - App splash screen

## Current Status

✅ PWA manifest configured
✅ Service worker setup
✅ SVG template created
⚠️ PNG icons need to be generated (placeholder icons in use)
