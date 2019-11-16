// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 1
// 教育部推動大學程式設計
// 計畫課程模組
// Lab: Array 陣列
//  預計完成時間：80 分鐘 (20/30/30)
//  請依問題與提示作答案並貼在指定區域內
//  難度：1~3 顆星，3 顆是最難
// 題目 1: 陣列題目基本練習 ★
// 表 1 某班學期成績表
// 學號 學期成績
// 100462005 89
// 100462008 100
// 100462009 87
// (a) 請根據表 1 資料宣告兩個變數，其名稱分別為 studentID 和 scores。將這二個變
// 數初始化為陣列(Array)，studentID 依序裝載表 1 中的三個學號值；scores 依序裝載
// 表 1 中的三個學期成績。
// 請將宣告的程式碼列在下面空格中。
// 答：
var studentID = [100462005, 100462008, 100462009]
var scores = [89, 100, 87]
// (b) 將學號對應學期成績透過 for 迴圈逐一印出至 console，顯示執行後的結果應如
// 圖 1 所示。
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 2
// 圖 1 題目 1-(b)螢幕輸出畫面
// 請將 for 迴圈的程式碼列在下面空格中。
// 答：
for (let i = 0; i < studentID.length; i++) {
    console.log(`學號 ${studentID[i]}同學的學期成績為 ${scores[i]}`);
}
// (c) 老師發現助教們登記成績時漏掉學號 100462006、100462007 兩位同學的資料，
// 他們的成績分別是 92 和 74，請利用 splice 將這兩位同學的學號、成績資料分別插入
// 陣列 studentID 和 score，需依照學號排序（100462006、100462007 兩筆資料，應插
// 入在 100462005 和 100462008 兩位同學之間）。
// 請將(c)步驟的程式碼列在下面空格中。
//  Tips: splice 可以刪除既有或插入新元素
// 答：
studentID.splice(1, 0, 100462006)
studentID.splice(2, 0, 100462007)
scores.splice(1, 0, 92)
scores.splice(2, 0, 74)
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 3
// 題目 2: 陣列的方法應用 ★★
// 以下為某知名兒歌的四句歌詞：
// Row row row your boat
// Gently down the stream
// Merrily merrily merrily merrily
// Life is but a dream
// (a) 請宣告一個命名為 lyrics 的陣列，設定上述歌詞裡每個單字都是一個陣列元素。
// 請將上面(a)的程式碼列在下面空格中。
// 答：
var lyrics = `Row row row your boat Gently down the stream Merrily merrily merrily merrily Life is but a dream`.split(" ")
// (b) 用陣列方法 indexOf 和 lastindexOf 印出 “merrily” 在陣列 lyrics 中第一次出現
// 和最後一次出現的索引值，輸出結果應如圖 2 所示。
// 圖 2 題目 2-(b) 螢幕輸出結果
// 請將上面(b)步驟的程式碼列在下面空格中。
// 答：
console.log(`${lyrics[10]}第一次出現在位置${lyrics.indexOf("merrily")}`);
console.log(`merrily最後一次出現在位置${lyrics.lastIndexOf("merrily")}`);
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 4
// (c) 宣告一個新的陣列 lyrics2，使用 lyrics 的 slice 方法，從原陣列中取出以下五個元
// 素 ‘Life’, ‘is’, ‘but’, ‘a’, ‘dream’ 指派給 lyrics2。
// (d) 善用教材中教過的陣列方法（如：slice, splice, push, pop, join）進行下列動作：
//  移除陣列 lyrics2 裡的元素‘but’
//  刪除 arr 的最後一個元素
//  在 arr 陣列最後附加新的元素‘nightmare’
//  印出 Life~is~a~nightmare
// 請將上面(c)、(d)二步驟的程式碼列在下面空格中。
//  Tips: 請依序使用方法 slice→ splice→ pop→ push→ join
// 答：
lyrics2 = lyrics.slice(13, 18)
lyrics2.splice(2, 1)
lyrics2.pop()
lyrics2.push("nightmare")
lyrics2 = lyrics2.join("~")
console.log(lyrics2);
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 5
// 題目 3: 整合應用 (二維陣列) ★★★
// 說明：二維陣列有兩個索引值，第一個 [ ] 用來指定存取那一個 row(即 row 索引)，
// 第二個 [ ] 是用來指定存取那一個 column(即 column 索引)。例如，假設陣列 arr 裝
// 載了表 2 中的成績值(不含表頭與平均值)，則 arr[0][0]的值為 90，而 arr[2][1]的值為
// 79。
// 表 2 某班計算計概論與基礎程式設計成績表
// 學號\科目 計算機概論 [0] 基礎程式設計 [1] 個人平均
// 100462005 [0] 90 84 87
// 100462006 [1] 88 86 87
// 100462007 [2] 70 79 75
// 100462008 [3] 65 72 69
// 100462009 [4] 86 99 93
// 全班平均 80 84 -
// 現在我們根據表 2 的資訊，宣告一個二維陣列 scores，同時裝載 5 位同學、2 個科目
// 的成績，另外，學號與科目資訊則以一維陣列 studentID 和 subject 裝載之，程式敘
// 述如下：
// let studentID =
// ['100462005','100462006','100462007','100462008','100462009'];
// let subjects =['計算機概論','基礎程式設計'];
// let scores=[[90,84],
//  [88,86],
//  [70,79],
//  [65,72],
//  [86,99]];
// (a) 請利用雙層 for 迴圈計算「個人平均成績」以及「單一科目全班平均成績」，請
// 符合下列條件：
//  並利用 Math.round() 將計算結果四捨五入
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 6
//  平均成績指派給一維陣列 individualAverage
//  單一科目全班平均成績平均成績指派給一維陣列 subjectAverage。
// 請將 for 迴圈的程式碼列在下面空格中。
//  Tips: 可以設定變數 i 為 row 索引、變數 j 為 column 索引。計算個人平均成
// 績，先設定第一重迴圈之 row 索引，然後變動第二重迴圈的 column 索引，程
// 式會依序處理 i=1、i=2、i=3、i=4、i=5 五位同學的成績；計算各科目的全班平
// 均成績，需先設定第一重迴圈的 column 索引，然後變動第二重回圈的 row 索
// 引，依序處理 j=0、j=1 兩科目的數據。
// 答：
var studentID =
    ['100462005', '100462006', '100462007', '100462008', '100462009'];
