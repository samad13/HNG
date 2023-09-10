const express = require('express');
const app = express();
const moment = require('moment')
const headSetter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')

    next()
}

app.use(headSetter)

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query

    const current_day = moment().day()
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const utc_time = moment.utc().format()

    const github_file_url = 'https://github.com/samad13/HNG/blob/master/server.js'
    const github_repo_url = 'https://github.com/samad13/HNG'
    const responseObject = {
        slack_name:`${slack_name}`,
        current_day: weekDays[current_day],
        utc_time,
        track:`${track}`,
        github_file_url,
        github_repo_url,
        status_code: 200
    }

    res.status(200).json(responseObject)
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
