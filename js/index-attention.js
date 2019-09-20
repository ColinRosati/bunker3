
// const d3 = require("https://d3js.org/d3.v4.min.js")

// import { d3 } from 'd3.min.js';

var mousePos;

document.onmousemove = handleMouseMove;
setInterval(()=>{getMousePosition((pos)=>{})}, 100); // setInterval repeats every X ms

function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    mousePos = event.pageY
}


function getMousePosition(callBack) {
    var pos = mousePos;
    if (!pos) {
        // We haven't seen any movement yet
    }
    else {
      callBack(pos)
    }
}

function mouse_pos(){
  var pos = mousePos;
    if (!pos) {
        // We haven't seen any movement yet
    }
    else {
      return pos
    }
}



var treeData =
 {
  "flare": {
    "analytics": {
      "cluster": {
        "AgglomerativeCluster": 3938,
        "CommunityStructure": 3812,
        "HierarchicalCluster": 6714,
        "MergeEdge": 743
      },
      "graph": {
        "BetweennessCentrality": 3534,
        "LinkDistance": 5731,
        "MaxFlowMinCut": 7840,
        "ShortestPaths": 5914,
        "SpanningTree": 3416
      },
      "optimization": {
        "AspectRatioBanker": 7074
      }
    },
    "animate": {
      "Easing": 17010,
      "FunctionSequence": 5842,
      "interpolate": {
        "ArrayInterpolator": 1983,
        "ColorInterpolator": 2047,
        "DateInterpolator": 1375,
        "Interpolator": 8746,
        "MatrixInterpolator": 2202,
        "NumberInterpolator": 1382,
        "ObjectInterpolator": 1629,
        "PointInterpolator": 1675,
        "RectangleInterpolator": 2042
      },
      "ISchedulable": 1041,
      "Parallel": 5176,
      "Pause": 449,
      "Scheduler": 5593,
      "Sequence": 5534,
      "Transition": 9201,
      "Transitioner": 19975,
      "TransitionEvent": 1116,
      "Tween": 6006
    },
    "data": {
      "converters": {
        "Converters": 721,
        "DelimitedTextConverter": 4294,
        "GraphMLConverter": 9800,
        "IDataConverter": 1314,
        "JSONConverter": 2220
      },
      "DataField": 1759,
      "DataSchema": 2165,
      "DataSet": 586,
      "DataSource": 3331,
      "DataTable": 772,
      "DataUtil": 3322
    },
    "display": {
      "DirtySprite": 8833,
      "LineSprite": 1732,
      "RectSprite": 3623,
      "TextSprite": 10066
    },
    "flex": {
      "FlareVis": 4116
    },
    "physics": {
      "DragForce": 1082,
      "GravityForce": 1336,
      "IForce": 319,
      "NBodyForce": 10498,
      "Particle": 2822,
      "Simulation": 9983,
      "Spring": 2213,
      "SpringForce": 1681
    },
    "query": {
      "AggregateExpression": 1616,
      "And": 1027,
      "Arithmetic": 3891,
      "Average": 891,
      "BinaryExpression": 2893,
      "Comparison": 5103,
      "CompositeExpression": 3677,
      "Count": 781,
      "DateUtil": 4141,
      "Distinct": 933,
      "Expression": 5130,
      "ExpressionIterator": 3617,
      "Fn": 3240,
      "If": 2732,
      "IsA": 2039,
      "Literal": 1214,
      "Match": 3748,
      "Maximum": 843,
      "methods": {
        "add": 593,
        "and": 330,
        "average": 287,
        "count": 277,
        "distinct": 292,
        "div": 595,
        "eq": 594,
        "fn": 460,
        "gt": 603,
        "gte": 625,
        "iff": 748,
        "isa": 461,
        "lt": 597,
        "lte": 619,
        "max": 283,
        "min": 283,
        "mod": 591,
        "mul": 603,
        "neq": 599,
        "not": 386,
        "or": 323,
        "orderby": 307,
        "range": 772,
        "select": 296,
        "stddev": 363,
        "sub": 600,
        "sum": 280,
        "update": 307,
        "variance": 335,
        "where": 299,
        "xor": 354,
        "_": 264
      },
      "Minimum": 843,
      "Not": 1554,
      "Or": 970,
      "Query": 13896,
      "Range": 1594,
      "StringUtil": 4130,
      "Sum": 791,
      "Variable": 1124,
      "Variance": 1876,
      "Xor": 1101
    },
    "scale": {
      "IScaleMap": 2105,
      "LinearScale": 1316,
      "LogScale": 3151,
      "OrdinalScale": 3770,
      "QuantileScale": 2435,
      "QuantitativeScale": 4839,
      "RootScale": 1756,
      "Scale": 4268,
      "ScaleType": 1821,
      "TimeScale": 5833
    },
    "util": {
      "Arrays": 8258,
      "Colors": 10001,
      "Dates": 8217,
      "Displays": 12555,
      "Filter": 2324,
      "Geometry": 10993,
      "heap": {
        "FibonacciHeap": 9354,
        "HeapNode": 1233
      },
      "IEvaluable": 335,
      "IPredicate": 383,
      "IValueProxy": 874,
      "math": {
        "DenseMatrix": 3165,
        "IMatrix": 2815,
        "SparseMatrix": 3366
      },
      "Maths": 17705,
      "Orientation": 1486,
      "palette": {
        "ColorPalette": 6367,
        "Palette": 1229,
        "ShapePalette": 2059,
        "SizePalette": 2291
      },
      "Property": 5559,
      "Shapes": 19118,
      "Sort": 6887,
      "Stats": 6557,
      "Strings": 22026
    },
    "vis": {
      "axis": {
        "Axes": 1302,
        "Axis": 24593,
        "AxisGridLine": 652,
        "AxisLabel": 636,
        "CartesianAxes": 6703
      },
      "controls": {
        "AnchorControl": 2138,
        "ClickControl": 3824,
        "Control": 1353,
        "ControlList": 4665,
        "DragControl": 2649,
        "ExpandControl": 2832,
        "HoverControl": 4896,
        "IControl": 763,
        "PanZoomControl": 5222,
        "SelectionControl": 7862,
        "TooltipControl": 8435
      },
      "data": {
        "Data": 20544,
        "DataList": 19788,
        "DataSprite": 10349,
        "EdgeSprite": 3301,
        "NodeSprite": 19382,
        "render": {
          "ArrowType": 698,
          "EdgeRenderer": 5569,
          "IRenderer": 353,
          "ShapeRenderer": 2247
        },
        "ScaleBinding": 11275,
        "Tree": 7147,
        "TreeBuilder": 9930
      },
      "events": {
        "DataEvent": 2313,
        "SelectionEvent": 1880,
        "TooltipEvent": 1701,
        "VisualizationEvent": 1117
      },
      "legend": {
        "Legend": 20859,
        "LegendItem": 4614,
        "LegendRange": 10530
      },
      "operator": {
        "distortion": {
          "BifocalDistortion": 4461,
          "Distortion": 6314,
          "FisheyeDistortion": 3444
        },
        "encoder": {
          "ColorEncoder": 3179,
          "Encoder": 4060,
          "PropertyEncoder": 4138,
          "ShapeEncoder": 1690,
          "SizeEncoder": 1830
        },
        "filter": {
          "FisheyeTreeFilter": 5219,
          "GraphDistanceFilter": 3165,
          "VisibilityFilter": 3509
        },
        "IOperator": 1286,
        "label": {
          "Labeler": 9956,
          "RadialLabeler": 3899,
          "StackedAreaLabeler": 3202
        },
        "layout": {
          "AxisLayout": 6725,
          "BundledEdgeRouter": 3727,
          "CircleLayout": 9317,
          "CirclePackingLayout": 12003,
          "DendrogramLayout": 4853,
          "ForceDirectedLayout": 8411,
          "IcicleTreeLayout": 4864,
          "IndentedTreeLayout": 3174,
          "Layout": 7881,
          "NodeLinkTreeLayout": 12870,
          "PieLayout": 2728,
          "RadialTreeLayout": 12348,
          "RandomLayout": 870,
          "StackedAreaLayout": 9121,
          "TreeMapLayout": 9191
        },
        "Operator": 2490,
        "OperatorList": 5248,
        "OperatorSequence": 4190,
        "OperatorSwitch": 2581,
        "SortOperator": 2023
      },
      "Visualization": 16540
    }}}


    var categorical = [
      { "name" : "schemeAccent", "n": 20},
      { "name" : "schemeDark2", "n": 8},
      { "name" : "schemePastel2", "n": 8},
      { "name" : "schemeSet2", "n": 8},
      { "name" : "schemeSet1", "n": 9},
      { "name" : "schemePastel1", "n": 9},
      { "name" : "schemeCategory10", "n" : 10},
      { "name" : "schemeSet3", "n" : 12 },
      { "name" : "schemePaired", "n": 12},
      { "name" : "schemeCategory20", "n" : 20 },
      { "name" : "schemeCategory20b", "n" : 20},
      { "name" : "schemeCategory20c", "n" : 20 }
    ]

