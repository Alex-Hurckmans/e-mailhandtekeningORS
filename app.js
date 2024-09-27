
var schoolinfo = {
    "De Bellewij Denderbelle": { naam: "De Bellewij Denderbelle", domein: "dorpsschoolbelle.be", site: "https://www.dorpsschoolbelle.be", adres: ["Kapellenstraat 43 | 9280 Lebbeke"], logo: "bellewij" },
    "De Duizendpoot Berlare": { naam: "De Duizendpoot Berlare", domein: "duizendpootberlare.be", site: "https://www.duizendpootberlare.be", adres: ["Nieuwstraat 8 | 9290 Berlare", "Alfons De Grauwelaan 11-13 | 9290 Berlare"], logo: "duizendpoot" },
    "Harduynschool Oudegem": { naam: "Harduynschool Oudegem", domein: "harduynschool.be", site: "https://www.harduynschool.be", adres: ["Hofstraat 37A | 9200 Oudegem"], logo: "harduyn" },
    "HEHAschool Sint-Gillis-Dendermonde": { naam: "HEHAschool Sint-Gillis-Dendermonde", domein: "heha.be", site: "https://www.heha.be", adres: ["Otterstraat 179 | 9200 Dendermonde", "Hullekenstraat 202 | 9200 Dendermonde", "Dr. De Witteplein zn | 9200 Dendermonde"], logo: "heha" },
    "VBS Lebbeke": { naam: "VBS Lebbeke", domein: "vbslebbeke.be", site: "https://www.vbslebbeke.be", adres: ["Brusselsesteenweg 43 | 9280 Lebbeke", "Heizijdestraat 7 | 9280 Lebbeke"], logo: "lebbeke" },
    "VBS Lebbeke Dorp": { naam: "VBS Lebbeke Dorp", domein: "vbslebbeke.be", site: "https://www.vbslebbeke.be", adres: ["Brusselsesteenweg 43 | 9280 Lebbeke"], logo: "lebbeke" },
    "VBS Lebbeke Heizijde": { naam: "VBS Lebbeke Heizijde", domein: "vbslebbeke.be", site: "https://www.vbslebbeke.be/vestigingen/vbs-lebbeke-heizijde", adres: ["Heizijdestraat 7 | 9280 Lebbeke"], logo: "heizijde" },
    "Het Laar Dendermonde": { naam: "Het Laar Dendermonde", domein: "romerocollege.be", site: "https://hetlaar.romerocollege.be", adres: ["Zuidlaan 34 | 9200 Dendermonde", "Sas 30 | 9200 Dendermonde"], logo: "laar" },
    "VBS De Margriet Baardegem": { naam: "VBS De Margriet Baardegem", domein: "vbsbaardegem.be", site: "https://www.vbsbaardegem.be", adres: ["Margrietstraat 15 | 9310 Baardegem"], logo: "margriet" },
    "VBS Meldert": { naam: "VBS Meldert", domein: "vbsmeldert.be", site: "https://www.vbsmeldert.be", adres: ["Meldert Dorp 19 | 9310 Meldert"], logo: "meldert" },
    "Basisschool De Minnestraal": { naam: "Basisschool De Minnestraal", domein: "minnestraal.be", site: "https://www.minnestraal.be", adres: ["Lange Minnestraat 59 | 9280 Lebbeke"], logo: "minnestraal" },
    "De Oogappel Appels": { naam: "De Oogappel Appels", domein: "deoogappel.be", site: "https://www.deoogappel.be", adres: ["Hoofdstraat 18 | 9200 Appels"], logo: "oogappel" },
    "De Schatkist Wieze": { naam: "De Schatkist Wieze", domein: "vbswieze.be", site: "https://www.vbswieze.be", adres: ["Kloosterstraat 1-5 | 9280 Wieze"], logo: "schatkist" },
    "Óscar Romerocollege - basisschool": { naam: "Óscar Romerocollege - basisschool", domein: "romerocollege.be", site: "https://basisschool.romerocollege.be", adres: ["Sas 32, 38-39 | 9200 Dendermonde", "Pijnderslaan 90 9200 Dendermonde", "Pater De Smetlaan 39 | 9200 Dendermonde"], logo: "vbsorc" },
    "Visitatieschool Baasrode": { naam: "Visitatieschool Baasrode", domein: "visitatie.be", site: "http://www.visitatiebaasrode.be", adres: ["Rosstraat 7 | 9200 Dendermonde", "Vlassenbroek 188 | 9200 Dendermonde"], logo: "visitatie" },
    "VBS Opstal": { naam: "VBS Opstal", domein: "vbsopstal.be", site: "https://www.vbsopstal.be", adres: ["Broekstraat 29-35 | 9255 Opstal"], logo: "opstal" },
    "Vrije kleuterschool - Sint-Jozef": { naam: "Vrije kleuterschool - Sint-Jozef", domein: "kleuterschoolopdorp.be", site: "https://www.kleuterschoolopdorp.be", adres: ["Vekestraat 2 | 9255 Opdorp"], logo: "opdorp" },
    "Vrije basisschool - Sint-Vincentius & Montessorischool Briel": { naam: "Vrije basisschool - Sint-Vincentius & Montessorischool Briel", domein: "vincentrum.be", site: "https://www.vincentrum.be", adres: ["Schoolstraat 20 | 9255 Buggenhout"], logo: "vincentrum" },
    "Oscar Romeroscholen": { naam: "Oscar Romeroscholen", domein: "romeroscholen.be", site: "https://www.romeroscholen.be", adres: ["Kerkstraat 60 | 9200 Dendermonde"], logo: "ORS" },
}


