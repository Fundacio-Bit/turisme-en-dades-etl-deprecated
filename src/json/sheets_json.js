
const sections=['TURISTES-DESPESA', 'OCUPACIÓ', 'AERI', 'MARÍTIM', 'AMBIENTAL', 'SOCIAL']

const rows = 
{
    // TURISTES-DESPESA
    // ----------------
    tourist_arrivals: { 
        section: 'ecs_tourist_arrivals', chart:'ecs_tourist_arrivals_total', 
        titleRow: {numRow: 0, key: null, value: 0}, 
        columnRow: {numRow: 1, initValue: 0, numColumns: 8 },
        rows: {initRow: 2, initValue: 0, numRows: 11, hasHeader: true },
        footerRow: 13 },

    tourist_arrivals_acc: { 
        section: 'ecs_tourist_arrivals', chart:'ecs_tourist_arrivals_cumulative', 
        titleRow: {numRow: 14, key: null, value: 0},
        columnRow: {numRow: 15, initValue: 0, numColumns: 8 },
        rows: {initRow: 16, initValue: 0, numRows: 11, hasHeader: true },
        footerRow: 27 },
    
    spending: { 
        section: 'ecs_spending', chart:'ecs_spending_countries_total',
        titleRow: {numRow: 28, key: null, value: 0}, 
        columnRow: {numRow: 29, initValue: 0, numColumns: 8 },
        rows: {initRow: 30, initValue: 0, numRows: 11, hasHeader: true },
        footerRow: 41 },
    
    spending_acc: { 
        section: 'ecs_spending', chart:'ecs_spending_countries_cumulative',
        titleRow: {numRow: 42, key: null, value: 0}, 
        columnRow: {numRow: 43, initValue: 0, numColumns: 8 },
        rows: {initRow: 44, initValue: 0, numRows: 11, hasHeader: true },
        footerRow: 55 },
    
    spending_total: { 
        section: 'ecs_spending', chart:'ecs_spending_islands_total',
        titleRow: {numRow: 56, key: null, value: 0}, 
        columnRow: {numRow: 57, initValue: 0, numColumns: 8 },
        rows: {initRow: 58, initValue: 0, numRows: 5, hasHeader: true },
        footerRow: 63 },
    
    spending_total_acc: { 
        section: 'ecs_spending', chart:'ecs_spending_islands_cumulative',
        titleRow: {numRow: 64, key: null, value: 0}, 
        columnRow: {numRow: 65, initValue: 0, numColumns: 8 },
        rows: {initRow: 66, initValue: 0, numRows: 5, hasHeader: true },
        footerRow: 71 },
    
    spending_stays: { 
        section: 'ecs_spending', chart:'ecs_spending_stays_countries_total',
        titleRow: {numRow: 72, key: null, value: 0}, 
        columnRow: {numRow: 73, initValue: 0, numColumns: 4 },
        rows: {initRow: 74, initValue: 0, numRows: 6, hasHeader: true },
        footerRow: null },
    
    spending_stays_acc: { 
        section: 'ecs_spending', chart:'ecs_spending_stays_countries_cumulative',
        titleRow: {numRow: 80, key: null, value: 0}, 
        columnRow: {numRow: 81, initValue: 0, numColumns: 4 },
        rows: {initRow: 82, initValue: 0, numRows: 6, hasHeader: true },
        footerRow: null },
    
    spending_stays_islands: { 
        section: 'ecs_spending', chart:'ecs_spending_stays_islands_total',
        titleRow: {numRow: 88, key: null, value: 0}, 
        columnRow: {numRow: 89, initValue: 0, numColumns: 4 },
        rows: {initRow: 90, initValue: 0, numRows: 4, hasHeader: true },
        footerRow: null },
    
    spending_stays_islands_acc: { 
        section: 'ecs_spending', chart:'ecs_spending_stays_islands_cumulative',
        titleRow: {numRow: 94, key: null, value: 0},
        columnRow: {numRow: 95, initValue: 0, numColumns: 4 },
        rows: {initRow: 96, initValue: 0, numRows: 4, hasHeader: true },
        footerRow: null },
    
    // OCUPACIO
    // ----------------
    occupancy: { 
        section: 'ecs_occupancy', chart:'ecs_occupancy_total',
        titleRow: {numRow: 1, key: 0, value: null}, 
        columnRow: {numRow: 0, initValue: 0, numColumns: 8 },
        rows: {initRow: 1, initValue: 0, numRows: 9, hasHeader: true },
        footerRow: 10 
    },
    
    occupancy_acc: { 
        section: 'ecs_occupancy', chart:'ecs_occupancy_cumulative',
        titleRow: {numRow: 1, key: 9, value: null}, 
        columnRow: {numRow: 0, initValue: 8, numColumns: 8 },
        rows: {initRow: 1, initValue: 9, numRows: 2, hasHeader: true },
        footerRow: 10 },

    // AERI
    // ----
    air_passengers_arrivals: { 
        section: 'ecs_air_passengers_arrivals', chart:'ecs_air_passengers_arrivals_total',
        titleRow: {numRow: 0, key: null, value: 0}, 
        columnRow: {numRow: 1, initValue: 0, numColumns: 8 },
        rows: {initRow: 2, initValue: 0, numRows: 11, hasHeader: true },
        footerRow: 13 },

    air_passengers_arrivals_acc: { 
        section: 'ecs_air_passengers_arrivals', chart:'ecs_air_passengers_arrivals_cumulative',
        titleRow: {numRow: 14, key: null, value: 0}, 
        columnRow: {numRow: 15, initValue: 0, numColumns: 8 },
        rows: {initRow: 16, initValue: 0, numRows: 11, hasHeader: true },
        footerRow: 27 },
    
    // MARITIM
    // -------

    cruise_passengers_arrivals_autoritat_portuaria: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_ap_total',
        titleRow: {numRow: 1, key: 0, value: null},
        subTitleRow: {numRow: 1, key: null, value: 0, separator: '-'}, 
        columnRow: {numRow: 0, initValue: 1, numColumns: 4 },
        rows: {initRow: 1, initValue: 0, numRows: 6, hasHeader: true, hasTitle: true, percentColumns: [2, 4] },
        footerRow: 13
    },
    
    cruise_passengers_arrivals_ports: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_pib_total',
        titleRow: {numRow: 7, key: 0, value: null},
        subTitleRow: {numRow: 7, key: null, value: 0, separator: '-'}, 
        columnRow: {numRow: 0, initValue: 1, numColumns: 4 },
        rows: {initRow: 7, initValue: 0, numRows: 6, hasHeader: true, hasTitle: true, percentColumns: [2, 4] },
        footerRow: 13
    },

    cruise_passengers_arrivals_acc_autoritat_portuaria: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_ap_cumulative',
        titleRow: {numRow: 14, key: null, value: 0},
        subTitleRow: {numRow: 1, key: null, value: 0, separator: '-'}, 
        columnRow: {numRow: 15, initValue: 0, numColumns: 4 },
        rows: {initRow: 16, initValue: 0, numRows: 6, hasHeader: true, hasTitle: true, percentColumns: [2, 4] },
        footerRow: 28
    },

    cruise_passengers_arrivals_acc_ports: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_pib_cumulative',
        titleRow: {numRow: 14, key: null, value: 0},
        subTitleRow: {numRow: 7, key: null, value: 0, separator: '-'}, 
        columnRow: {numRow: 15, initValue: 0, numColumns: 4 },
        rows: {initRow: 22, initValue: 0, numRows: 6, hasHeader: true, hasTitle: true, percentColumns: [2, 4] },
        footerRow: 28
    },

    sea_passengers_arrivals_autoritat_portuaria: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_ap_total',
        titleRow: {numRow: 29, key: null, value: 0},
        subTitleRow: {numRow: 1, key: null, value: 0, separator: '-'}, 
        columnRow: {numRow: 30, initValue: 0, numColumns: 2 },
        rows: {initRow: 31, initValue: 0, numRows: 6, hasHeader: true, hasTitle: true, percentColumns: [2] },
        footerRow: 40
    },

    sea_passengers_arrivals_ports: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_pib_total',
        titleRow: {numRow: 29, key: null, value: 0},
        subTitleRow: {numRow: 7, key: null, value: 0, separator: '-'}, 
        columnRow: {numRow: 30, initValue: 0, numColumns: 2 },
        rows: {initRow: 37, initValue: 0, numRows: 3, hasHeader: true, hasTitle: true, percentColumns: [2] },
        footerRow: 40
    },

    sea_passengers_arrivals_acc_autoritat_portuaria: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_ap_cumulative',
        titleRow: {numRow: 41, key: null, value: 0},
        subTitleRow: {numRow: 1, key: null, value: 0, separator: '-'}, 
        columnRow: {numRow: 42, initValue: 0, numColumns: 2 },
        rows: {initRow: 43, initValue: 0, numRows: 6, hasHeader: true, hasTitle: true, percentColumns: [2] },
        footerRow: 52
    },

    sea_passengers_arrivals_acc_ports: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_pib_cumulative',
        titleRow: {numRow: 41, key: null, value: 0},
        subTitleRow: {numRow: 7, key: null, value: 0, separator: '-'}, 
        columnRow: {numRow: 42, initValue: 0, numColumns: 2 },
        rows: {initRow: 49, initValue: 0, numRows: 3, hasHeader: true, hasTitle: true, percentColumns: [2] },
        footerRow: 52
    },

    // AMBIENTAL
    // ---------
    energy_demand: { 
        section: 'ens_energy_demand', chart:'ens_energy_total',
        titleRow: {numRow: 0, key: null, value: 0},
        columnRow: {numRow: 1, initValue: 0, numColumns: 10 },
        rows: {initRow: 2, initValue: 0, numRows: 1 },
        footerRow: null
    },

    human_pressure: { 
        section: 'ens_human_pressure', chart:'ens_human_pressure_total',
        titleRow: {numRow: 3, key: null, value: 0},
        columnRow: {numRow: 4, initValue: 1, numColumns: 2 },
        rows: { firstRow: {initRow: 5, initValue: 1, hasHeader: true },
                initRow: 6, initValue: 0, numRows: 2, hasHeader: true },
        footerRow: 16
    },

    // SOCIAL
    // ------
    affiliates: { 
        section: 'sos_affiliates', chart:'sos_affiliates',
        titleRow: {numRow: 0, key: 0, value: null}, 
        columnRow: {numRow: 0, initValue: 0, numColumns: 10 },
        rows: {initRow: 1, initValue: 0, numRows: 1, hasHeader: false },
        footerRow: null },

    unemployed: { 
        section: 'sos_unemployed', chart:'sos_unemployed',
        titleRow: {numRow: 8, key: null, value: 0},
        subTitleRow: {numRow: 8, key: null, value: 1, separator: '/'},
        columnRow: {numRow: 9, initValue: 0, numColumns: 2 },
        rows: {initRow: 10, initValue: 0, numRows: 1, hasHeader: true },
        footerRow: null },

    temporality: {
        section: 'sos_temporality', chart:'sos_temporality',
        titleRow: {numRow: 11, key: null, value: 0},
        subTitleRow: {numRow: 11, key: null, value: 1, separator: '/'}, 
        columnRow: {numRow: 12, initValue: 0, numColumns: 2 },
        rows: {initRow: 13, initValue: 0, numRows: 1, hasHeader: true },
        footerRow: 14 },

    companies: { 
        section: 'sos_companies', chart:'sos_companies',
        titleRow: {numRow: 0, key: 10, value: null}, 
        columnRow: {numRow: 0, initValue: 0, numColumns: 10 },
        rows: {initRow: 1, initValue: 10, numRows: 1, hasHeader: false },
        footerRow: null },
};

module.exports = { sections, rows };
