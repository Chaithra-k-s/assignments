var max=function(a,b,c){
    if(a>b && a>c){
        console.log("max of ("+a+","+b+","+c+"); --->"+a);
        return a;
    }
    if(b>c && b>a){
        console.log("max of ("+a+","+b+","+c+"); --->"+b);
        return b;
    }
    if(c>a && c>b){
        console.log("max of ("+a+","+b+","+c+"); --->"+c);
        return c;
    }
}

var out=max(3,5,1);
document.writeln(out)