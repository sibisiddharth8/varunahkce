$(document).ready(function() {
    var cardData = [
        {
            imgSrc: "assets/imgs/paper presentation.jpg",
            title: "Paper Presentation",
            description: "Teams guess technical words from hints, scoring points for each correct answer. With no internet help allo it's a fast-paced battle of knowledge and deduction to claim the top spot!"
        },

        {
            imgSrc: "assets/imgs/algo-bridge.jpg",
            title: "Algo Bridge",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            imgSrc: "assets/imgs/bot-champ.png",
            title: "Bot Champ",
            description: "Developers create AI assistants with two unique functions in themes like productivity, education, and more. Pr awarded for creativity, usability, and technical excellence."
        },

        {
            imgSrc: "assets/imgs/CICADA.jpg",
            title: "CICADA 3301",
            description: "Embark on a journey through three stages, where buried hints await discovery to propel you forward. Quick thinkin key as you solve riddles, armed with internet resources and three lifelines."
        },

        {
            imgSrc: "assets/imgs/canuguess.jpg",
            title: "Can 'U' Guess?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            imgSrc: "assets/imgs/projectexpo.jpg",
            title: "Project Expo",
            description: "Dive into an array of innovative projects spanning various fields. Engage with creators, explore demos, and witness cut-edge ideas come to life. Don't miss out on this captivating display of creativity and ingenuity!"
        },

        {
            imgSrc: "assets/imgs/circuitdebugging.jpg",
            title: "Circuit Debugging",
            description: "Engage in troubleshooting electronic circuits, from basic setups to complex devices, solving mysteries. The objective i ensure circuits function correctly, mimicking the role of a detective in solving electronic puzzles!"
        },

        {
            imgSrc: "assets/imgs/electricalfitting.avif",
            title: "Electrical Fitting",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            imgSrc: "assets/imgs/mechanic.jpg",
            title: "Mr.Mechanic",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },

        {
            imgSrc: "assets/imgs/CADmodelling.jpg",
            title: "CAD Modelling",
            description: "Participants utilize provided 2D designs to craft 3D assemblies, showcasing prowess in basic mechanical engineering. Using SOLIDW, contestants model entire component assemblies, competing for top honors."
        },

        {
            imgSrc: "assets/imgs/paper presentation.jpg",
            title: "Business Samurai",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
        },
        
        {
            imgSrc: "assets/imgs/paper presentation.jpg",
            title: "Battle of Innovation",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti aut perspiciatis, qui omnis nemo."
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
                    </div>
                </div>
            `;
        });
        $('#contentContainer').html(htmlContent);
    }
    addCards();
});
