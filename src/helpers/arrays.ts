export const characteristics = [
  { label: 'Language', value: 'TypeScript' },
  { label: 'License', value: 'MIT' },
  { label: 'Runtime', value: 'Node.js' },
];

export const features = [
  {
    title: 'No Setup',
    desc: 'Install once globally. Use from any directory, any project.',
  },
  {
    title: 'Flexible Output',
    desc: 'Raw values, JSON, clipboard copy — whatever your workflow needs.',
  },
  {
    title: 'Cryptographically Secure',
    desc: 'Keys generated with Node.js crypto module. Safe for production use.',
  },
];

export const commands = [
  { cmd: 'genkey-cli uuidv4', alias: 'uuid', desc: 'Generate a UUID v4' },
  { cmd: 'genkey-cli uuidv7', alias: null, desc: 'Generate a UUID v7' },
  { cmd: 'genkey-cli secret_key', alias: 'sk', desc: 'Generate a 16-char secret key' },
  { cmd: 'genkey-cli secret_key --length <n>', alias: null, desc: 'Custom length (8–1024)' },
];

export const flags = [
  { flag: '--length <n>', short: '-l <n>', desc: 'Secret key length' },
  { flag: '--special', short: '-s', desc: 'Include special chars' },
  { flag: '--json', short: null, desc: 'Print JSON output' },
  { flag: '--raw', short: null, desc: 'Print value only' },
  { flag: '--version', short: '-v', desc: 'Show version' },
  { flag: '--help', short: '-h', desc: 'Show help' },
];

export const examples = [
  {
    label: 'UUID v4',
    cmd: 'genkey-cli uuidv4',
    output: "Here's your uuidv4: 110e8400-e29b-41d4-a716-446655440000",
  },
  {
    label: 'UUID v7',
    cmd: 'genkey-cli uuidv7 --raw',
    output: '018f9b62-0b5c-7c52-9b1a-7c2d7e2c3db7',
  },
  {
    label: 'Secret key',
    cmd: 'genkey-cli secret_key',
    output: "Here's your secret key: XAfb$!F&qKxL_YWT",
  },
  {
    label: '64-char key',
    cmd: 'genkey-cli sk --length 64 --special',
    output:
      "Here's your 64 characters long secret key: vQoxuqod7&xEam!6MjMxFhx4xY&yvf?pZlh7ZXXE...",
  },
  {
    label: 'JSON output',
    cmd: 'genkey-cli secret_key --json',
    output: `{\n  "type": "secret_key",\n  "value": "wV3y*2xAq7G@pZ9n",\n  "length": 16\n}`,
  },
];
