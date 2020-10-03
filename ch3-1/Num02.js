console.log("システム: 10進数表記で統一します\nシステム: 処理を開始します");
console.log("---------------------------------\n");

/* 整数リテラル
   countも倍精度小数の形式で記憶*/
let count = 10;
console.log("10進数表記での10: "+count);

// 16進数、10進数で255
const BLUE = 0x0000ff;
console.log("16進数表記でのFF: "+BLUE);

const umask = 0o0022;
console.log("8進数表記での22: "+umask);

console.log("\n---------------------------------");
console.log("システム: 処理は終了しました");
