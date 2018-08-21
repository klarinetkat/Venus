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
        var x = document.createElement("IMG");
        x.setAttribute("src", "Q6_tom.jpg");
        x.setAttribute("width", "400");
        x.setAttribute("height", "300");
        x.onclick = function() {
          window.location.href = "tomboy.html";
        };
        x.style.display = "block";
        x.style.marginLeft = "auto";
        x.style.marginRight = "auto";
        x.style.width = "37.5%";
        x.style.padding = "5px";
        document.body.appendChild(x);
        // x.style.margin = "50px";
      }
      if (i == 1){
        var x = document.createElement("IMG");
        x.setAttribute("src", "Q6_mini.jpg");
        x.setAttribute("width", "400");
        x.setAttribute("height", "300");
        x.onclick = function() {
          window.location.href = "minimalist.html";
        };
        x.style.display = "block";
        x.style.marginLeft = "auto";
        x.style.marginRight = "auto";
        x.style.width = "37.5%";
        x.style.padding = "5px";
        document.body.appendChild(x);
        // x.style.margin = "50px";
      }
      if (i == 2){
        var x = document.createElement("IMG");
        x.setAttribute("src", "Q6_fem.jpg");
        x.setAttribute("width", "400");
        x.setAttribute("height", "300");
        x.onclick = function() {
          window.location.href = "feminine.html";
        };
        x.style.display = "block";
        x.style.marginLeft = "auto";
        x.style.marginRight = "auto";
        x.style.width = "37.5%";
        x.style.padding = "5px";
        document.body.appendChild(x);
        // x.style.margin = "0 auto";
      }
      if (i == 3){
        var x = document.createElement("IMG");
        x.setAttribute("src", "Q6_boho.jpg");
        x.setAttribute("width", "400");
        x.setAttribute("height", "300");
        x.onclick = function() {
          window.location.href = "bohemian.html";
        };
        x.style.display = "block";
        x.style.marginLeft = "auto";
        x.style.marginRight = "auto";
        x.style.width = "37.5%";
        x.style.padding = "5px";
        document.body.appendChild(x);
        // x.style.margin = "0 auto";
      }
      if (i == 4){
        var x = document.createElement("IMG");
        x.setAttribute("src", "Q6_vint.jpg");
        x.setAttribute("width", "400");
        x.setAttribute("height", "300");
        x.onclick = function() {
          window.location.href = "vintage.html";
        };
        x.style.display = "block";
        x.style.marginLeft = "auto";
        x.style.marginRight = "auto";
        x.style.width = "37.5%";
        x.style.padding = "5px";
        document.body.appendChild(x);
        // x.style.margin = "0 auto";
      }
    }
  }
}

function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}
