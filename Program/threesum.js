module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       threeSumClosest : function(A, B){
           var num=A;
           var target=B;
           var ans=0;
   
           var t=Number.MAX_VALUE;
           num=num.sort(function(a, b){
                           return a - b;
                       });
           for(var i=0;i<num.length-2;i++){
               var j=i+1;
               var k=num.length-1;
               while(j<k){
                   var sum=num[i]+num[j]+num[k];
                   if(Math.abs(sum-target)<t){
                       ans=sum;
                       t=Math.abs(sum-target);
                   }
                   if(sum>target)
                       k--;
                   else
                       j++;
               }
           }
           return ans;
   
       }
   };
   