const fs = require('fs');
const csv = require('fast-csv');

function readFiles(inputFilesPath, month) {
  var monthString = month.split('-')[0] + 'M' + month.split('-')[1];
  var previousMonthString = (month.split('-')[0] - 1) + 'M' + month.split('-')[1];
  const promises = inputFilesPath.map((path) => {
    console.log("Reading " + path);
    var brand = path.match(/_(.*?)_/)[1];
    return new Promise((resolve) => {
      var dataObj = {};
      var dataArray = [];
      return csv
          .parseFile(path, {delimiter: ';', skipLines: 2})
          .on('data', function(data) {
              dataObj = {
                  "brand": brand,
                  "data": data
              }
              if (data[0] === monthString || data[0] === previousMonthString)
                dataArray.push(dataObj);
          })
          .on('end', function() {
            resolve(dataArray);
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
