// const d3 = require("https://d3js.org/d3.v4.min.js")

// import { d3 } from 'd3.min.js';

var mousePos;

document.onmousemove = handleMouseMove;
setInterval(() => { getMousePosition((pos) => {}) }, 100); // setInterval repeats every X ms

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
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }

    mousePos = event.pageY
}


function getMousePosition(callBack) {
    var pos = mousePos;
    if (!pos) {
        // We haven't seen any movement yet
    } else {
        callBack(pos)
    }
}

function mouse_pos() {
    var pos = mousePos;
    if (!pos) {
        // We haven't seen any movement yet
    } else {
        return pos
    }
}







var treeData = {
    "name": "EXPORT",
    "children": [{
            "name": "Invasive Species",
            "img": "",
            "children": [{
                    "name": "RED ANTS",
                    "img": "assets/ants-data.jpg",
                    "children": [{
                            "name": "spanish empire",
                            "img": "assets/lamb.jpeg",
                            "children": [{
                                    "name": "trade Ports",
                                    "img": "",
                                    "children": [{
                                            "name": "seville",
                                            "img": ""
                                        },
                                        {
                                            "name": "havana",
                                            "img": ""
                                        },
                                        {
                                            "name": "veracruz",
                                            "img": ""
                                        },
                                        {
                                            "name": "alcapulco",
                                            "img": ""
                                        },
                                        {
                                            "name": "panama",
                                            "img": ""
                                        },
                                        {
                                            "name": "lima",
                                            "img": ""
                                        },
                                        {
                                            "name": "callao",
                                            "img": ""
                                        },
                                        {
                                            "name": "portobelo",
                                            "img": ""
                                        },
                                        {
                                            "name": "cartagena",
                                            "img": ""
                                        },
                                        {
                                            "name": "concepcion",
                                            "img": ""
                                        },
                                        {
                                            "name": "beunos aires",
                                            "img": ""
                                        },
                                        {
                                            "name": "martin garcia island",
                                            "img": ""
                                        },
                                        {
                                            "name": "montevideo",
                                            "img": ""
                                        },
                                        {
                                            "name": "puerto de la soledad",
                                            "img": ""
                                        },
                                        {
                                            "name": "Melilla",
                                            "img": ""
                                        },
                                        {
                                            "name": "Mazalquivir",
                                            "img": ""
                                        },
                                        {
                                            "name": "Oran",
                                            "img": ""
                                        },
                                        {
                                            "name": "Algers",
                                            "img": ""
                                        },
                                        {
                                            "name": "Bougie",
                                            "img": ""
                                        },
                                        {
                                            "name": "Tripoli",
                                            "img": ""
                                        },
                                        {
                                            "name": "Canary Island",
                                            "img": ""
                                        },
                                        {
                                            "name": "Naples",
                                            "img": ""
                                        },
                                        {
                                            "name": "Milan",
                                            "img": ""
                                        },
                                        {
                                            "name": "manilla",
                                            "img": ""
                                        }
                                    ]
                                },
                                {
                                    "name": "Painters",
                                    "img": "",
                                    "children": [{
                                            "name": "El greco",
                                            "img": "assets/p-elgrecco.jpg"
                                        },
                                        {
                                            "name": "diego Velazquez",
                                            "img": "assets/p-DVelazquez.jpg"
                                        },
                                        {
                                            "name": "Juan de Valdés Leal",
                                            "img": "assets/p-JLeal.jpg"
                                        },
                                        {
                                            "name": "Francisco de Zurbarán",
                                            "img": "assets/p-FZurbaran.jpg"
                                        },
                                        {
                                            "name": "Bartolomé Esteban Murillo",
                                            "img": "assets/p-bMurillo.jpg"
                                        },
                                        {
                                            "name": "Luis de Morales",
                                            "img": "assets/p-JMorales.jpg"
                                        },
                                        {
                                            "name": "José de Ribera",
                                            "img": "assets/p-JRobera.jpg"
                                        },
                                        {
                                            "name": "Juan Sánchez Cotán",
                                            "img": "assets/p-JCotan.jpg"
                                        },
                                        {
                                            "name": "Juan van der Hamen",
                                            "img": "assets/p-JHamen.jpg"
                                        },
                                        {
                                            "name": "Francisco Ribalta",
                                            "img": "assets/p-A.jpg"
                                        },
                                        {
                                            "name": "Juan Carreño de Miranda",
                                            "img": "assets/p-JMiranda.png"
                                        },
                                        {
                                            "name": "Claudio Coelho",
                                            "img": "assets/p-CCoelho.jpg"
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Portugese empire",
                            "img": "assets/portugese-empire.jpg",
                            "children": [{
                                    "name": "trade Ports",
                                    "children": [{
                                            "name": "lisbon",
                                            "img": ""
                                        },
                                        {
                                            "name": "antwerp",
                                            "img": ""
                                        },
                                        {
                                            "name": "azores",
                                            "img": ""
                                        },
                                        {
                                            "name": "recife",
                                            "img": ""
                                        },
                                        {
                                            "name": "salvador",
                                            "img": ""
                                        },
                                        {
                                            "name": "rio",
                                            "img": ""
                                        },
                                        {
                                            "name": "mozambique",
                                            "img": ""
                                        },
                                        {
                                            "name": "goa",
                                            "img": ""
                                        },
                                        {
                                            "name": "cochi",
                                            "img": ""
                                        },
                                        {
                                            "name": "malacca",
                                            "img": ""
                                        },
                                        {
                                            "name": "macau",
                                            "img": ""
                                        },
                                        {
                                            "name": "nagasaki",
                                            "img": ""
                                        },
                                        {
                                            "name": "ternate",
                                            "img": ""
                                        }
                                    ]
                                },
                                {
                                    "name": "Painters",
                                    "img": "assets/p-painter.jpg",
                                    "children": [{
                                            "name": "Garcia Fernandes",
                                            "img": "assets/p-GFernandes.jpg"
                                        },
                                        {
                                            "name": "Francisco Henriques",
                                            "img": "assets/p-FHerniques.jpeg"
                                        },
                                        {
                                            "name": "Cristóvão de Figueiredo",
                                            "img": "assets/p-CFigueiredo.jpg"
                                        },
                                        {
                                            "name": "Grão Vasco",
                                            "img": "assets/p-GVasco.jpg"
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    "name": "Crazy Ants (Nylanderia fulva)",
                    "img": "assets/crazy-ant2.jpg",
                    "children": [{
                            "name": "Origins",
                            "img": "",
                            "children": [{
                                "name": "South America",
                                "img": ""
                            }]
                        },
                        {
                            "name": "Effects",
                            "img": "assets/land-01.jpg",
                            "children": [{
                                    "name": "Increase Divorce Rate",
                                    "img": "assets/land-01.jpg"
                                },
                                {
                                    "name": "Short circuit electronics",
                                    "img": "assets/crazy-ant-hydro.jpg",
                                    "children": [{
                                            "name": "attracted to heat and sheltered containers of electronics",
                                            "img": "assets/crazy-ant-box.jpg"
                                        }, {
                                            "name": "Eat wiring insulation",
                                            "img": ""
                                        },
                                        {
                                            "name": "Positive feedback. secretes alarm phermones to attract",
                                            "img": ""
                                        },
                                        {
                                            "name": "Fiber Optic disruption",
                                            "img": "assets/crazy-ants-fiber.jpg",
                                            "children": [{
                                                    "name": "Verizon FiOS",
                                                    "img": "assets/crazy-ant-box.jpg"
                                                }, {
                                                    "name": "Frontier",
                                                    "img": ""
                                                },
                                                {
                                                    "name": "Windstream",
                                                    "img": ""
                                                },
                                                {
                                                    "name": "AT&T",
                                                    "img": ""
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Zebra Clams",
                    "img": "assets/zebra-comp.jpg",
                    "children": [{
                            "name": "Origins",
                            "img": "",
                            "children": [{
                                    "name": "Black Sea",
                                    "img": ""
                                },
                                {
                                    "name": "Western Russia",
                                    "img": ""
                                }
                            ]
                        },
                        {
                            "name": "Carrier",
                            "img": "assets/land-02.jpg",
                            "children": [{
                                "name": "cargo ship ballast water",
                                "img": ""
                            }]
                        },
                        {
                            "name": "Colonization",
                            "img": "assets/clams.jpg",
                            "children": [{
                                    "name": "rocks",
                                    "img": ""
                                },
                                {
                                    "name": "wood",
                                    "img": ""
                                },
                                {
                                    "name": "native clam speicies",
                                    "img": ""
                                },
                                {
                                    "name": "pipes",
                                    "img": ""
                                },
                                {
                                    "name": "docks",
                                    "img": ""
                                },
                                {
                                    "name": "boat lifts",
                                    "img": ""
                                },
                                {
                                    "name": "swim rafts",
                                    "img": ""
                                },
                                {
                                    "name": "moored watercraft",
                                    "img": ""
                                }
                            ]
                        },
                        {
                            "name": "Effects",
                            "img": "assets/body-04.jpg",
                            "children": [{
                                    "name": "Encrust equipment",
                                    "img": ""
                                },
                                {
                                    "name": "reduce performance",
                                    "img": ""
                                },
                                {
                                    "name": "Costly repair",
                                    "img": ""
                                },
                                {
                                    "name": "sharp shells cut flesh",
                                    "img": ""
                                },
                                {
                                    "name": "filter nutrients, reducing available foods",
                                    "img": ""
                                },
                                {
                                    "name": "clog water intakes",
                                    "img": "",
                                    "children": [{
                                            "name": "cities",
                                            "img": ""
                                        },
                                        {
                                            "name": "residents",
                                            "img": ""
                                        },
                                        {
                                            "name": "power plants",
                                            "img": ""
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Emerald Ash Borer",
                    "img": "assets/ebug.jpg",
                    "children": [{
                            "name": "Origins",
                            "img": "",
                            "children": [{
                                "name": "Asia",
                                "img": ""
                            }]
                        },
                        {
                            "name": "Carrier",
                            "img": "assets/asher.jpg",
                            "children": [{
                                    "name": "Wood packaging",
                                    "img": "assets/box.jpg",
                                },
                                {
                                    "name": "Lumber",
                                    "img": "assets/lunker.jpg",
                                }
                            ]
                        },
                        {
                            "name": "Ash tree Mortality",
                            "img": "",
                            "children": [{
                                    "name": "Erosion of Soil",
                                    "img": "assets/map.jpg"
                                },
                                {
                                    "name": "lumber decline",
                                    "img": "assets/boring.jpg"
                                },
                                {
                                    "name": "food and shelter decline",
                                    "img": ""
                                },
                                {
                                    "name": "mircoclimate inbalance",
                                    "img": "assets/body-07.jpg"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Mountian Pine Beetle",
                    "img": "assets/beetle03.jpg",
                    "children": [{
                            "name": "Origins",
                            "img": "",
                            "children": [{
                                "name": "Western Canada",
                                "img": ""
                            }]
                        },
                        {
                            "name": "Becoming Invasive",
                            "img": "assets/BInvasive.jpg",
                            "children": [{
                                    "name": "Warm winters",
                                    "img": "",
                                },
                                {
                                    "name": "Selective Harvesting programs",
                                    "img": "",
                                },
                                {
                                    "name": "Fire supression ",
                                    "img": "",
                                }
                            ]
                        },
                        {
                            "name": "Host",
                            "img": "assets/spread.jpg",
                            "children": [{
                                "name": "lodgepole pine ",
                                "img": "assets/lodgepine.jpg"
                            }]
                        }
                    ]
                }

            ]
        },
        {
            "name": "Shipping Container",
            "img": "",
            "children": [{
                    "name": "cargo",
                    "img": ""
                },
                {
                    "name": "Repurposed",
                    "img": "",
                    "children": [{
                            "name": "housing",
                            "img": "assets/house.png",
                            "children": [{
                                "name": "ants",
                                "img": "assets/ant-data2.jpg"
                            }]
                        },
                        {
                            "name": "storage",
                            "img": "",
                            "children": [{
                                    "name": "art",
                                    "img": "assets/art.jpg"
                                },
                                {
                                    "name": "lifestyle",
                                    "img": "assets/lifestyle.jpg"
                                },
                                {
                                    "name": "ants",
                                    "img": "assets/ant-09.jpg"
                                }
                            ]
                        },
                        {
                            "name": "shelter",
                            "img": "assets/bonx.png",
                            "children": [{
                                    "name": "dooms day preppers",
                                    "img": ""
                                },
                                {
                                    "name": " ",
                                    "img": ""
                                },
                                {
                                    "name": " ",
                                    "img": ""
                                }
                            ]
                        },
                        {
                            "name": "<a href src='www.bunker2.com'>contemporary art gallery</a>",
                            "img": ""
                        },
                        {
                            "name": "human traffic",
                            "img": ""
                        }
                    ]
                }
            ]
        },
    ]
}












// Set the dimensions and margins of the diagram
/////////////////////////////////////////////////////////////// SIZE OF BOX AND MARGIN
var margin = { top: 20, right: 90, bottom: 30, left: 300 },
    width = 3060 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


const gLeft = 100
    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
let wrapper = document.getElementById("svg-wrapper")
var clientHeight = document.getElementById('svg-wrapper').clientHeight;

let nodeEnter;

// ======================================= tool tip=====================
var Tooltip = d3.select("#content")
    .append("div")
    .style("opacity", 0)
    .style("transition", "opacity 2s")
    .attr("class", "tooltip")
    .attr("width", "100%")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "0px")
    .style("border-radius", "1px")
    .style("padding", "25px")
    .style("box-shadow", "8px 10px 50px")
    .style("z-index", "-100");



// ======================================= mouse events p=====================
// Three function that change the tooltip when user hover / move / leave a cell
var mouseover = function(d) {
    console.log("mose over")
    Tooltip
        .style("opacity", 1)
        .style("-webkit-text-stroke-width", "5px")
        .style("-webkit-text-stroke-color", "blue")
        .style("z-index", "100")
    d3.select(this)
        .style("opacity", 1)
        // .style("font-weight", "1000")
        .style("-webkit-text-stroke-width", "5px")
        .style("-webkit-text-stroke-color", "blue")
}

var mousemove = function(d) {
    let Wid = window.innerWidth;
    let content = document.getElementById("content")

    if (Object.prototype.toString.call(d.data.img) === "[object String]") {
        if (d.data.img.length > 1) {
            let img = d.data.img
            var string = "<img id='imageBox' src= " + img + " />"
            setTimeout(() => { content.addEventListener("click", hideToolTip) }, 300);
            if (Wid > 414) {
                Tooltip
                    .style("transition", "all 1s")
                    .style("opacity", 1)
                    .style("right", "80px")
                    .style("top", "100px")
                    .style("width", "40%")
                    .style("position", "absolute")
                    .style("z-index", "100")
                    // .click(hideToolTip)
                    .html(string)

            } else if (Wid < 414) {
                Tooltip
                    .style("transition", "all 1s")
                    .style("opacity", 1)
                    .style("margin-left", "75px")
                    .style("bottom", "50px")
                    .style("width", "80%")
                    .style("position", "absolute")
                    .style("z-index", "100")
                    .html(string)
                    .click(hideToolTip)
            }


            d = null;
        } else {
            setTimeout(() => {
                Tooltip
                    .style("transition", "all 1s")
                    .style("z-index", "-100")
                    .style("opacity", 0)
            }, 5000)
        }

    }
}
var mouseleave = function(d) {
    setTimeout(() => {
        Tooltip
            .style("transition", "opacity 1s")
            .style("opacity", 0)
            .style("z-index", "-100")
            // .remove(imagebox)
        d3.select(this)
            .style("transition", "opacity 1s")
            .style("stroke", "none")
            .style("opacity", 0.8)
            .style("font-weight", "normal")
    }, 5000)
}

function hideToolTip() {
    console.log('hide tool tip')
    setTimeout(() => {
        Tooltip
            .style("transition", "opacity 1s")
            .style("opacity", 0)
            // .style("z-index", "-100")
            // .remove(imagebox)
            // d3.select(this)
            //     // .style("transition", "all 1s")
            //     .style("stroke", "none")
            //     .style("opacity", 0.8)
            //     .style("font-weight", "normal")
    }, 50)
}

// console.log('wrapper size',clientHeight)
var svg = d3.select(wrapper).append("svg")
    // .attr("width", width + margin.right + margin.left)
    .attr("width", '100vw')
    .attr("height", height + margin.top + margin.bottom)
    .attr("overflow", "visible")
    .attr("padding", "20")
    .append("g")
    .attr("transform", "translate(" +
        gLeft + "," + margin.top + ")") // switching margin.left to gLeft

var i = 0,
    duration = 1050,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
function collapse(d) {
    if (d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
    }
}

function update(source) {
    // Assigns the x and y position for the nodes
    var treeData = treemap(root);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

    // Normalize for fixed-depth. /////////////////////////DISTANCE BETWEEN TEXT
    let Wid = document.querySelector('svg').clientWidth || document.querySelector('svg').parentNode.clientWidth
    const nodeDistance = Wid / 7
        // console.log('node distance', nodeDistance)
    nodes.forEach(function(d) { d.y = d.depth * nodeDistance })


    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg.selectAll('g.node')
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', click)
        // .on("mouseover", mouseover)
        // .on("click", mouseover)
        // .on("mousemove", mousemove)
        // .on("click", mousemove)
        // .on("mouseleave", mouseleave);

    // Add Circle for the nodes
    nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", function(d) {
            return d._children ? "black" : "#f00";
        });

    // Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", "0.5em")
        .attr("font-size", "1em")
        .attr('font-weight', "bold")
        .attr("x", function(d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function(d) { return d.data.name; })
        // .on("mouseover", mouseover)
        // .on("mousemove", mousemove)
        // .on("mouseleave", mouseleave);

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
        .attr('r', 5)
        .style("fill", function(d) {
            return d._children ? "black" : "#fff";
        })
        .attr('cursor', 'pointer');


    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
        .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
        .style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = svg.selectAll('path.link')
        .data(links, function(d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function(d) {
            var o = { x: source.x0, y: source.y0 }
            return diagonal(o, o)
        });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d) { return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
            var o = { x: source.x, y: source.y }
            return diagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}


// Creates a curved (diagonal) path from parent to the child nodes
function diagonal(s, d) {
    path = `M ${s.y} ${s.x}
          C ${(s.y )  } ${s.x},
            ${(s.y ) / 2} ${d.x},
            ${d.y} ${d.x}`

    return path
}


// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
    mousemove(d);
    // mouseover(d);
}


function navigatior() {
    let Wid = window.innerWidth;

    let about = document.getElementById("about");
    let nav = document.getElementById("naver");
    // let ul = document.getElementById("naver")
    if (about.style.display == 'flex') {
        about.style.display = 'none';
        if (Wid > 414) {
            nav.style.width = '7%';
            nav.style.background = '#fff';

        } else if (Wid < 414) {
            nav.style.width = '20%';
            nav.style.background = '#fff';
        }
        nav.classList.remove("naverRight")
    } else {
        about.style.display = 'flex'
        nav.style.width = '100%'
        nav.style.float = 'right';
        nav.style.background = '#000';
        nav.style.color = '#fff';
        nav.classList.add("naverRight");
    }
}



function hideAbout() {
    let Wid = window.innerWidth;

    let about = document.getElementById("about");
    let nav = document.getElementById("naver");
    about.style.display = 'none'
    if (Wid > 415) {
        nav.style.width = '7%';
        nav.style.background = '#fff0';
        nav.style.color = '#000';

    } else if (Wid < 415) {
        nav.style.width = '20%';
        nav.style.background = '#fff0';
        nav.style.color = '#000';
    }
    nav.classList.remove("naverRight")
}

function hideToolTip() {
    console.log("hide too til")
        // let tool = document.getElementsByClassName("tooltip")[0]
        // console.log("tootl", tool);
        // tool.classList.toggle("hider");
        // tool.style.opacity = '0';

    Tooltip
        .style("transition", "all 1s")
        .style("z-index", "-100")
        .style("opacity", 0)

    let content = document.getElementById("content")
    setTimeout(() => { content.removeEventListener("click", hideToolTip) }, 300);

}

function getTime() {
    const now = new Date();
    const start = new Date("May 14 2019 00:00");
    let timeHeading = document.getElementsByClassName("heading");
    var content = document.createTextNode(start);

    timeHeading[0].appendChild(content);
}



var startDateTime = new Date(2019, 4, 14, 3, 0, 0, 0); // YYYY (M-1) D H m s (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();

    var diff = Math.round((newStamp - startStamp) / 1000);

    var d = Math.floor(diff / (24 * 60 * 60));
    diff = diff - (d * 24 * 60 * 60);
    var h = Math.floor(diff / (60 * 60));
    diff = diff - (h * 60 * 60);
    var m = Math.floor(diff / (60));
    diff = diff - (m * 60);
    var s = diff;
    let time = [d, h, m, s];
    let timeDiv = document.getElementById("time-elapsed");
    let div = document.createElement("div")
    div.className += "headingDate"
    let content = document.createTextNode("2019 05 14")
    div.append(content)
    timeDiv.innerHTML = d + " days " + h + " hours " + m + " minutes " + s + " live";
    timeDiv.insertBefore(div, timeDiv.firstChild)

}


function main() {
    // window.onload = function() {
    //     loader()
    // };
    setInterval(updateClock, 1000);
}

main()