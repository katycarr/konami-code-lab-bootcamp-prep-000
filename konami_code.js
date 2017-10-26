const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init(e) {
  // initialize variables
  let check = true;
  let entered = [];

  //check if entered correctly
  for(let i=0;i<code.length;i++) {
    if(code[i] != entered[i]) {
        check = false;
    }
  }

  //if correct, alert
  if(check===true) {
    window.alert("Yeeee");
  }

  if(entered.length===10) {
    entered.shift();
  }
  let key = parseInt(e.which || e.detail);
  entered.push(key);

  }
