'use strict';

var storeLocations = [{
  name: 'First and Pike Store',
  minCust: 23,
  maxCust: 65,
  avgCookSale: 6.3,
  hoursOfBusiness: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  salesTotal: 0,
  actualCust: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var runningTotal = 0;
    var salesAmounts = [];
    for (var i = 0; i < this.hoursOfBusiness.length; i++){
      var randomSale = Math.floor(Math.random() * (max - min) + min );
      // creates array information for hourly sales rounding up to ensure there are never too few salmon cookies.
      salesAmounts.push(Math.ceil(randomSale * this.avgCookSale));
      runningTotal += (Math.ceil(randomSale * this.avgCookSale));
      // console.log('hourly sales:', salesAmounts[i]);
      // console.log('total sales:', runningTotal);
    }
    this.salesPerHour = salesAmounts;
    this.salesTotal = runningTotal;
    return;
  }
}, {
  name: 'SeaTac Airport Store',
  minCust: 3,
  maxCust: 24,
  avgCookSale: 1.2,
  hoursOfBusiness: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  salesTotal: 0,
  actualCust: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var runningTotal = 0;
    var salesAmounts = [];
    for (var i = 0; i < this.hoursOfBusiness.length; i++){
      var randomSale = Math.floor(Math.random() * (max - min) + min );
      // creates array information for hourly sales rounding up to ensure there are never too few salmon cookies.
      salesAmounts.push(Math.ceil(randomSale * this.avgCookSale));
      runningTotal += (Math.ceil(randomSale * this.avgCookSale));
      // console.log('hourly sales:', salesAmounts[i]);
      // console.log('total sales:', runningTotal);
    }
    this.salesPerHour = salesAmounts;
    this.salesTotal = runningTotal;
    return;
  }
}, {
  name: 'Seattle Center Store',
  minCust: 11,
  maxCust: 38,
  avgCookSale: 3.7,
  hoursOfBusiness: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  salesTotal: 0,
  actualCust: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var runningTotal = 0;
    var salesAmounts = [];
    for (var i = 0; i < this.hoursOfBusiness.length; i++){
      var randomSale = Math.floor(Math.random() * (max - min) + min );
      // creates array information for hourly sales rounding up to ensure there are never too few salmon cookies.
      salesAmounts.push(Math.ceil(randomSale * this.avgCookSale));
      runningTotal += (Math.ceil(randomSale * this.avgCookSale));
      // console.log('hourly sales:', salesAmounts[i]);
      // console.log('total sales:', runningTotal);
    }
    this.salesPerHour = salesAmounts;
    this.salesTotal = runningTotal;
    return;
  }
}, {
  name: 'Capitol Hill Store',
  minCust: 20,
  maxCust: 38,
  avgCookSale: 2.3,
  hoursOfBusiness: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  salesTotal: 0,
  actualCust: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var runningTotal = 0;
    var salesAmounts = [];
    for (var i = 0; i < this.hoursOfBusiness.length; i++){
      var randomSale = Math.floor(Math.random() * (max - min) + min );
      // creates array information for hourly sales rounding up to ensure there are never too few salmon cookies.
      salesAmounts.push(Math.ceil(randomSale * this.avgCookSale));
      runningTotal += (Math.ceil(randomSale * this.avgCookSale));
      // console.log('hourly sales:', salesAmounts[i]);
      // console.log('total sales:', runningTotal);
    }
    this.salesPerHour = salesAmounts;
    this.salesTotal = runningTotal;
    return;
  }
}, {
  name: 'Alki Beach Store',
  minCust: 2,
  maxCust: 16,
  avgCookSale: 4.6,
  hoursOfBusiness: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  salesTotal: 0,
  actualCust: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var runningTotal = 0;
    var salesAmounts = [];
    for (var i = 0; i < this.hoursOfBusiness.length; i++){
      var randomSale = Math.floor(Math.random() * (max - min) + min );
      // creates array information for hourly sales rounding up to ensure there are never too few salmon cookies.
      salesAmounts.push(Math.ceil(randomSale * this.avgCookSale));
      runningTotal += (Math.ceil(randomSale * this.avgCookSale));
      // console.log('hourly sales:', salesAmounts[i]);
      // console.log('total sales:', runningTotal);
    }
    this.salesPerHour = salesAmounts;
    this.salesTotal = runningTotal;
    return;
  }
}];

var buildSales = function(salesArray) {
  for (var k = 0; k < salesArray.length; k++) {
    var storeSection = document.createElement('section');
    var storeName = '<h2>' + salesArray[k].name + '</h2>';
    var salesAmount = [];
    var salesAmountTotal;
    salesArray[k].actualCust();
    var storeSales = document.createElement('ul');

    for (var l = 0; l < salesArray[k].hoursOfBusiness.length; l++) {
      salesAmount.push('<li>' + salesArray[k].hoursOfBusiness[l] + ': ' + salesArray[k].salesPerHour[l] + '</li>');
    }
    // console.log('sales per hour:', salesAmount);
    // console.log('store sales:', storeSales);
    salesAmountTotal = '<li>Total: ' + salesArray[k].salesTotal + '</li>';
    salesAmount.push(salesAmountTotal);
    // console.log('total sales:', salesAmountTotal);
    storeSales.innerHTML = salesAmount.join('');
    console.log('store sales:', storeSales);

    storeSection.innerHTML = storeName + storeSales;
    console.log(storeSection);
    document.body.main.appendChild(storeSection);
  }
};

buildSales(storeLocations);
