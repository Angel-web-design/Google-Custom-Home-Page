const fs = require('fs/promises');
const { exec } = require('child_process');
const path = require('path');
const { stringify } = require('querystring');


const DIRECTORY = path.join(
    'E:','Archivos','Code','Code','JavaScript','Works','Custom-g-page','src','Python','index.py'
);
const FILE_DIRECTORY = path.join(
    'E:','Archivos','Code','Code','JavaScript','Works','Custom-g-page','src','Python', 'temp', 'result.txt'
)

/*
async function g_query_scraper(){
    const result = await scraper()

    async function scraper(){
        await exec(`python ${directory}`, (error, stdout, stderr)=>{
            if (error) {
                console.error(`Error al ejecutar el script de Python: ${error.message}`);
                return;
              }
            if (stderr) {
                console.error(`Error en la salida estándar de error: ${stderr}`);
                return;
            }
    
            
            console.log(`Python: ${stdout}`);
             

            let content = readFile(file_directory, 'utf-8', (err, data)=>{
                if(err){ throw err }
                return data
            })

            return content
        });
    }
    return result
}

module.exports = <g_query_scraper></g_query_scraper>

*/

async function g_query_scraper() 
{
    try 
    {
        const result = await scraper();
        return result;
    } catch (error) 
    {
        console.error(error);
        return null;
    }
}

async function scraper() {
    try 
    {
        let data = exec(`python ${DIRECTORY}`, async (error, stdout, stderr) => 
        {
            
            if(error) 
            {
                console.error(error);
            }
            
            if (stderr) 
            {
                console.error(`Error en la salida estándar de error: ${stderr.toString()}`);
                return null;
            }

            console.log(`Python: ${stdout}`);

            const content = await fs.readFile(FILE_DIRECTORY, 'utf-8', (err, data) => 
            {
                if (err) 
                { 
                    throw err; 
                }

                return stringify(data);
            });
            return content;
        });
        return data

    } catch (error) 
    {
        console.error(`Error al ejecutar el script de Python: ${error.message}`);
        return null;
    }
}

module.exports = g_query_scraper;
