function validateForm() {
    let ime = document.querySelector("#ime").value;
    let prezime = document.querySelector("#prezime").value;
    let email = document.querySelector("#email").value;
    let telefon = document.querySelector("#telefon").value;

    let regIme = /^[A-Z][a-z]{4,8}$/;
    if(regIme.test(ime)) {
        console.log("Ime: " + ime);
    } else {
        alert("Popunite pravilno ime!");
    }

    let regPrezime = /^[A-Z][a-z]{4,15}$/
    if(regPrezime.test(prezime)) {
        console.log("Prezime: " + prezime);
    } else {
        alert("Popunite pravilno prezime!");
    }

    let regEmail = /^[a-z0-9]{4,15}@gmail.com$/;
    if(regEmail.test(email)) {
        console.log("Email:" + email);
    } else {
        alert("Email mora biti pravilno popunjen!");
    }

    let regTelefon = /^06\d{7,9}$/;
    if(regTelefon.test(telefon)) {
        console.log("Broj telefona:" + telefon);
    } else {
        alert("Broj mora biti pravilno napisan!");
    }
}