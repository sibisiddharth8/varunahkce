//************************Events************************

$(document).ready(function() {
 
    
});

// Define the deptEventData array
var deptEventData = [
    {
        dept: 'AI & DS',
        tEvents: ['Paper Presentation', 'Algo Bridge','Bot Champ'],
        ntEvents: ['Esports', 'Treasure hunt', 'Mr. & Ms.Varunah'],
    },
    // Add more department objects if needed
];

// Function to list all tEvents
function listTechnicalEvents() {
    var allTechnicalEventsHTML = '<ul>';

    // Iterate over each department object
    deptEventData.forEach(function(department) {
        // Iterate over the tEvents array of each department and add list items to the HTML content
        department.tEvents.forEach(function(event) {
            allTechnicalEventsHTML += '<li>' + event + '</li>';
        });
    });

    allTechnicalEventsHTML += '</ul>';
    return allTechnicalEventsHTML;
}

// Call the function and store the HTML content in a variable
var allTechnicalEventsListHTML = listTechnicalEvents();

// Display the HTML content in a specific element (e.g., with id "technicalEventsList")
document.getElementById('technicalEventsList').innerHTML = allTechnicalEventsListHTML;
