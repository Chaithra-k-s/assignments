var parity= function(a)
{
    if (a % 2 == 0){
        console.log("even");
        return "even";
    }else{
    console.log("odd");
    return "odd";
    }
}
document.writeln("parity(a):"+parity(3));