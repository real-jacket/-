var A = {0:-1,1:2,2:0,3:4,4:3,5:6,6:5,7:8,8:-2,9:1,10:3,11:0,12:3,13:6,14:5,15:2};
//1、取出数组里的最大最小值，确定C的长度
var min = A[0],
    max = A[0],
    C = {},
    D = {};
for(var i = 0;i < A.length;i++){
  if(min > A[i]){
    min = A[i]
  };
  if(max < A[i]){
    max = A[i]
  };
};
C.length = max - min + 1;
//对A中的数字出现次数计数,得出计数后的C数组
for(var i = 0;i < C.length;i++){
  for(var j = 0;j < A.length;j++){
    if(A[j]=min){
      C[i]++;
    };
  };
  min++;
}
//得出A计数后的形成的D数组
for(var i = 0;i < C.length;i++){
  for(var j = 0;j < C[i];j++){
    D.push(min + i);
  };
};
console.log(D);