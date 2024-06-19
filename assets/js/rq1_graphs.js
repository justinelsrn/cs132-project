const rq1_customdata = ['<BR><b>Fatal Reports: </b> 12<BR><b>Fatalities:</b> 41<BR><b>Average people killed in a fatal encounter:</b> 3.42',
  '<BR><b>Fatal Reports: </b> 2287<BR><b>Fatalities:</b> 2918<BR><b>Average people killed in a fatal encounter:</b> 1.28',
  '<BR><b>Fatal Reports: </b> 102<BR><b>Fatalities:</b> 123<BR><b>Average people killed in a fatal encounter:</b> 1.21',
  '<BR><b>Fatal Reports: </b> 6<BR><b>Fatalities:</b> 6<BR><b>Average people killed in a fatal encounter:</b> 1.0',
  '<BR><b>Fatal Reports: </b> 39<BR><b>Fatalities:</b> 48<BR><b>Average people killed in a fatal encounter:</b> 1.23',
  '<BR><b>Fatal Reports: </b> 91<BR><b>Fatalities:</b> 114<BR><b>Average people killed in a fatal encounter:</b> 1.25',
  '<BR><b>Fatal Reports: </b> 2<BR><b>Fatalities:</b> 2<BR><b>Average people killed in a fatal encounter:</b> 1.0',
  '<BR><b>Fatal Reports: </b> 355<BR><b>Fatalities:</b> 418<BR><b>Average people killed in a fatal encounter:</b> 1.18',
  '<BR><b>Fatal Reports: </b> 55<BR><b>Fatalities:</b> 67<BR><b>Average people killed in a fatal encounter:</b> 1.22',
  '<BR><b>Fatal Reports: </b> 811<BR><b>Fatalities:</b> 947<BR><b>Average people killed in a fatal encounter:</b> 1.17',
  '<BR><b>Fatal Reports: </b> 36<BR><b>Fatalities:</b> 41<BR><b>Average people killed in a fatal encounter:</b> 1.14',
  '<BR><b>Fatal Reports: </b> 15<BR><b>Fatalities:</b> 19<BR><b>Average people killed in a fatal encounter:</b> 1.27',
  '<BR><b>Fatal Reports: </b> 4<BR><b>Fatalities:</b> 7<BR><b>Average people killed in a fatal encounter:</b> 1.75',
  '<BR><b>Fatal Reports: </b> 10<BR><b>Fatalities:</b> 25<BR><b>Average people killed in a fatal encounter:</b> 2.5',
  '<BR><b>Fatal Reports: </b> 4<BR><b>Fatalities:</b> 14<BR><b>Average people killed in a fatal encounter:</b> 3.5',
  '<BR><b>Fatal Reports: </b> 14<BR><b>Fatalities:</b> 27<BR><b>Average people killed in a fatal encounter:</b> 1.93',
  '<BR><b>Fatal Reports: </b> 128<BR><b>Fatalities:</b> 177<BR><b>Average people killed in a fatal encounter:</b> 1.38',
  '<BR><b>Fatal Reports: </b> 17<BR><b>Fatalities:</b> 22<BR><b>Average people killed in a fatal encounter:</b> 1.29',
  '<BR><b>Fatal Reports: </b> 128<BR><b>Fatalities:</b> 149<BR><b>Average people killed in a fatal encounter:</b> 1.16',
  '<BR><b>Fatal Reports: </b> 40<BR><b>Fatalities:</b> 45<BR><b>Average people killed in a fatal encounter:</b> 1.12',
  '<BR><b>Fatal Reports: </b> 45<BR><b>Fatalities:</b> 51<BR><b>Average people killed in a fatal encounter:</b> 1.13',
  '<BR><b>Fatal Reports: </b> 9<BR><b>Fatalities:</b> 12<BR><b>Average people killed in a fatal encounter:</b> 1.33',
  '<BR><b>Fatal Reports: </b> 37<BR><b>Fatalities:</b> 60<BR><b>Average people killed in a fatal encounter:</b> 1.62',
  '<BR><b>Fatal Reports: </b> 30<BR><b>Fatalities:</b> 47<BR><b>Average people killed in a fatal encounter:</b> 1.57',
  '<BR><b>Fatal Reports: </b> 12<BR><b>Fatalities:</b> 14<BR><b>Average people killed in a fatal encounter:</b> 1.17',
  '<BR><b>Fatal Reports: </b> 51<BR><b>Fatalities:</b> 75<BR><b>Average people killed in a fatal encounter:</b> 1.47',
  '<BR><b>Fatal Reports: </b> 5<BR><b>Fatalities:</b> 14<BR><b>Average people killed in a fatal encounter:</b> 2.8',
  '<BR><b>Fatal Reports: </b> 30<BR><b>Fatalities:</b> 35<BR><b>Average people killed in a fatal encounter:</b> 1.17',
  '<BR><b>Fatal Reports: </b> 3542<BR><b>Fatalities:</b> 4941<BR><b>Average people killed in a fatal encounter:</b> 1.39',
  '<BR><b>Fatal Reports: </b> 19<BR><b>Fatalities:</b> 47<BR><b>Average people killed in a fatal encounter:</b> 2.47',
  '<BR><b>Fatal Reports: </b> 61<BR><b>Fatalities:</b> 96<BR><b>Average people killed in a fatal encounter:</b> 1.57',
  '<BR><b>Fatal Reports: </b> 4<BR><b>Fatalities:</b> 4<BR><b>Average people killed in a fatal encounter:</b> 1.0',
  '<BR><b>Fatal Reports: </b> 640<BR><b>Fatalities:</b> 822<BR><b>Average people killed in a fatal encounter:</b> 1.28',
  '<BR><b>Fatal Reports: </b> 5950<BR><b>Fatalities:</b> 8020<BR><b>Average people killed in a fatal encounter:</b> 1.35',
  '<BR><b>Fatal Reports: </b> 262<BR><b>Fatalities:</b> 371<BR><b>Average people killed in a fatal encounter:</b> 1.42',
  '<BR><b>Fatal Reports: </b> 1070<BR><b>Fatalities:</b> 1292<BR><b>Average people killed in a fatal encounter:</b> 1.21',
  '<BR><b>Fatal Reports: </b> 79<BR><b>Fatalities:</b> 101<BR><b>Average people killed in a fatal encounter:</b> 1.28']

