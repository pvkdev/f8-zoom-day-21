const methodList = [
  "at",
  "concat",
  "copyWithin",
  "fill",
  "find",
  "findIndex",
  "findLast",
  "findLastIndex",
  "lastIndexOf",
  "pop",
  "push",
  "reverse",
  "shift",
  "unshift",
  "slice",
  "sort",
  "splice",
  "includes",
  "indexOf",
  "join",
  "keys",
  "entries",
  "values",
  "forEach",
  "filter",
  "flat",
  "flatMap",
  "map",
  "every",
  "some",
  "reduce",
  "reduceRight",
  "toReversed",
  "toSorted",
  "toSpliced",
  "with",
  "toLocaleString",
  "toString",
];

const arrayMethodsInfo = {
  at: {
    explanation: "Truy cập phần tử theo chỉ số index, hỗ trợ chỉ số âm.",
    test1: "[10, 20, 30, 40, 50].at2(2)    // → 30",
    test2: "['a', 'b', 'c'].at2(-1)        // → 'c'",
    test3: "[1, 2, 3].at2(10)              // → undefined",
  },
  concat: {
    explanation:
      "Nối mảng hiện tại với một hoặc nhiều mảng (hoặc giá trị khác) mà không làm thay đổi mảng ban đầu. Nó trả về một mảng mới chứa tất cả phần tử đã được nối.",
    test1: "[1, 2].concat2([3, 4]); // [1, 2, 3, 4]",
    test2: "[10, 20].concat2(30); // [10, 20, 30]",
    test3:
      "['F8','a'].concat2(['b', 'c'], 'd', [1, 2]); // ['F8', 'a', 'b', 'c', 'd', 1, 2]",
  },
  copyWithin: {
    explanation:
      "Sao chép một phần của mảng đến vị trí khác trong cùng mảng, mà không thay đổi độ dài mảng. Nó làm thay đổi mảng gốc.",
    test1: "[1, 2, 3, 4, 5].copyWithin2(0, 3); // [4, 5, 3, 4, 5]",
    test2: "[1, 2, 3, 4, 5].copyWithin2(1, 0, 2); // [1, 1, 2, 4, 5]",
    test3: "[1, 2, 3, 4, 5].copyWithin2(-2, -4, -1); // [1, 2, 3, 2, 3]",
  },
  fill: {
    explanation: "Thay thế tất cả phần tử bằng một giá trị.",
    test1: "[1, 2, 3].fill(0) // → [0, 0, 0]",
    test2: " ",
    test3: " ",
  },
  find: {
    explanation: "Tìm phần tử đầu tiên thỏa mãn điều kiện.",
    test1: "[1, 2, 3].find(x => x > 1) // → 2",
    test2: " ",
    test3: " ",
  },
  findIndex: {
    explanation: "Tìm chỉ số phần tử đầu tiên thỏa điều kiện.",
    test1: "[1, 2, 3].findIndex(x => x > 1) // → 1",
    test2: " ",
    test3: " ",
  },
  findLast: {
    explanation: "Tìm phần tử cuối cùng thỏa điều kiện.",
    test1: "[1, 2, 3].findLast(x => x < 3) // → 2",
    test2: " ",
    test3: " ",
  },
  findLastIndex: {
    explanation: "Tìm chỉ số phần tử cuối cùng thỏa điều kiện.",
    test1: "[1, 2, 3].findLastIndex(x => x < 3) // → 1",
    test2: " ",
    test3: " ",
  },
  lastIndexOf: {
    explanation: "Tìm vị trí xuất hiện cuối cùng của phần tử.",
    test1: "[1, 2, 1, 3].lastIndexOf(1) // → 2",
    test2: " ",
    test3: " ",
  },
  pop: {
    explanation: "Xóa phần tử cuối cùng và trả về phần tử đó.",
    test1: "[1, 2, 3].pop() // → 3",
    test2: " ",
    test3: " ",
  },
  push: {
    explanation: "Thêm phần tử vào cuối mảng.",
    test1: "[1, 2].push(3) // → 3 (new length)",
    test2: " ",
    test3: " ",
  },
  reverse: {
    explanation: "Đảo ngược mảng.",
    test1: "[1, 2, 3].reverse() // → [3, 2, 1]",
    test2: " ",
    test3: " ",
  },
  shift: {
    explanation: "Xóa phần tử đầu tiên và trả về phần tử đó.",
    test1: "[1, 2, 3].shift() // → 1",
    test2: " ",
    test3: " ",
  },
  unshift: {
    explanation: "Thêm phần tử vào đầu mảng.",
    test1: "[2, 3].unshift(1) // → 3 (new length)",
    test2: " ",
    test3: " ",
  },
  slice: {
    explanation: "Trích xuất một phần mảng (không thay đổi mảng gốc).",
    test1: "[1, 2, 3, 4].slice(1, 3) // → [2, 3]",
    test2: " ",
    test3: " ",
  },
  sort: {
    explanation: "Sắp xếp mảng theo thứ tự Unicode (hoặc dùng so sánh).",
    test1: "[3, 1, 2].sort() // → [1, 2, 3]",
    test2: " ",
    test3: " ",
  },
  splice: {
    explanation: "Xóa, thêm phần tử vào mảng.",
    test1: "[1, 2, 3].splice(1, 1) // → [2]",
    test2: " ",
    test3: " ",
  },
  includes: {
    explanation: "Kiểm tra phần tử có trong mảng hay không.",
    test1: "[1, 2, 3].includes(2) // → true",
    test2: " ",
    test3: " ",
  },
  indexOf: {
    explanation: "Tìm vị trí đầu tiên của phần tử.",
    test1: "[1, 2, 3].indexOf(2) // → 1",
    test2: " ",
    test3: " ",
  },
  join: {
    explanation: "Nối các phần tử thành chuỗi.",
    test1: "[1, 2, 3].join('-') // → '1-2-3'",
    test2: " ",
    test3: " ",
  },
  keys: {
    explanation: "Trả về iterator của chỉ số.",
    test1: "Array.from([10, 20].keys()) // → [0, 1]",
    test2: " ",
    test3: " ",
  },
  entries: {
    explanation: "Trả về iterator chứa cặp [index, value].",
    test1: "Array.from(['a', 'b'].entries()) // → [[0,'a'],[1,'b']]",
    test2: " ",
    test3: " ",
  },
  values: {
    explanation: "Trả về iterator các giá trị của mảng.",
    test1: "Array.from(['a', 'b'].values()) // → ['a','b']",
    test2: " ",
    test3: " ",
  },
  forEach: {
    explanation: "Lặp qua từng phần tử mảng.",
    test1: "[1, 2, 3].forEach(x => console.log(x))",
    test2: " ",
    test3: " ",
  },
  filter: {
    explanation: "Lọc phần tử thỏa điều kiện.",
    test1: "[1, 2, 3, 4].filter(x => x % 2 === 0) // → [2, 4]",
    test2: " ",
    test3: " ",
  },
  flat: {
    explanation: "Làm phẳng mảng lồng nhau.",
    test1: "[1, [2, [3]]].flat(2) // → [1, 2, 3]",
    test2: " ",
    test3: " ",
  },
  flatMap: {
    explanation: "Map và làm phẳng luôn một cấp độ.",
    test1: "[1, 2].flatMap(x => [x, x * 2]) // → [1, 2, 2, 4]",
    test2: " ",
    test3: " ",
  },
  map: {
    explanation: "Tạo mảng mới qua một hàm xử lý từng phần tử.",
    test1: "[1, 2, 3].map(x => x * 2) // → [2, 4, 6]",
    test2: "[1, 2, 3].map(x => x * 3) // → [3, 6, 9]",
    test3: "[1, 2, 3].map(x => x * 4) // → [4, 8, 12]",
  },
  every: {
    explanation: "Kiểm tra tất cả phần tử thỏa điều kiện.",
    test1: "[1, 2, 3].every(x => x > 0) // → true",
    test2: " ",
    test3: " ",
  },
  some: {
    explanation: "Kiểm tra có ít nhất một phần tử thỏa điều kiện.",
    test1: "[1, 2, 3].some(x => x > 2) // → true",
    test2: " ",
    test3: " ",
  },
  reduce: {
    explanation: "Tính toán tích lũy qua các phần tử.",
    test1: "[1, 2, 3].reduce((a, b) => a + b, 0) // → 6",
    test2: " ",
    test3: " ",
  },
  reduceRight: {
    explanation: "Như reduce nhưng từ phải sang trái.",
    test1: "[1, 2, 3].reduceRight((a, b) => a - b) // → 0",
    test2: " ",
    test3: " ",
  },
  toReversed: {
    explanation: "Tạo mảng mới đã đảo ngược.",
    test1: "[1, 2, 3].toReversed() // → [3, 2, 1]",
    test2: " ",
    test3: " ",
  },
  toSorted: {
    explanation: "Tạo mảng mới đã sắp xếp.",
    test1: "[3, 1, 2].toSorted() // → [1, 2, 3]",
    test2: " ",
    test3: " ",
  },
  toSpliced: {
    explanation: "Tạo mảng mới sau khi splice.",
    test1: "[1, 2, 3].toSpliced(1, 1) // → [1, 3]",
    test2: " ",
    test3: " ",
  },
  with: {
    explanation: "Tạo mảng mới với phần tử bị thay thế.",
    test1: "[1, 2, 3].with(1, 99) // → [1, 99, 3]",
    test2: " ",
    test3: " ",
  },
  toLocaleString: {
    explanation: "Biến mảng thành chuỗi định dạng địa phương.",
    test1: "[123456.789].toLocaleString() // → tuỳ theo locale",
    test2: " ",
    test3: " ",
  },
  toString: {
    explanation: "Chuyển mảng thành chuỗi.",
    test1: "[1, 2, 3].toString() // → '1,2,3'",
    test2: " ",
    test3: " ",
  },
};

