console.log("エスケープ及び特殊文字を示す\nシステム: 処理を開始します");
console.log("---------------------------------\n");

console.log("シングルクオーテーションとダブルクオーテーションを使う例");
const dialog = 'Sam looked up, and said "Hello, old friend!", as Max walked in.\n';
const imperative = "Don't do that!";
console.log(dialog+imperative);

console.log("エスケープする例");
const dialog1 = "He looked up and said \"Don't do that!\" to Max.";
const dialog2 = 'He looked up and said "Don\'t do that!" to Max';
console.log(dialog1);
console.log("定数dialog1と定数dialog2の文字列が等しいか判定する\n結果: "+(dialog1 == dialog2));

console.log("\n---------------------------------");
console.log("システム: 処理は終了しました");
