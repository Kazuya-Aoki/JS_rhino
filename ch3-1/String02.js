console.log("テンプレートリテラル, 複数行の文字列の扱い\nシステム: 処理を開始します");
console.log("---------------------------------\n");

let JapanTemp = 20.7;
const msg1 = `現在の気温は${JapanTemp}℃です`;
const msg2 = `気温の変数: \${JapanTemp}`;
console.log(`${msg1}
${msg2}`);

const multiline1 = "\nI am super very 'PIEN'.";
const multiline2 = "PIYAMARU ha jirai.\n";
console.log(multiline1+"\n"+multiline2);

const mltLine = `1行目: 11/15 徳島→岡山 ホテルチェックイン ホテルでの限界作業
2行目: ホテルチェックアウト セリオ見学 岡山→徳島 めちゃんこ疲れてそう\n`;
console.log(mltLine);

const place = "阿南高専, レッドゾーン";
const OkmtHmi = `現在地 :`+
    `${place}\n`+
    "14:30から授業のため教室移動";
console.log(OkmtHmi);

console.log("\n---------------------------------");
console.log("システム: 処理は終了しました");