let currentMethod = null;

const methodButtonsDiv = document.getElementById("method-buttons");
methodList.forEach((method) => {
  const btn = document.createElement("button");
  btn.textContent = method;
  btn.onclick = () => {
    currentMethod = method;
    document.getElementById("instruction").innerHTML = `
        <p>Đang test phương thức: <strong>${method}</strong></p>
        <p><em>${arrayMethodsInfo[method].explanation}</em></p>
    `;
    document.getElementById("codeInput").value = arrayMethodsInfo[method].test1;
    document.getElementById("codeInput2").value =
      arrayMethodsInfo[method].test2;
    document.getElementById("codeInput3").value =
      arrayMethodsInfo[method].test3;
    logClear();
  };
  methodButtonsDiv.appendChild(btn);
});

// ----------------------------------------------------------------
// ---- Cosplay Console.log ----------------------------- S -------
// ----------------------------------------------------------------
const logEl = document.getElementById("log");
function log(...args) {
  logEl.textContent += args.map((x) => {
    if (typeof x === "object" && x !== null) return JSON.stringify(x, null, 2);
    if (typeof x === "undefined") return "undefined";
    return String(x) + "\n";
  });
}
function logClear() {
  logEl.textContent = "";
}
// ----------------------------------------------------------------
// ---- Cosplay Console.log ----------------------------- E -------
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// ---- Cosplay Test Array Prototype Methods ------------ S -------
// ----------------------------------------------------------------
Array.prototype.at2 = function (index) {
  const len = this.length;
  index = Number(index);
  if (isNaN(index)) return undefined;

  if (index < 0) {
    index = len + index;
  }

  if (index < 0 || index >= len) {
    return undefined;
  }

  return this[index];
};
Array.prototype.concat2 = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(this[i]);
  }

  for (let j = 0; j < arguments.length; j++) {
    let arg = arguments[j];
    if (Array.isArray(arg)) {
      for (let k = 0; k < arg.length; k++) {
        result.push(arg[k]);
      }
    } else {
      result.push(arg);
    }
  }

  return result;
};
Array.prototype.copyWithin2 = function (target, start = 0, end = this.length) {
  const len = this.length;
  target = target < 0 ? len + target : target;
  start = start < 0 ? len + start : start;
  end = end < 0 ? len + end : end;

  const toCopy = [];

  for (let i = start; i < end && i < len; i++) {
    toCopy.push(this[i]);
  }

  for (let i = 0; i < toCopy.length && target + i < len; i++) {
    this[target + i] = toCopy[i];
  }

  return this;
};
Array.prototype.fill2 = function () {};
Array.prototype.find2 = function () {};
Array.prototype.findIndex2 = function () {};
Array.prototype.findLast2 = function () {};
Array.prototype.findLastIndex2 = function () {};
Array.prototype.lastIndexOf2 = function () {};
Array.prototype.pop2 = function () {};
Array.prototype.push2 = function () {};
Array.prototype.reverse2 = function () {};
Array.prototype.shift2 = function () {};
Array.prototype.unshift2 = function () {};
Array.prototype.slice2 = function () {};
Array.prototype.sort2 = function () {};
Array.prototype.splice2 = function () {};
Array.prototype.includes2 = function () {};
Array.prototype.indexOf2 = function () {};
Array.prototype.join2 = function () {};
Array.prototype.keys2 = function () {};
Array.prototype.entries2 = function () {};
Array.prototype.values2 = function () {};
Array.prototype.forEach2 = function () {};
Array.prototype.filter2 = function () {};
Array.prototype.flat2 = function () {};
Array.prototype.flatMap2 = function () {};
Array.prototype.map2 = function () {};
Array.prototype.every2 = function () {};
Array.prototype.some2 = function () {};
Array.prototype.reduce2 = function () {};
Array.prototype.reduceRight2 = function () {};
Array.prototype.toReversed2 = function () {};
Array.prototype.toSorted2 = function () {};
Array.prototype.toSpliced2 = function () {};
Array.prototype.with2 = function () {};
Array.prototype.toLocaleString2 = function () {};
Array.prototype.toString2 = function () {};

// ----------------------------------------------------------------
// ---- Cosplay Test Array Prototype Methods ------------ E -------
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// ---- Button ------------------------------------------ S -------
// ----------------------------------------------------------------
const runTest = (id, testName) => {
  if (!currentMethod) {
    log("Vui lòng chọn phương thức trước.");
    return;
  }

  let input = document.getElementById(id).value.trim();
  if (!input) {
    log("Hãy nhập code để test");
    return;
  }
  try {
    const result = eval(input);
    console.log(result);
    log(`Kết quả ${testName}:`);
    log(result);
    log("\n");
  } catch (e) {
    log("Lỗi khi thực thi mã: " + e.message);
  }
};

// Xử lý khi nhấn nút "Xem kết quả"
document.getElementById("runTest").addEventListener("click", () => {
  logClear();
  runTest("codeInput", "Test 1");
});
document.getElementById("runTest2").addEventListener("click", () => {
  logClear();
  runTest("codeInput2", "Test 2");
});
document.getElementById("runTest3").addEventListener("click", () => {
  logClear();
  runTest("codeInput3", "Test 3");
});

// ----------------------------------------------------------------
// ---- Button ------------------------------------------ E -------
// ----------------------------------------------------------------
