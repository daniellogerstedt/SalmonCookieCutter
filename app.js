'use strict';

var form = document.getElementById('input_form');
var storeLocations = [];

function Store(name, min, max, avg){
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookSale = avg;
  this.hoursOfBusiness = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.salesPerHour = [];
  this.salesTotal = 0;
};

function formData(event) {
  event.preventDefault();

  var location = event.target.store_location.value + ' Store';
  var minimum = parseInt(event.target.store_minimum.value);
  var maximum = parseInt(event.target.store_maximum.value);
  var average = parseInt(event.target.store_average.value + '.' + event.target.store_average_dec.value);
  storeLocations.push(new Store(location, minimum, maximum, average));
  buildSales(storeLocations);
  form.reset();
}

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

var buildSales = function(salesArray) {
  document.getElementById('sales-table-head').innerHTML = '';
  document.getElementById('sales-table-body').innerHTML = '';
  var hourlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var k = 0; k < salesArray.length; k++) {
    var storeSales = document.createElement('tr');
    var salesAmount = ['<th>' + salesArray[k].name + '</th>'];
    var tableHeader = ['<th>Store</th>'];
    var tableFooter = ['<th>Hourly Totals:</th>'];
    var salesAmountTotal;
    if (salesArray[k].salesPerHour.length === 0) {
      salesArray[k].actualCust();
    };
    for (var l = 0; l < salesArray[k].hoursOfBusiness.length; l++) {
      salesAmount.push('<td>' + salesArray[k].salesPerHour[l] + '</td>');
      hourlyTotal[l] += salesArray[k].salesPerHour[l];
      console.log('hourly total', hourlyTotal);
      if (k === 0) {
        tableHeader.push('<th>' + salesArray[k].hoursOfBusiness[l] + '</th>');
      }
      if (k === salesArray.length - 1) {
        tableFooter.push('<td>' + hourlyTotal[l] + '</td>');
      }
    }
    tableHeader.push('<th>Daily Totals</th>');
    console.log('footer array', tableFooter);
    // tableFooter.push()
    if (k === 0) { //Appends header to table
      var headerRow = document.createElement('tr');
      headerRow.innerHTML = tableHeader.join('');
      document.getElementById('sales-table-head').appendChild(headerRow);
    }
    // console.log('table header', tableHeader);
    // console.log('sales per hour:', salesAmount);
    // console.log('store sales:', storeSales);
    salesAmountTotal = '<td>Total: ' + salesArray[k].salesTotal + '</td>';
    salesAmount.push(salesAmountTotal);
    // console.log('total sales:', salesAmountTotal);
    storeSales.innerHTML = salesAmount.join('');
    // console.log('store sales:', storeSales);
    document.getElementById('sales-table-body').appendChild(storeSales);
    // console.log(typeof storeSales);
    if (k === salesArray.length - 1) { //Appends footer to table after rest of data
      var footerRow = document.createElement('tr');
      tableFooter.push('<td></td>');
      footerRow.innerHTML = tableFooter.join('');
      document.getElementById('sales-table-body').appendChild(footerRow);
    }
  }
};

storeLocations.push(new Store('First and Pike Store', 23, 65, 6.3));
storeLocations.push(new Store('SeaTac Airport Store', 3, 24, 1.2));
storeLocations.push(new Store('Seattle Center Store', 11, 38, 3.7));
storeLocations.push(new Store('Capitol Hill Store', 20, 38, 2.3));
storeLocations.push(new Store('Alki Beach Store', 2, 16, 4.6));

buildSales(storeLocations);

form.addEventListener('submit', formData);
