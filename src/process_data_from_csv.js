const fs = require('fs');
const csv = require('fast-csv');

const fs = require('fs');
const csv = require('fast-csv');

function readFiles(inputFilesPath, month) {
  const promises = inputFilesPath.map((path) => {
    console.log("Reading " + path);
    var brand = path.match(/_(.*?)_/)[1];
    return new Promise((resolve) => {
      var dataObj = {};
      return csv
          .parseFile(path, {delimiter: ';', skipLines: 2})
          .on('data', function(data) {
            if (data[0] === month) {
                dataObj = {
                    "title": {
                      "ca": "Despesa dels turistes"
                    },
                    "columns": [
                      {
                        "ca": brand
                      },
                      {
                        "ca": "% VAR. 20/19"
                      }
                    ],
                    "rows": [
                      {
                        "name": {
                          "ca": "Espanya"
                        },
                        "values": [data[2], 0]
                      },
                      {
                        "name": {
                          "ca": "Alemanya"
                        },
                        "values": [data[9], 0]
                      },
                      {
                        "name": {
                          "ca": "França"
                        },
                        "values": [data[5], 0]
                      },
                    ]
                  }
              }
          })
          .on('end', function() {
            resolve(dataObj);
          });
    });
  });

  return Promise.all(promises)
      .then((results) => {
        console.table(JSON.stringify(results))
      });
}




const csvToJson = (inputFilesPath, month) => {
    let inputFilesList = []
    fs.readdirSync(inputFilesPath).forEach(file => {
      inputFilesList.push(inputFilesPath + file);
    });
    readFiles(inputFilesList, month)
    .then(() => 
        console.log('DONE!')
    );
}

module.exports = { csvToJson };
