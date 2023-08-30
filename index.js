const express = require('express');
const path = require('path');
const app = express();


// Functions from routes directory
const scraper = require('./src/routes/web-scraping.js'); 
const g_query_scraper = require('./src/routes/web-scraping.js');


const staticPath = path.resolve(__dirname, './static');
app.use(express.static(staticPath));

app.get('/', (req, res)=>{
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

// Web scraping functionality
app.get('/web-scraping', async (req, res)=> {
    try {

        let content = await g_query_scraper()
        console.log(content)

    } catch(error){ 
        console.error('Error al ejecutar el scraper:', error);
        res.status(500).send('Error al ejecutar el scraper');
    } 
})

/*
app.get('/probe', (req, res)=>{
    readFile('./src/Python/temp/result.txt', 'utf-8', (err, data)=>{
        if(err){ throw err };
        console.log(data)
    })
}) */

app.listen(3000)
console.log(`Server on port ${3000}`);

