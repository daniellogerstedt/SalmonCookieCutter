'use strict';

// 1st and Pike Store Object
var firstPikeStore = {
  minCust: 23,
  maxCust: 65,
  avgCookSale: 6.3,
  hoursOfBusiness: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  salesPerHour: [],
  actualCust: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var salesAmounts = [];
    for (var i = 0; i < this.hoursOfBusiness.length; i++){
      var randomSale = Math.floor(Math.random() * (max - min) + min );
      // creates array information for hourly sales rounding up to ensure there are never too few salmon cookies.
      salesAmounts.push(Math.ceil(randomSale * this.avgCookSale));
    }
    this.salesPerHour = salesAmounts;
    return;
  }
};

// SeaTac Airport Store Object
var seatacAirportStore = {
  minCust: 3,
  maxCust: 24,
  avgCookSale: 1.2
};

// Seattle Center Store Object
var seattleCenterStore = {
  minCust: 11,
  maxCust: 38,
  avgCookSale: 3.7
};

// Capitol Hill Store Object
var capitolHillStore = {
  minCust: 20,
  maxCust: 38,
  avgCookSale: 2.3
};

// Alki Store Object
var alkiBeachStore = {
  minCust: 2,
  maxCust: 16,
  avgCookSale: 4.6
};
