var test1=["stop", "quit","exit","quite"];
var test="";
var lengthOfNonQ=function(test1){
    var q=test1.indexOf("/*q*/");
 console.log(q);
    test=test1[0]+test1[1]+test1[2]+test1[3];
    console.log(test);
    console.log(q);
    if (q == -1){
        return test.length;
    }
    else return test.length-1;
}
var out= lengthOfNonQ(test1);
console.log(out);

// var largestTolken=function(string){
//     var count=0;
//     var out="";
//     for (i=0;i<string.length;i++)
//     {
//         if(string[i] =="a" || string[i] =="b" )
//         {
//            count=0
//            out ="";
//         } 
//         else
//         ++count;
//         out +=string[i];
// }
//     console.log(out);
//     console.log(count);
//     return out;
// }

// largestTolken("abrefvuygvabaknaaabbhjjagnjkk");