
/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getDataSingleTable = (data, init_row, num_rows, isTitleComposed) => {
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
        Object.values(data[i]).forEach(item => all_values.push(item.toString()))
        let values = all_values.shift();
        rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values})
    }
    var dataObj = 
        {
        "title": {
            "ca": title
        },
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
const getDataDoubleTable = (data, init_row, num_rows, title_row) => {
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
            Object.values(data[i]).slice(1).forEach(item => 
                isFinite(item) 
                    ? all_values.push((item*100).toString())
                    : all_values.push((item))
            )
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[1]}, 'values':all_values})
        } else {
            Object.values(data[i]).forEach(item => 
                isFinite(item) 
                    ? all_values.push((item*100).toString())
                    : all_values.push((item))
            )
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values});
        }
    }
    var dataObj = 
        {
        "title": {
            "ca": title
        },
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
const getDataSeaPassengersArrivalsAP = (data, init_row, num_rows) => {
    var title =  Object.values(data[init_row])[0] + ' - '  + Object.values(data[init_row + 2])[0];
    var columns = [];
    Object.values(data[init_row + 1]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    var from_row = init_row + 2;
    var to_row = from_row+ num_rows
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        if (i === from_row) {
            Object.values(data[i]).slice(1).forEach(item => 
                isFinite(item) 
                    ? all_values.push((item).toString())
                    : all_values.push((item))
            )
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[1]}, 'values':all_values})
        } else {
            Object.values(data[i]).forEach(item => 
                isFinite(item) 
                    ? all_values.push((item).toString())
                    : all_values.push((item))
            )
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values});
        }
    }
    var dataObj = 
        {
        "title": {
            "ca": title
        },
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
const getDataSeaPassengersArrivalsP = (data, init_row, num_rows, title_row) => {
    var title =  Object.values(data[title_row])[0] + ' - '  + Object.values(data[init_row])[0];
    var columns = [];
    Object.values(data[title_row + 1]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    var to_row = init_row+ num_rows
    for (let i = init_row; i < to_row; i++) {
        let all_values =[];
        if (i === init_row) {
            Object.values(data[i]).slice(1).forEach(item => 
                isFinite(item) 
                    ? all_values.push((item).toString())
                    : all_values.push((item))
            )
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[1]}, 'values':all_values})
        } else {
            Object.values(data[i]).forEach(item => 
                isFinite(item) 
                    ? all_values.push((item).toString())
                    : all_values.push((item))
            )
            let values = all_values.shift();
            rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values});
        }
    }
    var dataObj = 
        {
        "title": {
            "ca": title
        },
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
const getDataOcupacio = (data, init_row, num_rows) => {
    var title = Object.keys(data[init_row + 1])[0];
    var columns = [];
    Object.values(data[init_row]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    let from_row = init_row + 1;
    let to_row = from_row + num_rows;
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        Object.values(data[i]).forEach(item => all_values.push(item.toString()))
        let values = all_values.shift();
        rows.push({'name': {'ca': Object.values(data[i])[0]}, 'values':all_values.slice(0, 8)})
    }
    var dataObj = 
        {
        "title": {
            "ca": title
        },
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
const getDataOcupacioAcc = (data, init_row, num_rows) => {
    var title = Object.keys(data[init_row + 1])[9];
    var columns = [];
    Object.values(data[init_row]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    let from_row = init_row + 1;
    let to_row = from_row + num_rows;
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        Object.values(data[i]).forEach(item => all_values.push(item.toString()))
        let values = all_values.shift();
        rows.push({'name': {'ca': Object.values(data[i])[9]}, 'values':all_values.slice(9)})
    }
    var dataObj = 
        {
        "title": {
            "ca": title
        },
        "columns": columns.slice(8),
        "rows": rows.slice(0,2)
    }
    return dataObj;
}

const getTableAcc = (data, title_row, column_row, data_rows, isFirst) => {
    if (isFirst) {
        var title = Object.values(data[title_row])[0];
        var columns = [];
        Object.values(data[column_row]).slice(0, 10).forEach(item => columns.push({'ca':item}))
        var rows = [];
        data_rows.forEach(row => {
            let all_values =[];
            Object.values(data[row]).slice(0, 10).forEach(item => all_values.push(item.toString()))
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
                    Object.values(data[row]).slice(11, 13).forEach(item => all_values.push(item.toString()))
                    rows.push({'name': {'ca': Object.values(data[row])[10]}, 'values': all_values})
                    isFirstRow = false;
                } else {
                    Object.values(data[row]).forEach(item => all_values.push(item.toString()))
                    let values = all_values.shift();
                    rows.push({'name': {'ca': Object.values(data[row])[0]}, 'values': all_values.slice(0,2)})
                }
            }) 
        }

    var dataObj = 
        {
        "title": {
            "ca": title
        },
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
const getTableDataSOS = (data, init_row, init_column) => {
    var title = Object.keys(data[init_row])[init_column];

    var columns = [];
    Object.values(data[init_row]).slice(init_column, init_column + 10).forEach(item => columns.push({'ca':item}))

    var rows = [];
    var values =[];
    Object.values(data[init_row + 1]).slice(init_column, init_column + 10).forEach(item => values.push(item.toString()))
    rows.push({'name': {'ca': ''}, 'values': values})
    var dataObj = 
        {
        "title": {
            "ca": title
        },
        "columns": columns,
        "rows": rows
    }
    return dataObj;
}


module.exports = { getDataSingleTable,getDataDoubleTable, getDataSeaPassengersArrivalsAP, 
    getDataSeaPassengersArrivalsP, getDataOcupacio, getDataOcupacioAcc, getTableAcc, getTableDataSOS }