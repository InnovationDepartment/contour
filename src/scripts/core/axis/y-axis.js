(function () {

    var YAxis = function (data, options, domain) {
        this.data = data;
        this.options = options;
        this.domain = domain;
    };

    function setRange(scale, options) {
        var rangeSize = options.chart.rotatedFrame ? options.chart.plotWidth : options.chart.plotHeight;
        var range = options.chart.rotatedFrame ? [0, rangeSize] : [rangeSize, 0];
        return scale.range(range);
    }

    YAxis.prototype = {
        axis: function () {
            /*jshint eqnull:true */
            var options = this.options.yAxis;
            var domain = this.domain;

            var zeroAnchor = (options.zeroAnchor != null) ? options.zeroAnchor : options.scaling.options.zeroAnchor;
            var tickValues = options.tickValues || NwUtils.niceTicks(options.min, options.max, options.ticks, zeroAnchor, domain);
            var numTicks = this.numTicks(domain, options.min, options.max);
            var format = options.labels.formatter || d3.format(options.labels.format);

            return d3.svg.axis()
                .scale(this._scale)
                .tickFormat(format)
                .tickSize(options.innerTickSize, options.outerTickSize)
                .tickPadding(options.tickPadding)
                .ticks(numTicks)
                .tickValues(tickValues);
        },

        scale: function (domain) {
            if(!this._scale) {
                this._scale = d3.scale.linear();
                this.setDomain(domain);
            }

            setRange(this._scale, this.options);
            return this._scale;
        },

        setDomain: function (domain) {
            this._scale.domain(domain);
            this._niceTheScale();
            return this._scale;
        },

        update: function (domain, dataSrc) {
            this.data = dataSrc;
            this.setDomain(domain);
            this.scale();
        },

        /*jshint eqnull:true*/
        numTicks: function () {
            return this.options.yAxis.ticks != null ? this.options.yAxis.ticks : undefined;
        },

        _niceTheScale: function () {
            // nothing to do for the regular y-axis
        }
    };

    NwUtils.addAxis('YAxis', YAxis);

})();
