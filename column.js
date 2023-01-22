Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Pineapple', 'Bananas', 'Watermelon', 'Grapes', 'Apples']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Tony',
        data: [6, 2, 5, 6, -3]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});