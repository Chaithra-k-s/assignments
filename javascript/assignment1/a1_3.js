function flipcoin(){
  return  Math.floor((Math.random()*2)+1);
  }
function flipcount(num){
  var head=0;
  var tail=0;
  for (i=0;i<num;i++){ 
    var value=flipcoin();
    if(value ===1){
    ++head;
  }
  else
  ++tail;
}
  console.log(head);
  return head;
}

var headscount=function(num){
  var headcountresult=flipcount(num);
  console.log(headcountresult/num);
}