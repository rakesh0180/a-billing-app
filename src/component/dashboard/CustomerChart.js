import { GoogleCharts } from 'google-charts';
import React from 'react';

const CustomerChart = ({customers, bills}) => {

    const totalCustomers = customers.length;
    const obj = {}
    bills.forEach(ele=>{
        if(obj[ele.customer]){
            obj[ele.customer]=obj[ele.customer] + 1
        } else {
            obj[ele.customer]=1
        }
    })
    const returningCustomers = Object.values(obj).filter(ele=>ele>1).length

    GoogleCharts.load(drawChart);

    function drawChart() {
    const data = GoogleCharts.api.visualization.arrayToDataTable([
        ['multiple orders', 'one order'],
        ['frequent customers', returningCustomers],
        ['total customers', totalCustomers]
    ]);

    const options = {
        backgroundColor: 'white',
        pieHole: 0.4,
        title:'Frequent Customers'
    }

    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('piechart'));
    pie_1_chart.draw(data, options);
    }

    return (
        <div>
            <div id="piechart" style={{height:'350px', width:'380px', boxShadow: '0 5px 5px -5px #888888'}}></div>
        </div>
    )
}

export default CustomerChart