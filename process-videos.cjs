const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');

const videoDir = path.join(__dirname, 'video');
const publicVideoDir = path.join(__dirname, 'public', 'videos');

if (!fs.existsSync(publicVideoDir)) {
  fs.mkdirSync(publicVideoDir, { recursive: true });
}

const videos = [
  { file: 'Apresentação_Stack sender.mp4', dest: 'Apresentacao_Stack_sender.mp4', poster: 'poster-sender.jpg' },
  { file: 'Video 2 - Voz Hacker G-ADS.mp4', dest: 'Video_2_Voz_Hacker_G-ADS.mp4', poster: 'poster-saas.jpg' },
  { file: 'Video 3 - Voz Hacker G-ADS.mp4', dest: 'Video_3_Voz_Hacker_G-ADS.mp4', poster: 'poster-ia.jpg' }
];

videos.forEach(v => {
  const src = path.join(videoDir, v.file);
  const dest = path.join(publicVideoDir, v.dest);
  const poster = path.join(publicVideoDir, v.poster);

  if (fs.existsSync(src)) {
    // Copy video
    console.log(`Copying ${v.file} to public/videos/${v.dest}...`);
    fs.copyFileSync(src, dest);

    // Extract frame
    console.log(`Extracting frame for ${v.file}...`);
    try {
      execSync(`"${ffmpeg}" -y -i "${src}" -ss 00:00:05 -vframes 1 "${poster}"`);
      console.log(`Created poster: ${v.poster}`);
    } catch (e) {
      console.error(`Error extracting frame for ${v.file}:`, e.message);
    }
  } else {
    console.warn(`Source video not found: ${src}`);
  }
});
