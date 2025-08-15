function id(id){
    return document.getElementById(id) ;
};
const signs = ["/","*","+","-"];
let output = id("output");
// Row One
let seven = id("seven");
let eight = id("eight");
let nine = id("nine");
let clear = id("clear");
// Row Two
let four = id("four");
let five = id("five");
let six = id("six");
let multi = id("multi");
// Row Three
let one = id("one");
let two = id("two");
let three = id("three");
let plus = id("plus");
// Row Four
let zero = id("zero");
let minus = id("minus");
let divide = id("divide");
let equal = id("equal");
// main code
seven.addEventListener("click",()=>{
    output.innerHTML += Number(7);
});
eight.addEventListener("click",()=>{
    output.innerHTML += Number(8);
});
nine.addEventListener("click",()=>{
    output.innerHTML += Number(9);
});
four.addEventListener("click",()=>{
    output.innerHTML += Number(4);
});
five.addEventListener("click",()=>{
    output.innerHTML += Number(5);
});
six.addEventListener("click",()=>{
    output.innerHTML += Number(6);
});
one.addEventListener("click",()=>{
    output.innerHTML += Number(1);
});
two.addEventListener("click",()=>{
    output.innerHTML += Number(2);
});
three.addEventListener("click",()=>{
    output.innerHTML += Number(3);
});
zero.addEventListener("click",()=>{
    output.innerHTML += Number(0);
});
clear.addEventListener("click",()=>{
    output.innerHTML = "";
});
multi.addEventListener("click",()=>{
    output.innerHTML += "*";
});
divide.addEventListener("click",()=>{
    output.innerHTML += "/";
});
plus.addEventListener("click",()=>{
    output.innerHTML += "+";
});
minus.addEventListener("click",()=>{
    output.innerHTML += "-";
});

equal.addEventListener("click", () => {
    try {
        let out = output.innerHTML = eval(output.innerHTML);
        if (out == "Infinity"){
            output.innerHTML = "<span style='color:red;'>Error !!!</span>";
        };
    }catch {
        output.innerHTML = "<span style='color:red;'>Error !!!</span>";
    };
});
