// ===================================定義域＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
let $perzi = 1;
let $perzi2 = 0; 
let $perzi3 = 0; 
let ckecnber = 0;
let kuri = 0;
let on_atai = 0;
var randoms = [];
var randoms0 = [];

let AllUp = 0;
let AllHp = 0;
let AllTp = 0;
let AllUH = 0;
let AllUHT = 0;

let Up2 = 0;
let Up3 = 0;
let Up4 = 0;
let Up5 = 0;
let Up6 = 0;
let Up7 = 0;
let Up8 = 0;
let Up9 = 0;
let Up10 = 0;
let Up11 = 0;
let Up12 = 0;

let Hp2 = 0;
let Hp3 = 0;
let Hp4 = 0;
let Hp5 = 0;
let Hp6 = 0;
let Hp7 = 0;
let Hp8 = 0;
let Hp9 = 0;
let Hp10 = 0;
let Hp11 = 0;
let Hp12 = 0;

let Tp2 = 0;
let Tp3 = 0;
let Tp4 = 0;
let Tp5 = 0;
let Tp6 = 0;
let Tp7 = 0;
let Tp8 = 0;
let Tp9 = 0;
let Tp10 = 0;
let Tp11 = 0;
let Tp12 = 0;
// ============乱数域＝＝＝＝＝
/** 最小値と最大値 */
var min = 0, max = 14;
for(i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}
var min0 = 0, max0 = 14;
for(i = min0; i <= max0; i++){
  while(true){
    var tmp0 = intRandom(min, max);
    if(!randoms0.includes(tmp0)){
      randoms0.push(tmp0);
      break;
    }
  }
}
function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}
var ransu = Math.floor( Math.random() * 30 ) ;

// ============定義＝＝＝＝＝
// 問題番号
let $nannberID = document.getElementById("nannbar");
$nannberID.textContent = textpuul[$perzi].mondaiban;
// タイトル
const $titleID = document.getElementById("title");
$titleID.textContent = textpuul[$perzi].taitoruna;
// 回答box
let $textboxID = document.getElementById("textbox");
let $input1 = document.createElement("input");
$input1.setAttribute("type", "text");
$input1.setAttribute("maxlength", textpuul[$perzi].colsID);
$input1.setAttribute("id", textpuul[$perzi].textboxID);
$input1.setAttribute("size", "10");
$textboxID.appendChild($input1);
// 問題文
const $mondaiID = document.getElementById("mondai");
$mondaiID.textContent = textpuul[$perzi].monndaina;
// 回答ボタン
let botan0ID = document.getElementById("kaiyou0");
let botan0ID1 = document.createElement("input");
botan0ID1.setAttribute("type", "button");
botan0ID1.setAttribute("id", textpuul[$perzi].botanID0);
botan0ID1.setAttribute("value", textpuul[$perzi].botan0);
botan0ID.appendChild(botan0ID1);

let botan1ID = document.getElementById("kaiyou1");
let botan1ID1 = document.createElement("input");
botan1ID1.setAttribute("type", "button");
botan1ID1.setAttribute("id", textpuul[$perzi].botanID1);
botan1ID1.setAttribute("value", textpuul[$perzi].botan1);
botan1ID.appendChild(botan1ID1);

let botan2ID = document.getElementById("kaiyou2");
let botan2ID1 = document.createElement("input");
botan2ID1.setAttribute("type", "button");
botan2ID1.setAttribute("id", textpuul[$perzi].botanID2);
botan2ID1.setAttribute("value", textpuul[$perzi].botan2);
botan2ID.appendChild(botan2ID1);

let botan3ID = document.getElementById("kaiyou3");
let botan3ID1 = document.createElement("input");
botan3ID1.setAttribute("type", "button");
botan3ID1.setAttribute("id", textpuul[$perzi].botanID3);
botan3ID1.setAttribute("value", textpuul[$perzi].botan3);
botan3ID.appendChild(botan3ID1);

let botan4ID = document.getElementById("kaiyou4");
let botan4ID1 = document.createElement("input");
botan4ID1.setAttribute("type", "button");
botan4ID1.setAttribute("id", textpuul[$perzi].botanID4);
botan4ID1.setAttribute("value", textpuul[$perzi].botan4);
botan4ID.appendChild(botan4ID1);

