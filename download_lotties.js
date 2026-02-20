const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = {
  check: 'https://raw.githubusercontent.com/LottieFiles/lottie-react/master/example/src/assets/check.json',
  star: 'https://raw.githubusercontent.com/LottieFiles/lottie-react/master/example/src/assets/star.json',
  clock: 'https://raw.githubusercontent.com/LottieFiles/lottie-react/master/example/src/assets/clock.json',
  pin: 'https://raw.githubusercontent.com/LottieFiles/lottie-react/master/example/src/assets/pin.json',
  user: 'https://raw.githubusercontent.com/LottieFiles/lottie-react/master/example/src/assets/user.json',
  shield: 'https://raw.githubusercontent.com/LottieFiles/lottie-react/master/example/src/assets/shield.json'
};

const dir = path.join(__dirname, 'public', 'lotties');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

for (const [name, url] of Object.entries(urls)) {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(path.join(dir, `${name}.json`));
      res.pipe(file);
      console.log(`Downloaded ${name}.json`);
    } else {
      console.log(`Failed ${name}.json: ${res.statusCode}`);
    }
  }).on('error', (e) => {
    console.error(e);
  });
}
