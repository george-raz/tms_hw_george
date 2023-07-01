

const validatorObj = {
  signUp: function (login: string, password: string): Object {
    let signedUser = {
      login: login,
      password: password
    }
    return signedUser;
  },
  login: function (log: string, pass: string, obj: Object) {
    if ("login" in obj && "password" in obj) {
      if (log == obj.login && pass == obj.password) {
        console.log("Welcome!");
      } else {
        console.log("Wrong credentials");
      }
    }
  }
}

validatorObj.login('Hey', 'You', validatorObj.signUp('Hey', 'you'));


