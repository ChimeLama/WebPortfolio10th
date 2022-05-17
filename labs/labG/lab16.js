



function submitForum(){

  var x= document.getElementById("before");
  var y= document.getElementById("after");
  if( x.style.display ==="none"){
    x.style.display="block";
    x.style.opacity="1";
    y.style.display="none";
  } else{
    x.style.display="block";
    y.style.display="none"
    y.style.opacity="0"
    
  }
  
  let userName=document.userform.input_username.value; //this is taking the information from the user name in the #before
  let userPhoneNum=document.userform.input_phoneNum.value;//this is taking out the value from phonehumber
  let userEmail=document.userform.input_email.value;//this is for the email
  let userNameResult=document.getElementById("nameResult");//this is to get element of the name result
   let userPhoneResult=document.getElementById("phoneNumResult");//yhuis is taking the info from the phone num result
let userEmailResult=document.getElementById("emailResult");//this is taking the email result info
//this code from line 9-15 is to take the result that was given to trun into empty one once its submitted
  userNameResult.innerHTML=userName; 
  userPhoneResult.innerHTML=userPhoneNum;
  userEmailResult.innerHTML=userEmail;
  console.log(userEmail, userPhoneNum,userName);

  document.getElementById("before").innerHTML=" ";
}

function returnForum(){
  var x= document.getElementById("before");
  if( x.style.display =="none"){
    x.style.display="block";
  } else{
    x.style.display="none"
  }
}