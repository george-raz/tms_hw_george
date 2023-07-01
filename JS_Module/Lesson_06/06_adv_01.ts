let objT:any = {
  "0": 'Ноль',
  "1": 'Один',
  "2": 'Два',
  "3": 'Три',
  "4": 'Четыре',
  "5": 'Пять',
  "6": 'Шесть',
  "7": 'Семь',
  "8": 'Восемь',
  "9": 'Девять',
}

function stringifyResultTS(result:string):void {
  let split = result.split(":");
  console.log(`${objT[split[0]]}:${objT[split[1]]}`)
}

stringifyResultTS('5:8')
