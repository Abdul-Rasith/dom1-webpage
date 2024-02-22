//function label
function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML = content
    return ele;
}
// function break
function break_create(){
    var ele1 = document.createElement("br")
    return ele1;
}
// function input
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname)
    element.setAttribute(attr1name,attr1value)
    element.setAttribute(attr2name,attr2value)
    return element;
}
// 1 label label and input feild for first_name;
var fname = label_create("label","for","fname","First Name");
var fname_break = break_create();
var fname_input = input_create("input","type","text","id","fname");
var f1_break =break_create();

//2 label label and input feild for second_name;
var mname = label_create("label","for","mname","Middle Name");
var mname_break = break_create();
var mname_input = input_create("input","type","text","id","mname");
var f2_break =break_create();


//3 label label and input feild for third_name;
var lname = label_create("label","for","lname","Last Name");
var lname_break = break_create();
var lname_input = input_create("input","type","text","id","lname");
var f3_break =break_create();



//4 label and input feild for email
var email = label_create("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","email","id","email");
var f4_break =break_create();


//5 label label and input feild for third_name;
var email = label_create("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","email","id","email");
var f5_break =break_create();


// 6 label label and input feild for password;
var pwd = label_create("label","for","pwd","Password");
var pwd_break = break_create();
var pwd_input = input_create("input","type","password","id","pwd");
var f6_break =break_create();
///
var btn = document.createElement("button")
btn.setAttribute("onclick","foo()")
btn.innerHTML = "button"
var f7_break =break_create();


//
function foo(){
    var f1 = document.getElementById("fname").value
    var f1_span = document.createElement("span")
    f1_span.innerHTML = `First name ${f1}`
    var f8_break =break_create();

    
    var f2 = document.getElementById("mname").value
    var f2_span = document.createElement("span")
    f2_span.innerHTML = `Middle name ${f2}`
    var f9_break =break_create();
    
    var f3 = document.getElementById("lname").value
    var f3_span = document.createElement("span")
    f3_span.innerHTML = `last name ${f3}`
    var f10_break =break_create();
    
    var f4 = document.getElementById("email").value
    var f4_span = document.createElement("span")
    f4_span.innerHTML = `Email : ${f4}`
    var f11_break =break_create();
    
    var f5 = document.getElementById("pwd").value
    var f5_span = document.createElement("span")
    f5_span.innerHTML = `Password: ${f5}`

    document.body.append(f1_span,f8_break,f2_span,f9_break,f3_span,f10_break,f4_span,f11_break,f5_span)
}




document.body.append(fname,fname_break,fname_input,f1_break,mname,mname_break,mname_input,f2_break,lname,lname_break,lname_input,f3_break,email,email_break,email_input,f4_break,pwd,pwd_break,pwd_input,f5_break,f6_break,btn,f7_break)

