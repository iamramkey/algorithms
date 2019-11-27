
var x = [4, 7, 8, 4, 3];


function nextGreatest(arr){
  var a = [];
  var left = 0;
  var right = 1;
  var max = arr[right];
  while(left <= right){
    if(max < arr[right]){
      max = arr[right];
    }
    right++;
    if(right === arr.length){
        right = ++left;
        a[left] = max;
        max = -1;
    }
    if(left === arr.length){
        left = arr.length + 1;
    }
  }
  
  return a;
}

nextGreatest(x); //[8, 8, 4, 3, -1]

new Intl.NumberFormat('en-IN').format(4000);


function recurringCharacter(str){
  var obj = {};
  for(var i = 0; i < str.length; i++){
    obj[str[i]] = ++obj[str[i]] || 1;
    if(obj[str[i]] === 2){
      return str[i];
    }
  }
}

recurringCharacter('ramakrishna');