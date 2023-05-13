let xString:string = 'Сады придонья. Мультифрукт';

function symbPos(x:number) {
  if(xString.charAt(x)) {
    console.log(`Symbol at position ${x}: ${xString.charAt(x)}`);
  } else {console.log(`Вы вышли за границу строки`)}
}

symbPos(20)