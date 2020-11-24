const rows = 
{
    tourist_arrivals: { section: 'ecs_tourist_arrivals', initRow: 0, numRows: 11 },
    tourist_arrivals_acc: { section: 'ecs_tourist_arrivals', initRow: 15, numRows: 11 },
    despesa_turistes: { section: 'ecs_spending', initRow: 31, numRows: 11 },
    despesa_turistes_acc: { section: 'ecs_spending', initRow: 45, numRows: 11 },
    depesa_turistes_total: { section: 'ecs_spending', initRow: 61, numRows: 5 },
    despesa_turistes_total_acc: { section: 'ecs_spending', initRow: 69, numRows: 5 },
    pernoctacions: { section: 'ecs_spending', initRow: 77, numRows: 6 },
    pernoctacions_acc: { section: 'ecs_spending', initRow: 85, numRows: 6 },
    pernoctacions_per_illa: { section: 'ecs_spending', initRow: 93, numRows: 6 },
    pernoctacions_per_illa_acc: { section: 'ecs_spending', initRow: 99, numRows: 4 },
    ocupacio: { section: 'ecs_occupancy', initRow: 0, numRows: 9 },
    air_passengers_arrivals: { section: 'ecs_air_passengers_arrivals', initRow: 0, numRows: 11 },
    air_passengers_arrivals_acc: { section: 'ecs_air_passengers_arrivals', initRow: 16, numRows: 11 },
    cruise_passengers_arrivals_autoritat_portuaria: { section: 'ecs_sea_passengers_arrivals', initRow: 1, numRows: 6 },
    cruise_passengers_arrivals_ports: { section: 'ecs_sea_passengers_arrivals', initRow: 7, numRows: 6 },
    cruise_passengers_arrivals_acc_autoritat_portuaria: { section: 'ecs_sea_passengers_arrivals', initRow: 16, numRows: 6 },
    cruise_passengers_arrivals_acc_ports: { section: 'ecs_sea_passengers_arrivals', initRow: 22, numRows: 6 },
    sea_passengers_arrivals_autoritat_portuaria: { section: 'ecs_sea_passengers_arrivals', initRow: 29, numRows: 6 },
    sea_passengers_arrivals_ports: { section: 'ecs_sea_passengers_arrivals', initRow: 37, numRows: 3 },
    sea_passengers_arrivals_acc_autoritat_portuaria: { section: 'ecs_sea_passengers_arrivals', initRow: 41, numRows: 6 },
    sea_passengers_arrivals_acc_ports: { section: 'ecs_sea_passengers_arrivals', initRow: 49, numRows: 3 },
    energy_demand: { section: 'ens_energy_demand', titleRow: 0, columnRow: 1, dataRows: [2] },
    human_pressure: { section: 'ens_human_pressure', titleRow: 0, columnRow: 1, dataRows: [2, 3, 4] },
    affiliates: { section: 'sos_affiliates', initRow: 0, initColumn: 0 },
    unemployed: { section: 'sos_unemployed', initRow: 14, numRows: 1 },
    temporality: { section: 'sos_temporality', initRow: 19, numRows: 1 },
    companies: { section: 'sos_companies', initRow: 0, initColumn: 10 }
};
  
module.exports = { rows };
