'use strict';

function Store(name, min, max, avg){
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookSale = avg;
  this.hoursOfBusiness = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.salesPerHour = [];
  this.salesTotal = 0;
};

Store.prototype.actualCust = function() {
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
};
var storeLocations = [];

storeLocations.push(new Store('First and Pike Store', 23, 65, 6.3));
storeLocations.push(new Store('SeaTac Airport Store', 3, 24, 1.2));
storeLocations.push(new Store('Seattle Center Store', 11, 38, 3.7));
storeLocations.push(new Store('Capitol Hill Store', 20, 38, 2.3));
storeLocations.push(new Store('Alki Beach Store', 2, 16, 4.6));


var buildSales = function(salesArray) {
  for (var k = 0; k < salesArray.length; k++) {
    var storeSales = document.createElement('tr');
    var salesAmount = ['<td>' + salesArray[k].name + '</td>'];
    var tableHeader = ['<th>Store</th>'];
    var salesAmountTotal;
    salesArray[k].actualCust();
    for (var l = 0; l < salesArray[k].hoursOfBusiness.length; l++) {
      salesAmount.push('<td>' + salesArray[k].salesPerHour[l] + '</td>');
      if (k === 0) {
        tableHeader.push('<th>' + salesArray[k].hoursOfBusiness[l] + '</th>');
      }
    }
    tableHeader.push('<th>Daily Totals</th>');
    if (k === 0) {
      var headerRow = document.createElement('tr');
      headerRow.innerHTML = tableHeader.join('');
      document.getElementById('salesTableHead').appendChild(headerRow);
    }
    console.log(tableHeader);
    // console.log('sales per hour:', salesAmount);
    // console.log('store sales:', storeSales);
    salesAmountTotal = '<td>Total: ' + salesArray[k].salesTotal + '</td>';
    salesAmount.push(salesAmountTotal);
    // console.log('total sales:', salesAmountTotal);
    storeSales.innerHTML = salesAmount.join('');
    console.log('store sales:', storeSales);
    document.getElementById('salesTableBody').appendChild(storeSales);
    console.log(typeof storeSales);
  }
};

buildSales(storeLocations);
