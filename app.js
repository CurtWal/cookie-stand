// 'use strict'

const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let hourTable = document.getElementById("hour-table");

let tableHeaderContainer = document.createElement("thead");//table element thead

let tableHeaderEl = document.createElement('th');

let tableRow = document.createElement('tr');//table row element
function renderTableHeader() {
  //go through each name in array
  for (let i = 0; i < hours.length; i++) {
    //Jordan
    tableHeaderEl = document.createElement('th');
    tableHeaderEl.textContent = `${hours[i]}`;
    // tableRow = document.createElement('tr');//create row
    // add a name to our th

    tableRow.append(tableHeaderEl);// attach table row to table header
    tableHeaderContainer.append(tableRow);
  }
  hourTable.append(tableHeaderContainer);//attach header to student table
}
renderTableHeader();




// let seattle = {
//   maxCustomers: 65,
//   minCustomers: 23,
//   avgCookie: 6.3,
//   cookiesPerHour: [],
//   customersPerHour: [],
//   totalDailyCookies: 0,
//   calcustomersPerHour: function () {
//     //calculate customers per hour
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
//     }
//     console.log(this.customersPerHour);
//   },

//   calcookiesPerHour: function () {
//     //claculate cookies per hour
//     for (let i = 0; i < hours.length; i++) {
//       let cookiePerHour = Math.ceil(this.avgCookie * this.customersPerHour[i]);
//       this.totalDailyCookies += cookiePerHour;


//       this.cookiesPerHour.push(cookiePerHour);
//     }
//     console.log(this.totalDailyCookies);
//     console.log(this.cookiesPerHour);
//   },
// }

// // console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

// let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is

// let ul = document.createElement('ul'); // unordered list

// function render(hours) {
//   // rendering the hours
//   for (let i = 0; i < hours.length; i++) {
//     //create a list element
//     let li = document.createElement('li'); //create a li item

//     li.textContent = `${hours[i]} : ${seattle.cookiesPerHour[i]} cookies`;
//     //append list to ul
//     ul.append(li);
//   }
//   cookieContainer.append(ul); // adding our ul to our div
// }
// seattle.calcustomersPerHour()
// seattle.calcookiesPerHour()
// render(hours); // calling our function


// let tokyo = {
//   maxCustomers: 24,
//   minCustomers: 3,
//   avgCookie: 1.2,
//   cookiesPerHour: [],
//   customersPerHour: [],
//   totalDailyCookies: 0,
//   calcustomersPerHour: function () {
//     //calculate customers per hour
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
//     }
//     console.log(this.customersPerHour);
//   },

//   calcookiesPerHour: function () {
//     //claculate cookies per hour
//     for (let i = 0; i < hours.length; i++) {
//       let cookiePerHour = Math.ceil(this.avgCookie * this.customersPerHour[i])
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//     console.log(this.totalDailyCookies);
//     console.log(this.cookiesPerHour);
//   },
// }
// // console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

// let cookieContainers = document.getElementById('cookies-sold-tokyo'); // this is where my div container is

// ul = document.createElement('ul'); // unordered list

// function renders(hours) {
//   // rendering the hours
//   for (let i = 0; i < hours.length; i++) {
//     //create a list element
//     let li = document.createElement('li'); //create a li item

//     li.textContent = `${hours[i]} : ${tokyo.cookiesPerHour[i]} cookies`;
//     //append list to ul
//     ul.append(li);
//   }
//   cookieContainers.append(ul); // adding our ul to our div
// }
// tokyo.calcustomersPerHour()
// tokyo.calcookiesPerHour()
// renders(hours); // calling our function

// let dubai = {
//   maxCustomers: 38,
//   minCustomers: 11,
//   avgCookie: 3.7,
//   cookiesPerHour: [],
//   customersPerHour: [],
//   totalDailyCookies: 0,
//   calcustomersPerHour: function () {
//     //calculate customers per hour
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
//     }
//     console.log(this.customersPerHour);
//   },

