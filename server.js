const express = require('express');
const app = express();

app.get('/api', (req, res) => {  

    const currentDate = now.toISOString().slice(0, 19) + 'Z';
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get the current UTC time
  const now = new Date();
  now.setMinutes(now.getMinutes() - 2); // Adjust for +/-2 minutes
  const utcTime = now.toISOString();

    //git file
    const githubFileUrl = 'https://github.com/samad13/HNG/blob/master/server.js';

    //git repo
    const githubRepoUrl = 'https://github.com/samad13/HNG';

    const response = {
        slack_name:req.query,
        current_Day: currentDay,
        utc_time: utcTime,
        track:req.query,
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
