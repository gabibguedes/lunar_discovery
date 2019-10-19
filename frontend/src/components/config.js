export default {
    keys: [
        "hotdogs",
        "amount"
    ],
    margin: {
        "top": 50,
        "right": 130,
        "bottom": 50,
        "left": 60
    },
    defs: [
        {
            "id": "dots",
            "type": "patternLines",
            "rotation": -45,
            "background": "inherit",
            "color": "#38bcb2",
            "size": 4,
            "padding": 1,
            "stagger": true
        }
    ],
    fill: [
        {
            "match": {
                "id": "amount"
            },
            "id": "dots"
        }
    ],
    axisBottom: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "elemento",
        "legendPosition": "center",
        "legendOffset": 32
    },
    axisLeft: {
        "tickSize": 5,
        "tickPadding": 100,
        "tickRotation": 0,
        "legend": "quantidade",
        "legendPosition": "center",
        "legendOffset": -40
    },
    // legends: [
    //     {
    //         "dataFrom": "keys",
    //         "anchor": "bottom-right",
    //         "direction": "column",
    //         "justify": false,
    //         "translateX": 120,
    //         "translateY": 0,
    //         "itemsSpacing": 2,
    //         "itemWidth": 100,
    //         "itemHeight": 20,
    //         "itemDirection": "left-to-right",
    //         "itemOpacity": 0.85,
    //         "symbolSize": 20,
    //         "effects": [
    //             {
    //                 "on": "hover",
    //                 "style": {
    //                     "itemOpacity": 1
    //                 }
    //             }
    //         ]
    //     }
    // ]
}