$(function () {

    var data = [{x: 'Apple', y: 40 },{x: 'Samsung', y:  25 },{x: 'LG', y:  7 },{x: 'Motorola', y:  6 }, { x: 'HTC', y: 5 }];

    new Contour({
            el: '.pie-basic',
            pie: {
                piePadding: {
                    left: 10
                }
            },
            legend: {
                vAlign: 'top'
            },
            tooltip: {
                formatter: function (d) {
                    return d.value + '%';
                }
            }
        })
        .pie(data)
        .legend(_.map(_.map(data, 'x'), function (x) { return { name: x, data: [] }; }))
        .tooltip()
        .render();
});
