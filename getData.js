//================== Get data from URL ===============================================
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



var doctor = getParameterByName('doctor');
var hospital = getParameterByName('hospital');
var specialization = getParameterByName('specialization');
var datepiker = getParameterByName('datepiker');
var Email = getParameterByName('email');

document.getElementById("write1").innerHTML = doctor;
document.getElementById("write2").innerHTML = hospital;
document.getElementById("write3").innerHTML = specialization;
document.getElementById("write4").innerHTML = datepiker;
document.getElementById("write5").innerHTML = Email;


//=========================== Sending Email ==============================================
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "chandimalpriyamantha94@gmail.com",
        Password: "++",
        To: 'chandimalpriyamantha625@gmail.com',
        From: "chandimalpriyamantha94@gmail.com",
        Subject: "email subject",
        Body: "email body",
    }).then(
        message => alert("mail sent successfully")
    );
}
//=========================== Sign UP Page validation =======================================
function validate() {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');


    form.addEventListener('submit', e => {
        e.preventDefault();

        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }


    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    var numbers = /^[0-9]+$/;





    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value;
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();



        if (usernameValue == '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }

        if (emailValue == '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }

        // if( phoneValue === '') {
        //     setError(phone, 'phone number is required');
        // } else {
        //     setSuccess(phone);
        // }

        if (phoneValue == '') {
            setError(phone, 'phone number is required');
        } else if (phoneValue.match(numbers)) {
            setSuccess(phone);
        }
        else {
            setError(phone, 'Enter Numbers only');
        }

        if (passwordValue == '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 character.')
        } else {
            setSuccess(password);

        }

        if (password2Value == '') {
            setError(password2, 'Please confirm your password');
        } else if (passwordValue.length < 8) {
        } else if (password2Value != passwordValue) {
            setError(password2, "Passwords doesn't match");
        } else {
            setSuccess(password2);
            const passwordConformed = password2.value;
            // enter yor html file like to open
            window.location.href = "#fourth";
        }

        const emailNow = document.getElementById('emailAndPhone').value;
        const pwdNow = document.getElementById('passwordEnter').value;

        if (emailNow == 'okchandiuse@gmail.com' || pwdNow == '123456789') {
            setError(emailNow, ' email is requird');
            setError(pwdNow, 'password is requird');
        }

    };

}
//===================================== Sign In ===========================================

function login() {
    var user = document.loginform.user_name.value;
    var pass = document.loginform.pass_word.value;
    if (user == "" || pass == "") {
        alert("sorry...Please Enter Username and Passowrd");
    } else {
        if ((user == "ustut" || user == "USTUT") && pass == "US@123") {
            //document.loginform.submit();
            window.location = "#fourth";
        } else {
            alert("Please Enter Correct Credentials");
        }
    }
}

//======================== Madicine Order Form Validation ====================================

function medicine() {
    var name = document.loginform1.Name.value;
    var email = document.loginform1.EMail.value;
    var phaemacy = document.loginform1.Pharmacy.value;
    var number = document.loginform1.Phone_number.value;
    //var file = document.loginform.myfile.value;
   
    if (name == "" || email == "" || phaemacy == "" || number == "") {
        alert("Please Compleat the from!!");
    } else {
        
            window.location = "#msg1";
        }
    }
//================================Laboratory Form Validation =========================
    function Laboratory() {
        var name = document.loginform2.Name.value;
        var email = document.loginform2.EMail.value;
        var lab = document.loginform2.Lab.value;
        var number = document.loginform2.Phone_number.value;
        //var file = document.loginform.myfile.value;
       
        if (name == "" || email == "" || lab == "" || number == "") {
            alert("Please Compleat the from!!");
        } else {
            
                window.location = "#msg2";
            }
        }
    