botan0ID.style.display="none";
botan1ID.style.display="none";
botan2ID.style.display="none";
botan3ID.style.display="none";
botan4ID.style.display="none";
//次へボタン
let nexID = document.getElementById("sousinn");
let nexID1 = document.createElement("input");
nexID1.setAttribute("type", "button");
nexID1.setAttribute("id", textpuul[$perzi].nextID);
nexID1.setAttribute("value", textpuul[$perzi].next);
nexID.appendChild(nexID1);
// 確認ボタン
// let kak = document.getElementById("testbut");
// let kakID = document.createElement("input");
// kakID.setAttribute("type", "button");
// kakID.setAttribute("id", "aaaaa");
// kakID.setAttribute("value", "確認ボタン");
// kak.appendChild(kakID);

// let botannBB = document.getElementById("testbut3");
// let botannBB1 = document.createElement("input");
// botannBB1.setAttribute("type", "button");
// botannBB1.setAttribute("id", "botann33");
// botannBB1.setAttribute("value", "結果表示");
// botannBB.appendChild(botannBB1);
// const botannBB2 = document.getElementById("botann33");

// リセットボタン
// let rise = document.getElementById("testbut2");
// let riseID = document.createElement("input");
// riseID.setAttribute("type", "button");
// riseID.setAttribute("id", "bbbb");
// riseID.setAttribute("value", "リセット");
// rise.appendChild(riseID);

// 結果ボタン
let botannAA = document.getElementById("botannAA");
let botannAA1 = document.createElement("input");
botannAA1.setAttribute("type", "button");
botannAA1.setAttribute("id", "botannBB");
botannAA1.setAttribute("value", "結果表示");
botannAA.appendChild(botannAA1);
const botannAA2 = document.getElementById("botannBB");
botannAA.style.display="none";

// ============取得＝＝＝＝＝
let texbox = document.getElementById(textpuul[$perzi].textboxID);
const nextbotID = document.getElementById(textpuul[$perzi].nextID);
const botan0ID2 = document.getElementById(textpuul[$perzi].botanID0);
const botan1ID2 = document.getElementById(textpuul[$perzi].botanID1);
const botan2ID2 = document.getElementById(textpuul[$perzi].botanID2);
const botan3ID2 = document.getElementById(textpuul[$perzi].botanID3);
const botan4ID2 = document.getElementById(textpuul[$perzi].botanID4);
const keikoku = document.getElementById("keikoku");
const kakbotID = document.getElementById("aaaaa");
const risebotID = document.getElementById("bbbb");
// =============================実行=====================================
// IDから睡眠時間まで
nextbotID.addEventListener('click', () => {
    if( texbox.value === "" ){
        keikoku.innerText = "正しい値を入れてください"
    }else{ // チェック域
        if( $perzi === 0 ){
            kakuninbutjs0 = texbox.value;
        }
        // id
        if( $perzi === 1 ){
            kakuninbutjs1= texbox.value;
        }
        // 体温
        if( $perzi === 2 ){
            kakuninbutjs2 = texbox.value;
        }
        // 脈拍
        if( $perzi === 3 ){
            kakuninbutjs3 = texbox.value;
        }
        // 睡眠
        if( $perzi === 4 ){
            kakuninbutjs4 = texbox.value;
        }
        texbox.value = '';
        keikoku.innerText = "";
        $perzi++;
        
        $input1.setAttribute("id", textpuul[$perzi].textboxID);
        $input1.setAttribute("maxlength", textpuul[$perzi].colsID);
        botan0ID1.setAttribute("id", textpuul[$perzi].botanID0);
        botan0ID1.setAttribute("value", textpuul[$perzi].botan0);
        botan1ID1.setAttribute("id", textpuul[$perzi].botanID1);
        botan1ID1.setAttribute("value", textpuul[$perzi].botan1);
        botan2ID1.setAttribute("id", textpuul[$perzi].botanID2);
        botan2ID1.setAttribute("value", textpuul[$perzi].botan2);
        botan3ID1.setAttribute("id", textpuul[$perzi].botanID3);
        botan3ID1.setAttribute("value", textpuul[$perzi].botan3);
        botan4ID1.setAttribute("id", textpuul[$perzi].botanID4);
        botan4ID1.setAttribute("value", textpuul[$perzi].botan4);
        // 番号
        $nannberID.textContent = textpuul[$perzi].mondaiban;
        // タイトル
        $titleID.textContent = textpuul[$perzi].taitoruna;
        // 回答ボックス
        let numbox = textpuul[$perzi].textbox_on_off;
        if( numbox > 0 ) {
           $textboxID.style.display = "block";
        }else{
           $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = textpuul[$perzi].monndaina;

        // ボタンBOX
        let numbut0 = textpuul[$perzi].botan_on_off0;
        let numbut1 = textpuul[$perzi].botan_on_off1;
        let numbut2 = textpuul[$perzi].botan_on_off2;
        let numbut3 = textpuul[$perzi].botan_on_off3;
        let numbut4 = textpuul[$perzi].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
           botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }

        let numnex = textpuul[$perzi].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }

});   
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ボタン＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
botan0ID2.addEventListener('click', () => {
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan0ID2.value;
        if( ckec === textpuul[$perzi].botan0 ){
            ckecnber = 0
        }        
        Up5 = textpuul[$perzi].botanup[ckecnber];
        Hp5 = textpuul[$perzi].botanhp[ckecnber];
        Tp5 = textpuul[$perzi].botantp[ckecnber];
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan0ID2.value;
        if( ckec === hppuul[$perzi2].botan0 ){
            ckecnber = 0
        }             
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan0ID2.value;
        if( ckec === hppuul[$perzi2].botan0 ){
            ckecnber = 0
        }             
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        ckec = botan0ID2.value;
        if( ckec === hp2puul[ransu].botan0 ){
            ckecnber = 0
        }         
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan0ID2.value;
        if( ckec === utpuul[$perzi3].botan0 ){
            ckecnber = 0
        }          
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan0ID2.value;
        if( ckec === utpuul[$perzi3].botan0 ){
            ckecnber = 0
        }        
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan0ID2.value;
        if( ckec === utpuul[$perzi3].botan0 ){
            ckecnber = 0
        }        
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan0ID2.value;
        if( ckec === utpuul[$perzi3].botan0 ){
            ckecnber = 0
        }        
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        } 
    }
});

