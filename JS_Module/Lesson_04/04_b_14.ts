const now:Date = new Date();

let year:any = now.getFullYear();

let month:any = now.getMonth();
month = month < 10 ? "0" + month : month;

let day:any = now.getDate();
day = day < 10 ? "0" + day : day;

let hours:any = now.getHours();
hours = hours < 10 ? "0" + hours : hours;

let minutes:any = now.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;

let seconds:any = now.getSeconds();
seconds = seconds < 10 ? "0" + seconds : seconds;

console.log(`Текущая дата: ${month}/${year}/${day}. Текущее время: ${hours}:${minutes}:${seconds}.`)