var A = [-1, 2, 0, 4, 3, 6, 5, 8, -2, 1, 3, 0, 3, 6, 5, 2 ];
//取出数组里的最大最小值，确定C的长度
var min = A[0],
  max = A[0],
  C = [],
  D = [];
for(var i = 0;i < A.length;i++){
  if(min > A[i]){
    min = A[i];
  };
  if(max < A[i]){
    max = A[i];
  };
};
C.length = max - min + 1;
var index = min;
for (var i = 0; i < C.length; i++) {
  C[i] = 0;
}
//对A中的数字出现次数计数,得出计数后的C数组
for (var i = 0; i < C.length; i++){
  for (var j = 0; j < A.length; j++){
    if(A[j]==index){
      C[i]++;
    };
  };
  index++;
}
//得出A计数后的形成的D数组
for (var i = 0; i < C.length; i++){
  for (var j = 0; j < C[i]; j++){
    D.push(min + i);
  };
};
console.log(D);