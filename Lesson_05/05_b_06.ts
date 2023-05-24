function fooboo(boolean:boolean, func1:Function, func2:Function):void {
  if(boolean) {
    func1();
  } else {
    func2()
  }
}

function foo() {
  console.log(`Function FOO`);
}

function boo() {
  console.log(`Function BOO`);
}

fooboo(false, foo, boo)