var rq1_data = [{
  type: "sunburst",
  'branchvalues': 'total',
  'hovertemplate': rq1_customdata,
  'ids': ['civilians/abu sayyaf', 'drug suspects/anti-drug vigilantes',
  'government/anti-drug vigilantes', 'labor group/anti-drug vigilantes',
  'civilians/armed drug suspects', 'drug suspects/armed drug suspects',
  'labor group/armed drug suspects', 'civilians/armed group',
  'farmers/armed group', 'government/armed group',
  'labor group/armed group',
  'civilians/bangsamoro islamic freedom fighters',
  'farmers/bangsamoro islamic freedom fighters', 'civilians/clan militia',
  'farmers/clan militia', 'civilians/military forces',
  'farmers/military forces', 'labor group/military forces',
  "civilians/new people's army", "farmers/new people's army",
  "government/new people's army", "labor group/new people's army",
  'civilians/others', 'drug suspects/others', 'farmers/others',
  'government/others', 'labor group/others', 'civilians/police forces',
  'drug suspects/police forces', 'farmers/police forces',
  'government/police forces', 'labor group/police forces', 'civilians',
  'drug suspects', 'farmers', 'government', 'labor group'],
'labels': ['abu sayyaf', 'anti-drug vigilantes', 'anti-drug vigilantes',
     'anti-drug vigilantes', 'armed drug suspects', 'armed drug suspects',
     'armed drug suspects', 'armed group', 'armed group', 'armed group',
     'armed group', 'bangsamoro islamic freedom fighters',
     'bangsamoro islamic freedom fighters', 'clan militia', 'clan militia',
     'military forces', 'military forces', 'military forces',
     "new people's army", "new people's army", "new people's army",
     "new people's army", 'others', 'others', 'others', 'others', 'others',
     'police forces', 'police forces', 'police forces', 'police forces',
     'police forces', 'civilians', 'drug suspects', 'farmers', 'government',
     'labor group'],
'opacity': 1,
'marker': {'colors': ["#e7717d", "#ad555e", "#ad555e", "#ad555e", "#ad555e", "#ad555e",
                    "#ad555e", "#ad555e", "#ad555e", "#ad555e", "#ad555e", "#e7717d",
                    "#e7717d", "#f5c6cb", "#f5c6cb", "#71373d", "#71373d", "#71373d",
                    "#e7717d", "#e7717d", "#e7717d", "#e7717d", "#fae3e5", "#fae3e5",
                    "#fae3e5", "#fae3e5", "#fae3e5", "#71373d", "#71373d", "#71373d",
                    "#71373d", "#71373d", "#afd275", "#afd275", "#afd275", "#afd275",
                    "#afd275"]},
'name': '',
'parents': ['civilians', 'drug suspects', 'government', 'labor group', 'civilians',
      'drug suspects', 'labor group', 'civilians', 'farmers', 'government',
      'labor group', 'civilians', 'farmers', 'civilians', 'farmers',
      'civilians', 'farmers', 'labor group', 'civilians', 'farmers',
      'government', 'labor group', 'civilians', 'drug suspects', 'farmers',
      'government', 'labor group', 'civilians', 'drug suspects', 'farmers',
      'government', 'labor group', '', '', '', '', ''],
'values': [  12, 2287,  102,    6,   39,   91,    2,  355,   55,  811,   36,   15,
        4,   10,    4,   14,  128,   17,  128,   40,   45,    9,   37,   30,
       12,   51,    5,   30, 3542,   19,   61,    4,  640, 5950,  262, 1070,
       79], 
  outsidetextfont: {size: 20, color: "#377eb8"},
  leaf: {opacity: 1
  },
//   marker: {line: {width: 2}},
}];

