var family="";
function register() {
    var uname = reg_uname.value;
    var u_email = reg_email.value;
    var pass = reg_pass.value;
    var balance = 0; 
    let userDetails = {
        uname, 
        u_email, 
        pass, 
        balance
    };
    if(uname=="" || u_email=="" || pass==""){
        alert("Please fill all fields");
    }
    else if(u_email in localStorage){
        alert('Account already registered')
    }
    else{
        localStorage.setItem(u_email,JSON.stringify(userDetails));
        // console.log(userDetails);
        alert('Register successfully');
        window.location.href="login.html";
    }
    
}
function login() {
    let u_email = lg_email.value;
    pass = lg_pass.value;

    if(u_email ==="" || pass ===""){
        alert("Please enter your mail id and Password")
    }
    else {
        userDetails = JSON.parse(localStorage.getItem(u_email));
        if(userDetails){
            console.log(userDetails);

            if(userDetails.pass === pass ){
                alert('login successful');
                localStorage.setItem('u_name',userDetails.uname);
                localStorage.setItem('balance',userDetails.balance);
                 // localStorage.setItem('u_email',userDetails.u_email);
                // localStorage.setItem('u_pass',userDetails.pass);
                window.location.href = 'budget.html';
            }
            else{
                alert('Incorrect Password');
            }
            
        }else
        {
            alert(`${u_email} Account not registered`);
        }
    }
}


username = localStorage.getItem('u_name');
email = localStorage.getItem('u_email');
password = localStorage.getItem('u_pass');
balance = localStorage.getItem('balance');

family = JSON.parse(localStorage.getItem(email));
console.log(family);
// greet.innerHTML = `Welcome ${username} and Family`;
getBal(balance);

     function add() {
        let type = income_name.value;
        let amt = income_amt.value;

        if(type=="" || amt==""){
             alert("Please Enter Description and Income")
         }
        else{
            balance = localStorage.getItem('balance');
            console.log(`Balance Before : ${balance}`);
            balance=parseFloat(balance) + parseFloat(amt);
            localStorage.setItem('balance',balance);
            console.log(balance);
            userDetails={
                username,
                email,
                password,
                balance
            }
            localStorage.setItem(email,JSON.stringify(userDetails));
             getBal(balance);
             var table = document.getElementById("tbl_income");

             // Create an empty <tr> element and add it to the 1st position of the table:
                 var row = table.insertRow(-1);
     
             // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                 var cell1 = row.insertCell(0);
                 var cell2 = row.insertCell(1);
                 var cell3 = row.insertCell(2);
     

            cell1.innerHTML = type;
            cell2.innerHTML = amt;
            cell3.innerHTML = balance.toFixed(2);
        }
    }


    function exp() {
        let ex_type = exp_type.value;
        let ex_amt = exp_amt.value;

        if(ex_type=="" || ex_amt==""){
            alert("Please fill the description and expense amount.");
        }
        else{
            balance = localStorage.getItem('balance');
            balance=parseFloat(balance)- parseFloat(ex_amt);
            localStorage.setItem('balance',balance);
            userDetails={
                username,
                email,
                password,
                balance
            }            
            localStorage.setItem(email,JSON.stringify(userDetails));
            getBal(balance);
            var table = document.getElementById("tbl_expense");

        // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

        // Add some text to the new cells:
        cell1.innerHTML = ex_type;
        cell2.innerHTML = ex_amt;
        cell3.innerHTML = balance.toFixed(2);
    }
}


function getBal(balanceV){
    
    if(balanceV>3000){
        bal.innerHTML =`${balanceV}/-`;
        alt.innerHTML =`Hey ${username}, You have good money management &#128512;`;
    }
    else{
        bal.innerHTML=`${balanceV}/-`;
        alt.innerHTML =`Hey ${username}, please Control Your Expenditure &#128556;`;
        }    
}

function logout(){
    const response = confirm("Are you sure you want to Logout?");
    if(response){
        
        window.location.href="index.html";
    }
}

function clr() {
    localStorage.removeItem('u_pass');
    localStorage.removeItem('u_name');
    localStorage.removeItem('u_email');
    localStorage.removeItem('balance');
    // localStorage.clear();
}