var subjects = ['計算機概論', '基礎程式設計'];
var scores = [[90, 84],
[88, 86],
[70, 79],
[65, 72],
[86, 99]];
var individualAverage = []
var subjectAverage = []
for (let i = 0; i < studentID.length; i++) {
    individualAverage.push(Math.round((scores[i][0] + scores[i][1]) / 2))
}
for (let i = 0; i < scores[0].length; i++) {
    let total = 0
    for (let j = 0; j < scores.length; j++) {
        total += scores[j][i]
    }
    subjectAverage.push(Math.round(total / scores.length))
}
// (b) 請將上面的計算結果印出至 console，輸出應如圖 3 所示。
// 圖 3 題目 3-(b) 螢幕輸出結果
// 請將(b)步驟的程式碼列在下面空格中。
// 答：
console.log(`學號\\科目\t計算機概論\t基礎程式設計\t個人平均`);
for (let i = 0; i < studentID.length; i++) {
    console.log(`${studentID[i]}\t    ${scores[i][0]}\t\t     ${scores[i][1]}\t\t   ${individualAverage[i]}`);
}
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 7
// (c) 將計算機概論和基礎程式設計兩科目的成績分別取出，分別指派給陣列 subject1
// 和 subject2（可以使用 for 迴圈、map 或是 forEach 等，不限定方法）。
// (d) 利用方法 Math.max()找出兩個科目中最高得分為多少，將結果印出來，輸出結
// 果應如圖 4 所示。
// 圖 4 題目 3-(d)螢幕輸出結果
//  Tips: 以陣列當作 Math.max()的參數，需要加上展開運算子(Spread Operator)，
// 它的意義是自動將所有元素從陣列中取出，並逐一代入 Math.max()做為參數。
// Spread operator 的符號是三個點(...)，例如找出陣列 arr 之最大值，其程式敘
// 述如下：Math.max(…arr)
// 請將上面(c)、(d)二步驟的程式碼列在下面空格中。
// 答：
var subject1 = scores.map(e => {return e[0]})
var subject2 = scores.map(e => {return e[1]})
console.log(`計算機概論全班最高分：${Math.max(...subject1)}分！`);
console.log(`基礎程式設計全班最高分：${Math.max(...subject2)}分！`);