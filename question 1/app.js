
function displayResult(){
let english=+prompt('Enter your marks for English');
let physics=+prompt('Enter your marks for Physics');
let maths=+prompt('Enter your marks for Maths');
let cs=+prompt('Enter your marks for CS');

const total= english+physics+maths+cs;
const percentage=(total/400)*100;
const grade= (percentage >=90 && percentage<=100) ? 'A+' 
: (percentage >=80 && percentage<90) ? 'A'
: (percentage >=70 && percentage<80) ? 'B+'
: (percentage >=60 && percentage<70) ? 'B'
: (percentage >=50 && percentage<60) ? 'C'
: (percentage >=40 && percentage<50) ? 'D'
:'F'

    document.write(`Subject - Marks <br> English: -${english} <br> Physics: -${physics} <br> Maths: -${maths} <br> Computer: -${cs} <br><br> Total : ${total}/400 <br><br> Grade : ${grade}`)
}
displayResult();

