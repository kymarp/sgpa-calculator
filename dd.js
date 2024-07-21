const subject1=document.getElementById('subject1');
const subject2=document.getElementById('subject2');
const subject3=document.getElementById('subject3');
const subject4=document.getElementById('subject4');
const subject5=document.getElementById('subject5');

const lab1=document.getElementById('lab1');
const lab2=document.getElementById('lab2');
const lab3=document.getElementById('lab3');
const lab4=document.getElementById('lab4');
const lab5=document.getElementById('lab5');

const labc1=document.getElementById('labc1');
const labc2=document.getElementById('labc2');
const labc3=document.getElementById('labc3');
const labc4=document.getElementById('labc4');
const labc5=document.getElementById('labc5');

const credit1=document.getElementById('credit1');
const credit2=document.getElementById('credit2');
const credit3=document.getElementById('credit3');
const credit4=document.getElementById('credit4');
const credit5=document.getElementById('credit5');


const button=document.getElementById('submit');

const result=document.getElementById('res');


button.onclick=function (){ 

    let sub1=subject1.value*credit1.value;
    let sub2=subject2.value*credit2.value;
    let sub3=subject3.value*credit3.value;
    let sub4=subject4.value*credit4.value;
    let sub5=subject5.value*credit5.value;
    let l1=lab1.value*labc1.value;
    let l2=lab2.value*labc2.value;
    let l3=lab3.value*labc3.value;
    let l4=lab4.value*labc4.value;
    let l5=lab5.value*labc5.value;


    let totalGrades=sub1+sub2+sub3+sub4+sub5+l1+l2+l3+l4+l5;
    console.log(totalGrades);
    
    let cre1=parseInt(credit1.value);
    let cre2=parseInt(credit2.value);
    let cre3=parseInt(credit3.value);
    let cre4=parseInt(credit4.value);
    let cre5=parseInt(credit5.value);
    let cre6=parseInt(labc1.value);
    let cre7=parseInt(labc2.value);
    let cre8=parseInt(labc3.value);
    let cre9=parseInt(labc4.value);
    let cre10=parseInt(labc5.value);


    let totalCredits=cre1+cre2+cre3+cre4+cre5+cre6+cre7+cre8+cre9+cre10;
    console.log(totalCredits);


    let sgpa=totalGrades/totalCredits;

    result.textContent=`SGPA:${sgpa}`;
    

    // result.textContent=result;
}

