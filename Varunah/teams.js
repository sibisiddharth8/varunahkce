//************************Events Coordinators************************
var male="assets/imgs/male.png";
var female="assets/imgs/female.png"
$(document).ready(function() {
    var cardData = [
        {
            imgSrc: female,
            name: "Kiruba N",
            year:'AP',
            department: "AI&DS",
            Role: "Overall staff Co-ordinator",
            phone: "8838031163",
            whatsapp: "8838031163"
        },
        {
            imgSrc: male,
            name: "Hari Vignesh",
            year:'3rd Year',
            department: "AI&DS",
            Role: "Overall student Co-ordinator",
            phone: "6383432687",
            whatsapp: "6383432687"
        },
        {
            imgSrc: male,
            name: "Rishikanth",
            year:'3rd Year',
            department: "CSE",
            Role: "Overall student Co-ordinator",
            phone: "8438633936",
            whatsapp: "8438633936"
        }
    ];    

    function addCards() {
        var htmlContent = '';
        cardData.forEach(function(coordinators) {
            //HTML content
            htmlContent += `
                    <div class="profile-card">
                    <div class="img">
                        <img src="${coordinators.imgSrc}">
                    </div>
                    <div class="caption">
                        <h6>${coordinators.name}</h6>
                        <p>${coordinators.year} / ${coordinators.department}</p>
                        <p>${coordinators.Role}</p>  

                        <div class="social-links">
                            <a href="tel:+91 ${coordinators.phone}" target="_blank"><i class="fa-solid fa-phone"></i></a>
                            <a href="https://wa.me/${coordinators.whatsapp}" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                    </div> 
            `;
        });
        $('#contentContainer').html(htmlContent);
    }
    addCards();
});
