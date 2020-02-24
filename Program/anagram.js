module.exports = { 
    //param A : array of strings
    //return a array of array of integers
       anagrams : function(A){
           var s=A;
           var ana=[]
           for(var i=0;i<s.length;i++){
               var skip = [].concat.apply([], ana);
               skip=skip.map(function(element){
                          return element-1;
                       });
               if((skip.indexOf(i)!==-1))
                   continue;
               
               var lis=[i+1]
                   for(var j=i+1;j<s.length;j++){
                       if(checkAnagram(s[i],s[j]))
                           lis.push(j+1)
                   }
               ana.push(lis)
           }
           return(ana)
               
           function checkAnagram(s1, s2){
           
           if(s1.length !== s2.length)
               return false;
           var sorS1 = s1.split('').sort().join('');
           var sorS2 = s2.split('').sort().join('');
           
           return sorS1 === sorS2;
           }
   
       }
   };
   