const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cấu hình optimize cho từng loại file
const optimizeConfig = {
  // Background images - cần quality cao hơn nhưng vẫn optimize
  background: {
    quality: 80,
    maxWidth: 1920,
    maxHeight: 2880,
  },
  // Gallery images - medium quality
  gallery: {
    quality: 75,
    maxWidth: 1500,
    maxHeight: 2100,
  },
  // Invitation images - cần quality cao nhưng optimize
  invitation: {
    quality: 85,
    maxWidth: 600,
    maxHeight: 1200,
  },
  // Avatar images - nhỏ rồi, chỉ optimize nhẹ
  avatar: {
    quality: 85,
    maxWidth: 256,
    maxHeight: 256,
  },
  // Other images
  default: {
    quality: 80,
    maxWidth: 1920,
    maxHeight: 1920,
  },
};

// Tạo backup folder
const backupDir = path.join(__dirname, '../public/images-backup');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

async function optimizeImage(filePath, config) {
  const originalStats = fs.statSync(filePath);
  const originalSize = originalStats.size;
  
  try {
    // Đọc file vào buffer trước để tránh lỗi file lock
    const fileBuffer = fs.readFileSync(filePath);
    const image = sharp(fileBuffer);
    const metadata = await image.metadata();
    
    // Tính toán kích thước mới
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > config.maxWidth || height > config.maxHeight) {
      const ratio = Math.min(
        config.maxWidth / width,
        config.maxHeight / height
      );
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    
    // Optimize image - xử lý cả JPG và PNG
    const ext = path.extname(filePath).toLowerCase();
    let optimizedBuffer;
    
    if (ext === '.png') {
      optimizedBuffer = await image
        .resize(width, height, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .png({
          quality: config.quality,
          compressionLevel: 9,
        })
        .toBuffer();
    } else {
      optimizedBuffer = await image
        .resize(width, height, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({
          quality: config.quality,
          mozjpeg: true,
          progressive: true,
        })
        .toBuffer();
    }
    
    const newSize = optimizedBuffer.length;
    const saved = originalSize - newSize;
    const savedPercent = ((saved / originalSize) * 100).toFixed(2);
    
    // Backup file gốc
    const relativePath = path.relative(
      path.join(__dirname, '../public/images'),
      filePath
    );
    const backupPath = path.join(backupDir, relativePath);
    const backupDirPath = path.dirname(backupPath);
    if (!fs.existsSync(backupDirPath)) {
      fs.mkdirSync(backupDirPath, { recursive: true });
    }
    fs.copyFileSync(filePath, backupPath);
    
    // Ghi file đã optimize
    fs.writeFileSync(filePath, optimizedBuffer);
    
    return {
      success: true,
      originalSize,
      newSize,
      saved,
      savedPercent,
      width,
      height,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

function getConfigForFile(filePath) {
  const fileName = path.basename(filePath).toLowerCase();
  const dirName = path.dirname(filePath).toLowerCase();
  
  if (dirName.includes('60x120') || fileName.includes('c1') || fileName.includes('c2')) {
    return optimizeConfig.invitation;
  }
  if (dirName.includes('15x21') || dirName.includes('gallery')) {
    return optimizeConfig.gallery;
  }
  if (dirName.includes('avatar')) {
    return optimizeConfig.avatar;
  }
  if (fileName.includes('background') || fileName.includes('dsc01337')) {
    return optimizeConfig.background;
  }
  return optimizeConfig.default;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeAllImages() {
  const imagesDir = path.join(__dirname, '../public/images');
  const results = [];
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  function getAllImages(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(getAllImages(fullPath));
      } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }
  
  const imageFiles = getAllImages(imagesDir);
  
  console.log(`\n🔍 Tìm thấy ${imageFiles.length} file ảnh cần optimize...\n`);
  
  for (const filePath of imageFiles) {
    const relativePath = path.relative(imagesDir, filePath);
    const config = getConfigForFile(filePath);
    
    console.log(`⏳ Đang optimize: ${relativePath}...`);
    
    const result = await optimizeImage(filePath, config);
    
    if (result.success) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      
      results.push({
        file: relativePath,
        ...result,
      });
      
      console.log(`✅ Hoàn thành: ${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)} (tiết kiệm ${result.savedPercent}%)`);
    } else {
      console.log(`❌ Lỗi: ${result.error}`);
      results.push({
        file: relativePath,
        ...result,
      });
    }
  }
  
  // Tổng kết
  const totalSaved = totalOriginalSize - totalNewSize;
  const totalSavedPercent = ((totalSaved / totalOriginalSize) * 100).toFixed(2);
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 TỔNG KẾT:');
  console.log('='.repeat(60));
  console.log(`Tổng kích thước ban đầu: ${formatBytes(totalOriginalSize)}`);
  console.log(`Tổng kích thước sau optimize: ${formatBytes(totalNewSize)}`);
  console.log(`Tiết kiệm: ${formatBytes(totalSaved)} (${totalSavedPercent}%)`);
  console.log(`\n💾 Backup files được lưu tại: ${backupDir}`);
  console.log('='.repeat(60) + '\n');
  
  return results;
}

// Chạy script
optimizeAllImages().catch(console.error);

