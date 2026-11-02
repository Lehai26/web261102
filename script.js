// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이름(학번)
const titles = ["극장판 치이카와: 인어 섬의 비밀", "하트 오브 비스트", "수능, 출제의 비밀", "암살자(들)", "진격의 거인: 홍련의 화살"];
const ratings = [7.6, 7.3, 7.0, 7.5, 8.1];
const years = [2026, 2026, 2026, 2026, 2015];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}
console.log("합계:", sum);


const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++){
    if (ratings[i] > max){
         max = ratings[i];
         maxIndex = i;
    }
    if (ratings[i] >= 8) {
    count++;
}

}

console.log("최고:", titles[maxIndex], max);

for(let i  =0;i<=ratings.length;i++){
let label ="";

if(ratings[i]>= 8.5){
    label= "명작";
}else if(ratings[i]>= 7.0){
    label = "추천";
}else{
    label = "보통";
}

console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);



console. log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count+"편");

// document.write("외부 스크림트 방법");

// console.log("여기 부분은 웹페이지 아니라 콘솔에 출력");
// let dan = 3;
// console.log('** 엄청나다"구구단" 3단!**' );
// for(let i =1;i< 9;i++) {
//     console.log('${dan}* ${i} = ${dan*i}' );

// }
// if(dan === '3'){
//     console.log("3단이 맞습니다");

// }else{
//     console.log("틀려습니다");
// }
// let arr = [80,90,70,60];
// console.log(arr);
// console.log(arr[2]);

// let stdScore ={
//     korean : 80,
//     english : 70,
//     math : 90,
//     science : 60
// };

// console.log(stdScore);
// console.log(stdScore.math);
// console.name = "홍길동";
// console.log(stdScore);

