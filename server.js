const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    const daysOfTheWeek = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday", "FRiday", "Saturday"];

    const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
    const now = new Date();


    const currentDate = now.toISOString().slice(0, 19) + 'Z';

    //git file
    const githubFileUrl = 'https://github.com/samad13/HNG/blob/master/server.js';

    //git repo
    const githubRepoUrl = 'https://github.com/samad13/HNG';

    const response = {
        slack_name,
        currentDay: currentDay,
        utc_time: currentDate,
        track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200
    }
    res.json(response)
})













const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
