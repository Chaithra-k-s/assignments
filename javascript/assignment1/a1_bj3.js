var strings=["1.2","3.5","4.9"];
numberArray=function(strings)
{
    var size=strings.length;
    var t=[];
    for(i=0;i<size;i++)
    {
        t[i]=parseFloat(strings[i]);
    }

    return t;
}
var nums=numberArray(strings);