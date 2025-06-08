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
    explanation:
      "Thay thế các phần tử trong mảng bằng một giá trị cố định, từ chỉ số bắt đầu đến trước chỉ số kết thúc.",
    test1: "[1, 2, 3].fill2(0); // [0, 0, 0]",
    test2: "[1, 2, 3].fill2(5, 1); // [1, 5, 5]",
    test3: "[1, 2, 3, 4].fill2(9, 1, 3); // [1, 9, 9, 4]",
  },
  find: {
    explanation:
      "Trả về giá trị đầu tiên trong mảng thỏa điều kiện của hàm kiểm tra (callback). Nếu không tìm thấy, trả về undefined.",
    test1: "[5, 12, 8, 130, 44].find2(x => x > 10);               // 12",
    test2: "[10, 20, 30].find2((num) => num % 3 === 0);           // 30",
    test3: "[1, 2, 3].find2(x => x > 5);                          // undefined",
  },
  findIndex: {
    explanation:
      "Trả về chỉ số (index) của phần tử đầu tiên thỏa mãn điều kiện kiểm tra trong hàm callback. Nếu không có phần tử nào thỏa điều kiện, trả về -1.",
    test1: "[1, 2, 3].findIndex2(x => x > 1) // → 1",
    test2: "[4, 6, 9, 11].findIndex2(x => x % 3 === 0) // → 1",
    test3: "[10, 20, 30].findIndex2(x => x > 100) // → -1",
  },
  findLast: {
    explanation:
      "duyệt mảng từ phải sang trái (ngược lại với find) và trả về phần tử cuối cùng thỏa điều kiện do callback cung cấp. Nếu không có phần tử nào thỏa mãn, trả về undefined.",
    test1: "[5, 12, 8, 130, 44].findLast2(x => x > 10) // → 44",
    test2: "[1, 2, 3, 4, 5].findLast2(x => x % 2 === 0) // → 4",
    test3: "['a', 'b', 'c'].findLast2(x => x === 'z') // → undefined",
  },
  findLastIndex: {
    explanation:
      "Duyệt mảng từ phải sang trái và trả về chỉ số (index) của phần tử cuối cùng thoả mãn điều kiện do hàm callback cung cấp. Nếu không có phần tử nào thoả mãn, phương thức sẽ trả về -1.",
    test1: "[5, 12, 8, 130, 44].findLastIndex2(x => x > 10) // → 4",
    test2: "[1, 2, 3, 4, 5, 6].findLastIndex2(x => x % 3 === 0) // → 5",
    test3: "[1, 3, 5].findLastIndex2(x => x % 2 === 0) // → -1",
  },
  lastIndexOf: {
    explanation:
      "Trả về chỉ số cuối cùng mà phần tử được tìm thấy trong mảng. Nếu không tìm thấy, trả về -1.",
    test1: "[1, 2, 3, 2].lastIndexOf2(2) // → 3",
    test2: "[1, 2, 3, 2].lastIndexOf2(2, 2) // → 1",
    test3: "[1, 2, 3].lastIndexOf2(4) // → -1",
  },
  pop: {
    explanation:
      "Xóa phần tử cuối cùng và trả về phần tử đó.Nếu mảng rỗng thì trả về undefined.",
    test1: "[1, 2, 3].pop2() // → 3",
    test2: "[].pop2() // → undefined",
    test3: "[100].pop2() // → 100",
  },
  push: {
    explanation: "Thêm phần tử vào cuối mảng, và trả về độ dài mới của mảng.",
    test1: "[1, 2].push2(3) // → 3",
    test2: "[].push2('a', 'b') // → 2",
    test3: "[100].push2(200, 300, 400) // → 4",
  },
  reverse: {
    explanation: "Đảo ngược mảng và trả về chính nó.",
    test1: "[1, 2, 3].reverse2() // → [3, 2, 1]",
    test2: "[].reverse2() // → []",
    test3: "[true, false].reverse2() // → [false, true]",
  },
  shift: {
    explanation:
      "Xóa phần tử đầu tiên và trả về phần tử đó. Mảng gốc sẽ bị thay đổi (giảm độ dài và các phần tử sẽ dồn về đầu).",
    test1: "[1, 2, 3].shift2() // → 1",
    test2: "[].shift2() // → undefined",
    test3: "['a', 'b', 'c'].shift2() // → 'a'",
  },
  unshift: {
    explanation:
      "Thêm phần tử vào đầu mảng và trả về độ dài mảng. Mảng gốc sẽ bị thay đổi (tăng độ dài).",
    test1: "[1, 2, 3].unshift2(0) // → 4",
    test2: "[].unshift2('a', 'b') // → 2",
    test3: "[5].unshift2(1, 2, 3) // → 4",
  },
  slice: {
    explanation:
      "Trích xuất một phần mảng (không thay đổi mảng gốc). Được chọn từ 2 tham số start đến end (không bao gồm end)",
    test1: "[1, 2, 3, 4, 5].slice2(1, 3) // → [2, 3]",
    test2: "[1, 2, 3, 4, 5].slice2(-3, -1) // → [3, 4]",
    test3: "[1, 2, 3, 4, 5].slice2(2) // → [3, 4, 5]",
  },
  sort: {
    explanation: "Sắp xếp mảng theo thứ tự Unicode.",
    test1: "[3, 1, 4, 1, 5].sort2() // → [1, 1, 3, 4, 5]",
    test2:
      "['banana', 'apple', 'cherry'].sort2() // → ['apple', 'banana', 'cherry']",
    test3: "[80, 9, 100].sort2() // → [100, 80, 9] ",
  },
  splice: {
    explanation:
      "Xóa, thêm phần tử vào mảng. Trả về một mảng các phần tử đã bị xóa. Chưa code.",
    test1: "[1, 2, 3, 4, 5].splice2(2, 2) // → [3, 4]",
    test2:
      "[1, 2, 3].splice2(1, 0, 'a') // → [] và mảng gốc thành [1, 'a', 2, 3]",
    test3:
      "[1, 2, 3, 4].splice2(-2, 1, 99, 100) // → [3], mảng gốc thành [1, 2, 99, 100, 4]",
  },
  includes: {
    explanation: "Kiểm tra phần tử có trong mảng hay không. Chưa code.",
    test1: "[1, 2, 3].includes(2) // → true",
    test2: " ",
    test3: " ",
  },
  indexOf: {
    explanation:
      "Trả về chỉ số đầu tiên mà phần tử được tìm thấy trong mảng. Nếu không tìm thấy, trả về -1.",
    test1: "[1, 2, 3, 2].indexOf2(2) // → 1",
    test2: "[1, 2, 3, 2].indexOf2(2, 2) // Phần tử index 2 trở đi → 3",
    test3: "[1, 2, 3].indexOf2(4) // → -1",
  },
  join: {
    explanation: "Nối các phần tử thành chuỗi. Chưa code.",
    test1: "[1, 2, 3].join('-') // → '1-2-3'",
    test2: " ",
    test3: " ",
  },
  keys: {
    explanation: "Trả về iterator của chỉ số. Chưa code.",
    test1: "Array.from([10, 20].keys()) // → [0, 1]",
    test2: " ",
    test3: " ",
  },
  entries: {
    explanation: "Trả về iterator chứa cặp [index, value]. Chưa code.",
    test1: "Array.from(['a', 'b'].entries()) // → [[0,'a'],[1,'b']]",
    test2: " ",
    test3: " ",
  },
  values: {
    explanation: "Trả về iterator các giá trị của mảng. Chưa code.",
    test1: "Array.from(['a', 'b'].values()) // → ['a','b']",
    test2: " ",
    test3: " ",
  },
  forEach: {
    explanation: "Lặp qua từng phần tử mảng. Chưa code.",
    test1: "[1, 2, 3].forEach(x => console.log(x))",
    test2: " ",
    test3: " ",
  },
  filter: {
    explanation: "Lọc phần tử thỏa điều kiện. Chưa code.",
    test1: "[1, 2, 3, 4].filter(x => x % 2 === 0) // → [2, 4]",
    test2: " ",
    test3: " ",
  },
  flat: {
    explanation: "Làm phẳng mảng lồng nhau. Chưa code.",
    test1: "[1, [2, [3]]].flat(2) // → [1, 2, 3]",
    test2: " ",
    test3: " ",
  },
  flatMap: {
    explanation: "Map và làm phẳng luôn một cấp độ. Chưa code.",
    test1: "[1, 2].flatMap(x => [x, x * 2]) // → [1, 2, 2, 4]",
    test2: " ",
    test3: " ",
  },
  map: {
    explanation: "Tạo mảng mới qua một hàm xử lý từng phần tử. Chưa code.",
    test1: "[1, 2, 3].map(x => x * 2) // → [2, 4, 6]",
    test2: "[1, 2, 3].map(x => x * 3) // → [3, 6, 9]",
    test3: "[1, 2, 3].map(x => x * 4) // → [4, 8, 12]",
  },
  every: {
    explanation: "Kiểm tra tất cả phần tử thỏa điều kiện. Chưa code.",
    test1: "[1, 2, 3].every(x => x > 0) // → true",
    test2: " ",
    test3: " ",
  },
  some: {
    explanation: "Kiểm tra có ít nhất một phần tử thỏa điều kiện. Chưa code.",
    test1: "[1, 2, 3].some(x => x > 2) // → true",
    test2: " ",
    test3: " ",
  },
  reduce: {
    explanation: "Tính toán tích lũy qua các phần tử. Chưa code.",
    test1: "[1, 2, 3].reduce((a, b) => a + b, 0) // → 6",
    test2: " ",
    test3: " ",
  },
  reduceRight: {
    explanation: "Như reduce nhưng từ phải sang trái. Chưa code.",
    test1: "[1, 2, 3].reduceRight((a, b) => a - b) // → 0",
    test2: " ",
    test3: " ",
  },
  toReversed: {
    explanation: "Tạo mảng mới đã đảo ngược. Chưa code.",
    test1: "[1, 2, 3].toReversed() // → [3, 2, 1]",
    test2: " ",
    test3: " ",
  },
  toSorted: {
    explanation: "Tạo mảng mới đã sắp xếp. Chưa code.",
    test1: "[3, 1, 2].toSorted() // → [1, 2, 3]",
    test2: " ",
    test3: " ",
  },
  toSpliced: {
    explanation: "Tạo mảng mới sau khi splice. Chưa code.",
    test1: "[1, 2, 3].toSpliced(1, 1) // → [1, 3]",
    test2: " ",
    test3: " ",
  },
  with: {
    explanation: "Tạo mảng mới với phần tử bị thay thế. Chưa code.",
    test1: "[1, 2, 3].with(1, 99) // → [1, 99, 3]",
    test2: " ",
    test3: " ",
  },
  toLocaleString: {
    explanation: "Biến mảng thành chuỗi định dạng địa phương. Chưa code.",
    test1: "[123456.789].toLocaleString() // → tuỳ theo locale",
    test2: " ",
    test3: " ",
  },
  toString: {
    explanation: "Chuyển mảng thành chuỗi. Chưa code.",
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
        <p>${arrayMethodsInfo[method].explanation}</p>
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
Array.prototype.fill2 = function (value, start = 0, end = this.length) {
  const len = this.length;
  let s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  let e = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  for (let i = s; i < e; i++) {
    this[i] = value;
  }
  return this;
};
Array.prototype.find2 = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
Array.prototype.findIndex2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
Array.prototype.findLast2 = function (callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
Array.prototype.findLastIndex2 = function (callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
Array.prototype.lastIndexOf2 = function (
  searchElement,
  fromIndex = this.length - 1
) {
  const len = this.length;
  let start = fromIndex < 0 ? len + fromIndex : Math.min(fromIndex, len - 1);

  for (let i = start; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
Array.prototype.pop2 = function () {
  if (this.length === 0) return undefined;
  const last = this[this.length - 1];
  this.length -= 1;
  log("New Array:");
  log(this);
  log("\n");
  return last;
};
Array.prototype.push2 = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  log("New Array:");
  log(this);
  log("\n");
  return this.length;
};
Array.prototype.reverse2 = function () {
  let left = 0;
  let right = this.length - 1;
  while (left < right) {
    const temp = this[left];
    this[left] = this[right];
    this[right] = temp;
    left++;
    right--;
  }
  return this;
};
Array.prototype.shift2 = function () {
  if (this.length === 0) return undefined;

  const first = this[0];
  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  this.length -= 1;
  log("New Array:");
  log(this);
  log("\n");
  return first;
};
Array.prototype.unshift2 = function () {
  const items = Array.from(arguments);
  const originalLength = this.length;

  for (let i = originalLength - 1; i >= 0; i--) {
    this[i + items.length] = this[i];
  }

  for (let i = 0; i < items.length; i++) {
    this[i] = items[i];
  }

  log("New Array:");
  log(this);
  log("\n");
  return this.length;
};
Array.prototype.slice2 = function (start = 0, end = this.length) {
  const result = [];
  const len = this.length;

  let s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  let e = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  for (let i = s; i < e; i++) {
    result.push(this[i]);
  }

  return result;
};
Array.prototype.sort2 = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (String(this[i]) > String(this[j])) {
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};
Array.prototype.splice2 = function () {};

Array.prototype.includes2 = function () {};
Array.prototype.indexOf2 = function (searchElement, fromIndex = 0) {
  const len = this.length;
  let start = fromIndex < 0 ? Math.max(len + fromIndex, 0) : fromIndex;

  for (let i = start; i < len; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

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
Array.prototype.reduce2 = function (callback, initValue) {
  let length = this.length;
  let accumulator;
  let startIndex;

  if (arguments.length >= 2) {
    accumulator = initValue;
    startIndex = 0;
  } else {
    for (let i = 0; i < length; i++) {
      if (i in this) {
        accumulator = this[i];
        startIndex = i + 1;
        break;
      }
    }
  }

  for (let i = startIndex; i < length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};
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
