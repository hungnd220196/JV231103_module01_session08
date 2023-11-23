// Toán tử số học +,-,*,/,%,++,--
var numberA = 3 + 4; //7
var numberB = 7 - 4; 
var numberC = 7 * 5;
var numberD = 7 / 5;  //dua ra ket qua la gia tri  thuc te  tinh ca gia tri thap phan
var numberE = 7 % 5; // lay phan du

console.log("numberA:", numberA);
console.log("numberB:", numberB);
console.log("numberC:", numberC);
console.log("numberD:", numberD);
console.log("numberE:", numberE);

// toán tử gán
var number1 = 10;
number1 = number1 + 10;
number1 += 10;
var number2 = 20;
number2 -= 10;
var number3 = number1 - number2;
console.log("Number3: ",number3);

var math =10;
var physics = 9;
var chemistry = 10;

var average = (math + physics + chemistry)/3;
console.log("average: ",average);

var usd = 1;
var vnd = usd*23000;
console.log("Tiền vnd là: ", vnd);

// Toán tử so sánh: <,>,==, ===,<=,>=.   => Kết quả cuối cùng của phép so sánh là boolean(true, false)
var myNumberA = 10;
var myNumberB = 20;
var result = myNumberA > myNumberB;
console.log("Result: ", result);

// Toán tử logic:hoặc hoặc (||), và và(&&), phủ định(!)
var email = "hung@gmail.com" // hình dung email nhập từ người dùng
var password = "12345678"    // pass từ người đùng
var isMAle = true;
console.log(isMale);

if(email === "hung@gmail.com" && password === "12345678"){
    // công việc khi điều kiện đúng
    console.log("Điều kiện đúng, đăng nhập thành công");
}
else{
    // công việc khi điều kiện sai
    console.log("Điều kiện sai, đăng nhập thất bại");
}

var isMale = 0;
var isFemale = 1;
var other = 2;
if(isMale === 0 && isFemale !=1){
    console.log( "dieu kien dung");
}
else{
    console.log( "dieu kien sai");
}