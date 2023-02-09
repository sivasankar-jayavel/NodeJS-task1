const dt = Date.now();
console.log(dt);

const date_obj = new Date(dt);
console.log(date_obj);

const date = date_obj.getDate();
console.log(date);

const month = date_obj.getMonth() + 1;
console.log(month);

const year = date_obj.getFullYear();
console.log(year);

const time = date_obj.getTime();
console.log(time);

const fileName = year + "-" + month + "-" + date + "-" + time;
console.log(fileName);

const timestamp = new Date().toISOString();
console.log(timestamp);