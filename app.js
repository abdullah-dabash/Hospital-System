document.getElementById("sub").addEventListener("click", function(e) {
    e.preventDefault();

    var div = document.getElementById("container");

    var fullname = document.getElementById("fullname").value;
    var password = document.getElementById("password").value;
    var dateofbirth = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var disease = document.getElementById("disease").value;

    function Person(fullname, password, dateofbirth, gender, phone, disease) {
        this.img = img;
        this.fullname = fullname;
        this.password = password;
        this.dateofbirth = dateofbirth;
        this.gender = gender;
        this.phone = phone;
        this.disease = disease;
        
    }

    var person = new Person(fullname, password, dateofbirth, gender, phone, disease,img);

    var img = document.createElement("img");
    img.innerText = person.img;
    img.src = "HD-wallpaper-bnw-man-dark-man-black-people.jpg";
    img.width = 200; 
    img.height = 150
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

    var arr =JSON.parse(localStorage.getItem("patients"))||[];
    arr.push(person);

    localStorage.setItem('patients', JSON.stringify(arr));

});


