'use strict'

function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
}

const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },

}

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookieDemo = seattle.getCookies(this.cookiesPerHour);
let hoursArray = document.querySelector('.output')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
    hoursArray.append(variable);
}

const tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    location: 'tokyo',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('tokyo avg cookies/sale', this.avg);
            console.log('tokyo avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },

}

let hours2 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookie2 = seattle.getCookies(this.cookiesPerHour);
let hoursArray2 = document.querySelector('.output2')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hours2[i]}: ${cookie2[i]} cookies`;
    hoursArray.append(variable);
}

const dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    location: 'dubai',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('dubai avg cookies/sale', this.avg);
            console.log('dubai avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },

}

let hours3 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookie3 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
let hoursArray3 = document.querySelector('.output3')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hours3[i]}: ${cookie3[i]} cookies`;
    hoursArray.append(variable);
}

const paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    location: 'paris',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('paris avg cookies/sale', this.avg);
            console.log('paris avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },

}

let hour4 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookie4 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
let hoursArray4 = document.querySelector('.output4')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hours4[i]}: ${cookie4[i]} cookies`;
    hoursArray.append(variable);
}

const lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    location: 'lima',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('lima avg cookies/sale', this.avg);
            console.log('lima avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },

}
// let SeattleSales = [];
let TokyoSales = [];
let DubaiSales = [];
let ParisSales = [];
let LimaSales = [];
let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function cookieStandLocation(Storelocation) {
    let stand = {};
    stand.Storelocation = Storelocation;
    stand.sales = [];

    

    stand.cph = function () {
        for (let x = 0; x < 14; x += 1) {
            stand.sales.push(Math.floor(Math.random() * 100 + 1));
        }
    }

    stand.CPHmath = function(){
        let initialValue = 0;
        stand.sum = stand.sales.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
        stand.average = Math.floor(stand.sum / 14);
        stand.max = Math.max(...stand.sales);
        stand.min = Math.min(...stand.sales);
    }

    stand.render = function() {
        // let tblDemo = document.createElement('table');
        // let trArr = [];
        let trData = document.createElement('tr'); 
        let localeTD = document.createElement('td');
        localeTD.innerHTML = this.Storelocation;
        trData.append(localeTD);
    
        for (let i = 0; i < this.sales.length; i++) {
            let tdSales = document.createElement('td');
            tdSales.innerHTML = this.sales[i];
            trData.append(tdSales);
        }
        let trTotal = document.createElement('td');
        trTotal.innerHTML = this.sum;
        trData.append(trTotal);
        document.getElementById('DailyData').append(trData);

        let trSubData = document.createElement('tr');
        let localeTD2 = document.createElement('td');
        localeTD2.innerHTML = this.Storelocation;
        let trMin = document.createElement('td');
        trMin.innerHTML = this.min;
        let trMax = document.createElement('td');
        trMax.innerHTML = this.max;
        let trAvg = document.createElement('td');
        trAvg.innerHTML = this.average;
        trSubData.append(localeTD2, trMin, trMax, trAvg);
        document.getElementById('DailySubData').append(trSubData);
       }
       stand.render2 = function(){}


    return stand;
}
const seattle = cookieStandLocation('Seattle');
seattle.cph();
seattle.CPHmath();
seattle.render();

const tokyo = cookieStandLocation('Tokyo')
tokyo.cph();
tokyo.CPHmath();
tokyo.render();

const dubai = cookieStandLocation('Dubai')
dubai.cph();
dubai.CPHmath();
dubai.render();

const paris = cookieStandLocation('Paris')
paris.cph();
paris.CPHmath();
paris.render();

const lima = cookieStandLocation('Lima')
lima.cph();
lima.CPHmath();
lima.render();

let locationForm = document.getElementById('StorelocationForm')

// let Storelocation = "";

locationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let Storelocation = document.getElementById('locations').value;

    if (Storelocation.values == ""){
        alert("Inviald Storelocation")
    }else{
        alert("Store Storelocation saved")
        console.log(`Storelocation is ${Storelocation}`)

    }

    let storelocation = cookieStandLocation(Storelocation);
    storelocation.cph();
    storelocation.CPHmath();
    storelocation.render();
}