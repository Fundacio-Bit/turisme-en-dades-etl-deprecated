
const sections=['TURISTES-DESPESA', 'OCUPACIÓ', 'AERI', 'MARÍTIM', 'AMBIENTAL', 'SOCIAL']

const rows = 
{
    tourist_arrivals: { section: 'ecs_tourist_arrivals', chart:'ecs_tourist_arrivals_total', initRow: 0, numRows: 11 },
    tourist_arrivals_acc: { section: 'ecs_tourist_arrivals', chart:'ecs_tourist_arrivals_cumulative', initRow: 15, numRows: 11 },
    spending: { section: 'ecs_spending', chart:'ecs_spending_countries_total', initRow: 31, numRows: 11 },
    spending_acc: { section: 'ecs_spending', chart:'ecs_spending_countries_cumulative', initRow: 45, numRows: 11 },
    spending_total: { section: 'ecs_spending', chart:'ecs_spending_islands_total', initRow: 61, numRows: 5 },
    spending_total_acc: { section: 'ecs_spending', chart:'ecs_spending_islands_cumulative', initRow: 69, numRows: 5 },
    spending_stays: { section: 'ecs_spending', chart:'ecs_spending_stays_countries_total', initRow: 77, numRows: 6 },
    spending_stays_acc: { section: 'ecs_spending', chart:'ecs_spending_stays_countries_cumulative', initRow: 85, numRows: 6 },
    spending_stays_islands: { section: 'ecs_spending', chart:'ecs_spending_stays_islands_total', initRow: 93, numRows: 6 },
    spending_stays_islands_acc: { section: 'ecs_spending', chart:'ecs_spending_stays_islands_cumulative', initRow: 99, numRows: 4 },
    occupancy: { section: 'ecs_occupancy', chart:'ecs_occupancy_total', initRow: 0, numRows: 9 },
    occupancy_acc: { section: 'ecs_occupancy', chart:'ecs_occupancy_cumulative', initRow: 0, numRows: 9 },
    air_passengers_arrivals: { section: 'ecs_air_passengers_arrivals', chart:'ecs_air_passengers_arrivals_total', initRow: 0, numRows: 11 },
    air_passengers_arrivals_acc: { section: 'ecs_air_passengers_arrivals', chart:'ecs_air_passengers_arrivals_cumulative', initRow: 16, numRows: 11 },
    cruise_passengers_arrivals_autoritat_portuaria: { section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_ap_total', initRow: 1, numRows: 6 },
    cruise_passengers_arrivals_ports: { section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_pib_total', initRow: 7, numRows: 6 },
    cruise_passengers_arrivals_acc_autoritat_portuaria: { section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_ap_cumulative', initRow: 16, numRows: 6 },
    cruise_passengers_arrivals_acc_ports: { section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_cruises_pib_cumulative', initRow: 22, numRows: 6 },
    sea_passengers_arrivals_autoritat_portuaria: { section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_ap_total', initRow: 29, numRows: 6 },
    sea_passengers_arrivals_ports: { section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_pib_total', initRow: 37, numRows: 3 },
    sea_passengers_arrivals_acc_autoritat_portuaria: { section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_ap_cumulative', initRow: 41, numRows: 6 },
    sea_passengers_arrivals_acc_ports: { section: 'ecs_sea_passengers_arrivals', chart:'ecs_sea_passengers_arrivals_regular_pib_cumulative', initRow: 49, numRows: 3 },
    energy_demand: { section: 'ens_energy_demand', chart:'ens_energy_total', titleRow: 0, columnRow: 1, dataRows: [2] },
    human_pressure: { section: 'ens_human_pressure', chart:'ens_human_pressure_total', titleRow: 0, columnRow: 1, dataRows: [2, 3, 4] },
    affiliates: { section: 'sos_affiliates', chart:'sos_affiliates', initRow: 0, initColumn: 0 },
    unemployed: { section: 'sos_unemployed', chart:'sos_unemployed', initRow: 14, numRows: 1 },
    temporality: { section: 'sos_temporality', chart:'sos_temporality', initRow: 19, numRows: 1 },
    companies: { section: 'sos_companies', chart:'sos_companies', initRow: 0, initColumn: 10 }
};
  
module.exports = { sections, rows };