botan1ID2.addEventListener('click', () => {     
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan1ID2.value;  
        if( ckec === textpuul[$perzi].botan1 ){
            ckecnber = 1
        }             
        Up5 = Number(textpuul[$perzi].botanup[ckecnber]);
        Hp5 = Number(textpuul[$perzi].botanhp[ckecnber]);
        Tp5 = Number(textpuul[$perzi].botantp[ckecnber]);
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan1ID2.value; 
        if( ckec === hppuul[$perzi2].botan1 ){
            ckecnber = 1
        }            
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan1ID2.value;
        if( ckec === hppuul[$perzi2].botan1 ){
            ckecnber = 1
        }             
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        ckec = botan1ID2.value;
 
        if( ckec === hp2puul[ransu].botan1 ){
            ckecnber = 1
        }        
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan1ID2.value;     
        if( ckec === utpuul[$perzi3].botan1 ){
            ckecnber = 1
        }        
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan1ID2.value;
        if( ckec === utpuul[$perzi3].botan1 ){
            ckecnber = 1
        }        
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan1ID2.value;     
        if( ckec === utpuul[$perzi3].botan1 ){
            ckecnber = 1
        }        
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan1ID2.value;     
        if( ckec === utpuul[$perzi3].botan1 ){
            ckecnber = 1
        }        
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        }
    }
});

botan2ID2.addEventListener('click', () => {     
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan2ID2.value; 
        if( ckec === textpuul[$perzi].botan2 ){
            ckecnber = 2
        }             
        Up5 = textpuul[$perzi].botanup[ckecnber];
        Hp5 = textpuul[$perzi].botanhp[ckecnber];
        Tp5 = textpuul[$perzi].botantp[ckecnber];
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan2ID2.value;      
        if( ckec === hppuul[$perzi2].botan2 ){
            ckecnber = 2
        }              
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan2ID2.value;      
        if( ckec === hppuul[$perzi2].botan2 ){
            ckecnber = 2
        }        
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        ckec = botan2ID2.value; 
        if( ckec === hp2puul[ransu].botan2 ){
            ckecnber = 2
        }        
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan2ID2.value;
        if( ckec === utpuul[$perzi3].botanID2 ){
            ckecnber = 2
        }         
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan2ID2.value;
        if( ckec === utpuul[$perzi3].botan2 ){
            ckecnber = 2
        }         
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan2ID2.value;      
        if( ckec === utpuul[$perzi3].botan2 ){
            ckecnber = 2
        }           
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan2ID2.value;  
        if( ckec === utpuul[$perzi3].botan2 ){
            ckecnber = 2
        }          
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        } 
    } 
});