// var width = 960,
//     height = 500;
// var x = d3.scaleLinear()
//     .range([0, width]);
// var y = d3.scaleLinear()
//     .range([0, height]);
// var color = d3.scaleOrdinal(d3[categorical[0].name]);

// var partition = d3.partition()
//     .size([width, height])
//     .padding(0)
//     .round(true);

// let wrapper = document.getElementById("svg-wrapper")
// var svg = d3.select(wrapper).append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("font", "10px sans-serif");

// var rect = svg.selectAll("rect");

//   // root = d3.hierarchy(treeData, function(d) { return d.children; });
//   // root = d3.hierarchy(d3.entries(treeData)[0], function(d) {

//   // root = d3.hierarchy(treeData, function(d) { return d.children; });
//   // console.log('value', root.data)

//   let root = d3.hierarchy(d3.entries(treeData)[0], function(d) {
//       console.log('value',d.key)
//       return d3.entries(d.value)
//     })


//     root.sum(function(d) { return d.value })
//     root.sort(function(a, b) { return b.value - a.value; });
//   partition(root);
//   rect = rect
//       .data(root.descendants())
//     .enter().append("rect")
//       .attr("x", function(d) { return d.x0; })
//       .attr("y", function(d) { return d.y0; })
//       .attr("width", function(d) { return d.x1 - d.x0; })
//       .attr("height", function(d) { return d.y1 - d.y0; })
//       .attr("fill", function(d) { return color((d.children ? d : d.parent).data.key); })
//       .attr("color","black")
//       .on("click", clicked);

