import fs from 'fs';
import path from 'path';

// PNG chunk parsing to check for alpha channel transparency
const dir = 'public/ser';
const files = ['int.png', 'intt.png'];

files.forEach(file => {
  const filepath = path.join(dir, file);
  if (fs.existsSync(filepath)) {
    const buffer = fs.readFileSync(filepath);
    // Find the IHDR chunk
    const colorType = buffer[25]; // Color type is at offset 25 in PNG
    // Color type:
    // 0: Grayscale
    // 2: Truecolor (RGB)
    // 3: Indexed color
    // 4: Grayscale + Alpha
    // 6: Truecolor + Alpha (RGBA)
    console.log(`${file}: colorType = ${colorType} (${colorType === 6 || colorType === 4 ? 'Has Alpha' : 'No Alpha'})`);
  } else {
    console.log(`${file} does not exist`);
  }
});
