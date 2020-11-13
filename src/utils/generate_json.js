

const getDataSingleTable = (data, init_row, num_rows) => {
    var title = Object.values(data[init_row])[0];
    var columns = [];
    Object.values(data[init_row + 1]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    let from_row = init_row + 2;
    let to_row = from_row + num_rows;
    for (let i = from_row; i <= to_row; i++) {
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

const getDataOcupacio = (data, init_row, num_rows) => {
    var title = Object.keys(data[init_row + 1])[0];
    var columns = [];
    Object.values(data[init_row]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    let from_row = init_row + 1;
    let to_row = from_row + num_rows;
    for (let i = from_row; i <= to_row; i++) {
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

const getDataOcupacioAcc = (data, init_row, num_rows) => {
    var title = Object.keys(data[init_row + 1])[9];
    var columns = [];
    Object.values(data[init_row]).forEach(item => columns.push({'ca':item}))
    var rows = [];
    let from_row = init_row + 1;
    let to_row = from_row + num_rows;
    for (let i = from_row; i <= to_row; i++) {
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

module.exports = { getDataSingleTable, getDataOcupacio, getDataOcupacioAcc }