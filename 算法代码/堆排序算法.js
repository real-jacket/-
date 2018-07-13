var A = { 0: 27, 1: 24, 2: 10, 3: 9, 4: 12, 5: 13, 6: 16, 7: 45, 8: 44, 9: 36, 10: 35, 11: 47, 12: 26, 13: 28, 14: 19 };
//算出二叉堆的层数
var Swap = function (a, b) {//交换位置函数
  var t = a;
  a = b;
  b = t; 
};//最大堆调整
var Max = function (index, left, right) {
  if (left > right) {
    if (left > index) {
      Swap(index, left);
    };
  } else {
    if (right > index) {
      Swap(index, right);
    };
  };
};//堆排序
for (var length = A.length; length > 0; length--) {
  for (var n=Math.floor(log2(length)); n > 0; n--) {
    for (var index = 2 ^ n - 2; index > 2 ^ (n - 1) - 2; index--){
      Max(A[index], A[2 * index + 1], A[2 * index + 2]);
    };
  };
  Swap(A[0], A[length]);
};
