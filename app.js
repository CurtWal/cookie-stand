'use strict'

const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let hourTable = document.getElementById("hour-table");

let tableHeaderContainer = document.createElement("thead");//table element thead

let tableHeaderEl = document.createElement('th');

let tableRow = document.createElement('tr');//table row element

let tableData = document.createElement('td');

// Contruction function for table box
function City(maxCustomers, minCustomers, avgCookie) {

  this.maxCustomers = maxCustomers;
  this.minCustomers = minCustomers;
  this.avgCookie = avgCookie;
  this.cookiesPerHour = [];
  this.customersPerHour = [];
  this.totalDailyCookies = 0;

  this.render = function (hoursArray) {
    //go through each name in array
    for (let i = 0; i < hoursArray.length; i++) {
      
      

      
      tableHeaderEl.textContent = `${hours[i]}`;
      

      tableRow.append(tableHeaderEl);// attach table row to table header
      tableHeaderContainer.append(tableRow);
    }
    hourTable.append(tableHeaderContainer);//attach header to student table
  }

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
        // get cookies-Per-hour from  the cookies per hour array

        //the cookiePerhour array is equal to avgCookie time the customerPerHour 
        let cookiePerHour = Math.ceil(this.avgCookie * this.customersPerHour[i]);

        this.totalDailyCookies += cookiePerHour;
      


        tableRow.textContent = `${cookiePerHour} ${this.totalDailyCookies}`;

        
      
        tableRow.append(tableHeaderEl);// attach table row to table header
        tableHeaderContainer.append(tableRow);
        tableData.append(tableRow);

        this.cookiesPerHour.push(cookiePerHour);
      }
      console.log(this.totalDailyCookies);
      console.log(this.cookiesPerHour);
      hourTable.append(tableHeaderContainer);
      
    }
    
}

// this is where my table container is
// hourTable.append();

// a function to call all instance methods 

// array of objects we made

function callInstanceMethods(){
  let Seattle = new City(65, 23, 6.3,)
  let Tokyo = new City(24, 3, 1.2,)
  let Dubai = new City(38, 11, 3.7,)
  let Paris = new City(38, 20, 2.3,)
  let Lima = new City(16, 2, 4.6,)
  
  let cityArray = [Seattle,Tokyo,Dubai,Paris,Lima];

  for (let i = 0; i < cityArray.length; i++) {
    const city = cityArray[i];
    city.calcustomersPerHour()
    city.calcookiesPerHour()
    city.render(hours)
    
  }
}
callInstanceMethods()

// Tokyo.calcustomersPerHour()
// Tokyo.calcookiesPerHour()
// Dubai.calcustomersPerHour()
// Dubai.calcookiesPerHour()
// Paris.calcustomersPerHour()
// Paris.calcookiesPerHour()
// Lima.calcustomersPerHour()
// Lima.calcookiesPerHour()// calling our function

