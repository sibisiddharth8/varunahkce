  document.addEventListener('DOMContentLoaded', function () {
    //Department data
    var departments = [
        {   
            icon: 'AD', 
            title: 'AI & DS', 
            igid:'https://www.instagram.com/adept_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'www.linkedin.com/company/adeptkce',
            description: 'Elevating expertise in AI & Data Science through collaboration & innovation. Exclusive events, clubs, and resources for students to excel in ethical practices and career paths' 
        },

        {   
            icon: 'CS', 
            title: 'CSE', 
            igid:'https://www.instagram.com/computech_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'https://www.linkedin.com/groups/14383475',
            description: 'Uniting tech enthusiasts to innovate and excel! From coding challenges to hackathons, we foster skill enhancement and meaningful connections within the dynamic realm of computer science.' 
        },

        {   
            icon: 'EC',
            title: 'ECE', 
            igid:'https://www.instagram.com/groundbreakers_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'https://www.linkedin.com/groups/14392303/',
            description: 'Empowering students through industry-aligned activities. Join our workshops, projects, and interactions to prepare for future challenges and foster professional growth.' 
        },

        {   
            icon: 'EE',
            title: 'EEE', 
            igid:'https://www.instagram.com/faradayz_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'./404.html',
            description: 'Faradays, your gateway to excellence in Electrical and Electronic Engineering (EEE). Named after the legendary Michael Faraday, we are a passionate community dedicated to pushing the boundaries of EEE knowledge and application.' 
        },

        {   
            icon: 'ME',
            title: 'Mech', 
            igid:'https://www.instagram.com/mexoltz_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'./404.html',
            description: "Innovation hub for Mechanical Engineering enthusiasts! Join workshops, guest lectures, and projects to explore Industry 4.0 and Robotics. Let's innovate together!"
        },

        {   
            icon: 'MB',
            title: 'MBA', 
            igid:'./404.html',
            lnid:'./404.html',
            description: "Kathir College's 2015 initiative boosts managerial skills through workshops and guest lectures, fostering growth via diverse clubs." 
        }
    ];
  
    // Get the container to append department cards
    var deptCardContainer = document.getElementById('dept-card-container');
  
    // Function to create department card HTML
    function createDeptCard(dept) {
      var deptCard = document.createElement('div');
      deptCard.classList.add('dept-card-base', 'gap-3');
  
      deptCard.innerHTML = `
        <div class="part1 d-flex">
          <span class="dept-icon">${dept.icon}</span>
          <h2>${dept.title}</h2>
        </div>
        <div class="part2">
          <p>${dept.description}</p>
        </div>
        <div class="Dept-socialmedia">
          <a href="${dept.igid}" target="_blank" class="text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="${dept.lnid}" target="_blank" class="text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      `;
  
      return deptCard;
    }
  
    // Function to populate department cards
    function populateDeptCards() {
      departments.forEach(function (dept) {
        var deptCard = createDeptCard(dept);
        deptCardContainer.appendChild(deptCard);
      });
    }
  
    // Call function to populate department cards
    populateDeptCards();
  });
  

  async function loadFiles() {
    try {
      // Fetch spinner content
      const FooterResponse = await fetch("Dynamic/Footer.html");
      const FooterHTML = await FooterResponse.text();
      document.getElementById("footer").innerHTML = FooterHTML;
    } 
    catch (error) {
      console.error("Error loading files:", error);
    }
  }
  window.onload = function() {
    loadFiles();
};