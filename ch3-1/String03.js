console.log("文字列としての数字･論理値およびシンボル\nシステム: 処理を開始します");
console.log("-------------------------------------------------\n");

const result1 = 1+"10";
const result2 = 1*"10";
console.log(`1+"10"= ${result1}`+"\n"+`1＊"10"= ${result2}`);
console.log("加算の場合、クォーテーションが優先される。乗算は数字が優先される。\n");

let heat = true;
let cold = false;
console.log(`今の時期は暑い: ${heat}`+"\n"+`今の時期は寒い: ${cold}`+"\n");

const RED = Symbol("トマト･血液の色");
const BLUE = Symbol("海･空の色");
const BLACK = Symbol();
console.log(RED);
console.log(BLACK);
const hyk1 = (RED === BLUE);
const hyk2 = (RED === BLACK);
console.log(hyk1);
console.log(hyk2);

console.log("\n-------------------------------------------------");
console.log("システム: 処理は終了しました");
