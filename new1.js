console.log("SRIT");

num = 12;
str = "hi";
bol = true;
bigint = 752085202654688727;
null1 = null;

// var, let, const
var name1 = "srit";
console.log(name1);
var name1 = "hi";
console.log(name1);

let course = "cse";

let age = 20;
console.log(age);
age = 21;
console.log(age);

const givename = "srinivasa rit";
console.log(givename);


//functions
function generateWelcomeMessage(name) {
    return "Welcome," + name +"! Good Morning";
    }

    let welcome_message=generateWelcomeMessage(givename);

    console.log(welcome_message)

    let addage=age+2;
    let subage=age-2;
    let mulage=age*2;
    let divage=age/2;

    console.log(addage);
    console.log(subage);
    console.log(mulage);
    console.log(divage);

    console.log("webpage")

    let length=10;
    let breadth=5;
    let height=2;
    area= length*breadth;
    area1=length*breadth*height;
    console.log(area1)
    console.log(area)

let n=8;
let fact=1;
for(let i=1;i<=n;i++)
{
    fact=fact*i;
}
console.log("factorial of",n,"is",fact)

function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    if (b==0){
        return "error: cannot divide by zero";
    }
    return a/b;
}
console.log(add(10,5));
console.log(sub(10,5));
console.log(mul(10,5));
console.log(div(10,5));

function compoundInterest(principal, rate, time) {
    return  amount = principal * (Math.pow((1 + rate)/100), time);
}
console.log("CI = " + compoundInterest(1000, 0.05, 2));

//if conditions
if (age>=18){
    console.log("you are eligible")
}
else{
    console.log("not eligible")
}

function cal(a,b,opr)
{
    if(opr==1){
         return a+b;
        }
        if(opr==2){
            return a-b;
        }
        if(opr==3){
            return a*b;
        }
        if(opr==4){
            return a/b;

        }
    }
    console.log(cal(10,5,1));
    console.log(cal(10,5,2));
    console.log(cal(10,5,3));
    console.log(cal(10,5,4));

    marks=60;
    if(marks>=90){
         console.log("Grade A");
    }
    else if(marks>=80){
        console.log("Grade B");
    }
    else if(marks>=70){
        console.log("Grade C");
    }
    else if (marks>=60){
        console.log("Grade D");
    }
    else if(marks>=50){
        console.log("Grade E");
    }
    else{
        console.log("Grade F");
    } 

let speed =30;
let distance = 0;
for (i=10; i<=90; i+=10){
    distance = distance+speed/6;
    if(speed<120){
        speed*=2;
    }
}
distance = distance+ speed/10
console.log(distance);

//i1 
//i=10 
//d=d+s/6==0+30/6 =5
//i =i+10
//s<120 so s=s*2 ==30*3=60

//i2 
//i=20
//d=5+60/6=5+10=15
//s<120 s=sa*2=120

//i3  
//i=30
//d=15+120/6==15+20
//i=i+10=40

// b =30 for 4km
//for the next 5km the price is 10
//for the next 10km the price is 15
//if the kms are more the will be 20
// person travelled 19.5 kms what will be the price 


function calculateFare(km) {
    let fare = 0;

    if (km <= 4) {
        fare = 30;  //  for first 4 km
    } else if (km <= 9) {
        fare = 30 + (km - 4) * 10;  // Next 5 km at Rs.10 per km
    } else if (km <= 19) {
        fare = 30 + (5 * 10) + (km - 9) * 15;  // Next 10 km at Rs.15 per km
    } else {
        fare = 30 + (5 * 10) + (10 * 15) + (km - 19) * 20;  // Beyond 19 km at Rs.20 per km
    }

    return fare;
}

//  declare 
 let dist = 19.5;
console.log("Total fare for " + dist + " km = Rs." + calculateFare(dist))

//while loop


let v=0;
while(v<3){
    console.log(v);
    v++;
}

let k=1;
let m=5;
while(k<=10){
    console.log(m,"*",k,"=",m*k);
    k++;
}