//   calcookiesPerHour: function () {
//     //claculate cookies per hour
//     for (let i = 0; i < hours.length; i++) {
//       let cookiePerHour = Math.ceil(this.avgCookie * this.customersPerHour[i])
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//     console.log(this.totalDailyCookies);
//     console.log(this.cookiesPerHour);
//   },
// }
// // console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

// let cookiecontainerss = document.getElementById('cookies-sold-dubai'); // this is where my div container is

// ul = document.createElement('ul'); // unordered list

// function renDers(hours) {
//   // rendering the hours
//   for (let i = 0; i < hours.length; i++) {
//     //create a list element
//     let li = document.createElement('li'); //create a li item

//     li.textContent = `${hours[i]} : ${dubai.cookiesPerHour[i]} cookies`;
//     //append list to ul
//     ul.append(li);
//   }
//   cookiecontainerss.append(ul); // adding our ul to our div
// }
// dubai.calcustomersPerHour()
// dubai.calcookiesPerHour()
// renDers(hours); // calling our function

// let paris = {
//   maxCustomers: 38,
//   minCustomers: 20,
//   avgCookie: 2.3,
//   cookiesPerHour: [],
//   customersPerHour: [],
//   totalDailyCookies: 0,
//   calcustomersPerHour: function () {
//     //calculate customers per hour
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
//     }
//     console.log(this.customersPerHour);
//   },

//   calcookiesPerHour: function () {
//     //claculate cookies per hour
//     for (let i = 0; i < hours.length; i++) {
//       let cookiePerHour = Math.ceil(this.avgCookie * this.customersPerHour[i])
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//     console.log(this.totalDailyCookies);
//     console.log(this.cookiesPerHour);
//   },
// }
// // console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

// let cookiecontainersss = document.getElementById('cookies-sold-paris'); // this is where my div container is

// ul = document.createElement('ul'); // unordered list

// function rEnders(hours) {
//   // rendering the hours
//   for (let i = 0; i < hours.length; i++) {
//     //create a list element
//     let li = document.createElement('li'); //create a li item

//     li.textContent = `${hours[i]} : ${paris.cookiesPerHour[i]} cookies`;
//     //append list to ul
//     ul.append(li);
//   }
//   cookiecontainersss.append(ul); // adding our ul to our div
// }
// paris.calcustomersPerHour()
// paris.calcookiesPerHour()
// rEnders(hours); // calling our function

// let lima = {
//   maxCustomers: 16,
//   minCustomers: 2,
//   avgCookie: 4.6,
//   cookiesPerHour: [],
//   customersPerHour: [],
//   totalDailyCookies: 0,
//   calcustomersPerHour: function () {
//     //calculate customers per hour
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
//     }
//     console.log(this.customersPerHour);
//   },

//   calcookiesPerHour: function () {
//     //claculate cookies per hour
//     for (let i = 0; i < hours.length; i++) {
//       let cookiePerHour = Math.ceil(this.avgCookie * this.customersPerHour[i])
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//     console.log(this.totalDailyCookies);
//     console.log(this.cookiesPerHour);
//   },
// }
// // console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

// let cookiecontainerssss = document.getElementById('cookies-sold-lima'); // this is where my div container is

// ul = document.createElement('ul'); // unordered list

// function reNders(hours) {
//   // rendering the hours
//   for (let i = 0; i < hours.length; i++) {
//     //create a list element
//     let li = document.createElement('li'); //create a li item

//     li.textContent = `${hours[i]} : ${lima.cookiesPerHour[i]} cookies`;
//     //append list to ul
//     ul.append(li);
//   }
//   cookiecontainerssss.append(ul); // adding our ul to our div
// }
// lima.calcustomersPerHour()
// lima.calcookiesPerHour()
// reNders(hours); // calling our function


