 window.onload = drawCharts;
 window.onresize = drawCharts;
 google.charts.load('current', {
     callback: drawCharts,
     packages: ['bar', 'corechart', 'table', 'line']
 });

 function drawCharts() {
     drawA1();
     drawA1b();
     drawA1c();
     drawA16();
     drawC1();
     drawB7();
     drawB9r3();
     drawB9r5();
     drawB9r5b();
     drawB7r14();
     drawE1r2();
     drawC2();
     drawC2b();
     drawE1r14();
     drawE1r6();
     drawE1b();
     drawC9();
     drawC11();
     drawC12();
     drawC8();
     drawE7();
     drawE8();
     drawB11();
     drawE1r15();
     drawE1r17();
 }

 function drawE1r15() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Agree (%)');
     data.addColumn('number', 'Disagree (%)');
     data.addColumn('number', "Don't know (%)");
     data.addColumn('number', 'Neutral (%)');
     data.addRows([
      [new Date(2020, 5, 1), 8, 69, 2, 22], [new Date(2020, 5, 28), 7, 71, 2, 20], [new Date(2020, 6, 22), 5, 81, 1, 12], [new Date(2020, 7, 17), 6, 79, 1, 14], [new Date(2020, 8, 15), 7, 77, 1, 15]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('E1r15'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('E1r15-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawE1r17() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Agree (%)');
     data.addColumn('number', 'Disagree (%)');
     data.addColumn('number', "Don't know (%)");
     data.addColumn('number', 'Neutral (%)');
     data.addRows([
      [new Date(2020, 5, 1), 9, 58, 4, 29], [new Date(2020, 5, 28), 9, 52, 4, 35], [new Date(2020, 6, 22), 10, 54, 3, 34], [new Date(2020, 7, 17), 9, 55, 3, 33], [new Date(2020, 8, 15), 11, 56, 2, 31]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('E1r17'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('E1r17-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawB11() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Visited with friends and family indoors (%)');
     data.addColumn('number', 'Shopped at a mall (%)');
     data.addColumn('number', 'Sat inside a bar or restaurant (%)');
     data.addColumn('number', 'Had a backyard gathering (%)');
     data.addColumn('number', 'Sat on a restaurant patio (%)');
     data.addRows([
      [new Date(2020, 6, 22), 55, 37, 22, 37, 22], [new Date(2020, 7, 17), 56, 40, 29, 39, 29], [new Date(2020, 8, 15), 58, 45, 34, 34, 30]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('B11'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('B11-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawE8() {
     var data = google.visualization.arrayToDataTable([
      ["Event", "Likely (6-7) (%)"],
      ["Go to a small outdoor gathering", 48],
      ["Eat in a restaurant", 40],
      ["Shop at the mall", 40],
      ["Start/continue saving for retirement", 28],
      ["Go to a farmer’s market", 27],
      ["Go to a birthday party indoors", 24],
      ["Allow in-home renovations", 21],
      ["Stay in a hotel or resort", 20],
      ["Make a major purchase", 20],
      ["Send my kids to school and/or daycare", 15],
      ["Go to a theatre", 14],
      ["Take public transit", 14],
      ["Go to the gym or other fitness facilities", 13],
      ["Go to a bar, lounge, night club or pub", 12],
      ["Fly on a plane", 12],
      ["Go to a museum or art gallery", 11],
      ["Take a taxi or use a ride sharing service", 11],
      ["Start/cont. saving for child's education", 11],
      ["Go to my place of worship", 10],
      ["Go to a large gathering", 8],
      ["Travel to the U.S.", 7]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         bar: {
             groupWidth: '60%'
         },
         backgroundColor: 'none',
         chartArea: {
             height: '90%',
             width: '60%',
             top: 50,
             left: '30%'
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             textStyle: {
                 color: '#333333'
             }
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         isStacked: false
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('E8'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('E8-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawE7() {
     var data = google.visualization.arrayToDataTable([
      ["Measure", "End now/don't extend (%)", "Extend 1-3 weeks (%)", "Extend 1-6 months (%)", "Extend 6+ months (%)", "Dont know (%)"],
      ["Closure of the Canada/U.S. border", 6, 5, 29, 58, 2],
      ["Physical distancing", 6, 7, 30, 55, 2],
      ["Cancelling large gatherings", 8, 9, 37, 43, 3],
      ["International travel restrictions (not incl. U.S.)", 9, 8, 34, 44, 4],
      ["Restricting access to long-term care facilities", 28, 15, 27, 17, 12],
      ["Closing of schools and daycare centres", 44, 11, 20, 12, 13],
      ["Closing of non-essential services", 52, 12, 16, 11, 9],
      ["Closing of outdoor spaces", 56, 11, 16, 11, 6]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 50,
             bottom: 50,
             right: 50,
             left: '30%'
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             maxLines: 3
         },
         isStacked: true
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     NumberFormat.format(data, 2);
     NumberFormat.format(data, 3);
     NumberFormat.format(data, 4);
     NumberFormat.format(data, 5);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         },
                     2,
         {
             calc: "stringify",
             sourceColumn: 2,
             type: "string",
             role: "annotation"
         },
                     3,
         {
             calc: "stringify",
             sourceColumn: 3,
             type: "string",
             role: "annotation"
         },
                     4,
         {
             calc: "stringify",
             sourceColumn: 4,
             type: "string",
             role: "annotation"
         },
                     5,
         {
             calc: "stringify",
             sourceColumn: 5,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('E7'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('E7-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawC8() {
     var data = google.visualization.arrayToDataTable([
      ["Statement", "Agree (%)", "Neutral (%)", "Disagree (%)"],
      ["When I think about getting vaccinated, I weigh benefits and risks to make the best decision possible.", 58, 33, 9],
      ["I am completely confident that vaccines are safe.", 43, 42, 15]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 50,
             bottom: 50,
             right: 50,
             left: '30%'
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             maxLines: 3
         },
         isStacked: true
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     NumberFormat.format(data, 2);
     NumberFormat.format(data, 3);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         },
                     2,
         {
             calc: "stringify",
             sourceColumn: 2,
             type: "string",
             role: "annotation"
         },
                     3,
         {
             calc: "stringify",
             sourceColumn: 3,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('C8'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('C8-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawC12() {
     var data = google.visualization.arrayToDataTable([
      ["Strategy", "Ranked as #1 (%)"],
      ["Protect those who are most vulnerable to severe illness and death from COVID-19", 48],
      ["Protect healthcare capacity", 30],
      ["Minimize spread of COVID-19, such as where outbreaks occur", 15],
      ["Protect critical infrastructure that are essential for the functioning of society and the economy", 7]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         bar: {
             groupWidth: '60%'
         },
         backgroundColor: 'none',
         chartArea: {
             height: '90%',
             width: '60%',
             top: 50,
             left: '30%'
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             textStyle: {
                 color: '#333333'
             }
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         isStacked: false
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('C12'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('C12-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawC11() {
     var data = google.visualization.arrayToDataTable([
      ["Wave", "Wave 8 (%)", "Wave 7 (%)"],
      ["Health care workers", 43, 40],
      ["Those with high-risk medical conditions", 17, 19],
      ["Frontline workers", 13, 16],
      ["Seniors/the elderly", 13, 12],
      ["Long-term care homes", 10, 10],
      ["Children", 3, 2]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         bar: {
             groupWidth: '60%'
         },
         backgroundColor: 'none',
         chartArea: {
             height: '90%',
             width: '60%',
             top: 50,
             left: '30%'
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             textStyle: {
                 color: '#333333'
             }
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         isStacked: false
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     NumberFormat.format(data, 2);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         },
                     2,
         {
             calc: "stringify",
             sourceColumn: 2,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('C11'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('C11-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawC9() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Yes (%)');
     data.addColumn('number', 'No (%)');
     data.addColumn('number', 'Don’t know (%)');
     data.addRows([
      [new Date(2020, 6, 22), 76, 12, 12], [new Date(2020, 7, 17), 78, 11, 11], [new Date(2020, 8, 15), 82, 8, 9]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('C9'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('C9-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawE1b() {
     var data = google.visualization.arrayToDataTable([
      ["Reason", "% (%)"],
      ["Not enough testing or research has been done", 35],
      ["Do not believe it will be safe and/or effective", 28],
      ["Do not trust the newness of the vaccine", 13],
      ["Do not trust the government", 9],
      ["Do not believe in vaccines", 5],
      ["Not needed (e.g. virus will naturally disappear)", 4],
      ["Fear of needles", 1]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         bar: {
             groupWidth: '60%'
         },
         backgroundColor: 'none',
         chartArea: {
             height: '90%',
             width: '60%',
             top: 50,
             left: '30%'
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             textStyle: {
                 color: '#333333'
             }
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         isStacked: false
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('E1b'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('E1b-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawE1r6() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Agree (%)');
     data.addColumn('number', 'Disagree (%)');
     data.addColumn('number', "Don't know (%)");
     data.addColumn('number', 'Neutral (%)');
     data.addRows([
      [new Date(2020, 5, 1), 53, 15, 8, 25], [new Date(2020, 5, 28), 54, 16, 7, 23], [new Date(2020, 6, 22), 55, 15, 7, 24], [new Date(2020, 7, 17), 49, 18, 8, 25], [new Date(2020, 8, 15), 49, 15, 7, 28]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('E1r6'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('E1r6-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawE1r14() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Agree (%)');
     data.addColumn('number', 'Disagree (%)');
     data.addColumn('number', 'Neutral (%)');
     data.addRows([
      [new Date(2020, 4, 10), 30, 32, 38], [new Date(2020, 5, 1), 27, 34, 33], [new Date(2020, 5, 28), 28, 35, 34], [new Date(2020, 6, 22), 32, 32, 32], [new Date(2020, 7, 17), 36, 30, 30], [new Date(2020, 8, 15), 36, 28, 32]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('E1r14'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('E1r14-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawC2b() {
     var data = google.visualization.arrayToDataTable([
      ["Age group", "Male (%)", "Female (%)"],
      ["18-34", 61, 73],
      ["35-54", 66, 78],
      ["55+", 68, 83]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         bar: {
             groupWidth: '60%'
         },
         backgroundColor: 'none',
         chartArea: {
             height: '90%',
             width: '60%',
             top: 50,
             left: '30%'
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             textStyle: {
                 color: '#333333'
             }
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         isStacked: false
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     NumberFormat.format(data, 2);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         },
                     2,
         {
             calc: "stringify",
             sourceColumn: 2,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('C2b'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('C2b-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawC2() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Government health agencies (%)');
     data.addColumn('number', 'Federal public health leaders (%)');
     data.addColumn('number', 'Government of Canada websites (%)');
     data.addColumn('number', 'Provincial health leaders (%)');
     data.addColumn('number', 'Daily press conferences (%)');
     data.addColumn('number', 'Public news channels (%)');
     data.addRows([
      [new Date(2020, 3, 15), 50, 52, 43, 57, 53, 44], [new Date(2020, 3, 25), 38, 39, 33, 45, 44, 34], [new Date(2020, 4, 10), 38, 39, 33, 48, 42, 33], [new Date(2020, 5, 1), 33, 35, 28, 42, 38, 30], [new Date(2020, 5, 28), 32, 30, 26, 38, 31, 29], [new Date(2020, 6, 22), 31, 31, 25, 39, 32, 28], [new Date(2020, 7, 17), 30, 30, 24, 36, 27, 28], [new Date(2020, 8, 15), 29, 29, 25, 36, 28, 28]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('C2'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('C2-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawA1c() {
     var data = google.visualization.arrayToDataTable([
      ["Perception", "The worst of the crisis is yet to come (%)"],
      ["AB + NT", 45],
      ["ATL", 48],
      ["BC + YK", 64],
      ["MB+SK+NU", 49],
      ["ON", 48],
      ["QC", 46]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         bar: {
             groupWidth: '60%'
         },
         backgroundColor: 'none',
         chartArea: {
             height: '90%',
             width: '60%',
             top: 50,
             left: '30%'
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             textStyle: {
                 color: '#333333'
             }
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         isStacked: false
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('A1c'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('A1c-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawA1b() {
     var data = google.visualization.arrayToDataTable([
      ["Perception", "The worst of the crisis is yet to come (%)"],
      ["18-34", 38],
      ["35-54", 50],
      ["55+", 57]
    ]);
     var options = {
         tooltip: {
             trigger: 'selection'
         },
         bar: {
             groupWidth: '60%'
         },
         backgroundColor: 'none',
         chartArea: {
             height: '90%',
             width: '60%',
             top: 50,
             left: '30%'
         },
         hAxis: {
             gridlines: {
                 count: 4
             },
             viewWindowMode: 'explicit',
             viewWindow: {
                 max: 100,
                 min: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         vAxis: {
             gridlines: {
                 count: 0
             },
             textStyle: {
                 color: '#333333',
                 fontSize: 14,
                 bold: false
             }
         },
         legend: {
             position: 'top',
             textStyle: {
                 color: '#333333'
             }
         },
         series: {
             0: {
                 color: '#173a58'
             },
             1: {
                 color: '#1F7CBA'
             },
             2: {
                 color: '#d83b43'
             },
             3: {
                 color: '#bf40b7'
             },
             4: {
                 color: '#4a7d76'
             },
             5: {
                 color: '#504d4d'
             }
         },
         isStacked: false
     };
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var NumberFormat = new google.visualization.NumberFormat(
         //You can explore various type of patterns in Documentation
         {
             pattern: '##'
         }
     );
     NumberFormat.format(data, 1);
     var view = new google.visualization.DataView(data);
     view.setColumns([0,
                     1,
         {
             calc: "stringify",
             sourceColumn: 1,
             type: "string",
             role: "annotation"
         }
                    ]);
     var chart = new google.visualization.BarChart(document.getElementById('A1b'));
     chart.draw(view, options);
     var table = new google.visualization.Table(document.getElementById('A1b-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawS1() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', '# Cases (%)');
     data.addRows([
      [new Date(2020, 2, 1), 900], [new Date(2020, 2, 3), 900], [new Date(2020, 2, 5), 1200], [new Date(2020, 2, 6), 600], [new Date(2020, 2, 7), 600], [new Date(2020, 2, 8), 500], [new Date(2020, 2, 9), 1500], [new Date(2020, 2, 11), 1200], [new Date(2020, 2, 12), 3800], [new Date(2020, 2, 13), 3800], [new Date(2020, 2, 14), 2000], [new Date(2020, 2, 15), 5400], [new Date(2020, 2, 16), 8800], [new Date(2020, 2, 17), 9900], [new Date(2020, 2, 18), 15700], [new Date(2020, 2, 19), 27600], [new Date(2020, 2, 20), 13100], [new Date(2020, 2, 21), 36700], [new Date(2020, 2, 22), 10000], [new Date(2020, 2, 23), 61800], [new Date(2020, 2, 24), 70100], [new Date(2020, 2, 25), 61600], [new Date(2020, 2, 26), 63400], [new Date(2020, 2, 27), 64600], [new Date(2020, 2, 28), 73500], [new Date(2020, 2, 29), 83300], [new Date(2020, 2, 30), 117900], [new Date(2020, 2, 31), 111100], [new Date(2020, 3, 1), 106500], [new Date(2020, 3, 2), 167000], [new Date(2020, 3, 3), 125400], [new Date(2020, 3, 4), 136700], [new Date(2020, 3, 5), 160800], [new Date(2020, 3, 6), 115500], [new Date(2020, 3, 7), 123000], [new Date(2020, 3, 8), 139200], [new Date(2020, 3, 9), 147600], [new Date(2020, 3, 10), 138300], [new Date(2020, 3, 11), 117000], [new Date(2020, 3, 12), 106500], [new Date(2020, 3, 13), 129700], [new Date(2020, 3, 14), 138300], [new Date(2020, 3, 15), 131600], [new Date(2020, 3, 16), 171300], [new Date(2020, 3, 17), 179200], [new Date(2020, 3, 18), 147000], [new Date(2020, 3, 19), 143200], [new Date(2020, 3, 20), 204500], [new Date(2020, 3, 21), 159100], [new Date(2020, 3, 22), 176800], [new Date(2020, 3, 23), 192000], [new Date(2020, 3, 24), 177800], [new Date(2020, 3, 25), 146600], [new Date(2020, 3, 26), 154100], [new Date(2020, 3, 27), 160500], [new Date(2020, 3, 28), 152600], [new Date(2020, 3, 29), 157100], [new Date(2020, 3, 30), 163800], [new Date(2020, 4, 1), 182500], [new Date(2020, 4, 2), 165300], [new Date(2020, 4, 3), 276000], [new Date(2020, 4, 4), 129900], [new Date(2020, 4, 5), 127400], [new Date(2020, 4, 6), 145000], [new Date(2020, 4, 7), 142600], [new Date(2020, 4, 8), 151200], [new Date(2020, 4, 9), 126800], [new Date(2020, 4, 10), 114600], [new Date(2020, 4, 11), 113300], [new Date(2020, 4, 12), 117600], [new Date(2020, 4, 13), 112100], [new Date(2020, 4, 14), 121000], [new Date(2020, 4, 15), 112500], [new Date(2020, 4, 16), 125100], [new Date(2020, 4, 17), 113800], [new Date(2020, 4, 18), 107000], [new Date(2020, 4, 19), 104000], [new Date(2020, 4, 20), 101100], [new Date(2020, 4, 21), 120100], [new Date(2020, 4, 22), 115600], [new Date(2020, 4, 23), 114100], [new Date(2020, 4, 24), 107800], [new Date(2020, 4, 25), 101200], [new Date(2020, 4, 26), 93600], [new Date(2020, 4, 27), 87200], [new Date(2020, 4, 28), 99300], [new Date(2020, 4, 29), 90600], [new Date(2020, 4, 30), 77200], [new Date(2020, 4, 31), 75700], [new Date(2020, 5, 1), 75800], [new Date(2020, 5, 2), 70500], [new Date(2020, 5, 3), 67500], [new Date(2020, 5, 4), 64100], [new Date(2020, 5, 5), 60900], [new Date(2020, 5, 6), 72200], [new Date(2020, 5, 7), 64200], [new Date(2020, 5, 8), 54500], [new Date(2020, 5, 9), 40900], [new Date(2020, 5, 10), 47200], [new Date(2020, 5, 11), 40500], [new Date(2020, 5, 12), 41300], [new Date(2020, 5, 13), 46700], [new Date(2020, 5, 14), 37700], [new Date(2020, 5, 15), 36000], [new Date(2020, 5, 16), 32000], [new Date(2020, 5, 17), 38600], [new Date(2020, 5, 18), 36700], [new Date(2020, 5, 19), 40900], [new Date(2020, 5, 20), 39000], [new Date(2020, 5, 21), 31800], [new Date(2020, 5, 22), 30000], [new Date(2020, 5, 23), 32600], [new Date(2020, 5, 24), 27900], [new Date(2020, 5, 25), 38000], [new Date(2020, 5, 26), 17200], [new Date(2020, 5, 27), 23800], [new Date(2020, 5, 28), 21800], [new Date(2020, 5, 29), 66800], [new Date(2020, 5, 30), 28600], [new Date(2020, 6, 2), 56700], [new Date(2020, 6, 3), 31900], [new Date(2020, 6, 4), 22600], [new Date(2020, 6, 5), 21900], [new Date(2020, 6, 6), 39900], [new Date(2020, 6, 7), 23200], [new Date(2020, 6, 8), 26700], [new Date(2020, 6, 9), 37100], [new Date(2020, 6, 10), 32100], [new Date(2020, 6, 11), 22100], [new Date(2020, 6, 12), 24400], [new Date(2020, 6, 13), 56500], [new Date(2020, 6, 14), 33100], [new Date(2020, 6, 15), 34100], [new Date(2020, 6, 16), 43700], [new Date(2020, 6, 17), 40500], [new Date(2020, 6, 18), 33000], [new Date(2020, 6, 19), 33900], [new Date(2020, 6, 20), 78600], [new Date(2020, 6, 21), 57300], [new Date(2020, 6, 22), 54300], [new Date(2020, 6, 23), 43200], [new Date(2020, 6, 24), 53400], [new Date(2020, 6, 25), 35000], [new Date(2020, 6, 26), 35500], [new Date(2020, 6, 27), 68600], [new Date(2020, 6, 28), 39700], [new Date(2020, 6, 29), 41200], [new Date(2020, 6, 30), 39300], [new Date(2020, 6, 31), 51300], [new Date(2020, 7, 1), 28700], [new Date(2020, 7, 2), 28500], [new Date(2020, 7, 3), 14700], [new Date(2020, 7, 4), 76100], [new Date(2020, 7, 5), 39500], [new Date(2020, 7, 6), 37400], [new Date(2020, 7, 7), 42400], [new Date(2020, 7, 8), 23600], [new Date(2020, 7, 9), 23000], [new Date(2020, 7, 10), 68100], [new Date(2020, 7, 11), 28900], [new Date(2020, 7, 12), 42300], [new Date(2020, 7, 13), 39000], [new Date(2020, 7, 14), 41800], [new Date(2020, 7, 15), 23700], [new Date(2020, 7, 16), 19800], [new Date(2020, 7, 17), 78500], [new Date(2020, 7, 18), 28200], [new Date(2020, 7, 19), 33600], [new Date(2020, 7, 20), 38300], [new Date(2020, 7, 21), 49900], [new Date(2020, 7, 22), 25700], [new Date(2020, 7, 23), 26700], [new Date(2020, 7, 24), 75100], [new Date(2020, 7, 25), 32200], [new Date(2020, 7, 26), 44800], [new Date(2020, 7, 27), 40100], [new Date(2020, 7, 28), 49200], [new Date(2020, 7, 29), 36300], [new Date(2020, 7, 30), 26700], [new Date(2020, 7, 31), 100800], [new Date(2020, 8, 1), 47700], [new Date(2020, 8, 2), 49800], [new Date(2020, 8, 3), 57000], [new Date(2020, 8, 4), 63100], [new Date(2020, 8, 5), 37100], [new Date(2020, 8, 6), 40000], [new Date(2020, 8, 7), 24700], [new Date(2020, 8, 8), 160600], [new Date(2020, 8, 9), 54600], [new Date(2020, 8, 10), 63000], [new Date(2020, 8, 11), 70200], [new Date(2020, 8, 12), 51500], [new Date(2020, 8, 13), 51800], [new Date(2020, 8, 14), 135100], [new Date(2020, 8, 15), 79300]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 2,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             format: 'short',
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('S1'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('S1-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawE1r2() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'All (%)');
     data.addColumn('number', '18-34 (%)');
     data.addColumn('number', '35-54 (%)');
     data.addColumn('number', '55+ (%)');
     data.addRows([
      [new Date(2020, 3, 15), 73, 65, 69, 82], [new Date(2020, 3, 25), 72, 62, 67, 83], [new Date(2020, 4, 10), 69, 61, 64, 79], [new Date(2020, 5, 1), 65, 56, 61, 74], [new Date(2020, 5, 28), 65, 57, 60, 74], [new Date(2020, 6, 22), 65, 56, 61, 76], [new Date(2020, 7, 17), 63, 55, 57, 74], [new Date(2020, 8, 15), 65, 56, 58, 76]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('E1r2'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('E1r2-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawB7r14() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'AB + NT (%)');
     data.addColumn('number', 'ATL (%)');
     data.addColumn('number', 'BC + YK (%)');
     data.addColumn('number', 'MB+SK+NU (%)');
     data.addColumn('number', 'ON (%)');
     data.addColumn('number', 'QC (%)');
     data.addRows([
      [new Date(2020, 3, 15), 19, 25, 21, 18, 31, 11], [new Date(2020, 3, 25), 26, 24, 22, 18, 32, 15], [new Date(2020, 4, 10), 31, 29, 24, 23, 39, 26], [new Date(2020, 5, 1), 28, 30, 26, 25, 45, 37], [new Date(2020, 5, 28), 33, 29, 34, 24, 49, 37], [new Date(2020, 6, 22), 42, 36, 41, 31, 66, 57], [new Date(2020, 7, 17), 58, 50, 47, 36, 76, 76], [new Date(2020, 8, 15), 64, 66, 53, 57, 81, 79]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d']
     };
     var chart = new google.visualization.LineChart(document.getElementById('B7r14'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('B7r14-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawB9r5b() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', '18-34 (%)');
     data.addColumn('number', '35-54 (%)');
     data.addColumn('number', '55+ (%)');
     data.addRows([
      [new Date(2020, 3, 15), 43, 52, 69], [new Date(2020, 3, 25), 43, 56, 70], [new Date(2020, 4, 10), 38, 52, 66], [new Date(2020, 5, 1), 34, 49, 65], [new Date(2020, 5, 28), 36, 49, 66], [new Date(2020, 6, 22), 44, 51, 72], [new Date(2020, 7, 17), 40, 52, 72], [new Date(2020, 8, 15), 41, 52, 70]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d']
     };
     var chart = new google.visualization.LineChart(document.getElementById('B9r5b'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('B9r5b-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawB9r5() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Children at home (%)');
     data.addColumn('number', 'No children at home (%)');
     data.addRows([
      [new Date(2020, 3, 15), 11, 11], [new Date(2020, 3, 25), 12, 9], [new Date(2020, 4, 10), 12, 9], [new Date(2020, 5, 1), 12, 12], [new Date(2020, 5, 28), 15, 12], [new Date(2020, 6, 22), 12, 9], [new Date(2020, 7, 17), 17, 9], [new Date(2020, 8, 15), 15, 10]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d']
     };
     var chart = new google.visualization.LineChart(document.getElementById('B9r5'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('B9r5-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawB9r3() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'AB + NT (%)');
     data.addColumn('number', 'ATL (%)');
     data.addColumn('number', 'BC + YK (%)');
     data.addColumn('number', 'MB+SK+NU (%)');
     data.addColumn('number', 'ON (%)');
     data.addColumn('number', 'QC (%)');
     data.addRows([
      [new Date(2020, 3, 15), 45, 54, 50, 45, 55, 70], [new Date(2020, 3, 25), 37, 40, 38, 30, 45, 69], [new Date(2020, 4, 10), 27, 29, 28, 30, 36, 67], [new Date(2020, 5, 1), 17, 29, 23, 22, 31, 58], [new Date(2020, 5, 28), 25, 27, 29, 20, 26, 54], [new Date(2020, 6, 22), 30, 29, 30, 27, 28, 54], [new Date(2020, 7, 17), 27, 26, 34, 30, 23, 48], [new Date(2020, 8, 15), 29, 20, 45, 22, 27, 55]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d']
     };
     var chart = new google.visualization.LineChart(document.getElementById('B9r3'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('B9r3-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawB7() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Frequent hand washing (%)');
     data.addColumn('number', 'Exercising regularly (%)');
     data.addColumn('number', 'Wearing a face mask (%)');
     data.addColumn('number', 'Staying home when sick (%)');
     data.addColumn('number', 'Using hand sanitizer (%)');
     data.addColumn('number', 'Avoiding public spaces and events (%)');
     data.addColumn('number', 'Physical distancing (%)');
     data.addRows([
      [new Date(2020, 3, 15), 83, 29, 22, 72, 77, 80, 85], [new Date(2020, 3, 25), 82, 27, 25, 67, 76, 75, 86], [new Date(2020, 4, 10), 82, 30, 31, 66, 77, 71, 84], [new Date(2020, 5, 1), 77, 32, 36, 66, 78, 66, 78], [new Date(2020, 5, 28), 74, 28, 40, 61, 76, 56, 71], [new Date(2020, 6, 22), 75, 29, 53, 65, 78, 53, 72], [new Date(2020, 7, 17), 73, 29, 65, 61, 79, 50, 71], [new Date(2020, 8, 15), 73, 30, 72, 64, 80, 49, 70]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'top',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d', '#FFC20A', '#1AFF1A']
     };
     var chart = new google.visualization.LineChart(document.getElementById('B7'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('B7-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawC1() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Government health agencies (%)');
     data.addColumn('number', 'Federal public health leaders (%)');
     data.addColumn('number', 'Government of Canada websites (%)');
     data.addColumn('number', 'Provincial health leaders (%)');
     data.addColumn('number', 'Daily press conferences (%)');
     data.addRows([
      [new Date(2020, 3, 15), 70, 65, 66, 70, 60], [new Date(2020, 3, 25), 62, 57, 60, 62, 51], [new Date(2020, 4, 10), 63, 57, 59, 62, 50], [new Date(2020, 5, 1), 55, 52, 51, 59, 45], [new Date(2020, 5, 28), 55, 50, 50, 55, 43], [new Date(2020, 6, 22), 55, 51, 50, 56, 45], [new Date(2020, 7, 17), 52, 50, 47, 53, 42], [new Date(2020, 8, 15), 53, 50, 48, 52, 40]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'top',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d']
     };
     var chart = new google.visualization.LineChart(document.getElementById('C1'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('C1-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawA16() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'Overall (%)');
     data.addRows([
      [new Date(2020, 3, 15), 46], [new Date(2020, 3, 25), 42], [new Date(2020, 4, 10), 33], [new Date(2020, 5, 1), 29], [new Date(2020, 5, 28), 26], [new Date(2020, 6, 22), 31], [new Date(2020, 7, 17), 34], [new Date(2020, 8, 15), 35]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d']
     };
     var chart = new google.visualization.LineChart(document.getElementById('A16'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('A16-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }

 function drawA1() {
     var data = new google.visualization.DataTable();
     data.addColumn('date', 'Wave');
     data.addColumn('number', 'The worst of the crisis is behind us (%)');
     data.addColumn('number', 'The worst of the crisis is yet to come (%)');
     data.addColumn('number', 'We are currently experiencing the worst of the crisis (%)');
     data.addRows([
      [new Date(2020, 3, 15), 6, 52, 35], [new Date(2020, 3, 25), 12, 36, 43], [new Date(2020, 4, 10), 26, 32, 32], [new Date(2020, 5, 1), 36, 36, 18], [new Date(2020, 5, 28), 41, 35, 11], [new Date(2020, 6, 22), 34, 42, 12], [new Date(2020, 7, 17), 33, 43, 11], [new Date(2020, 8, 15), 26, 49, 11]
    ]);
     var options = {
         curveType: 'function',
         tooltip: {
             trigger: 'selection'
         },
         legend: {
             position: 'bottom',
             maxLines: 8
         },
         height: '100%',
         width: '100%',
         chartArea: {
             top: 40,
             bottom: 40,
             right: 40,
             left: 40
         },
         pointSize: 10,
         hAxis: {
             format: 'M/d',
             gridlines: {
                 count: -1,
                 color: "#fff"
             },
             minorGridlines: {
                 count: 0
             }
         },
         vAxis: {
             gridlines: {
                 color: "#f2f2f2",
                 count: 4
             },
             minorGridlines: {
                 count: 0
             }
         },
         series: {
             0: {
                 pointShape: 'circle'
             },
             1: {
                 pointShape: 'triangle'
             },
             2: {
                 pointShape: 'square'
             },
             3: {
                 pointShape: 'diamond'
             },
             4: {
                 pointShape: 'star'
             },
             5: {
                 pointShape: 'polygon'
             }
         },
         colors: ['#173a58', '#1f7cba', '#d83b43', '#bf40b7', '#4a7d76', '#504d4d']
     };
     var chart = new google.visualization.LineChart(document.getElementById('A1'));
     chart.draw(data, options);
     var cssClassNames = {
         'headerRow': 'table-header',
         'tableRow': 'table-row',
         'oddTableRow': 'table-odd',
         'selectedTableRow': '',
         'hoverTableRow': 'table-hover',
         'headerCell': '',
         'tableCell': 'table-cell',
         'rowNumberCell': ''
     };
     var table = new google.visualization.Table(document.getElementById('A1-table'));
     table.draw(data, {
         showRowNumber: false,
         width: '100%',
         cssClassNames: cssClassNames,
         height: '100%'
     });
 }
