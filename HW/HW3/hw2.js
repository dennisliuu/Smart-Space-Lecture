// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 1
// 教育部推動大學程式設計
// 計畫課程模組
// Lab: Function 函式
//  請依問題與提示作答案並貼在指定區域內
//  難度：1~3 顆星，3 顆是最難
// 題目 1： 函式定義 ★
// (a) 請以函數宣告(Function declaration) 的方式定義一函式，名稱為
// computeCubeVolume。此函式有一參數：立方體邊長 length，功能為計算
// 並回傳立方體的「體積」。請將宣告的程式碼貼在下方空格。
// (提示：利用 math.pow()函式來成此功能。)
// 完成後請利用下列程式來測試您的函式：
// let result = computeCubeVolume(5);
// console.log(result); //應輸出 125
// 答：
var computeCubeVolume = num => {
    return num * num * num
}
let result = computeCubeVolume(5);
console.log(result); //應輸出 125
// (b) 請變數指派的方法定義一個函式，變數名稱為 computeCubeSurfaceArea。
// 此函式有一參數：立方體邊長 length，功能為計算並回傳立方體的「表面
// 積」。請將宣告的程式碼貼在下方空格。
// 完成後請利用下列程式來測試您的函式：
// let result2 = computeCubeSurfaceArea(5);
// console.log(result2); //應輸出 150
var computeCubeSurfaceArea = num => {
    return num * num * 6
}
let result2 = computeCubeSurfaceArea(5);
console.log(result2); //應輸出 150
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 2
// (c) 我們寫作了一個通用的 compute 函式，其功能為批次計算數個立方體的體
// 積或表面積。函式 compute 定義如下：
// function compute(lengths, operation) {
//  return lengths.map(operation);
// //對 lengths 的每個陣列元素，套用 operation 函式
// }
// 其中， lengths 是一個陣列，代表一群邊長；operation 代表計算體積或表
// 面積的函式；compute 函式會回傳一個陣列，裝載相對應的體積或表面
// 積。
// (d) 請依照提示呼叫 compute 函式計算五個立方體的體積與表面積，五個立方
// 體的邊長分別為 1、2、3、4、5 個單位。函式回傳的結果分別指派給變數
// resultVolumes 和 resultSurfaceAreas，然後印出至 console。請將您的程式碼
// 貼在下方空格。
// (提示：……的部份，即 compute 的第二個參數，請填入最簡化的 Lambda 函
// 式)
// let resultVolumes = compute([1,2,3,4,5], ……); //……是一個用
// 來計算「體積」的 Lambda 函式
// let resultSurfaceAreas = compute([1,2,3,4,5], ……); //……是一
// 個用來計算「表面積」的 Lambda 函式
// 答：
function compute(lengths, operation) {
    return lengths.map(operation);
    //對 lengths 的每個陣列元素，套用 operation 函式
}
let resultVolumes = compute([1, 2, 3, 4, 5], x => x * x * x); //……是一個用
console.log(resultVolumes);
// 答：
let resultSurfaceAreas = compute([1, 2, 3, 4, 5], x => x * x * 6);
console.log(resultSurfaceAreas);
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 3
// 題目 2：函式參數個數不同時的匹配 ★
// (a) 質數的定義為：除了自身和 1 以外，沒有其它質因數的自然數。以下為一段
// 判斷輸入參數是否為質數的函式，透過 for 迴圈檢驗輸入之參數是否有 1 和
// 自身以外的因數，若有則非質數。
function isPrime(number) {
    if (!number) throw `wrong input： ${number}`;
    if (number <= 1) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
// (b) 分別 1. 以自己的電話號碼當參數、2. 以任意三個數當參數、3. 不放參數，
// 呼叫上述 isPrime 函式。請在下方空格貼上 console 輸出結果的截圖，並說
// 明發生什麼事？你覺得為什麼？
// 答：
console.log(isPrime(0921196446)); // false; 阿就不是
console.log(isPrime(1,2,3)); // false; 第一個數不是阿
console.log(isPrime()); // wrong input： undefined; 阿就沒丟東西係勒幹逆
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 4
// (c) 承題目 1-(c)，試試看，呼叫 compute 時，若只傳第一個參數會如何？此時
// compute 函式中收到的 operation 值為何？
//  提示： console.log(compute([1,2,3,4,5]));
// 答：
console.log(compute([1,2,3,4,5])); // TypeError: undefined is not a function; 阿沒丟東西係勒幹逆
// (d) 承上，修改題目 1-(c)的 compute 函式定義，使得若叫用者只傳入一個參數
// (i.e. 只傳入 lengths 而未傳入 Lambda)時，compute 只會回傳原來的 sizes。
//  提示 1： 偵測是否只傳入一個參數，請參考問題 2-(a)的寫法。
//  提示 2： console.log(compute([1, 2, 3, 4, 5])); 應顯示[1,2,3,4,5]
// 答：
function compute(lengths, operation) {
    if (!operation) throw lengths;
    else
        return lengths.map(operation);
    //對 lengths 的每個陣列元素，套用 operation 函式
}
console.log(compute([1,2,3,4,5]));
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 5
// 題目 3：map 與 forEach 方法 ★★
// (a) 向日葵班基礎程式設計的期中考成績不理想，老師決定將每個人的成績先
// 開根號再乘以十來調整成績：
//  宣告一個陣列並命名為 scores，依序裝載以下十位同學的成績： 20、
// 54、36、66、60、69、46、87、78、18。
//  定義匿名函式對傳入之參數(score)進行運算：先開根號、再乘以十、
// 回傳運算結果，並將此函式指派給變數 adjustScores
//  搭配 map 逐一處理陣列 scores 的元素，調整後的成績指派給陣列
// newScores。
//  說明：將 scores 印出至 console，可以發現 map 不會修改呼叫它的原
// 始陣列，而是回傳一個新的陣列。
// 請將上述三個步驟之程式碼列在下面空格中。
// 答：
// (b) 請問每位學生平均加了幾分？將計算結果印出至 console。
//  定義一個函式，以調分前和調分後的成績矩陣當作函式的參數傳入（參數
// 請自行命名），回傳平均加了幾分。
//  使用 IIFE 的方式，定義完立即呼叫上述函式，計算向日葵班平均每位學生
// 加了幾分，將計算結果印出至 console。
//  提示：以下是一個 IIFE 的範例：
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 6
// (function (i, j) {
//  return i + j;
// } (3, 2)); //回傳值為 5
// 請將上述兩步驟的程式碼和 console 的輸出結果貼在下面的空格中。
// 答：
// (c) 承接 3-(a)小題，這次使用 forEach 來調整十位同學的成績。
//  說明：將 scores 印出至 console，可以發現 forEach 會改變呼叫它的原始陣
// 列內容。
// 請將 forEach 的程式碼列在下面空格中。
// 答：
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 7
// 題目 4：配合迴圈印出圖形 ★★
// 圖 1 金字塔
// 我們可以利用下方的程式碼在 console 印出以*符號堆疊的金字塔，如圖 1 所
// 示。
// for(let i=1; i<=3; i++){ //第一層迴圈控制行數
//  let triangle = "";
//  for(let space=i; space<3; space++){ //space 表示空格數
//  triangle+=" ";
//  }
//  for(let star=1; star<=2*i-1; star++){ //star 表示*數
//  triangle+="*";
//  }
//  console.log(triangle);
// }
// (a) 請將上述程式碼修改成函式 draw，透過輸的參數決定要畫的金字塔有幾
// 層。
// 請將 draw 函式列在下方空格中。
// 答：
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 8
// (b) 請呼叫 draw 函式，印出 2 層、3 層、5 層、7 層等四個金字塔。
// 將輸出結果截圖貼在下方空格。
// 答：
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 9
// 題目 5：綜合應用★★★
// 詞頻（term frequency，簡稱 TF）是指文本中詞彙出現的次數，我們透過文本中
// 詞頻較高的詞彙來判讀該文件的主題內容。但是有些詞彙頻繁地出現在各個文
// 本中，如虛詞、語助詞、代名詞等，我們稱之為停用詞（stop word），這些詞彙
// 往往無法突顯文本內容，因此在分析文本的過程中會略過此類詞彙。
// (a) 讀取文字檔，透過物件的 key 與 value 分別存放詞彙及該詞彙在文字檔中出
// 現的次數（詞頻）：
//  請在專案裡新增一個文字檔，命名為 text.txt，在 text.txt 中加入附件
// text.txt 的內容（原文取自國家地理雜誌的網站
// https://www.nationalgeographic.com，文章內容講述全球暖化的現象，text 文
// 字檔已經經過初步處理：刪除所有標點符號，並將所有字母轉換成小寫，
// 以利後續比對分析）：
//  提示：public 資料夾/按右鍵→ New/File→ 命名 text.txt
//  請在專案裡新增一個 js 檔，命名為 textAnalysis.js，引入 Node.js 的 fs
// module 來讀取檔案，請在 textAnalysis.js 中加入下列敘述
// let fs = require('fs');
// let fileName = 'text.txt'; //需要處理其它文檔，可以在這邊改檔名
// let input = fs.readFileSync(fileName, 'utf8'); //同步讀檔
//  請使用 split 函式、以空格作分隔符號，將字串 input 轉換成陣列，指派給
// 變數 wordsArray。
//  請呼叫函式 createWordsMap 計算 wordsArray 中的各詞彙出現的次數，並
// 指派給變數 myWordsMap。createWordsMap 函式定義如下：
//  說明：wordsMap 以詞彙為物件的 key，以出現次數為物件的 value。
// function createWordsMap(wordsArray){
//  let wordsMap ={}; //建立物件 wordsMaps
//  wordsArray.forEach(function(key){
//  if (wordsMap[key]) { //如果物件中有指定之屬性，物件方法
// hasOwnProperty()回傳 true，否則回傳 false
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 10
//  wordsMap[key]= wordsMap[key]+1; //建立物件成員，value 對
// 應 key 遞增
//  }
//  else{
//  wordsMap[key] = 1;
//  }
//  })
//  return wordsMap;
// }
// 請將呼叫函式 createWordsMap 的程式碼列在下方空格：
// 答：
// 將物件 myWordsMap 印出至 console，輸出之畫面如圖 2 所示，未按照任何邏
// 輯排列，使得計算結果不容易判讀。
// 圖 2 尚未排列詞頻列表(僅部分)
// 我們定義函式 sortByCount，讓 myWordsMap 按 value 值，也就是詞彙出現
// 的次數，由高而低排列。定義 sortByCount 函式後呼叫之，並設值給變數
// finalResult，程式敘述如下：
// function sortByCount(wordsMap){
//  let finalWordsArray = [];
//  finalWordsArray = Object.keys(wordsMap).map((key)=>{ //使用
// Object.keys 取得物件的 key 值，組成陣列後回傳
//  return {
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 11
//  word: key,
//  count: wordsMap[key]
//  };
//  });
//  finalWordsArray.sort(function (a, b) { //使用「比較函式」排列數
// 值
//  return b.count - a.count; //降冪排列
//  });
//  return finalWordsArray;
// }
// let finalResult = sortByCount(myWordsMap);
// (b) 印出符合限制條件的辭彙至 console，輸出結果應如圖 3。
// Figure 3 題目 5-(b)的輸出畫面
//  定義函式 isASemanticWord，判斷傳入的辭彙是否非停用字，若非停用
// 字函釋回傳 true，否則回傳 false。
//  提示 1：利用 indexOf 可以找到指定的變數在陣列中的位置，若該
// 變數不存在，則回傳-1
//  提示 2：停用字陣列 stopWord 如下所示：
// let stopWord =[
// 'a',"able","about","across","after","all","almost","also","am","among","an","and","any",
// "are","as","at","be","because","been","but","by","can","cannot","could","did","do","doe
// s","either","else","ever","every","for","from","get","gets","got","had","has","have","he",
// "hence","her","hers","him","his","how","however","i","if","in","into","is","it","its","just",
// "least","let","lets","likely","made","make","makes","may","me","might","most","must","
// 教育部推動大學程式設計教學計畫 Web 領域教學研發推廣分項 12
// my","neither","no","nor","not","of","off","often","on","one","only","or","other","our","
// own","rather","said","say","says","shall","she","should","since","so","some","somewher
// e","take","taken","takes","than","that","the","their","them","then","there","these","the
// y","this","tis","to","too","took","twas","two","us","want","wants","was","we","were","w
// hat","when","where","which","while","who","whom","why","will","with","would","yet",
// "you","your",""];
//  使用 map 篩選出 finalResult 裡「非停用字」且「詞頻大於 2」的辭
// 彙，印出至 console。(注意：請用最簡化的 Lambda 函式表示)
// 請將上述步驟之程式碼列在下方空格。
// 答：