//       // rect.append()
//       // console.log(root.descendants())
// // });

//   const cell = svg
//     .selectAll("g")
//     .data(root.descendants())
//     .join("g")
//       .attr("transform", d => `translate(${d.y0},${d.x0})`);

// const text = cell.append("text")
//       .style("user-select", "none")
//       .attr("pointer-events", "none")
//       .attr("x", 4)
//       .attr("y", 13)
//       .attr("fill-opacity", d => +labelVisible(d));

// function clicked(d) {
//   x.domain([d.x0, d.x1]);
//   y.domain([d.y0, height]).range([d.depth ? 20 : 0, height]);
//   rect.transition()
//       .duration(1750)
//       .attr("x", function(d) { return x(d.x0); })
//       .attr("y", function(d) { return y(d.y0); })
//       .attr("width", function(d) { return x(d.x1) - x(d.x0); })
//       .attr("height", function(d) { return y(d.y1) - y(d.y0); });

//        const t = cell.transition().duration(750)
//        .attr("transform", d => `translate(${d.y0},${d.x0})`);

//       text.transition(t).attr("fill-opacity", d => +labelVisible(d));
// }

// function labelVisible(d) {
//   console.log(d)
//     return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16;
//   }














  // const root = d3.hierarchy(treeData, function(d) { return d.children; });
  const root = d3.partition(treeData);

  console.log()
  let focus = root;

  let wrapper = document.getElementById("svg-wrapper")
  var svg = d3.select(wrapper).append("svg")
    .attr("width", '100%')
    .attr("height",'100%')
    .style("font", "10px sans-serif");

  // const svg = d3.select(DOM.svg(width, height))
  //     .style("width", "100%")
  //     .style("height", "auto")
  //     .style("overflow", "hidden")
  //     .style("font", "10px sans-serif");

  const cell = svg
    .selectAll("g")
    .data(root.descendants())
    .join("g")
      .attr("transform", d => `translate(${d.y0},${d.x0})`);

  const rect = cell.append("rect")
      .attr("width", d => d.y1 - d.y0 - 1)
      .attr("height", d => rectHeight(d))
      .attr("fill-opacity", 0.6)
      .attr("fill", d => {
        if (!d.depth) return "#ccc";
        while (d.depth > 1) d = d.parent;
        return color(d.data.name);
      })
      .style("cursor", "pointer")
      .on("click", clicked);

  const text = cell.append("text")
      .style("user-select", "none")
      .attr("pointer-events", "none")
      .attr("x", 4)
      .attr("y", 13)
      .attr("fill-opacity", d => +labelVisible(d));

  text.append("tspan")
      .text(d => d.data.name);

  const tspan = text.append("tspan")
      .attr("fill-opacity", d => labelVisible(d) * 0.7)
      .text(d => ` ${format(d.value)}`);

  cell.append("title")
      .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

  function clicked(p) {
    focus = focus === p ? p = p.parent : p;

    root.each(d => d.target = {
      x0: (d.x0 - p.x0) / (p.x1 - p.x0) * height,
      x1: (d.x1 - p.x0) / (p.x1 - p.x0) * height,
      y0: d.y0 - p.y0,
      y1: d.y1 - p.y0
    });

    const t = cell.transition().duration(750)
        .attr("transform", d => `translate(${d.target.y0},${d.target.x0})`);

    rect.transition(t).attr("height", d => rectHeight(d.target));
    text.transition(t).attr("fill-opacity", d => +labelVisible(d.target));
    tspan.transition(t).attr("fill-opacity", d => labelVisible(d.target) * 0.7);
  }
  
  function rectHeight(d) {
    return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
  }

  function labelVisible(d) {
    const width = '100';
    return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16;
  }
  
  // return svg.node();
