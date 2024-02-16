let xm = {
  name: "小明",
  home: 700,
};
let schoolfellow = [
  {
    name: "李华",
    home: 300,
  },
  {
    name: "王强",
    home: 701,
  },
  {
    name: "杨树",
    home: 1500,
  },
  {
    name: "成全",
    home: 1000,
  },
  {
    name: "无奈",
    home: 900,
  },
];

function sort(arr, info) {
  return arr.sort((a, b) => {
    return Math.abs(a.home - info.home) - Math.abs(b.home - info.home);
  });
}

console.log(sort(schoolfellow, xm));