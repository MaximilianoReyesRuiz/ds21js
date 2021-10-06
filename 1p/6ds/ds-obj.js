//Reyes Ruiz Maximiliano

numal = n =>{
  let obj = {};
  let a=[];
  var cont = 0;
  var time = 0;
  
  const add = (key, value) => obj[key] = value;   
  
  while (cont < 7) {
    var start = new Date();
    
    for (var i=0; i<n; i++){
      a[i] = parseInt(Math.random() * n);
      add('name'+a[i]);
    }
    var end = new Date() - start;
    
    cont++;
    time+=end;
  }
  console.log("El tiempo promedio en las 7 corridas fue: " + time/7 + " ms");
  }
  numal(100000);