botan3ID2.addEventListener('click', () => {     
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan3ID2.value;     
        if( ckec === textpuul[$perzi].botan3 ){
            ckecnber = 3
        }     
        Up5 = textpuul[$perzi].botanup[ckecnber];
        Hp5 = textpuul[$perzi].botanhp[ckecnber];
        Tp5 = textpuul[$perzi].botantp[ckecnber];
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan3ID2.value;
        if( ckec === hppuul[$perzi2].botan3 ){
            ckecnber = 3
        }  
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan3ID2.value;  
        if( ckec === hppuul[$perzi2].botan3 ){
            ckecnber = 3
        }   
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        ckec = botan3ID2.value;  
        if( ckec === hp2puul[ransu].botan3 ){
            ckecnber = 3
        }
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan3ID2.value;      
        if( ckec === utpuul[$perzi3].botan3 ){
            ckecnber = 3
        }
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan3ID2.value;   
        if( ckec === utpuul[$perzi3].botan3 ){
            ckecnber = 3
        }
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan3ID2.value;   
        if( ckec === utpuul[$perzi3].botan3 ){
            ckecnber = 3
        }
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan3ID2.value;        
        if( ckec === utpuul[$perzi3].botan3 ){
            ckecnber = 3
        }
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        } 
    }
});

