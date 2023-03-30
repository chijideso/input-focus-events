console.log("hello world")
function checkFirstName()
{
    var firstName;
    var lastName;
 //code thta triggers erro or sucesfsul  if username is not enterd

    // firstName = form1.txtFirstName.value;
    // // firstNameLegnth = form1.txtFirstName.value.length
    // if (firstName.length==0){
    //     // alert("please enter user name")
    //     firstName=prompt("please enter user name","")
    // }
    // else{
    //     alert("username ussucessfully added")
    // }


    //code taht tells you to put your lasname even wen u put your firstname
    do{
        firstName=prompt('"please enter your firstname"');
        firstName=form1.txtFirstname.value;

    }while(firstName.value.length==0)
    

}
