
const sections=['TURISTES-DESPESA', 'OCUPACIÓ', 'AERI', 'MARÍTIM', 'AMBIENTAL', 'SOCIAL']

const rows = 
{
    // TURISTES-DESPESA
    // ----------------
    tourist_arrivals: { 
        section: 'ecs_tourist_arrivals', chart:'ecs_tourist_arrivals_total', 
        titleRow: {numRow: 0, key: null, value: 0}, 
        columnRow: {numRow: 1, initColumn: 0, numColumns: 8 },
        rows: {initRow: 2, initColumn: 0, numRows: 11 },
        footerRow: 13 },

    tourist_arrivals_acc: { 
        section: 'ecs_tourist_arrivals', chart:'ecs_tourist_arrivals_cumulative', 
        titleRow: {numRow: 15, key: null, value: 0},
        columnRow: {numRow: 1, initColumn: 0, numColumns: 8 },
        rows: {initRow: 17, initColumn: 0, numRows: 11 },
        footerRow: 28 },
    
    spending: { 
        section: 'ecs_spending', chart:'ecs_spending_countries_total',
        titleRow: {numRow: 31, key: null, value: 0}, 
        columnRow: {numRow: 46, initColumn: 0, numColumns: 8 },
        rows: {initRow: 33, initColumn: 0, numRows: 11 },
        footerRow: 44 },
    
    spending_acc: { 
        section: 'ecs_spending', chart:'ecs_spending_countries_cumulative',
        titleRow: {numRow: 45, key: null, value: 0}, 
        columnRow: {numRow: 46, initColumn: 0, numColumns: 8 },
        rows: {initRow: 47, initColumn: 0, numRows: 11 },
        footerRow: 58 },
    
    spending_total: { 
        section: 'ecs_spending', chart:'',
        titleRow: {numRow: 61, key: null, value: 0}, 
        columnRow: {numRow: 1, initColumn: 0, numColumns: 8 },
        rows: {initRow: 63, initColumn: 0, numRows: 5 },
        footerRow: 68 },
    
    spending_total_acc: { 
        section: 'ecs_spending', chart:'ecs_spending_islands_cumulative',
        titleRow: {numRow: 69, key: null, value: 0}, 
        columnRow: {numRow: 1, initColumn: 0, numColumns: 8 },
        rows: {initRow: 71, initColumn: 0, numRows: 5 },
        footerRow: 76 },
    
    spending_stays: { 
        section: 'ecs_spending', chart:'ecs_spending_stays_countries_total',
        titleRow: {numRow: 77, key: null, value: 0}, 
        columnRow: {numRow: 78, initColumn: 0, numColumns: 4 },
        rows: {initRow: 79, initColumn: 0, numRows: 6 },
        footerRow: null },
    
    spending_stays_acc: { 
        section: 'ecs_spending', chart:'ecs_spending_stays_countries_cumulative',
        titleRow: {numRow: 85, key: null, value: 0}, 
        columnRow: {numRow: 78, initColumn: 0, numColumns: 4 },
        rows: {initRow: 87, initColumn: 0, numRows: 6 },
        footerRow: null },
    
    spending_stays_islands: { 
        section: 'ecs_spending', chart:'ecs_spending_stays_islands_total',
        titleRow: {numRow: 93, key: null, value: 0}, 
        columnRow: {numRow: 78, initColumn: 0, numColumns: 4 },
        rows: {initRow: 95, initColumn: 0, numRows: 4 },
        footerRow: null },
    
    spending_stays_islands_acc: { 
        section: 'ecs_spending', chart:'ecs_spending_stays_islands_cumulative',
        titleRow: {numRow: 99, key: null, value: 0},
        columnRow: {numRow: 78, initColumn: 0, numColumns: 4 },
        rows: {initRow: 101, initColumn: 0, numRows: 4 },
        footerRow: null },
    
    // OCUPACIO
    // ----------------
    occupancy: { 
        section: 'ecs_occupancy', chart:'ecs_occupancy_total',
        titleRow: {numRow: 1, key: 0, value: null}, 
        columnRow: {numRow: 0, initColumn: 0, numColumns: 8 },
        rows: {initRow: 1, initColumn: 0, numRows: 9 },
        footerRow: 10 
    },
    
    occupancy_acc: { 
        section: 'ecs_occupancy', chart:'ecs_occupancy_cumulative',
        titleRow: {numRow: 1, key: 9, value: null}, 
        columnRow: {numRow: 0, initColumn: 8, numColumns: 8 },
        rows: {initRow: 1, initColumn: 9, numRows: 2 },
        footerRow: 10 },

    // AERI
    // ----
    air_passengers_arrivals: { 
        section: 'ecs_air_passengers_arrivals', chart:'ecs_air_passengers_arrivals_total',
        titleRow: {numRow: 0, key: null, value: 0}, 
        columnRow: {numRow: 1, initColumn: 0, numColumns: 8 },
        rows: {initRow: 2, initColumn: 0, numRows: 11 },
        footerRow: 13 },

    air_passengers_arrivals_acc: { 
        section: 'ecs_air_passengers_arrivals', chart:'ecs_air_passengers_arrivals_cumulative',
        titleRow: {numRow: 16, key: null, value: 0}, 
        columnRow: {numRow: 1, initColumn: 0, numColumns: 8 },
        rows: {initRow: 18, initColumn: 0, numRows: 11 },
        footerRow: 29 },
    
    // MARITIM
    // -------

    cruise_passengers_arrivals_autoritat_portuaria: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_ap_total',
        titleRow: {numRow: 1, key: 0, value: null}, subTitleRow: {numRow: 1, key: null, value: 0}, 
        columnRow: 0, numColumns: 0, initRow: 1, initColumn: 0, numRows: 6 },
    
    cruise_passengers_arrivals_ports: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_pib_total',
        titleRow: {numRow: 7, key: 0, value: null}, subTitleRow: {numRow: 7, key: null, value: 0}, 
        columnRow: 0, numColumns: 0, initRow: 7, initColumn: 0, numRows: 6 },

    cruise_passengers_arrivals_acc_autoritat_portuaria: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_ap_cumulative',
        titleRow: {numRow: 14, key: null, value: 1}, subTitleRow: {numRow: 1, key: null, value: 0}, 
        columnRow: 0, numColumns: 0, initRow: 16, initColumn: 0, numRows: 6 },

    cruise_passengers_arrivals_acc_ports: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_pib_cumulative',
        titleRow: {numRow: 14, key: null, value: 1}, subTitleRow: {numRow: 7, key: null, value: 0}, 
        columnRow: 0, numColumns: 0, initRow: 22, initColumn: 0, numRows: 6 },

    sea_passengers_arrivals_autoritat_portuaria: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_ap_total',
        titleRow: {numRow: 29, key: null, value: 0}, subTitleRow: {numRow: 1, key: null, value: 0}, 
        columnRow: 1, numColumns: 0, initRow: 29, initColumn: 0, numRows: 6 },

    sea_passengers_arrivals_ports: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_pib_total',
        titleRow: {numRow: 29, key: null, value: 0}, subTitleRow: {numRow: 7, key: null, value: 0}, 
        columnRow: 1, numColumns: 0, initRow: 37, initColumn: 0, numRows: 3 },

    sea_passengers_arrivals_acc_autoritat_portuaria: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_ap_cumulative',
        titleRow: {numRow: 41, key: null, value: 0}, subTitleRow: {numRow: 1, key: null, value: 0}, 
        columnRow: 1, numColumns: 0, initRow: 41, initColumn: 0, numRows: 6 },

    sea_passengers_arrivals_acc_ports: { 
        section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_pib_cumulative',
        titleRow: {numRow: 41, key: null, value: 0}, subTitleRow: {numRow: 7, key: null, value: 0}, 
        columnRow: 1, numColumns: 0, initRow: 49, initColumn: 0, numRows: 3 },

    energy_demand: { 
        section: 'ens_energy_demand', chart:'ens_energy_total',
        titleRow: {numRow: 0, key: null, value: 0}, columnRow: 1, dataRows: [2] },

    human_pressure: { 
        section: 'ens_human_pressure', chart:'ens_human_pressure_total',
        titleRow: {numRow: 0, key: null, value: 1}, columnRow: 1, dataRows: [2, 3, 4] },

    affiliates: { 
        section: 'sos_affiliates', chart:'sos_affiliates',
        titleRow: {numRow: 0, key: 0, value: null}, columnRow: 0, numColumns: 0, initRow: 0, initColumn: 0 },

    unemployed: { 
        section: 'sos_unemployed', chart:'sos_unemployed',
        titleRow: {numRow: 14, key: null, value: 0}, subTitleRow: {numRow: 14, key: null, value: 1},
        columnRow: {numRow: 0, initColumn: 0, numColumns: 2 },
        rows: {initRow: 16, initColumn: 0, numRows: 1 },
        footerRow: null },

    temporality: {
        section: 'sos_temporality', chart:'sos_temporality',
        titleRow: {numRow: 19, key: null, value: 0}, subTitleRow: {numRow: 19, key: null, value: 1}, 
        columnRow: {numRow: 0, initColumn: 0, numColumns: 2 },
        rows: {initRow: 21, initColumn: 0, numRows: 1 },
        footerRow: null },

    companies: { 
        section: 'sos_companies', chart:'sos_companies',
        titleRow: {numRow: 5, key: 0, value: null}, columnRow: 0, numColumns: 0, initRow: 0, initColumn: 10 }
};

module.exports = { sections, rows };