botan4ID2.addEventListener('click', () => {     
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan4ID2.value;
        if( ckec === textpuul[$perzi].botan4 ){
            ckecnber = 4
        }        
        Up5 = textpuul[$perzi].botanup[ckecnber];
        Hp5 = textpuul[$perzi].botanhp[ckecnber];
        Tp5 = textpuul[$perzi].botantp[ckecnber];
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan4ID2.value;
        if( ckec === hppuul[$perzi2].botan4 ){
            ckecnber = 4
        }        
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan4ID2.value;
        if( ckec === hppuul[$perzi2].botan4 ){
            ckecnber = 4
        }        
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        if( ckec === hp2puul[ransu].botan4 ){
            ckecnber = 4
        }     
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan4ID2.value;
        if( ckec === utpuul[$perzi3].botan4 ){
            ckecnber = 4
        }     
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan4ID2.value;
        if( ckec === utpuul[$perzi3].botan4 ){
            ckecnber = 4
        }     
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan4ID2.value;
        if( ckec === utpuul[$perzi3].botan4 ){
            ckecnber = 4
        }     
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan4ID2.value;
        if( ckec === utpuul[$perzi3].botan4 ){
            ckecnber = 4
        }     
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        } 
    }
});
// 結果ボタン
botannAA2.addEventListener('click', () => {
    if(kakuninbutjs2 >= 360 ){
        if(kakuninbutjs2 >= 370){
            Up2 = 0;
            Hp2 = 0;
            Tp2 = 1;
        }else{
            Up2 = 0;
            Hp2 = 0;
            Tp2 = 0;
        }
    }else{ 
        Up2 = 1;
        Hp2 = 0;
        Tp2 = 0;
    };
    
    if( kakuninbutjs3 >= 60){
        if(kakuninbutjs3 >= 90){
            Up3 = 0;
            Hp3 = 0;
            Tp3 = 1; 
        }else{
            Up3 = 0;
            Hp3 = 0;
            Tp3 = 0; 
        } 
    }else{
        Up3 = 0;
        Hp3 = 0;
        Tp3 = 1; 
    };     
    
    if( kakuninbutjs4 > 6 ){
        Up4 = 0;
        Hp4 = 0;
        Tp4 = 0; 
    }else{
        Up4 = 1;
        Hp4 = 0;
        Tp4 = 1;  
    };

    AllUp = Up2 + Up3 + Up4 + Up5 + Up6 + Up7 + Up8 + Up9 + Up10 + Up11 + Up12;
    AllHp = Hp2 + Hp3 + Hp4 + Hp5 + Hp6 + Hp7 + Hp8 + Hp9 + Hp10 + Hp11 + Hp12;
    AllTp = Tp2 + Tp3 + Tp4 + Tp5 + Tp6 + Tp7 + Tp8 + Tp9 + Tp10 + Tp11 + Tp12;

    AllUHT = AllUp + AllHp + AllTp;
    AllUH = AllUp + AllHp;

    console.log(typeof AllUp );
    console.log(typeof AllHp );
    console.log(typeof AllTp );
    console.log(typeof AllUHT);
    console.log(typeof AllUH);


// 総合結果
    const jodsougo0 = document.getElementById("jodsougo0");
    jodsougo0.innerText = "総合メッセージ";
    const jodsougo1 = document.getElementById("jodsougo1");
    if( AllUHT >= 10 ){
        if(AllUHT >= 14){
            if( AllUHT === 17){
                jodsougo1.innerText = kekkatext[7];
            }else{
                jodsougo1.innerText = kekkatext[6];
            }
        }else{
            if( AllUHT >= 11 ){
                jodsougo1.innerText = kekkatext[5];
            }else{
                jodsougo1.innerText = kekkatext[4];
            }
        }

    }else{
        if( AllUHT >= 5){
            if( 9 >= AllUHT >= 7 ){
                jodsougo1.innerText = kekkatext[3];
            }else{
                jodsougo1.innerText = kekkatext[2];
            }   
        }else{
            if( AllUHT >= 3 ){
                jodsougo1.innerText = kekkatext[1];
            }else{
                jodsougo1.innerText = kekkatext[0];
            }
        }
    };

// 新しい
    const jodnew0 = document.getElementById("jodnew0");
    jodnew0.innerText = "新しい仕事への適性";
    const jodnew1 = document.getElementById("jodnew1");
    if( AllHp >= 2 ){
        if( AllHp >= 3 ){
            if(AllUHT >= 10){
                if(AllUHT >= 13){
                    if(AllUHT >=17 ){
                        jodnew1.innerText = newtext[12];
                    }else{
                        jodnew1.innerText = newtext[9]; 
                    }
                }else{
                    jodnew1.innerText = newtext[4];
                }
            }else{
                if(AllUHT >= 7){
                    jodnew1.innerText = newtext[11];                  
                }else{
                    jodnew1.innerText = newtext[10];
                }
            }
        }else{
            if(AllUHT >= 9){
                if(AllUHT >=11){
                    if(AllUHT >=13){
                        jodnew1.innerText = newtext[9];
                    }else{
                        jodnew1.innerText = newtext[5];
                    }
                }else{
                    jodnew1.innerText = newtext[8];
                }
            }else{
                if(AllUHT >= 5){
                    jodnew1.innerText = newtext[7];
                }else{
                    jodnew1.innerText = newtext[6];
                }
            }
        };
    }else{
        if(AllHp >= 1){
            if(AllUHT >=7){
                if(AllUHT >= 10){
                    jodnew1.innerText = newtext[5];
                }else{
                    jodnew1.innerText = newtext[3];
                }
            }else{
                if(AllUHT >= 4){
                    jodnew1.innerText = newtext[2];               
                }else{
                    jodnew1.innerText = newtext[0];                    
                }
            }
        }else{
            if(AllUHT >= 5){
                if(AllUHT >= 7){
                    if(AllUHT >= 10){
                        jodnew1.innerText = newtext[4];
                    }else{
                        jodnew1.innerText = newtext[3];
                    }
                }else{
                    jodnew1.innerText = newtext[2];
                }
            }else{
                if(AllUHT >= 4){
                    jodnew1.innerText = newtext[1];
                }else{
                    jodnew1.innerText = newtext[0];
                }
            }
        }
    };
// 通常勤務
    const jodold0 = document.getElementById("jodold0");
    jodold0.innerText = "通常の仕事への適性";
    const jodold1 = document.getElementById("jodold1");
    if(AllUp >=7 ){
        if(AllUp >= 9){
            if(AllUp >= 11){
                if(AllTp >= 3){
                    jodold1.innerText = oidtext[6];
                }else{
                    jodold1.innerText = oidtext[5];                    
                }
            }else{
                if(AllTp >= 2 ){
                    jodold1.innerText = oidtext[5];
                }else{
                    jodold1.innerText = oidtext[4];
                }
            }
        }else{
            if( AllTp >= 1){
                if(AllTp >=3){
                    jodold1.innerText = oidtext[4];                   
                }else{
                    jodold1.innerText = oidtext[3];
                }
            }else{
                jodold1.innerText = oidtext[2];
            }
        }
    }else{
        if(AllUp>= 3){
            if(AllUp>=5){
                if( AllTp >= 1){
                    jodold1.innerText = oidtext[2];
                }else{
                    jodold1.innerText = oidtext[1];
                }
            }else{
                jodold1.innerText = oidtext[1];
            }
        }else{
            if( AllUp >= 3 ){
                jodold1.innerText = oidtext[1];
            }else{
                jodold1.innerText = oidtext[0];
            }
        }
    };
    const jodothenA = document.getElementById("jodothenA");
    jodothenA.innerText = "注意点";
    const jodothen0 = document.getElementById("jodothen0");
    if(AllUp >= 0){
        if(AllTp >= 3){
            jodothen0.innerText = othretext[0];
        }
    };
    const jodothen1 = document.getElementById("jodothen1");
    if(0 >= AllUHT){
        jodothen1.innerText = othretext[1];
    }
    const jodothen2 = document.getElementById("jodothen2");
    if(AllHp >= 2){
        jodothen2.innerText = othretext[2];
    }
    const jodothen3 = document.getElementById("jodothen3");
    const jodothen4 = document.getElementById("jodothen4");
    const jodothen5 = document.getElementById("jodothen5");
    if(AllHp>=3){
        jodothen3.innerText = othretext[3];
        jodothen4.innerText = othretext[4];
        jodothen5.innerText = othretext[5];
    }
    const jodothen6 = document.getElementById("jodothen6");
    const jodothen7 = document.getElementById("jodothen7");
    const jodothen8 = document.getElementById("jodothen8");
    if(AllUp>=5){
        if(AllTp>=3){
            jodothen8.innerText = othretext[8];
        }
        if(AllTp>=0){
            jodothen7.innerText = othretext[7];
            jodothen6.innerText = othretext[6];
        }
    };
    const jodothen9 = document.getElementById("jodothen9");
    const jodothen10 = document.getElementById("jodothen10");
    const jodothen11 = document.getElementById("jodothen11");
    const jodothen12 = document.getElementById("jodothen12");
    if(AllUp>=5){
        if(AllHp>=3){
            jodothen11.innerText = othretext[11];
            jodothen12.innerText = othretext[12];
        }
        if(AllHp>=2){
            jodothen9.innerText = othretext[9];
            jodothen10.innerText = othretext[10];
        }
    };
    const jodothen13 = document.getElementById("jodothen13");
    if(AllUp>=7){
        jodothen13.innerText = othretext[13];
    };
    const jodothen14 = document.getElementById("jodothen14");
    if(AllUp>=9){
        jodothen14.innerText = othretext[14];
    };
    const jodothen15 = document.getElementById("jodothen15");
    const jodothen16 = document.getElementById("jodothen16");
    if(AllUp>=9){
        if(AllHp>=3){
            jodothen15.innerText = othretext[15];
            jodothen16.innerText = othretext[16];
        }
    };
    const jodothen17 = document.getElementById("jodothen17");
    const jodothen18 = document.getElementById("jodothen18");
    if(AllUp>=11){
        jodothen17.innerText = othretext[17];
        jodothen18.innerText = othretext[18];
    };
    const jodothen19 = document.getElementById("jodothen19");
    const jodothen20 = document.getElementById("jodothen20");
    const jodothen21 = document.getElementById("jodothen21");
    if(AllUp>=11){
        if (AllHp>=3){
            jodothen19.innerText = othretext[19];
            jodothen20.innerText = othretext[20];
            jodothen21.innerText = othretext[21];
        }
    };
});


