//************************Events Coordinators************************
$(document).ready(function() {
    var cardData = [
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ms. Mithila / AP",
            year:'',
            department: "AI&DS",
            coordinatortype: "Staff",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Srimathi S",
            year:'3rd Year',
            department: "AI&DS",
            coordinatortype: "Student",
            Eventname: "Paper Presentation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ms.Premalatha / AP",
            year:'',
            department: "AI&DS",
            coordinatortype: "Staff",
            Eventname: "Algo Bridge",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Arul Jothi P",
            year:'3rd Year',
            department: "AI&DS",
            coordinatortype: "Student",
            Eventname: "Algo Bridge",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ms.Akileshwari / AP",
            year:'',
            department: "AI&DS",
            coordinatortype: "Staff",
            Eventname: "Bot Champ",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Deenathayalan C.K",
            year:'3rd Year',
            department: "AI&DS",
            coordinatortype: "Student",
            Eventname: "Bot Champ",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ms.C.Eyamini / AP",
            year:'',
            department: "CSE",
            coordinatortype: "Staff",
            Eventname: "CICADA",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Premasagar K",
            year:'3rd Year',
            department: "CSE",
            coordinatortype: "Student",
            Eventname: "CICADA",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ms.M.Kavitha / AP",
            year:'',
            department: "CSE",
            coordinatortype: "Staff",
            Eventname: "Project Expo",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Rahuraam R",
            year:'3rd Year',
            department: "CSE",
            coordinatortype: "Student",
            Eventname: "Project Expo",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ms.V.C.Nathiya / AP",
            year:'',
            department: "CSE",
            coordinatortype: "Staff",
            Eventname: "Can you guess?",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Nivetha.S",
            year:'3rd Year',
            department: "CSE",
            coordinatortype: "Student",
            Eventname: "Can you guess?",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Mr. Anand / AP",
            year:'',
            department: "ECE",
            coordinatortype: "Staff",
            Eventname: "Circuit Debugging",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Arul",
            year:'3rd Year',
            department: "ECE",
            coordinatortype: "Student",
            Eventname: "Circuit Debugging",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ms. Sanjula / AP",
            year:'',
            department: "ECE",
            coordinatortype: "Staff",
            Eventname: "Technical Quiz",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Priyanka",
            year:'3rd Year',
            department: "ECE",
            coordinatortype: "Student",
            Eventname: "Technical Quiz",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Mr.Ramesh.D / AP",
            year:'',
            department: "EEE",
            coordinatortype: "Staff",
            Eventname: "Electrical Fitting",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Naresh Kumar",
            year:'2nd Year',
            department: "EEE",
            coordinatortype: "Student",
            Eventname: "Electrical Fitting",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Mr. S. Navaneethan / AP",
            year:'',
            department: "Mech",
            coordinatortype: "Staff",
            Eventname: "Mr. Mechanic",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ashok V",
            year:'3rd Year',
            department: "Mech",
            coordinatortype: "Student",
            Eventname: "Mr. Mechanic",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Mr. B. Vignesh / AP",
            year:'',
            department: "Mech",
            coordinatortype: "Staff",
            Eventname: "CAD Modelling",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Godwin Prabhu P",
            year:'3rd Year',
            department: "Mech",
            coordinatortype: "Student",
            Eventname: "CAD Modelling",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Dr. S V Arun / AP",
            year:'',
            department: "MBA",
            coordinatortype: "Staff",
            Eventname: "Business Samurai",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Abirami",
            year:'',
            department: "MBA",
            coordinatortype: "Student",
            Eventname: "Business Samurai",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Ms. Girivasuki K / AP",
            year:'',
            department: "MBA",
            coordinatortype: "Staff",
            Eventname: "Battle of innovation",
            phone: "",
            whatsapp: ""
        },
        {
            imgSrc: "assets/imgs/placeholder.png",
            name: "Pradeepa",
            year:'',
            department: "MBA",
            coordinatortype: "Student",
            Eventname: "Battle of innovation",
            phone: "",
            whatsapp: ""
        },
    ];    


    function addCards() {
        var htmlContent = '';
        cardData.forEach(function(coordinators) {
            //HTML content
            htmlContent += `
                <div id="coordinators-card" class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-center mb-4">
                        <div class="img-holder">
                            <img class="card-img-top inset" src="${coordinators.imgSrc}">
                        </div>
                        <div class="card-body">
                            <h6 class="small text-primary font-weight-bold">${coordinators.name}</h6>
                            <p>${coordinators.year} ${coordinators.department}</p>
                            <p>${coordinators.coordinatortype}-Coordinator of ${coordinators.Eventname}</p>
                        </div>
                        <div class="coordinators-contact">
                            <a href="tel:+91 ${coordinators.phone}" target="_blank">
                                <i class="fas fa-phone me-3"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=${coordinators.whatsapp}" target="_blank">
                                <i class="fab fa-whatsapp me-3"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
        $('#contentContainer').html(htmlContent);
    }
    addCards();
});
