const READ = 0b1; // 0001
const WRITE = 0b10; // 0010
const UPDATE = 0b100; // 0100
const DELETE = 0b1000; // 1000

let xxx = 13; // 1101

// xxx ^= READ;

if (xxx & READ) {
  console.log("有可读权限");
} else {
  console.log("无可读权限");
}