let rq1_shapes = []
let rq1_annotations = []


const caption_lookup = {'#afd275': 'Victims',
  '#fae3e5': 'Offenders (Assorted)',
  '#71373d': 'Offenders (State Forces)',
  '#e7717d': 'Offenders (Rebel Groups)',
  '#ad555e': 'Offenders (Political Militia)',
  '#f5c6cb': 'Offenders (Identity Militia)'}
const color_list = ["#afd275", "#fae3e5", "#f5c6cb", "#e7717d", "#ad555e", "#71373d"]

for (let c in color_list) {
  rq1_shapes.push({
    type:"rect",
    x0: .06+0.70,
    y0: (0.975-0.0345*c),
    x1: .075+0.70,
    y1: (0.989-0.0345*c),
    fillcolor: color_list[c]
  })

  rq1_annotations.push({
    x: .1+0.69,
    y: (1-(c*0.034)),
    text: caption_lookup[color_list[c]],
    font_size: 9,
    xanchor: "left",
    align: 'left',
    showarrow: false
  })
}

var rq1_layout = {
  autosize: true,
  margin: {l: 0, r: 0, b: 0, t: 100},
  width: 800,
  height: 500,
  title: {
    text: "Top 5 At-risk Filipino Groups and Their Offenders:<br>Reported Fatal Cases of Civilian Victimization",
    'xanchor': 'center',
    'yanchor': 'top',
    y: 0.90,
    // automargin: true,
  },
  annotations: rq1_annotations,
  shapes: rq1_shapes,
};


// let rq1_annotations_old = [
//   {
//     x: 0.85,
//     y: 0.6,
//     font: {color: "#e7717d"},
//     xref: 'paper',
//     yref: 'paper',
//     text: 'Offenders',
//     xanchor:'left',
//     showarrow: false,
//     arrowhead: 7,
//   },
//   {
//   font: {color: "#e7717d"},
//   x:0.8,
//   y:0.6,
//   showarrow:false,
//   text:"AB",
//   textangle:0,
//   xanchor:'left',
//   xref:"paper",
//   yref:"paper",
//   bgcolor:"#e7717d"
//   },
//   {
//       x: 0.85,
//       y: 0.7,
//       font: {color: "#afd275"},
//       xref: 'paper',
//       yref: 'paper',
//       text: 'Victims',
//       xanchor:'left',
//       showarrow: false,
//       arrowhead: 7,
//     },
//     {
//     font: {color: "#afd275"},
//     x:0.8,
//     y:0.7,
//     showarrow:false,
//     text:"AB",
//     textangle:0,
//     xanchor:'left',
//     xref:"paper",
//     yref:"paper",
//     bgcolor:"#afd275"
//     }
// ]

Plotly.newPlot('rq1-plot', rq1_data, rq1_layout, {responsive: true});