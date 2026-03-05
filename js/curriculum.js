// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    const curriculumData = [
        {
            week: "Week 1-3",
            title: "HTML5 & CSS3 Mastery",
            topics: [
                "Tags, Colors, Links, Tables, Lists, Frames",
                "CSS Selectors, Box Model (Margin/Padding)",
                "Flexbox & Grid Layouts",
                "Responsive Design Principles"
            ],
            project: "Project: Online Portfolio with Code & AI"
        },
        {
            week: "Week 4-6",
            title: "JavaScript (Basic to Advance)",
            topics: [
                "Variables, Loops, Arrays, Objects",
                "DOM Manipulation & Events",
                "Functions, Callbacks, Promises, Async/Await",
                "ES6+ Features, Local Storage, Cookies"
            ],
            project: "Logic Building & Interactive UI"
        },
        {
            week: "Week 7-9",
            title: "PHP & Backend Engineering",
            topics: [
                "Variables, Conditionals, Loops, Strings",
                "Functions, Classes (OOP)",
                "Session Management & File Uploads",
                "CRUD with PHP & MySQL, AJAX, API"
            ],
            project: "Dynamic Website Implementation"
        },
        {
            week: "Week 10-12",
            title: "AI Integration & Final Projects",
            topics: [
                "Login System with API",
                "Basic E-commerce Functionality",
                "AI Assistant using LLM API Integration",
                "Quiz Application"
            ],
            project: "Final Certification + Internship"
        }
    ];

    // Select the container
    const container = document.getElementById('curriculum-container');

    // Check if container exists to prevent errors
    if (container) {
        let htmlContent = ''; // String builder method for better performance

        curriculumData.forEach(item => {
            // Generate List Items
            const topicsHtml = item.topics.map(topic => `<li>${topic}</li>`).join('');

            // Generate Card HTML
            htmlContent += `
                <div class="curriculum-card">
                    <div class="card-header">
                        <span class="card-week">${item.week}</span>
                        <h3>${item.title}</h3>
                    </div>
                    <div class="card-body">
                        <h4>Topics:</h4>
                        <ul class="card-topics">
                            ${topicsHtml}
                        </ul>
                        <div class="project-badge">
                            ${item.project}
                        </div>
                    </div>
                </div>
            `;
        });

        // Inject all HTML at once
        container.innerHTML = htmlContent;
    } else {
        console.error("Error: Element with id 'curriculum-container' not found!");
    }

});