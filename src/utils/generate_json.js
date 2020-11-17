
/**
 * 
 * @param {Object} data 
 * @param {number} init_row 
 * @param {number} num_rows 
 */
const getDataSingleTable = (data, init_row, num_rows) => {
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

module.exports = { getDataSingleTable,getDataDoubleTable, getDataOcupacio, getDataOcupacioAcc }