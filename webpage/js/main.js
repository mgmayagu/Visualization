var yourVlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {"url": "https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json"},
    "selection": {"brush": {"type": "interval"}},
    "mark": {"type": "circle", "clip": true},
    "encoding": {
      "x": {
        "field": "Horsepower",
        "type": "quantitative",
        "scale": {"domain": [75, 150]}
      },
      "y": {
        "field": "Miles_per_Gallon",
        "type": "quantitative",
        "scale": {"domain": [20, 40]}
      },
      "size": {"field": "Cylinders", "type": "quantitative"},
      "color": {
        "condition": {"selection": "brush", "field": "Origin", "type": "nominal"},
        "value": "grey"
      }
    }
  };
  
  vegaEmbed('#vis', yourVlSpec);