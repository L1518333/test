let MarkBMI
let JohnBMI

//Mark的体重和身高
let Markmass = 60;
let Markheight = 1.78;

//John的体重和身高
let Johnmass = 65
let Johnheight = 1.85

//mark的BMI
MarkBMI = Markmass / (Markheight * Markheight)

//john的BMI
JohnBMI = Johnmass / (Johnheight * Johnheight)

//输出BMI
console.log("Mark的BMI为：",MarkBMI);
console.log("Mark的BMI为：",JohnBMI);

//判断对比两者的BMI
BMI = (MarkBMI > JohnBMI ? "Mark的BMI比John高":"Mark的BMI比John高");
console.log(BMI);

