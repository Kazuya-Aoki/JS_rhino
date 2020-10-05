console.log("システム: 10進数表記で統一します\nシステム: 処理を開始します");
console.log("---------------------------------\n");

/* 整数リテラル
   countも倍精度小数の形式で記憶*/
let count = 10;
console.log("10進数表記での10: "+count);

// 16進数、10進数で255
const BLUE = 0x0000ff;
console.log("16進数表記でのFF: "+BLUE);

// 8進数、10進数で18
const umask = 0o0022;
console.log("8進数表記での22: "+umask);

const roomTemp = 23.5;
console.log("現在の室温(プログラム内であらかじめ設定されている): "+roomTemp);

// 指数表記、3.0×10^8を表す
const c0 = 3.0e8;
console.log("真空中の光速(時速km/h): 約" +c0);

const e = -1.6e-19;
console.log("電気素量 :"+e);

console.log("\n---------------------------------");
console.log("システム: 処理は終了しました");
