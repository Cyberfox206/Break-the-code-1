let words = ['KZRT', 'LLRT', 'JZRT', 'NZRO', 'JZYC', 'JKRT', 'JZRT', 'JZRN', 'PZRT', 'JCHT'];
let recurence = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0,}
let result = '';
let ip = 0; 
let tmp = 0;
let value = "";
console.log(words[0].length);

while (ip !== words[0].length) {
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLocaleLowerCase();
    recurence[words[i][ip]] = recurence[words[i][ip]] + 1;  
  }
  for (const key in recurence) {
    if (recurence[key]> tmp) {    
      tmp = recurence[key];
      value = [key]
    }
  }
  result += value;
  tmp = 0;
  ip = ip + 1;
  for (const key in recurence) {
    recurence[key] = 0;
  }
  console.log(result.toUpperCase());
}

