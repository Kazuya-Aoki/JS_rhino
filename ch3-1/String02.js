console.log("テンプレートリテラル, 複数行の文字列の扱い\nシステム: 処理を開始します");
console.log("---------------------------------\n");

let JapanTemp = 20.7;
const msg1 = `現在の気温は${JapanTemp}℃です`;
const msg2 = `気温の変数: \${JapanTemp}`;
console.log(`${msg1}
${msg2}`);

const multiline1 = "1行目: I am super very 'PIEN'.";
const multiline2 = "2行目: PIYAMARU ha jirai.";


console.log("\n---------------------------------");
console.log("システム: 処理は終了しました");
