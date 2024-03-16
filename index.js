  document.addEventListener('DOMContentLoaded', function () {
    //Department data
    var departments = [
        {   
            icon: 'AD', 
            title: 'AI & DS', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam ipsam rem asperiores modi neque laborum.' 
        },

        {   
            icon: 'CS', 
            title: 'CSE', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam ipsam rem asperiores modi neque laborum.' 
        },

        {   
            icon: 'EC',
            title: 'ECE', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam ipsam rem asperiores modi neque laborum.' 
        },

        {   
            icon: 'EE',
            title: 'EEE', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam ipsam rem asperiores modi neque laborum.' 
        },

        {   
            icon: 'ME',
            title: 'Mech', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam ipsam rem asperiores modi neque laborum.' 
        },

        {   
            icon: 'MB',
            title: 'MBA', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam ipsam rem asperiores modi neque laborum.' 
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