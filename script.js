// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이름(학번)
const titles = ["제목1", "제목2", "제목3", "제목4", "제목5"];
const ratings = [8.4, 7.9, 9.0, 6.5, 8.1];
const years = [2014, 2019, 1994, 2023, 2008];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}
console.log("합계:", sum);
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

