function genrateCard() {

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const adhar = document.getElementById("adharno").value;
    const address = document.getElementById("address").value;

    const details = document.querySelectorAll(".details p");

    details[0].textContent = "Name : " + name;
    details[1].textContent = "DOB : " + dob;
    details[2].textContent = "Gender : " + gender;
    details[3].textContent = "Aadhar No : " + adhar;
    details[4].textContent = "Address : " + address;

    
    document.getElementById("card").style.display = "block";
}
