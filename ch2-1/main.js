$(document).ready(function() {
    'use script';
    console.log("jQueryは既にロードされているはず");
    console.log("main.jsをロードした");

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    //ここから

    let cir;
    for(let x = 25; x < 400; x += 50){
        for(let y = 25; y < 400; y += 50){
            cir = Shape.Circle(x, y, 20);
            /*
                cirという名の関数に円の外形の情報を代入
                前２つが中心のx, y座標、残りが円の半径
            */
            cir.fillColor = 'green';
                //円の色指定
        }
    }
    //ここまで描画に関する情報を入力

    paper.view.drow();
});
