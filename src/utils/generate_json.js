numbro = require("numbro");
languages = require("numbro/dist/languages.min");
Object.values(languages).forEach((l) => numbro.registerLanguage(l));
numbro.setLanguage("es-ES");

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

/**
 * Gets the title of the table.
 * 
 * Some tables have a subtitle.
 * 
 * The title sometimes comes as a key and other times as a value.
 * 
 * @param {Object} data 
 * @param {Object} title_row 
 * @param {Object} sub_title_row 
 */
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
    // console.log('Title: ', title)
    return title
}


/**
 *  Gets the columns of the table.
 * 
 * @param {Object} data 
 * @param {Object} column_row 
 */
const getColumns= (data, column_row) => {
    var columns = [];
    Object.values(data[column_row.numRow]).forEach(item => columns.push({'ca':item}))
    // console.log('Columns: ', columns.slice(column_row.initValue, column_row.initValue + column_row.numColumns))
    return columns.slice(column_row.initValue, column_row.initValue + column_row.numColumns);
}

/**
 *  Gets the footer of the table.
 * 
 * @param {Object} data 
 * @param {Object} row 
 */
const getFooter= (data, row) => {
    var footer = [];
    Object.values(data[row]).forEach(item => {
        if (item !== '' && item !== ' ')
            footer.push({'ca':item})
    })
    // console.log('Footer: ', footer)
    return footer;
}

/**
 *  Gets the rows of the table.
 * 
 * @param {Object} data 
 * @param {Object} input_rows 
 * @param {Number} num_values 
 */
const getRows= (data, input_rows, num_values) => {
    var rows = [];

    const getRowValues = (obj_values, input_rows, num_values) => {
        let values =[];
        obj_values.forEach((item, index) => {
            let value = isFinite(item)?
                input_rows.percentColumns && input_rows.percentColumns.includes(index)?
                    numbro(round(item*100,1)).format({thousandSeparated: true}) // + '%'
                    :numbro(round(item, 1)).format({thousandSeparated: true}) 
                : item
            values.push(value)
        })
        let name = '';
        values = values.slice(input_rows.initValue, input_rows.initValue + num_values)
        if (input_rows.hasHeader){
            values.shift();
            name = obj_values[input_rows.initValue]
        }
        return {"name": name, "values": values};
    }


    let num_values_total = input_rows.hasHeader ? num_values + 1 : num_values
    if(input_rows.firstRow) {
        var obj_values = Object.values(data[input_rows.firstRow.initRow])
            .slice(input_rows.firstRow.initValue, input_rows.firstRow.initValue + num_values_total);
        row = getRowValues(obj_values, input_rows, num_values_total)
        rows.push({'name': {'ca': row.name}, 'values':row.values})
    }
    let from_row = input_rows.initRow;
    let to_row = from_row + input_rows.numRows;
    for (let i = from_row; i < to_row; i++) {
        var obj_values = Object.values(data[i]);
        if (input_rows.hasTitle && i === from_row)
            obj_values = Object.values(data[i]).slice(1);
        row = getRowValues(obj_values, input_rows, num_values_total)
        rows.push({'name': {'ca': row.name}, 'values': row.values})
    }
    // console.log('Rows: ', rows)
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

/**
 * Transforms an json with the data from the spreadsheet into another json with the format required 
 * to store it in the database. The output json represents a table in the document.
 * 
 * @param {Object} data 
 * @param {String} month 
 * @param {String} section 
 * @param {String} chart 
 * @param {Object} title_row 
 * @param {Object} sub_title_row 
 * @param {Object} column_row 
 * @param {String*} footer_row 
 * @param {Object} rows 
 */
const generateDataGrid = (data, month, section, chart, title_row, sub_title_row, column_row, footer_row, rows) => {
    // Get "title" field
    var title = getTitle(data, title_row, sub_title_row);

    // Get "columns" field
    var columns = getColumns(data, column_row);

    // Get "rows" field
    var rows = getRows(data, rows, column_row.numColumns); 
    
    // Get "footer" field
    var footer = footer_row? getFooter(data, footer_row) : []

    // Transforms input data object into output format
    return setDataGrid(month, title, section, chart, columns, rows, footer);
}


module.exports = { generateDataGrid }