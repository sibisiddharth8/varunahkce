//************************Events Coordinators************************
var male="assets/imgs/male.png";
var female="assets/imgs/female.png"
$(document).ready(function() {
    var cardData = [
        {
            imgSrc: female,
            name: "Ms. Mithila",
            year:'AP',
            department: "AI&DS",
            coordinatortype: "Staff",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Srimathi S",
            year:'3rd Yr',
            department: "AI&DS",
            coordinatortype: "Student",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Ms.Premalatha",
            year:'AP',
            department: "AI&DS",
            coordinatortype: "Staff",
            Eventname: "Algo Bridge",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Arul Jothi P",
            year:'3rd Yr',
            department: "AI&DS",
            coordinatortype: "Student",
            Eventname: "Algo Bridge",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Ms.Akileshwari",
            year:'AP',
            department: "AI&DS",
            coordinatortype: "Staff",
            Eventname: "Bot Champ",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Deenathayalan C.K",
            year:'3rd Yr',
            department: "AI&DS",
            coordinatortype: "Student",
            Eventname: "Bot Champ",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Ms.C.Eyamini",
            year:'AP',
            department: "CSE",
            coordinatortype: "Staff",
            Eventname: "CICADA",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Premasagar K",
            year:'3rd Yr',
            department: "CSE",
            coordinatortype: "Student",
            Eventname: "CICADA",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Ms.M.Kavitha",
            year:'AP',
            department: "CSE",
            coordinatortype: "Staff",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Rahuraam R",
            year:'3rd Yr',
            department: "CSE",
            coordinatortype: "Student",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Ms.V.C.Nathiya",
            year:'AP',
            department: "CSE",
            coordinatortype: "Staff",
            Eventname: "Can you guess?",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Nivetha.S",
            year:'3rd Yr',
            department: "CSE",
            coordinatortype: "Student",
            Eventname: "Can you guess?",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Mr. Boopathi Raja",
            year:'AP',
            department: "ECE",
            coordinatortype: "Staff",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Paravathavardhini",
            year:'3rd Yr',
            department: "ECE",
            coordinatortype: "Student",
            Eventname: "Paper Presenation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Ms. Brindha devi",
            year:'AP',
            department: "ECE",
            coordinatortype: "Staff",
            Eventname: "Project Expo",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Vijayaragavan",
            year:'3rd Yr',
            department: "ECE",
            coordinatortype: "Student",
            Eventname: "Project Expo",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Mr. Anand",
            year:'AP',
            department: "ECE",
            coordinatortype: "Staff",
            Eventname: "Circuit Debugging",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Arul",
            year:'3rd Yr',
            department: "ECE",
            coordinatortype: "Student",
            Eventname: "Circuit Debugging",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Ms. Sanjula",
            year:'AP',
            department: "ECE",
            coordinatortype: "Staff",
            Eventname: "Technical Quiz",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Priyanka",
            year:'3rd Yr',
            department: "ECE",
            coordinatortype: "Student",
            Eventname: "Technical Quiz",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Dr. V. Gomathy",
            year:'AP',
            department: "EEE",
            coordinatortype: "Staff",
            Eventname: "paper presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Kavin",
            year:'2nd Yr',
            department: "EEE",
            coordinatortype: "Student",
            Eventname: "paper presentation ",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Dr. L. Nagarajan",
            year:'AP',
            department: "EEE",
            coordinatortype: "Staff",
            Eventname: "Project Expo",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Somasundaram",
            year:'2nd Yr',
            department: "EEE",
            coordinatortype: "Student",
            Eventname: "Project Expo",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Mr.Ramesh.D",
            year:'AP',
            department: "EEE",
            coordinatortype: "Staff",
            Eventname: "Electrical Fitting",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Naresh Kumar",
            year:'2nd Yr',
            department: "EEE",
            coordinatortype: "Student",
            Eventname: "Electrical Fitting",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Dr. B. Suresh Babu",
            year:'AP',
            department: "Mech",
            coordinatortype: "Staff",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Haribharathi V",
            year:'3rd Yr',
            department: "Mech",
            coordinatortype: "Student",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Mr. S. Navaneethan",
            year:'AP',
            department: "Mech",
            coordinatortype: "Staff",
            Eventname: "Mr. Mechanic",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Ashok V",
            year:'3rd Yr',
            department: "Mech",
            coordinatortype: "Student",
            Eventname: "Mr. Mechanic",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Mr. B. Vignesh",
            year:'AP',
            department: "Mech",
            coordinatortype: "Staff",
            Eventname: "CAD Modelling",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Godwin Prabhu P",
            year:'3rd Yr',
            department: "Mech",
            coordinatortype: "Student",
            Eventname: "CAD Modelling",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Mr. David Baburaj",
            year:'AP',
            department: "MBA",
            coordinatortype: "Staff",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Muthurman",
            year:'3rd Yr',
            department: "MBA",
            coordinatortype: "Student",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: male,
            name: "Dr. S V Arun",
            year:'AP',
            department: "MBA",
            coordinatortype: "Staff",
            Eventname: "Business Samurai",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Abirami",
            year:'3rd Yr',
            department: "MBA",
            coordinatortype: "Student",
            Eventname: "Business Samurai",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Ms. Girivasuki K",
            year:'AP',
            department: "MBA",
            coordinatortype: "Staff",
            Eventname: "Battle of innovation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: female,
            name: "Pradeepa",
            year:'3rd Yr',
            department: "MBA",
            coordinatortype: "Student",
            Eventname: "Battle of innovation",
            phone: "",
            whatsapp: ""
        },
        
        {
            imgSrc: male,
            name: "Mr. Sibi Siddharth",
            year:'3rd Yr',
            department: "AI&DS",
            coordinatortype: "Student",
            Eventname: "Web Developer",
            phone: "",
            whatsapp: "+91"
        },
        {
            imgSrc: male,
            name: "Mr. Praveenkumar",
            year:'3rd Yr',
            department: "AI&DS",
            coordinatortype: "Student",
            Eventname: "Web Developer",
            phone: "",
            whatsapp: "+91"
        },
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
                        <p>${coordinators.Eventname}</p>  

                        <div class="social-links">
                            <a href="tel:+91 ${coordinators.phone}" target="_blank"><i class="fa-solid fa-phone"></i></a>
                            <a href="https://wa.me/${coordinators.whatsapp}" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-solid fa-at"></i></a>
                        </div>
                    </div>
                    </div> 
            `;
        });
        $('#contentContainer').html(htmlContent);
    }
    addCards();
});
