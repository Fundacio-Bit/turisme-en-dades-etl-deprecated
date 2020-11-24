numbro = require("numbro");
languages = require("numbro/dist/languages.min");
Object.values(languages).forEach((l) => numbro.registerLanguage(l));
numbro.setLanguage("es-ES");

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}


const getTitle = (data, title_rows, columns, isValue, separator) => {
    var title = ''
    if (isValue) {
        columns.forEach(column, index) {
            title = index === 0?
                title + Object.values(data[title_row])[column]
                : title + separator + Object.values(data[title_row])[column]
        }
    
    } else {
        columns.forEach(column, index) {
            title = index === 0?
                title + Object.keys(data[title_row])[column]
                : title + separator + Object.values(data[title_row])[column]
        }
    }
    return title
}

        /**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getDataSingleTable = (data, month, section, init_row, num_rows, isTitleComposed) => {
    if (isTitleComposed)
        var title = Object.values(data[init_row])[0] + ' / ' + Object.values(data[init_row])[1];
    else
        var title = Object.values(data[init_row])[0];
    var columns = [];
    Object.values(data[init_row + 1]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    let from_row = init_row + 2;
    let to_row = from_row + num_rows;
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        Object.values(data[i]).forEach(item => {
            let value = isFinite(item)?
                numbro(round(item, 1)).format({thousandSeparated: true}) 
                : item
            all_values.push(value)
        })
        let values = all_values.shift();
        rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values})
    }
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "chart_id": chart,
        "columns": columns,
        "rows": rows
    }
    return dataObj;
}

/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getTableDataECS = (data, month, section, init_row, num_rows, title_row) => {
    if (title_row)
        var title =  Object.values(data[title_row])[1] + ' - ' +Object.values(data[init_row])[0] ;
    else
        var title =  Object.keys(data[init_row])[0] + ' - ' +Object.values(data[init_row])[0] ;
    var columns = [];
    Object.values(data[0]).slice(2).forEach(item => columns.push({'ca':item}))
    var rows = [];
    var to_row = init_row + num_rows
    for (let i = init_row; i < to_row; i++) {
        let all_values =[];
        if (i === init_row || (!title_row && i===to_row-1)) {
            Object.values(data[i]).slice(1).forEach((item, index) => {
                let value =  isFinite(item)?
                    index % 2 === 0 ? 
                        numbro(round(item*100,1)).format({thousandSeparated: true}) // + '%'
                        : numbro(round(item*100,0)).format({thousandSeparated: true})
                    : item
               all_values.push(value)
            })
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[1]}, 'values':all_values})
        } else {
            Object.values(data[i]).forEach((item, index) => {
                let value =  isFinite(item)?
                    index % 2 === 0 ? 
                        numbro(round(item*100,1)).format({thousandSeparated: true}) // + '%'
                        : numbro(round(item*100,0)).format({thousandSeparated: true})
                    : item
               all_values.push(value)
            })
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values});
        }
    }
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "columns": columns,
        "rows": rows
    }
    return dataObj;
}

/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getTableDataECSAcc = (data, month, section, init_row, num_rows, title_row) => {
    if (title_row)
        var title =  Object.values(data[title_row])[1] + ' - ' +Object.values(data[init_row])[0] ;
    else
        var title =  Object.keys(data[init_row])[0] + ' - ' +Object.values(data[init_row])[0] ;
    var columns = [];
    Object.values(data[0]).slice(2).forEach(item => columns.push({'ca':item}))
    var rows = [];
    var to_row = init_row + num_rows
    for (let i = init_row; i < to_row; i++) {
        let all_values =[];
        if (i === init_row || (!title_row && i===to_row-1)) {
            Object.values(data[i]).slice(1).forEach((item, index) => {
                let value =  isFinite(item)?
                    index % 2 !== 0 ? 
                        numbro(round(item,0)).format({thousandSeparated: true}) // + '%'
                        : numbro(round(item*100,1)).format({thousandSeparated: true})
                    : item
               all_values.push(value)
            })
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[1]}, 'values':all_values})
        } else {
            Object.values(data[i]).forEach((item, index) => {
                let value =  isFinite(item)?
                    index % 2 !== 0 ? 
                        numbro(round(item,0)).format({thousandSeparated: true}) // + '%'
                        : numbro(round(item*100,1)).format({thousandSeparated: true})
                    : item
               all_values.push(value)
            })
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values});
        }
    }
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "columns": columns,
        "rows": rows
    }
    return dataObj;
}

/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getDataSeaPassengersArrivalsAP = (data, month, section, init_row, num_rows) => {
    var title =  Object.values(data[init_row])[0] + ' - '  + Object.values(data[init_row + 2])[0];
    var columns = [];
    Object.values(data[init_row + 1]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    var from_row = init_row + 2;
    var to_row = from_row+ num_rows
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        if (i === from_row) {
            Object.values(data[i]).slice(1).forEach((item, index) => {
                let value =  isFinite(item)?
                    index % 2 !== 0 ? 
                        numbro(round(item,0)).format({thousandSeparated: true}) // + '%'
                        : numbro(round(item*100,1)).format({thousandSeparated: true})
                    : item
               all_values.push(value)
            })
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[1]}, 'values':all_values})
        } else {
            Object.values(data[i]).forEach((item, index) => {
                let value =  isFinite(item)?
                    index % 2 !== 0 ? 
                        numbro(round(item,0)).format({thousandSeparated: true}) // + '%'
                        : numbro(round(item*100,1)).format({thousandSeparated: true})
                    : item
               all_values.push(value)
            })
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values});
        }
    }
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "columns": columns,
        "rows": rows
    }
    return dataObj;
}

/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getDataSeaPassengersArrivalsP = (data, month, section, init_row, num_rows, title_row) => {
    var title =  Object.values(data[title_row])[0] + ' - '  + Object.values(data[init_row])[0];
    var columns = [];
    Object.values(data[title_row + 1]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    var to_row = init_row+ num_rows
    for (let i = init_row; i < to_row; i++) {
        let all_values =[];
        if (i === init_row) {
            Object.values(data[i]).slice(1).forEach((item, index) => {
                let value =  isFinite(item)?
                    index % 2 !== 0 ? 
                        numbro(round(item,0)).format({thousandSeparated: true}) // + '%'
                        : numbro(round(item*100,1)).format({thousandSeparated: true})
                    : item
               all_values.push(value)
            })
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[1]}, 'values':all_values})
        } else {
            Object.values(data[i]).forEach((item, index) => {
                let value =  isFinite(item)?
                    index % 2 !== 0 ? 
                        numbro(round(item,0)).format({thousandSeparated: true}) // + '%'
                        : numbro(round(item*100,1)).format({thousandSeparated: true})
                    : item
               all_values.push(value)
            })
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values});
        }
    }
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "columns": columns,
        "rows": rows
    }
    return dataObj;
}

/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getDataOccupancy = (data, month, section, init_row, num_rows) => {
    var title = Object.keys(data[init_row + 1])[0];
    var columns = [];
    Object.values(data[init_row]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    let from_row = init_row + 1;
    let to_row = from_row + num_rows;
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        Object.values(data[i]).forEach(item => {
            let value = typeof(item) === 'string'
                ? item 
                : numbro(round(item,1)).format({thousandSeparated: true})
            all_values.push(value)
        })
        let values = all_values.shift();
        rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values.slice(0, 8)})
    }
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "columns": columns.slice(0,8),
        "rows": rows
    }
    return dataObj;
}

/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getDataOccupancyAcc = (data, month, section, init_row, num_rows) => {
    var title = Object.keys(data[init_row + 1])[9];
    var columns = [];
    Object.values(data[init_row]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    let from_row = init_row + 1;
    let to_row = from_row + num_rows;
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        Object.values(data[i]).forEach(item => {
            let value = typeof(item) === 'string'
                ? item 
                : numbro(round(item,1)).format({thousandSeparated: true})
            all_values.push(value)
        })
        let values = all_values.shift();
        rows.push({'name': {'ca': Object.values(data[i])[9]}, 'values':all_values.slice(9)})
    }
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "columns": columns.slice(8),
        "rows": rows.slice(0,2)
    }
    return dataObj;
}

const getTableAcc = (data, month, section, title_row, column_row, data_rows, isFirst) => {
    if (isFirst) {
        var title = Object.values(data[title_row])[0];
        var columns = [];
        Object.values(data[column_row]).slice(0, 10).forEach(item => columns.push({'ca':item}))
        var rows = [];
        data_rows.forEach(row => {
            let all_values =[];
            Object.values(data[row]).slice(0, 10).forEach(item => {
                let value = typeof(item) === 'string'
                    ? item 
                    : item > 100
                        ? numbro(round(item,0)).format({thousandSeparated: true})
                        : numbro(round(item,1)).format({thousandSeparated: true})
                all_values.push(value)
            })
            rows.push({'name': {'ca': ''}, 'values': all_values})
        }) 
    } else {
        var title = Object.values(data[title_row])[1];
        var columns = [];
        Object.values(data[column_row]).slice(11,13).forEach(item => columns.push({'ca':item}))
        var rows = [];
        var isFirstRow = true
        data_rows.forEach(row => {
            let all_values =[];
            if(isFirstRow){
                Object.values(data[row]).slice(11, 13).forEach(item => {
                    let value = typeof(item) === 'string'
                        ? item 
                        : item > 100
                        ? numbro(round(item,0)).format({thousandSeparated: true})
                        : numbro(round(item,1)).format({thousandSeparated: true})
                    all_values.push(value)
                })
                rows.push({'name': {'ca': Object.values(data[row])[10]}, 'values': all_values})
                isFirstRow = false;
            } else {
                Object.values(data[row]).forEach(item => {
                    let value = typeof(item) === 'string'
                        ? item 
                        : item > 100
                        ? numbro(round(item,0)).format({thousandSeparated: true})
                        : numbro(round(item,1)).format({thousandSeparated: true})
                    all_values.push(value)
                    })
                let values = all_values.shift();
                rows.push({'name': {'ca': Object.values(data[row])[0]}, 'values': all_values.slice(0,2)})
            }
        }) 
    }

    var dataObj ={
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "columns": columns,
        "rows": rows
    }
    return dataObj;
}

/**
 * 
 * @param {Object} data 
 * @param {Number} init_row 
 * @param {Number} init_column 
 */
const getTableDataSOS = (data, month, section, init_row, init_column) => {
    var title = Object.keys(data[init_row])[init_column];

    var columns = [];
    Object.values(data[init_row]).slice(init_column, init_column + 10).forEach(item => columns.push({'ca':item}))

    var rows = [];
    var values =[];
    Object.values(data[init_row + 1]).slice(init_column, init_column + 10).forEach(item => {
        let value = typeof(item) === 'string'
            ? item 
            : numbro(round(item,1)).format({thousandSeparated: true})
        values.push(value)
    })
    rows.push({'name': {'ca': ''}, 'values': values})
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "columns": columns,
        "rows": rows
    }
    return dataObj;
}


module.exports = { getDataSingleTable,getTableDataECS, getTableDataECSAcc, getDataSeaPassengersArrivalsAP, 
    getDataSeaPassengersArrivalsP, getDataOccupancy, getDataOccupancyAcc, getTableAcc, getTableDataSOS }