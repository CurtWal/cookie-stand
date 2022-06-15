'use strict'

const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let hourTable = document.getElementById("hour-table");

let tableHeaderContainer = document.createElement("thead");//table element thead

let tableHeaderEl = document.createElement('th');

let tableRow = document.createElement('tr');//table row element
function renderHourTable() {
  //go through each name in array
  for (let i = 0; i < hours.length; i++) {
    //Jordan
    tableHeaderEl = document.createElement('th');
    tableHeaderEl.textContent = `${hours[i]}`;

    tableRow.append(tableHeaderEl);// attach table row to table header
    tableHeaderContainer.append(tableRow);
  }
  hourTable.append(tableHeaderContainer);//attach header to student table
}
renderHourTable();

// Contruction function for table box
function city(maxCustomers, minCustomers, avgCookie, cookiesPerHour, customersPerHour, totalDailyCookies) {
  this.maxCustomers = maxCustomers,
    this.minCustomers = minCustomers,
    this.avgCookie = avgCookie,
    this.cookiesPerHour = customersPerHour,
    this.customersPerHour = customersPerHour,
    this.totalDailyCookies = 0,
    this.calcustomersPerHour = function () {
      //calculate customers per hour
      for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
      }
      console.log(this.customersPerHour);
    },

    this.calcookiesPerHour = function () {
      //claculate cookies per hour
      for (let i = 0; i < hours.length; i++) {
        this.cookiePerHour = Math.ceil(this.avgCookie * this.customersPerHour[i]);
        this.totalDailyCookies += this.cookiePerHour;


        this.cookiesPerHour.push(this.cookiePerHour);
      }
      console.log(this.totalDailyCookies);
      console.log(this.cookiesPerHour);
    };

}

let Seattle = new city(65, 23, 6.3, [], [])

// this is where my div container is
let cookieContaineR = document.getElementById('hour-table'); 

//table element thead
let tableheaderContainer = document.createElement("thead");

let tableheaderEl = document.createElement('th');

let tablerow = document.createElement('tr')

function render() {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a thead element
    tableheaderEl = document.createElement('th');
    tableheaderEl.textContent = ` ${Seattle.cookiesPerHour[i]}`;

    tablerow.append(tableheaderEl);// attach table row to table header
    tableheaderContainer.append(tablerow);
  }
  cookieContaineR.append(tableheaderContainer);

}
cookieContaineR.append();
Seattle.calcustomersPerHour()
Seattle.calcookiesPerHour()
render(Seattle.totalDailyCookies); // calling our function



let Tokyo = new city(24, 3, 1.2, [], [])

// this is where my div container is
cookieContaineR = document.getElementById('hour-table');

//table element thead
tableheaderContainer = document.createElement("thead");

tableheaderEl = document.createElement('th');

tablerow = document.createElement('tr')

function reNder() {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {

    //create a thead element
    tableheaderEl = document.createElement('th');

    // Tokyo random cookies per hour
  tableheaderEl.textContent = `${Tokyo.cookiesPerHour[i]} `;

// attach table row to table header
    tablerow.append(tableheaderEl);
    tableheaderContainer.append(tablerow);
  }
  cookieContaineR.append(tableheaderContainer);

}
cookieContaineR.append(); 
Tokyo.calcustomersPerHour()
Tokyo.calcookiesPerHour()
reNder(); // calling our function


let Dubai = new city(38, 11, 3.7, [], [])

cookieContaineR = document.getElementById('hour-table'); // this is where my div container is

tableheaderContainer = document.createElement("thead");//table element thead

tableheaderEl = document.createElement('th');

tablerow = document.createElement('tr')

function rEnder() {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a list element
    tableheaderEl = document.createElement('th');
    tableheaderEl.textContent = `${Dubai.cookiesPerHour[i]}`;

    tablerow.append(tableheaderEl);// attach table row to table header
    tableheaderContainer.append(tablerow);
  }
  cookieContaineR.append(tableheaderContainer);

}
cookieContaineR.append(); // adding our ul to our div
Dubai.calcustomersPerHour()
Dubai.calcookiesPerHour()
rEnder();


let Paris = new city(38, 20, 2.3, [], [])

cookieContaineR = document.getElementById('hour-table'); // this is where my div container is

tableheaderContainer = document.createElement("thead");//table element thead

tableheaderEl = document.createElement('th');

tablerow = document.createElement('tr')

function rENder() {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a thead element
    tableheaderEl = document.createElement('th');
    tableheaderEl.textContent = ` ${Paris.cookiesPerHour[i]}`;

    tablerow.append(tableheaderEl);// attach table row to table header
    tableheaderContainer.append(tablerow);
  }
  cookieContaineR.append(tableheaderContainer);

}
cookieContaineR.append();
Paris.calcustomersPerHour()
Paris.calcookiesPerHour()
rENder();


let Lima = new city(16, 2, 4.6, [], [])

cookieContaineR = document.getElementById('hour-table'); // this is where my div container is

tableheaderContainer = document.createElement("thead");//table element thead

tableheaderEl = document.createElement('th');

tablerow = document.createElement('tr')

function rEnDer() {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a list elemente
    tableheaderEl = document.createElement('th');
    tableheaderEl.textContent = ` ${Lima.cookiesPerHour[i]}`;

    tablerow.append(tableheaderEl);// attach table row to table header
    tableheaderContainer.append(tablerow);
  }
  cookieContaineR.append(tableheaderContainer);
}
cookieContaineR.append();
Lima.calcustomersPerHour()
Lima.calcookiesPerHour()
rEnDer();