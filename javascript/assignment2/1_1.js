function double(x){
    var value=parseInt(x);
    return x*2;
}
function square(x){
    var value=parseInt(x);
    return x*x;
}


composedValue=function(v1,v2,value){
    var out;
    if(v2==square){
        out=double(square(value));
    }
    if (v2==double){
        out=square(double(value));
    }
    console.log(out);
    return out;
}


var f1=function(value1){
    var value=parseInt(value1);
    function compose(f1,f2){
        console.log(f1(f2(value)));
    }
    compose(square,double);
}
var f2=function(value1){
    var value=parseInt(value1);
    function compose(f1,f2){
        console.log(f1(f2(value)));
    }
    compose( double,square);
}

function isEven(value){
    return (value%2 ==0);
}

find=function(x,y)
{
    if (y == isEven)
    for (i=0; i<x.length;i++)
    {
        if (isEven(x[i]) == true)
        return x[i];
    }
        
}

function map(x,y){
    var out=[];
    if(y == square)
        for (i=0;i<x.length;i++)
            out.push(square(x[i]));
    if(y == Math.sqrt)
    for (i=0;i<x.length;i++)
            out.push(Math.sqrt(x[i]));
    return out;
}


