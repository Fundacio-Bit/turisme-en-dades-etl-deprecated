numbro = require("numbro");
languages = require("numbro/dist/languages.min");
Object.values(languages).forEach((l) => numbro.registerLanguage(l));
numbro.setLanguage("es-ES");

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const getTitle = (data, title_row, sub_title_row) => {
    var title = '';
    if (title_row) 
        if (title_row.key != null) {
            title = Object.keys(data[title_row['numRow']])[title_row.key];
        } else if (title_row.value != null) {
            title = Object.values(data[title_row['numRow']])[title_row.value]
        }

    if (sub_title_row) 
        if (sub_title_row.key != null) {
            title = title + sub_title_row.separator + Object.keys(data[sub_title_row['numRow']])[sub_title_row.key]
        } else if (sub_title_row.value != null) {
            title = title + sub_title_row.separator + Object.values(data[sub_title_row['numRow']])[sub_title_row.value]
        }
    console.log('Title: ', title)
    return title
}


const getColumns= (data, column_row) => {
    var columns = [];
    Object.values(data[column_row.numRow]).forEach(item => columns.push({'ca':item}))
    console.log('Columns: ', columns.slice(column_row.initValue, column_row.initValue + column_row.numColumns))
    return columns.slice(column_row.initValue, column_row.initValue + column_row.numColumns);
}

const getFooter= (data, row) => {
    var footer = [];
    Object.values(data[row]).forEach(item => {
        if (item !== '' && item !== ' ')
            footer.push({'ca':item})
    })
    console.log('Footer: ', footer)
    return footer;
}

const getRows= (data, input_rows, num_columns) => {
    var rows = [];

    const getRowValues = (obj_values, input_rows, num_columns) => {
        obj_values.forEach((item, index) => {
            let value = isFinite(item)?
                input_rows.percentColumns && input_rows.percentColumns.includes(index)?
                    numbro(round(item*100,1)).format({thousandSeparated: true}) // + '%'
                    :numbro(round(item, 1)).format({thousandSeparated: true}) 
                : item
            all_values.push(value)
        })
        let column_name = '';
        let num_columns_total = input_rows.hasHeader ? num_columns + 1 : num_columns
        all_values = all_values.slice(input_rows.initValue, input_rows.initValue + num_columns_total)
        if (input_rows.hasHeader){
            let values = all_values.shift();
            column_name = obj_values[input_rows.initValue]
        }
        return all_values, column_name;
    }
    
    if(input_rows.firstRow) {
        let all_values =[];
        var obj_values = Object.values(data[input_rows.firstRow.initRow])
            .slice(input_rows.firstRow.initValue, input_rows.firstRow.initValue + num_columns);
        
        obj_values.forEach((item, index) => {
            let value = isFinite(item)?
                input_rows.percentColumns && input_rows.percentColumns.includes(index)?
                    numbro(round(item*100,1)).format({thousandSeparated: true}) // + '%'
                    :numbro(round(item, 1)).format({thousandSeparated: true}) 
                : item
            all_values.push(value)
        })
        let num_columns_total = input_rows.hasHeader ? num_columns + 1 : num_columns
        all_values = all_values.slice(input_rows.initValue, input_rows.initValue + num_columns_total)
        if (input_rows.hasHeader){
            let values = all_values.shift();
            column_name = obj_values[input_rows.initValue]
        }
        rows.push({'name': {'ca': column_name}, 'values':all_values})
    }
    let from_row = input_rows.initRow;
    let to_row = from_row + input_rows.numRows;
    for (let i = from_row; i < to_row; i++) {
        let all_values =[];
        var obj_values = Object.values(data[i]);
        if (input_rows.hasTitle && i === from_row)
            obj_values = Object.values(data[i]).slice(1);

        obj_values.forEach((item, index) => {
            let value = isFinite(item)?
                input_rows.percentColumns && input_rows.percentColumns.includes(index)?
                    numbro(round(item*100,1)).format({thousandSeparated: true}) // + '%'
                    :numbro(round(item, 1)).format({thousandSeparated: true}) 
                : item
            all_values.push(value)
        })
        let column_name = '';
        let num_columns_total = input_rows.hasHeader ? num_columns + 1 : num_columns
        all_values = all_values.slice(input_rows.initValue, input_rows.initValue + num_columns_total)
        if (input_rows.hasHeader){
            let values = all_values.shift();
            column_name = obj_values[input_rows.initValue]
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

const generateDataGrid = (data, month, section, chart, title_row, sub_title_row, column_row, footer_row, rows) => {
    var title = getTitle(data, title_row, sub_title_row);

    var columns = getColumns(data, column_row);

    var rows = getRows(data, rows, column_row.numColumns); 
    
    var footer = footer_row? getFooter(data, footer_row) : []

    return setDataGrid(month, title, section, chart, columns, rows, footer);
}


module.exports = { generateDataGrid }