// Bai 11.1
//input: điểm 3 môn Hóa, sinh, lý
//output: điểm trung bình và tổng điểm 3 môn. var chemistry =window.prompt("Mời bạn nhập điểm môn hóa: )
var chemistry = 10;
var physics = 9;
var biology = 10;
var average = (chemistry + physics + biology)/3;
var sum = (chemistry + physics + biology);
console.log("trung bình 3 môn: ", average);
console.log("Tổng điểm 3 môn: ", sum);

//bài 11.2
var censius = 0;
var fahrenheit = ((censius/5)*9 + 32);
console.log("0C bằng độ F: ",fahrenheit);
// bài 11.3
var pi = 3.14;
var radius = 4;
var acreage =(pi*radius*radius);
console.log("diện tích hình tròn r bằng 4:", acreage );

//bài 11.4

var perimeter =(2*pi*radius); 
console.log("chu vi hình tròn r bằng 4:",perimeter);


// var chemistry =+prompt("Mời bạn nhập điểm môn hóa: ");
// var physics =+prompt("Mời bạn nhập điểm môn hóa: ");
// var biology =prompt("Mời bạn nhập điểm môn hóa: ");
// var average = (chemistry + physics+ biology) / 3;
// console.log("điểm trung bình của 3 môn là: ",average);

//modal xác nhận từ người dùng

// var isLogout = window.confirm("Bạn có muốn đăng xuất không?");
// if(isLogout== true){
//     console.log("đăng xuất thành công");
// }
// else{
//     console.log("bạn đã hủy đăng xuất");
// }

// Dạng thông báo (Alert)
// window.alert("Phien dang nhap da het han");

//Yêu cầu người dùng nhập vào tuổi, nếu tuổi lớn hơn 18 và là con trai thì hiển thị thông báo là dủ điều kiện, ngược lại không đủ điều kiện
// var myAge = +prompt("Mời bạn nhập tuổi: ");
// var gender = prompt("mời bạn nhập giới tính: ");
// if( myAge >= 18 && gender==="Nam" ){
//     alert( "ban đã đủ tuổi");
// }
// else{
//     alert("ban chua du tuoi");
// }

//những giá trị sẽ nhận là true trong js
//  Một chuỗi rỗng, false, null, 0, NaN, undefined
var value = false;
if(value){
    console.log("dieu kien dung");

}
else{
    console.log("dieu kien sai");
}







