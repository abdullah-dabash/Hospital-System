document.getElementById("sub").addEventListener("click", function(e) {
    e.preventDefault();

    var div = document.getElementById("container");

    var fullname = document.getElementById("fullname").value;
    var password = document.getElementById("password").value;
    var dateofbirth = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var disease = document.getElementById("disease").value;

    // Validate the password
    if (!isValidPassword(password)) {
        alert("Password must be more than 8 characters and contain at least one number, uppercase letter, and special character.");
        return;
    }
    if (!isValidPhoneNumber(phone)) {
        alert("Phone number must start with '07' followed by 8 digits.");
        return;
    }

    function Person(fullname, password, dateofbirth, gender, phone, disease) {
        this.img = img;
        this.fullname = fullname;
        this.password = password;
        this.dateofbirth = dateofbirth;
        this.gender = gender;
        this.phone = phone;
        this.disease = disease;
    }

    var person = new Person(fullname, password, dateofbirth, gender, phone, disease, img);

    var img = document.createElement("img");
    img.src = "HD-wallpaper-bnw-man-dark-man-black-people.jpg";
    img.width = 200; 
    img.height = 150;
    div.appendChild(img);

    var p1 = document.createElement("p");
    p1.innerText = "Full Name: " + person.fullname;
    div.appendChild(p1);

    var p2 = document.createElement("p");
    p2.innerText = "Password: " + person.password;
    div.appendChild(p2);

    var p3 = document.createElement("p");
    p3.innerText = "Date of Birth: " + person.dateofbirth;
    div.appendChild(p3);

    var p4 = document.createElement("p");
    p4.innerText = "Gender: " + person.gender;
    div.appendChild(p4);

    var p5 = document.createElement("p");
    p5.innerText = "Phone: " + person.phone;
    div.appendChild(p5);

    var p6 = document.createElement("p");
    p6.innerText = "Disease: " + person.disease;
    div.appendChild(p6);

    var arr = JSON.parse(localStorage.getItem("patients")) || [];
    arr.push(person);

    localStorage.setItem('patients', JSON.stringify(arr));
});

function isValidPassword(password) {
    return password.length > 8 && /\d/.test(password) && /[A-Z]/.test(password) && /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password);
}
function isValidPhoneNumber(phone) {
    return /^07\d{8}$/.test(phone);}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }

    
}
