y = 0
list = [0,0,0,0,0];
function addpoints(index){
  list[index] = list[index] + 1;
  y = y + 1
  if (y == 5){
    calculate(list)
  }
}

function calculate(list){;
  z = Math.max(...list);
  if (countInArray(list, z) > 1){
    tie(z,list)
  }
  else{
    y = list.indexOf(z);
    if (y == 0){
      window.location = "tomboy.html";
    }
    if (y == 1){
      window.location = "minimalist.html";
    }
    if (y == 2){
      window.location = "feminine.html";
    }
    if (y == 3){
      window.location = "bohemian.html";
    }
    if (y == 4){
      window.location = "vintage.html";
    }
  }
}

function tie(max,list){
  for (i = -1; i < 5; i++){
    if (list[i] == max){
      if (i == 0){
        /*show image a in question*/;
      }
      if (i == 1){
        /*show image b in question*/;
      }
      if (i == 2){
        /*show image c in question*/;
      }
      if (i == 3){
        /*show image d in question*/;
      }
      if (i == 4){
        /*show image e in question*/;
      }
    }
  }
}

function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}
