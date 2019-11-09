// 1. 條件運算子練習
// 請將下列程式，以條件運算子改寫。
if (10 > 5) {
    console.log(true);
} else {
    console.log(false);
}
// ■ 教材請參見於流程控制 PPT（頁數 9-13 ）
// I. 答案
(10 > 5) ? console.log(true) : console.log(false);

// 2. if-else 情境題練習
// 有一天，羊媽媽出門要去買菜，出門前告訴了小羊們，要把門鎖好，媽媽敲門的『摳摳聲』
// 要是奇數，才能幫媽媽開門唷！現在請大家幫忙判斷是否應該開門，保護小羊們不被大野狼
// 吃掉。
// 備註：先以 if-else 寫法解決問題，再將結果改寫成條件運算子的方法。
// ■ 教材請參見於流程控制 PPT（頁數 9-13 ）
// I. 提示：以取餘數(knock%2)方式判斷敲門聲為奇數或是偶數。
// II. 答案
// 1.) if-else
var knock = Math.floor(Math.random() * 31)
if (!(knock % 2))
    console.log("Open door");
else
    console.log("FUCK OUT");
// 2.) 條件運算子改寫
(knock % 2 == 0) ? console.log("Open door") : console.log("FUCK OUT");

// 3. if-else if-else 練習
// 請完成條件式，當 a>10 印出”big”，當 a<5 印出”small”，其它的印出”middle”。
// ■ 教材請參見於流程控制 PPT（頁數 20-24 ）
// I. 提示
// II. 答案
var a = Math.floor(Math.random() * 20)
if (a > 10)
    console.log("big");
else if (a < 5)
    console.log("small");
else
    console.log("middle");