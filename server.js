// const express = require('express');
// const app = express();

// app.get('/api', (req, res) => {

//     const currentDate = now.toISOString().slice(0, 19) + 'Z';
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const currentDay = daysOfWeek[new Date().getDay()];

//     // Get the current UTC time
//     const now = new Date();
//     now.setMinutes(now.getMinutes() - 2); // Adjust for +/-2 minutes
//     const utcTime = now.toISOString();


//     //git file
//     const githubFileUrl = 'https://github.com/samad13/HNG/blob/master/server.js';

//     //git repo
//     const githubRepoUrl = 'https://github.com/samad13/HNG';

//     const response = {
//         slack_name,
//         current_day: currentDay,
//         utc_time: currentDate,
//         track,
//         github_file_url: githubFileUrl,
//         github_repo_url: githubRepoUrl,
//         status_code: 200
//     }
//     res.json(response)
// })













// const port = process.env.PORT || 3000

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });




const express = require('express');
const app = express();

// Define a route that handles GET requests
app.get('/api', (req, res) => {
    // Parse query parameters
    const { slack_name, track } = req.query;

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];

    // Get the current UTC time
    const now = new Date();
    now.setMinutes(now.getMinutes() - 2); // Adjust for +/-2 minutes
    const utcTime = now.toISOString();

    // Construct the JSON response
    const response = {
        slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track,
        github_file_url: ''https://github.com/samad13/HNG/blob/master/server.js',
            github_repo_url: 'https://github.com/samad13/HNG',
        status_code: 200,
    };

    // Send the JSON response
    res.json(response);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