// ＝＝＝＝＝＝＝＝＝＝＝チェック域＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// botannBB2.addEventListener('click', () => {
//     if(kakuninbutjs2 >= 360 ){
//         if(kakuninbutjs2 >= 370){
//             Up2 = 0;
//             Hp2 = 0;
//             Tp2 = 1;
//         }else{
//             Up2 = 0;
//             Hp2 = 0;
//             Tp2 = 0;
//         }
//     }else{ 
//         Up2 = 1;
//         Hp2 = 0;
//         Tp2 = 0;
//     };
    
//     if( kakuninbutjs3 >= 60){
//         if(kakuninbutjs3 >= 90){
//             Up3 = 0;
//             Hp3 = 0;
//             Tp3 = 1; 
//         }else{
//             Up3 = 0;
//             Hp3 = 0;
//             Tp3 = 0; 
//         } 
//     }else{
//         Up3 = 0;
//         Hp3 = 0;
//         Tp3 = 1; 
//     };     
    
//     if( kakuninbutjs4 > 6 ){
//         Up4 = 0;
//         Hp4 = 0;
//         Tp4 = 0; 
//     }else{
//         Up4 = 1;
//         Hp4 = 0;
//         Tp4 = 1;  
//     };
    
//     AllUp = Up2 + Up3 + Up4 + Up5 + Up6 + Up7 + Up8 + Up9 + Up10 + Up11 + Up12;
//     AllHp = Hp2 + Hp3 + Hp4 + Hp5 + Hp6 + Hp7 + Hp8 + Hp9 + Hp10 + Hp11 + Hp12;
//     AllTp = Tp2 + Tp3 + Tp4 + Tp5 + Tp6 + Tp7 + Tp8 + Tp9 + Tp10 + Tp11 + Tp12;
    
