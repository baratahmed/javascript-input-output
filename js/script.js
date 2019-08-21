
var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullname = firstName+' '+lastName;
    // alert(fullname);
    document.getElementById('fullName').value = fullname;
}
var addition = document.getElementById('add');
addition.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber+secondNumber;
    // alert(fullname);
    document.getElementById('result').value = result;
}
var addition = document.getElementById('sub');
addition.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber-secondNumber;
    // alert(fullname);
    document.getElementById('result').value = result;
}
var addition = document.getElementById('mul');
addition.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber*secondNumber;
    // alert(fullname);
    document.getElementById('result').value = result;
}
var addition = document.getElementById('div');
addition.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber/secondNumber;
    // alert(fullname);
    document.getElementById('result').value = result;
}
var addition = document.getElementById('rem');
addition.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber%secondNumber;
    // alert(fullname);
    document.getElementById('result').value = result;
}
// function demo(firstName,lastName) {
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }
// demo('Barat', 'Ahmed');

// var x = document.getElementsByTagName('h1');

// for(var key in x) {
//     document.write(x[key].innerHTML + '<br>');
// }
// for (var i = 0; i < x.length; i++) {
//     document.write(x[i].innerHTML + '<br>');
// }


/*Array Declaration*/
// var data2 = new Array();
// var data1 = Array();
// var data = [];
// data[760] = 10;
// data[1] = 20;
// data[2] = 30;
// data['name'] = 'Barat Ahmed';
// data['id'] = '14701023';
// data['country'] = 'Bangladesh';
// for (var x=0; x<=2; x++) {
//     document.write(data[x]+'<br>');
// }
// for(var key in data) {
//     document.write(data[key] + '<br>');
// }
// document.write(typeof (data));
// document.write('<br>');
// var data1 = [];
// data1[0] = 0;
// data1[1] = 1;
// data1[2] = 2;
// data1['one'] = 2;
// data1['two'] = 2;
// document.write(data.length);