// Bij functie als je kiest voor aangepast komt er een extra veld.
document.querySelector("[name=functielijst]").addEventListener('change', function (event) {
    var target = event.currentTarget;
    var selectedOption = target.options[target.selectedIndex];
    var functionField = document.querySelector("[name=functie]")
    if (selectedOption.value == "custom") {
        functionField.closest(".input").classList.remove("hidden");
        functionField.closest(".input").classList.add("highlight");
    } else {
        functionField.closest(".input").classList.add("hidden");
        functionField.closest(".input").classList.remove("highlight");
        var functionTitle = target.options[target.selectedIndex].text;
        functionField.value = functionTitle ?? "";
    }
})

//Bij deeltijds als iemand deeltijds werkt komt er extra selectie om dagen aan te duiden.
document.querySelector("[name=deeltijds]").addEventListener('change', function (event) {
    var target = event.currentTarget;
    var functionField = document.querySelector("[name=dagenSelectie]")
    if (target.checked) {
        functionField.closest(".input").classList.remove("hidden");
    } else {
        functionField.closest(".input").classList.add("hidden");
    }
})

document.querySelectorAll(".input input, .input select").forEach(item => {
    item.addEventListener('change', function () {
        var voornaam = document.querySelector("[name=voornaam]").value;
        var naam = document.querySelector("[name=naam]").value;
        var functie = document.querySelector("[name=functie]").value;
        var school = document.querySelector("[name=school]").value;
        var gsm = document.querySelector("[name=gsm]").value;
        var telefoon = document.querySelector("[name=telefoon]").value;
        var legalinfo = document.querySelector("[name=legalinfo]").checked;
        var translate = document.querySelector("[name=translate]").checked;
        var beschikbaar = document.querySelector("[name=deeltijds]").checked;
        var emailInput = document.querySelector("[name=email]:valid")
        var email = emailInput ? emailInput.value : null;
        var emailElement = document.getElementById("email");
        if (voornaam && naam) document.getElementById("naam").innerHTML = voornaam.toUpperCase() + " " + naam.toUpperCase();
        if (functie) document.getElementById("functie").innerHTML = functie;
        if (school) document.getElementById("adreslijn").innerHTML = adres.value;
        if (email) {
        } else if (voornaam && naam && schoolinfo[school]) {
            email = `${voornaam}.${naam}@${schoolinfo[school].domein}`;
            email = email.normalize('NFKD').replace(/[^\w@\.]/g, '').toLowerCase();
        } else if (schoolinfo[school]) {
            email = `@${schoolinfo[school].domein}`;
        } else {
            email = "email@domein.be"
        }
        emailElement.innerHTML = email;
        emailElement.href = `mailto:${email}`;
        if (schoolinfo[school]) {
            document.getElementById("logo").src = `http://www.romeroscholen.be/uploads/images/Stockfotos/${schoolinfo[school].logo}-logo.jpg`;
            document.getElementById("weblink").innerHTML = schoolinfo[school].site ? schoolinfo[school].site.replace(/http.*\//, '') : `www.${schoolinfo[school].domein}`;
            document.getElementById("weblink").href = schoolinfo[school].site ?? `http://www.${schoolinfo[school].domein}`;
            document.getElementById("schoolnaam").innerHTML = schoolinfo[school].naam
        }
        if (beschikbaar) {
            var dagenbeschikbaar = [];
            if (document.querySelector("[id=maandag]").checked)
                dagenbeschikbaar.push("ma")
            if (document.querySelector("[id=dinsdag]").checked)
                dagenbeschikbaar.push("di")
            if (document.querySelector("[id=woensdag]").checked)
                dagenbeschikbaar.push("woe")
            if (document.querySelector("[id=donderdag]").checked)
                dagenbeschikbaar.push("do")
            if (document.querySelector("[id=vrijdag]").checked)
                dagenbeschikbaar.push("vrij")
        }
        var contactInfoElement = document.getElementById("contactinfo");
        var contactInfo = "";

        if (telefoon) contactInfo += '<tr><td width="15">T</td><td>' + telefoon + '</td></tr>';
        if (gsm) contactInfo += '<tr><td width="15">G</td><td>' + gsm + '</td></tr>';
        contactInfoElement.innerHTML = contactInfo;

        //Footer
        document.getElementById('beschikbaarheid').innerHTML = beschikbaar ? `<div>Ik ben enkel bereikbaar op: ${dagenbeschikbaar.toString()} </div>` : '';
        document.getElementById('legalinfo').innerHTML = legalinfo ? '<div>Óscar Romeroscholen vzw | Kerkstraat 60 | 9200 Dendermonde | T 052 25 88 79 </div><div>Ondernemingsnummer: 0415819204 | Ondernemingsrechtbank Gent afdeling Dendermonde</div>' : '';
        document.getElementById('translate').innerHTML = translate ? '<div><b>If you want to translate this mail please use the following tool:<b></div><div><b><a href=https://www.deepl.com/nl/translator target="_blank">deepl.com/nl/translator</a></b></div>' : '';
    })
});
window.onload = function () {
    var schoolSelectie = document.getElementById("school");
    var adresSelectie = document.getElementById("adres");
    for (var x in schoolinfo) {
        schoolSelectie.options[schoolSelectie.options.length] = new Option(x, x);
    }
    schoolSelectie.onchange = function () {
        //empty dropdowns
        adresSelectie.length = 1;
        var alleAdressen = "";
        //display correct values
        var adressen = schoolinfo[schoolSelectie.value].adres;
        if(schoolinfo[schoolSelectie.value].naam == "Óscar Romerocollege - basisschool")
        {
            removeOptions(adresSelectie)
            for (var y in schoolinfo[this.value].adres) {
                adresSelectie.options[adresSelectie.options.length] = new Option(adressen[y], adressen[y]);
                alleAdressen += adressen[y] + "<br>"
            }
            adresSelectie.options[adresSelectie.options.length] = new Option("Pijnderslaan + Sas ", "Sas 32, 38-39 | 9200 Dendermonde<br>Pijnderslaan 90 9200 Dendermonde");
            adresSelectie.options[adresSelectie.options.length] = new Option("Sas + Pater De Smet ","Sas 32, 38-39 | 9200 Dendermonde<br>Pater De Smetlaan 39 | 9200 Dendermonde" );
            adresSelectie.options[adresSelectie.options.length] = new Option("Alle adressen", alleAdressen);
            document.getElementById("adreslijn").innerHTML = document.getElementById("adres").value
        } else if (adressen.length <= 1) {
            removeOptions(adresSelectie)
            adresSelectie.options[adresSelectie.options.length] = new Option(adressen[0], adressen[0]);
            document.getElementById("adreslijn").innerHTML = document.getElementById("adres").value
        } else {
            removeOptions(adresSelectie)
            for (var y in schoolinfo[this.value].adres) {
                adresSelectie.options[adresSelectie.options.length] = new Option(adressen[y], adressen[y]);
                alleAdressen += adressen[y] + "<br>"
            }
            adresSelectie.options[adresSelectie.options.length] = new Option("Alle adressen", alleAdressen);
            document.getElementById("adreslijn").innerHTML = document.getElementById("adres").value
        }
    }
    function removeOptions(selectElement) {
        var i, L = selectElement.options.length - 1;
        for (i = L; i >= 0; i--) {
            selectElement.remove(i);
        }
    }
}
document.getElementById('copybutton').addEventListener('click', function (event) {
    var form = document.getElementById('templateform');
    if (form.checkValidity()) {
        try {
            var blob = new Blob([document.querySelector('#handtekening').outerHTML.replaceAll('Ó', '&Oacute;')], { type: 'text/html' });
            var item = new ClipboardItem({ 'text/html': blob });
            navigator.clipboard.write([item]).then(function () {
                alert("Handtekening gekopieerd.")
            }, function (error) {
                alert("Fout bij kopiëren handtekening: selecteer en kopieer de handtekening manueel.")
            });
        } catch (e) {
            alert("Fout bij kopiëren handtekening: selecteer en kopieer de handtekening manueel.")
        }
    } else {
        form.reportValidity();
    }
    event.preventDefault();
});

document.getElementById('templateform').addEventListener('submit', function (event) {
    var dl = document.createElement('a');
    var content = "<!DOCTYPE html><html lang=\"nl\"><head><title>Handtekening</title><meta charset=\"UTF-8\"></head><body>" + document.querySelector('#handtekening').outerHTML.replaceAll('Ó', '&Oacute;') + "</body></html>";
    dl.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(content));
    dl.setAttribute('download', 'handtekening.html');
    dl.click();

    event.preventDefault();
});