//     AllUHT = AllUp + AllHp + AllTp;
//     AllUH = AllUp + AllHp;

//     const AllUp1 = document.getElementById("AllUpID");
//     const AllHp1 = document.getElementById("AllHpID");
//     const AllTp1 = document.getElementById("AllTpID");
//     const AllUHT1 = document.getElementById("AllUHTID");
//     const AllUH1 = document.getElementById("AllUHID");
//     AllHp1.innerText = AllHp;
//     AllUp1.innerText = AllUp;
//     AllTp1.innerText = AllTp;
//     AllUHT1.innerText = AllUHT;
//     AllUH1.innerText = AllUH;
// });
// kakbotID.addEventListener('click', () => {
// // ランダムですよ
//     const kakuninbut9 = document.getElementById("13");
//     kakuninbut9.innerText = ransu;
//     const kakuninbut10 = document.getElementById("14");
//     kakuninbut10.innerText = randoms;
//     const kakuninbut11 = document.getElementById("15");
//     kakuninbut11.innerText = randoms0;

// // ID
//     const kakuninbut1 = document.getElementById("1");
//     kakuninbut1.innerText = kakuninbutjs1;
// // 体温
//     const kakuninbut2 = document.getElementById("2");
//     kakuninbut2.innerText = kakuninbutjs2;
// // 脈拍
//     const kakuninbut3 = document.getElementById("3");
//     kakuninbut3.innerText = kakuninbutjs3;
// //　食事 
//     const kakuninbut4 = document.getElementById("4");
//     kakuninbut4.innerText = kakuninbutjs4;
// // ボタン数値
//     const kakuninbutU5 = document.getElementById("U5");
//     kakuninbutU5.innerText = Up5;
//     const kakuninbutH5 = document.getElementById("H5");
//     kakuninbutH5.innerText = Hp5;
//     const kakuninbutT5 = document.getElementById("T5");
//     kakuninbutT5.innerText = Tp5;

//     const kakuninbutU6 = document.getElementById("U6");
//     kakuninbutU6.innerText = Up6;
//     const kakuninbutH6 = document.getElementById("H6");
//     kakuninbutH6.innerText = Hp6;
//     const kakuninbutT6 = document.getElementById("T6");
//     kakuninbutT6.innerText = Tp6;

//     const kakuninbutU7 = document.getElementById("U7");
//     kakuninbutU7.innerText = Up7;
//     const kakuninbutH7 = document.getElementById("H7");
//     kakuninbutH7.innerText = Hp7;
//     const kakuninbutT7 = document.getElementById("T7");
//     kakuninbutT7.innerText = Tp7;

//     const kakuninbutU8 = document.getElementById("U8");
//     kakuninbutU8.innerText = Up8;
//     const kakuninbutH8 = document.getElementById("H8");
//     kakuninbutH8.innerText = Hp8;
//     const kakuninbutT8 = document.getElementById("T8");
//     kakuninbutT8.innerText = Tp8;

