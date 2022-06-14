const hours = ['7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let seattle = {
    maxCustomers:65,
    minCustomers:23,
    avgCookie:6.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,
  calcustomersPerHour:  function(){
    //calculate customers per hour
    for(let i=0; i < hours.length; i++){
    this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
    }
    console.log(this.customersPerHour);
  },

  calcookiesPerHour: function(){
    //claculate cookies per hour
    for(let i=0; i < hours.length; i++){
     let cookiePerHour= Math.ceil(this.avgCookie * this.customersPerHour[i])
     this.cookiesPerHour.push(cookiePerHour);
    }
    console.log(this.cookiesPerHour);
  },
}
// console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is

let ul = document.createElement('ul'); // unordered list

function render(hours){
  // rendering the hours
  for(let i=0; i < hours.length; i++){
    //create a list element
    let li = document.createElement('li'); //create a li item

    li.textContent = `${hours[i]} : ${seattle.cookiesPerHour[i]} cookies`;
    //append list to ul
    ul.append(li);
  }
  cookieContainer.append(ul); // adding our ul to our div
}
seattle.calcustomersPerHour()
seattle.calcookiesPerHour()
render(hours); // calling our function


let tokyo = {
  maxCustomers:24,
  minCustomers:3,
  avgCookie:1.2,
  cookiesPerHour: [],
  customersPerHour: [],
  totalDailyCookies: 0,
calcustomersPerHour:  function(){
  //calculate customers per hour
  for(let i=0; i < hours.length; i++){
  this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
  }
  console.log(this.customersPerHour);
},

calcookiesPerHour: function(){
  //claculate cookies per hour
  for(let i=0; i < hours.length; i++){
   let cookiePerHour= Math.ceil(this.avgCookie * this.customersPerHour[i])
   this.cookiesPerHour.push(cookiePerHour);
  }
  console.log(this.cookiesPerHour);
},
}
// console.log(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));

let cookieContainers = document.getElementById('cookies-sold-tokyo'); // this is where my div container is

ul = document.createElement('ul'); // unordered list

function renders(hours){
// rendering the hours
for(let i=0; i < hours.length; i++){
  //create a list element
  let li = document.createElement('li'); //create a li item

  li.textContent = `${hours[i]} : ${tokyo.cookiesPerHour[i]} cookies`;
  //append list to ul
  ul.append(li);
}
cookieContainers.append(ul); // adding our ul to our div
}
tokyo.calcustomersPerHour()
tokyo.calcookiesPerHour()
renders(hours); // calling our function

