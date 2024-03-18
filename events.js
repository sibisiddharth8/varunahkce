//************************Technical Events************************
$(document).ready(function() {
    var cardData = [
        {
            department: "All Departments",
            EventType: "Technical",
            imgSrc: "assets/imgs/paper presentation.jpg",
            title: "Paper Presentation",
            description: " Discover new research and ideas as speakers share insights on various topics. Join us for an enlightening session of knowledge exchange and collaboration."
        },

        {
            department: "AI&DS",
            EventType: "Technical",
            imgSrc: "assets/imgs/algo-bridge.jpg",
            title: "Algo Bridge",
            description: "Decode algorithm names from images in this compact yet engaging puzzle challenge. Test your algorithmic knowledge and bridge the gap between visuals and names. Join the fun and expand your understanding of algorithms!"
        },

        {
            department: "AI&DS",
            EventType: "Technical",
            imgSrc: "assets/imgs/bot-champ.png",
            title: "Bot Champ",
            description: "Developers create AI assistants with two unique functions in themes like productivity, education, and more. Pr awarded for creativity, usability, and technical excellence."
        },

        {
            department: "CSE",
            EventType: "Technical",
            imgSrc: "assets/imgs/CICADA.jpg",
            title: "CICADA 3301",
            description: "Embark on a journey through three stages, where buried hints await discovery to propel you forward. Quick thinkin key as you solve riddles, armed with internet resources and three lifelines."
        },

        {
            department: "CSE",
            EventType: "Technical",
            imgSrc: "assets/imgs/canuguess.jpg",
            title: "Can 'U' Guess?",
            description: "Teams race to decipher technical terms from hints, earning points for each correct guess. With three intense rounds of escalating point values, only the sharpest minds will prevail. Join the excitement and test your knowledge in this thrilling competition!"
        },

        {
            department: "All Departments",
            EventType: "Technical",
            imgSrc: "assets/imgs/projectexpo.jpg",
            title: "Project Expo",
            description: "Dive into an array of innovative projects spanning various fields. Engage with creators, explore demos, and witness cut-edge ideas come to life. Don't miss out on this captivating display of creativity and ingenuity!"
        },

        {
            department: "ECE",
            EventType: "Technical",
            imgSrc: "assets/imgs/circuitdebugging.jpg",
            title: "Circuit Debugging",
            description: "Engage in troubleshooting electronic circuits, from basic setups to complex devices, solving mysteries. The objective i ensure circuits function correctly, mimicking the role of a detective in solving electronic puzzles!"
        },

        {
            department: "EEE",
            EventType: "Technical",
            imgSrc: "assets/imgs/electricalfitting.avif",
            title: "Electrical Fitting",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            department: "Mech",
            EventType: "Technical",
            imgSrc: "assets/imgs/mechanic.jpg",
            title: "Mr.Mechanic",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            department: "Mech",
            EventType: "Technical",
            imgSrc: "assets/imgs/CADmodelling.jpg",
            title: "CAD Modelling",
            description: "Participants utilize provided 2D designs to craft 3D assemblies, showcasing prowess in basic mechanical engineering. Using SOLIDW, contestants model entire component assemblies, competing for top honors."
        },

        {
            department: "MBA",
            EventType: "Technical",
            imgSrc: "assets/imgs/businesssamurai.jpg",
            title: "Business Samurai",
            description: "Dive into a dynamic quiz covering management concepts, current events, and business topics. Challenge yourself and outsmart the competition to claim victory!"
        },
        
        {
            department: "MBA",
            EventType: "Technical",
            imgSrc: "assets/imgs/battleofinnovation.jpg",
            title: "Battle of Innovation",
            description: "Break barriers hindering creativity and explore novel solutions with our innovative team game. Show off your management skills in finding new ideas and alternatives."
        }
    ];    


    function addCards() {
        var htmlContent = '';
        cardData.forEach(function(item) {
            //HTML content
            htmlContent += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-center mb-4">
                        <div class="img-holder">
                            <img class="card-img-top inset" src="${item.imgSrc}">
                        </div>
                        <div class="card-body">
                            <h6 class="small text-primary font-weight-bold">${item.title}</h6>
                            <p>${item.description}</p>
                        </div>
                        <div class="access-depts">${item.department}</div>
                    </div>
                </div>
            `;
        });
        $('#contentContainer').html(htmlContent);
    }
    addCards();
});

//************************Non-Technical Events************************
$(document).ready(function() {
    var cardData = [
        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/Esports.png",
            title: "E-Sports",
            description: " PUBG & Free Fire Esports Edition! Join our adrenaline-fueled tournaments, where competitors battle for supremacy. Show off your skills, dominate the battlefield, and claim victory in the ultimate gaming showdown!"
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/mrandmrsvarunah.webp",
            title: "Mr. & Ms. Varunah",
            description: "Witness the search for excellence in our marquee event: Mr. & Ms. Varunah. Celebrating holistic development, contestants showcase intellect, charm, and leadership. Join us as we crown ambassadors of intellect and grace."
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/photography.png",
            title: "Photography",
            description: "Capture stunning moments, unleash creativity, and tell stories through your lens. Don't miss this opportunity to showcase your skills and immerse yourself in the art of photography."
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/treasurehunt.jpg",
            title: "Treasure Hunt",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/connections.jpg",
            title: "Connections",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/digiverse.avif",
            title: "DigiVerse",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/iplauction.webp",
            title: "IPL Auction",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/smartatristcontest.jpg",
            title: "Smart Artist & Contest",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/placeholder.png",
            title: "Comic Con",
            description: "Gear up for our college's first-ever Cosplay Extravaganza! Experience a world of fantasy and creativity with iconic characters and stunning costumes. Join us for a day of fun, camaraderie, and cosplay madness. Save the date for an unforgettable adventure!"
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/tuneomania.avif",
            title: "Tuneomania",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            department: "All Departments",
            EventType: "Non-Technical",
            imgSrc: "assets/imgs/memecreator.png",
            title: "Meme Creator",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },
    ];    


    function addCards() {
        var htmlContent = '';
        cardData.forEach(function(item) {
            //HTML content
            htmlContent += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-center mb-4">
                        <div class="img-holder">
                            <img class="card-img-top inset" src="${item.imgSrc}">
                        </div>
                        <div class="card-body">
                            <h6 class="small text-primary font-weight-bold">${item.title}</h6>
                            <p>${item.description}</p>
                        </div>
                        <div class="access-depts">${item.department}</div>
                    </div>
                </div>
            `;
        });
        $('#Non-Technical').html(htmlContent);
    }
    addCards();
});
