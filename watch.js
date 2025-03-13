const { watch } = require('fs');
const { exec } = require('child_process');

const build = () => {
   console.log('Building...');
   exec('npm run build', (err, stdout, stderr) => {
      if (err) {
         console.error('Build error:', stderr);
         return;
      }
      console.log(stdout || 'Build complete');
   });
};

// Initial build
build();

// Watch source files only
watch('scss/main.scss', { persistent: true }, (event, filename) => {
   if (event === 'change') {
      console.log(`Change detected in ${filename}`);
      build();
   }
});

watch('js/main.js', { persistent: true }, (event, filename) => {
   if (event === 'change') {
      console.log(`Change detected in ${filename}`);
      build();
   }
});

console.log('Watching scss/main.scss and js/main.js...');