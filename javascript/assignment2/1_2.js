// function iseven(num){
//     if((num & 1) === 0) 
//         {
//             console.log(num);        
//    }
//     return(Boolean(num&1 == 0));
// }
// function find(x,iseven){
//     x.filter(iseven(x));
//     console.log(x);
    
// }
// function find(a,iseven){
// a.filter(function iseven (a)
//  {
//       if((a & 1) === 0) 
//       {
//           console.log(a);    
//  }
// }
//         );
// }

square =(x)=>x*x;
double=(x)=>x*2;
iseven=(x)=>x%2 ===0;

map =([head,...tail],fn)=>{
    if(head === undefined){
        return [];
    }
    return[fn(head),...map(tail,fn)];
};

find=([head,...tail],fn)=>{
if (head===undefined){
    return [];
}
    if (fn(head))
    {
    return [head,...find(tail,fn)]
    }
else
return [...find(tail,fn)];
}
show =function (x) {
    return x*x;  
}
last =function(x){
    var x1="";
    return x1+x;
}


