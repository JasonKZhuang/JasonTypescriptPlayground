"use strict";
// const ele_year = document.getElementById("year") as HTMLElement;
// const thisYear = new Date().getFullYear() as number;
// ele_year.setAttribute("datetime", thisYear);
// ele_year.textContent = thisYear;
// 1st variation
let ele_year;
ele_year = document.getElementById("year");
let thisYear;
thisYear = new Date().getFullYear().toString();
if (ele_year) {
    ele_year.setAttribute("datetime", thisYear);
    ele_year.textContent = thisYear;
}
//2nd variation
const ele_year2 = document.getElementById("year");
const thisYear2 = new Date().getFullYear().toString();
ele_year2.setAttribute("datetime", thisYear2);
ele_year2.textContent = thisYear2;