function city(maxCustomers,minCustomers, avgCookie, cookiesPerHour, customersPerHour, totalDailyCookies){
  this.maxCustomers= maxCustomers,
  this.minCustomers= minCustomers,
  this.avgCookie= avgCookie,
  this.cookiesPerHour= customersPerHour,
  this.customersPerHour = customersPerHour,
  this.totalDailyCookies = 0,
  this.calcustomersPerHour= function () {
    //calculate customers per hour
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
    }
    console.log(this.customersPerHour);
  },

  this.calcookiesPerHour= function(){
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

let Seattle = new city(65,23,6.3,[],[])
// console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is

let ul = document.createElement('ul'); // unordered list

function render(hours) {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a list element
    let li = document.createElement('li'); //create a li item

    li.textContent = `${hours[i]} : ${Seattle.cookiesPerHour[i]} cookies ${Seattle.totalDailyCookies}`;
    //append list to ul
    ul.append(li);

            tableHeaderEl = document.createElement('th');
        tableHeaderEl.textContent = `${Seattle.cookiesPerHour[i]}  ${Seattle.totalDailyCookies}`;
  
        // tableRow = document.createElement('tr');//create row
         // add a name to our th

        tableRow.append(tableHeaderEl);// attach table row to table header
        tableHeaderContainer.append(tableRow);
    }
    studentTable.append(tableHeaderContainer);
  }
cookieContainer.append(ul); // adding our ul to our div
Seattle.calcustomersPerHour()
Seattle.calcookiesPerHour()
render(hours); // calling our function



let Tokyo = new city(24,3,1.2,[],[])
// console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

let cookieContainers = document.getElementById('cookies-sold'); // this is where my div container is

ul = document.createElement('ul'); // unordered list

function reNder(hours) {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a list element
    let li = document.createElement('li'); //create a li item

    li.textContent = `${hours[i]} : ${Tokyo.cookiesPerHour[i]} cookies ${Tokyo.totalDailyCookies}`;
    //append list to ul
    ul.append(li);
  }
  cookieContainer.append(ul); // adding our ul to our div
}
Tokyo.calcustomersPerHour()
Tokyo.calcookiesPerHour()
reNder(hours); // calling our function


let Dubai = new city(38,11,3.7,[],[])
// console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

let cookieContainerss = document.getElementById('cookies-sold'); // this is where my div container is

ul = document.createElement('ul'); // unordered list

function rEnder(hours) {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a list element
    let li = document.createElement('li'); //create a li item

    li.textContent = `${hours[i]} : ${Dubai.cookiesPerHour[i]} cookies ${Dubai.totalDailyCookies}`;
    //append list to ul
    ul.append(li);
  }
  cookieContainer.append(ul); // adding our ul to our div
}
Dubai.calcustomersPerHour()
Dubai.calcookiesPerHour()
rEnder(hours);


let Paris = new city(38,20,2.3,[],[])
// console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

let cookieContainersss = document.getElementById('cookies-sold'); // this is where my div container is

ul = document.createElement('ul'); // unordered list

function rENder(hours) {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a list element
    let li = document.createElement('li'); //create a li item

    li.textContent = `${hours[i]} : ${Paris.cookiesPerHour[i]} cookies ${Paris.totalDailyCookies}`;
    //append list to ul
    ul.append(li);
  }
  cookieContainer.append(ul); // adding our ul to our div
}
Paris.calcustomersPerHour()
Paris.calcookiesPerHour()
rENder(hours);


let Lima = new city(38,20,2.3,[],[])
// console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

let cookieContaineRsss = document.getElementById('cookies-sold'); // this is where my div container is

ul = document.createElement('ul'); // unordered list

function rEnDer(hours) {
  // rendering the hours
  for (let i = 0; i < hours.length; i++) {
    //create a list element
    let li = document.createElement('li'); //create a li item

    li.textContent = `${hours[i]} : ${Lima.cookiesPerHour[i]} cookies ${Lima.totalDailyCookies}`;
    //append list to ul
    ul.append(li);
  }
  cookieContainer.append(ul); // adding our ul to our div
}
Lima.calcustomersPerHour()
Lima.calcookiesPerHour()
rEnDer(hours);