function genrateVoterCard(){
    const name = document.getElementById("Name").value;
    const fatherName = document.getElementById("father_name").value;
    const gender = document.getElementById("Gender").value;
    const date = document.getElementById("date").value;

    const details = document.querySelectorAll(".details p");
    details[0].textContent = "Name : "+name;
    details[1].textContent = "Father_Name : "+fatherName;
    details[2].textContent = "Gender : "+gender
    details[3].textContent = "Date of Birth : "+date;

    
}