var prompt = require('prompt');
prompt.start();

let first = 0;
let second = 0;
let third = 0;
let fourth = 0;
let fifth = 0;
let last = 0;

prompt.get([{
  name: "number",
  description: "Enter a number"

}], function (err, result) {
  first = +result.number;

  prompt.get([{
    name: "number",
    description: "How much to deduct?"
  }], function (err, result) {
    second = +result.number;
    last = first - second;

    prompt.get([{
      name: "number",
      description: "How much to add?"
    }], function (err, result) {
      third = +result.number;
      last += third;

      prompt.get([{
        name: "number",
        description: "How much to multiply?"
      }], function (err, result) {
        fourth = +result.number;
        last *= fourth;

        prompt.get([{
          name: "number",
          description: "How much to divide?"
        }], function (err, result) {
          fifth = +result.number;
          last /= fifth;
          console.log(`(((${first} - ${second}) + ${third}) * ${fourth}) / ${fifth}} = ${last}`)

        });
      });
    });
  });
})