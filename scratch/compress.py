import os
from PIL import Image

def compress_images():
    public_dir = "f:/n/public"
    print(f"Starting image compression in {public_dir}...")
    
    total_saved = 0
    
    for root, dirs, files in os.walk(public_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                original_size = os.path.getsize(file_path)
                
                # Skip small images (under 100 KB) to avoid overhead
                if original_size < 100 * 1024:
                    continue
                
                try:
                    with Image.open(file_path) as img:
                        img_format = img.format
                        width, height = img.size
                        
                        # Resize if too large
                        max_dimension = 1200
                        if width > max_dimension or height > max_dimension:
                            if width > height:
                                new_width = max_dimension
                                new_height = int(height * (max_dimension / width))
                            else:
                                new_height = max_dimension
                                new_width = int(width * (max_dimension / height))
                            
                            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                            print(f"Resized {file} from {width}x{height} to {new_width}x{new_height}")
                        
                        # Save with optimization
                        if img_format == "PNG":
                            img.save(file_path, format="PNG", optimize=True)
                        else:
                            img.save(file_path, format="JPEG", quality=80, optimize=True)
                        
                        new_size = os.path.getsize(file_path)
                        saved = original_size - new_size
                        total_saved += saved
                        print(f"Compressed {file}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB (Saved {saved/1024:.1f}KB, {saved/original_size*100:.1f}%)")
                        
                except Exception as e:
                    print(f"Error compressing {file}: {e}")
                    
    print(f"\nCompression complete! Total space saved: {total_saved / (1024 * 1024):.2f} MB")

if __name__ == "__main__":
    compress_images()
