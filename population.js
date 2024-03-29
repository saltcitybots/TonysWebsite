(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
    ).then(response => response.json());

    Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/us-population-density.json', function (data) {

        // Make codes uppercase to match the map data
        data.forEach(function (p) {
            p.code = p.code.toUpperCase();
        });

        // Instantiate the map
        Highcharts.mapChart('popcontainer', {

            chart: {
                map: topology,
                borderWidth: 1
            },

            title: {
                text: 'US population density (/km²)'
            },

            exporting: {
                sourceWidth: 600,
                sourceHeight: 500
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [0, 'yellow'],
                    [0.33, 'orange'],
                    [0.66, 'green'],
                    [1, 'blue']
                ]
            },

            series: [{
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{xDescription}, {point.value} people per square kilometer.'
                    }
                },
                animation: {
                    duration: 3000
                },
                data: data,
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'black',
                    format: '{point.code}'
                },
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}/km²'
                }
            }]
        });
    });

})();