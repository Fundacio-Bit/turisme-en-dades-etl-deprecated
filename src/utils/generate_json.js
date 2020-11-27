numbro = require("numbro");
languages = require("numbro/dist/languages.min");
Object.values(languages).forEach((l) => numbro.registerLanguage(l));
numbro.setLanguage("es-ES");

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const getTitle = (data, title_row, sub_title_row, separator) => {
    var title = '';
    if (title_row) 
        if (title_row.key != null) {
            title = Object.keys(data[title_row['numRow']])[title_row.key];
        } else if (title_row.value != null) {
            title = Object.values(data[title_row['numRow']])[title_row.value]
        }

    if (sub_title_row) 
        if (sub_title_row.key != null) {
            title = title + separator + Object.keys(data[sub_title_row['numRow']])[sub_title_row.key]
        } else if (sub_title_row.value != null) {
            title = title + separator + Object.values(data[sub_title_row['numRow']])[sub_title_row.value]
        }
    console.log('Title: ', title)
    return title
}


const getColumns= (data, column_row) => {
    var columns = [];
    Object.values(data[column_row.numRow]).forEach(item => columns.push({'ca':item}))
    console.log('Columns: ', columns.slice(column_row.initColumn, column_row.initColumn + column_row.numColumns))
    return columns.slice(column_row.initColumn, column_row.initColumn + column_row.numColumns);
}

const getFooter= (data, row) => {
    var footer = [];
    Object.values(data[row]).forEach(item => footer.push({'ca':item}))
    console.log('Footer: ', footer)
    return footer;
}

const getRows= (data, input_rows, num_columns, hasHeader) => {
    var rows = [];
    let from_row = input_rows.initRow;
    let to_row = from_row + input_rows.numRows;
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        Object.values(data[i]).forEach(item => {
            let value = isFinite(item)?
                numbro(round(item, 1)).format({thousandSeparated: true}) 
                : item
            all_values.push(value)
        })
        let column_name = '';
        all_values = all_values.slice(input_rows.initColumn, input_rows.initColumn + num_columns + 1)
        if (hasHeader){
            let values = all_values.shift();
            column_name = Object.values(data[i])[input_rows.initColumn]
        }
        rows.push({'name': {'ca': column_name}, 'values':all_values})
    }
    console.log('Rows: ', rows)
    return rows;
}

setDataGrid = (month, title, section, chart, columns, rows, footer) => {
    var dataObj = {
        "month": month,
        "title": {
            "ca": title
        },
        "section": section,
        "chart_id": chart,
        "columns": columns,
        "rows": rows,
        "footer": footer
    }
    return dataObj;
}

const getDataSingleTable = (data, month, section, chart, title_row, sub_title_row, column_row, footer_row, rows) => {
    var title = getTitle(data, title_row, sub_title_row, '/');

    var columns = getColumns(data, column_row);

    var rows = getRows(data, rows, column_row.numColumns, false); 
    
    var footer = footer_row? getFooter(data, footer_row) : []

    return setDataGrid(month, title, section, chart, columns, rows, footer);
}

const getTableDataECS = (data, month, section, chart, title_row, sub_title_row, init_row, num_rows, footer_row) => {
    var title = getTitle(data, title_row, sub_title_row, ' - ');

    var columns = [];
    Object.values(data[0]).slice(2).forEach(item => columns.push({'ca':item}))
    var rows = [];
    var to_row = init_row + num_rows
    for (let i = init_row; i < to_row; i++) {
        let all_values =[];
        if (i === init_row || i===to_row-1) {
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
    var footer = footer_row? getFooter(data, footer_row) : []
    return setDataGrid(month, title, section, chart, columns, rows, footer);
}

const getTableDataECSAcc = (data, month, section, chart, title_row, sub_title_row, init_row, num_rows, footer_row) => {
    var title = getTitle(data, title_row, sub_title_row, ' - ');

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
    var footer = footer_row? getFooter(data, footer_row) : []
    return setDataGrid(month, title, section, chart, columns, rows, footer);
}

const getDataSeaPassengersArrivalsAP = (data, month, section, chart, title_row, sub_title_row, init_row, num_rows, footer_row) => {
    var title = getTitle(data, title_row, sub_title_row, ' - ');

    // var title = Object.values(data[init_row])[0] + ' - '  + Object.values(data[init_row + 2])[0];
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
    var footer = footer_row? getFooter(data, footer_row) : []
    return setDataGrid(month, title, section, chart, columns, rows, footer);
}

const getDataSeaPassengersArrivalsP = (data, month, section, chart, title_row, sub_title_row, init_row, num_rows, footer_row ) => {
    var title = getTitle(data, title_row, sub_title_row, ' - ');
    // var title =  Object.values(data[title_row])[0] + ' - '  + Object.values(data[init_row])[0];
    var columns = [];
    Object.values(data[title_row.numRow + 1]).forEach(item => columns.push({'ca':item}))
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
    var footer = footer_row? getFooter(data, footer_row) : []
    return setDataGrid(month, title, section, chart, columns, rows, footer);
}

/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */

const getTableAcc = (data, month, section, chart, title_row, column_row, data_rows, footer_row, isFirst) => {
    var title = getTitle(data, title_row);
    if (isFirst) {
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
    var footer = footer_row? getFooter(data, footer_row) : []
    return setDataGrid(month, title, section, chart, columns, rows, footer);
}


module.exports = { getDataSingleTable,getTableDataECS, getTableDataECSAcc, getDataSeaPassengersArrivalsAP, 
    getDataSeaPassengersArrivalsP, getTableAcc }