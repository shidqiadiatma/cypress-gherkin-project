const { exec } = require('child_process');
const glob = require('glob');

const specs = glob.sync('cypress/e2e/**/*.feature');
const maxThreads = 4; // Jumlah proses paralel

let running = 0;
let index = 0;

function runNext() {
  if (index >= specs.length) return;
  if (running >= maxThreads) return;

  const spec = specs[index++];
  running++;
  console.log(`Running: ${spec}`);

  const proc = exec(`npx cypress run --headed --browser chrome --spec "${spec}"`, (err, stdout, stderr) => {
    if (err) console.error(`Error in ${spec}:`, err);
    running--;
    runNext();
  });

  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);

  runNext();
}

runNext();