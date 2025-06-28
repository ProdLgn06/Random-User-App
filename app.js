function getir(){
const apikey = "2L0B-XHAG-N9M0-J46N";
document.getElementById("bilgi").innerHTML = '<div id="spinner"></div>';
fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("bilgi").innerHTML= `
        <div id="info">
        <br>

        <img src=" ${data.results[0].picture.large}" id="profile"><br>

        <p><strong>Name </strong><br><div class="txtback"> ${data.results[0].name.first} ${data.results[0].name.last}</p></div>
        <p><strong>City </strong> <br><div class="txtback"> ${data.results[0].location.city} / ${data.results[0].location.country}</p></div>
        <p><strong>Email </strong><br><div class="txtback"> ${data.results[0].email}</p></div>
        <p><strong>Login İnfo </strong>
        <p id="altbaslik"><strong>User Name</strong> <div id="alt"><div class="txtback">${data.results[0].login.username}</div> </p><p id="altbaslik"><strong>Password </strong><br><div id="alt"><div class="txtback">${data.results[0].login.password}</div></p>
        </div>
        </div>
    `;
        if (document.body.classList.contains("darkmode")) {
                document.querySelector("#info").classList.add("darkmode");
                document.querySelectorAll(".txtback").forEach(el => {
                    el.classList.add("darkmode");
                });
                
            }

        
})
    .catch(err => console.log("Bir Hata Oluştu", err));
}

function mode(){
    const mode = document.getElementById("mode");
        mode.classList.toggle("darkmode");
    const body = document.body;

    body.classList.toggle("darkmode");  
    
    if (mode.classList.contains("darkmode")){
        mode.textContent = "☀︎ Light";
    }
    else {
        mode.innerHTML = '<i class="fa-solid fa-moon"></i> Dark';
    }
    const h2 = document.querySelector("h2");
    
    h2.classList.toggle("darkmode");
    document.querySelector("#card").classList.toggle("darkmode");
    document.querySelector("#ftr").classList.toggle("darkmode");
    document.querySelectorAll(".txtback").forEach(el => {
    el.classList.toggle("darkmode");
    });

    
    
    const spinner = document.getElementById("spinner");
if (spinner && document.body.classList.contains("darkmode")) {
    spinner.classList.add("darkmode");
} else if (spinner) {
    spinner.classList.remove("darkmode");
}

    const info = document.querySelector("#info");
    info.classList.toggle("darkmode"); 
}