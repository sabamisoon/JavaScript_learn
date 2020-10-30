//本日の日付取得
const today = new Date();
const y1 = today.getFullYear().toString().padStart(4, '0');
const m1 = (today.getMonth() + 1).toString().padStart(2, '0');
const d1 = today.getDate().toString().padStart(2, '0');

//錦織圭の誕生日
const keiBirthDay = {
  year: 1989,
  month: 12,
  date: 29
};
const birthDate = new Date(keiBirthDay.year, keiBirthDay.month - 1, keiBirthDay.date);
const y2 = birthDate.getFullYear().toString().padStart(4, '0');
const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
const d2 = birthDate.getDate().toString().padStart(2, '0');

//第１問
const question1 = today.getFullYear() +'年' + (today.getMonth()+1) + '月' + today.getDate() + '日現在、プロテニスプレイヤー錦織圭の年齢は？';

//錦織圭の年齢計算
const age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);
const correct1 = age;　//第１問の答え
const answers1 = [age - 2, age - 1, age, age + 1];

document.getElementById('js-question').textContent = question1;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answers1[0];
$button[1].textContent = answers1[1];
$button[2].textContent = answers1[2];
$button[3].textContent = answers1[3];

//リファクタリングしたかったけどダメな意味がわからん
// let buttonIndex = 0;
// let buttonlength = $button.length;
// while(buttonIndex = buttonlength){
//   $button[buttonIndex].textContent = answers1[buttonIndex];
//   buttonIndex++;
// }

$button[0].addEventListener('click', () => {
  if(correct1 === $button[0].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
});

$button[1].addEventListener('click', () => {
  if(correct1 === $button[1].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
});

$button[2].addEventListener('click', () => {
  if(correct1 === answers1[2]){                //textContentで型変わってる？
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
});

$button[3].addEventListener('click', () => {
  if(correct1 === $button[3].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
});
