let dotString:string = 'Сады придонья';

function isEndedWithDot(x:string) {
  if(x.endsWith(".")) {
    console.log(`Данное предложение закончено`);
  } else {console.log(`В конце предложения не хватает точки`)}
}

isEndedWithDot(dotString)