function bubbleSort1(arr){
  for(var i = 0; i < arr.length ; i++){
    var noSwaps = true;
    for(var j = 0; j < arr.length - 1 ; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

function bubbleSort(arr){
  for(var i = arr.length; i > 0 ; i--){
    var noSwaps = true;
    for(var j = 0; j < arr.length - 1 ; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

//bubbleSort([9,8,7,6,5]);

function selectionSort(arr){
  for(var i = 0 ;i < arr.length ;i++){
    var lowest = i;
    for(var j = i + 1; j < arr.length; j++){
      if(arr[lowest] > arr[j]){
        lowest = j;
      }
    }
    if(i !== lowest){
      var temp = arr[lowest];
      arr[lowest] = arr[i];
      arr[i] = temp;
    }
  }  
  return arr;
}

selectionSort([5,4,3,2,1]);



function withdraw(amount){
  let notes = [2000, 500, 200, 100];
  let min = Math.min(...notes);  
  if(amount < min){
    return 'Amount not dispersible';
  }
  var out = {};
  var dummyAmount = amount;
  notes.forEach(i => {
    var count = Math.floor(dummyAmount / i);
    if(amount !== i && dummyAmount === 100 || dummyAmount !== i){
      if(count > 0){
        dummyAmount -= count * i;
        out[i] =  count;
      }
    }    
  });
  return out;
}

withdraw(2300); // { '100': 1, '200': 1, '2000': 1 }

withdraw(200); // { '100': 2 }

withdraw(2500); // { '100': 1, '200': 2, '2000': 1 }
