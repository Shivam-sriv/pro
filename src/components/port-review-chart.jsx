import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
class PortfolioReviewChart extends Component {
componentDidMount() {
const hj = "satisfactory \n performance"
let chart = am4core.create("chartdiv", am4charts.PieChart3D);
if (chart.logo) { chart.logo.disabled = true; }
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
chart.data = [
{
category: "Switch",               
value: 30,
},
{
category: "Redemption ",              
value: 30
},
{
category: "Under Watch",              
value: 50
},
{
category: hj,      
value: 50
},
];
let series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "value";
series.dataFields.category = "category";
series.labels.template.text = "{category}";     
series.slices.template.tooltipText = `{value}:schemes `;
series.colors.list = [
new am4core.color('#FBDE80'),
new am4core.color('#F06D70'),
new am4core.color('#97C5FB'),
new am4core.color('#8BC34A'),
]
this.chart = chart;
}
componentWillUnmount() {
if (this.chart) {
this.chart.dispose();
}
}
render() {
return (
<div id="chartdiv" className='port-chart' style={{ width: "100%", height: "400px", fontSize: "13px" }}></div>
);
}
}
export default PortfolioReviewChart