//     const kakuninbutU9 = document.getElementById("U9");
//     kakuninbutU9.innerText = Up9;
//     const kakuninbutH9 = document.getElementById("H9");
//     kakuninbutH9.innerText = Hp9;
//     const kakuninbutT9 = document.getElementById("T9");
//     kakuninbutT9.innerText = Tp9;

//     const kakuninbutU10 = document.getElementById("U10");
//     kakuninbutU10.innerText = Up10;
//     const kakuninbutH10 = document.getElementById("H10");
//     kakuninbutH10.innerText = Hp10;
//     const kakuninbutT10 = document.getElementById("T10");
//     kakuninbutT10.innerText = Tp10;

//     const kakuninbutU11 = document.getElementById("U11");
//     kakuninbutU11.innerText = Up11;
//     const kakuninbutH11 = document.getElementById("H11");
//     kakuninbutH11.innerText = Hp11;
//     const kakuninbutT11 = document.getElementById("T11");
//     kakuninbutT11.innerText = Tp11;

//     const kakuninbutU12 = document.getElementById("U12");
//     kakuninbutU12.innerText = Up12;
//     const kakuninbutH12 = document.getElementById("H12");
//     kakuninbutH12.innerText = Hp12;
//     const kakuninbutT12 = document.getElementById("T12");
//     kakuninbutT12.innerText = Tp12;
//     // デバック
// });

// risebotID.addEventListener('click', () => {   
//     $perzi = 0;

//     $input1.setAttribute("id", textpuul[$perzi].textboxID);
//     botan0ID1.setAttribute("id", textpuul[$perzi].botanID0);
//     botan0ID1.setAttribute("value", textpuul[$perzi].botan0);
//     botan1ID1.setAttribute("id", textpuul[$perzi].botanID1);
//     botan1ID1.setAttribute("value", textpuul[$perzi].botan1);
//     botan2ID1.setAttribute("id", textpuul[$perzi].botanID2);
//     botan2ID1.setAttribute("value", textpuul[$perzi].botan2);
//     botan3ID1.setAttribute("id", textpuul[$perzi].botanID3);
//     botan3ID1.setAttribute("value", textpuul[$perzi].botan3);
//     botan4ID1.setAttribute("id", textpuul[$perzi].botanID4);
//     botan4ID1.setAttribute("value", textpuul[$perzi].botan4);
//     // 番号
//     $nannberID.textContent = textpuul[$perzi].mondaiban;
//     // タイトル
//     $titleID.textContent = textpuul[$perzi].taitoruna;
//     // 回答ボックス
//     let numbox = textpuul[$perzi].textbox_on_off;
//     if( numbox > 0 ) {
//         $textboxID.style.display = "block";
//     }else{
//         $textboxID.style.display = "none" ;
//     }
//     // 問題ボックス
//     $mondaiID.textContent = textpuul[$perzi].monndaina;

//     // ボタンBOX
//     let numbut0 = textpuul[$perzi].botan_on_off0;
//     let numbut1 = textpuul[$perzi].botan_on_off1;
//     let numbut2 = textpuul[$perzi].botan_on_off2;
//     let numbut3 = textpuul[$perzi].botan_on_off3;
//     let numbut4 = textpuul[$perzi].botan_on_off4;
//     if( numbut0 < 1 ) {
//         botan0ID.style.display="none";
//     }else{
//         botan0ID.style.display="block";
//     }
//     if( numbut1 < 1 ) {
//         botan1ID.style.display="none";
//     }else{
//         botan1ID.style.display="block";
//     }    
//     if( numbut2 < 1 ) {
//         botan2ID.style.display="none";
//     }else{
//         botan2ID.style.display="block";
//     }    
//     if( numbut3 < 1 ) {
//         botan3ID.style.display="none";
//     }else{
//         botan3ID.style.display="block";
//     }
//     if( numbut4 < 1 ) {
//         botan4ID.style.display="none";
//     }else{
//         botan4ID.style.display="block";
//     }

//     let numnex = textpuul[$perzi].next_no_off;
//     if( numnex < 1 ) {
//         nexID.style.display="none";
//     }else{
//         nexID.style.display="block";
//     }
// });
