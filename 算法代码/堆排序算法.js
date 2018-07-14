var A = [27, 24, 10, 9, 12, 13, 16, 45, 44, 36, 35, 47, 26, 28, 19];
var B = [];
//算出二叉堆的层数
function Swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
} //最大堆调整
//Swap(A, 0, 14)
//console.log(A);
function Max(array,index, left, right) {
  if (array[left] > array[right]) {
    if (array[left] > array[index]) {
      Swap(array, index, left);
    };
  } else {
    if (array[right] > array[left]) {
      Swap(array, index, right);
    };
  };
};//堆排序
for (var Length = A.length; Length > 0; Length--) {
  var n = Math.floor(Math.log2(Length));
  for (var index = Math.pow(2,n) - 2; index >= 0; index--){
    Max(A, index, 2 * index + 1, 2 * index + 2);
  };
  Swap(A, 0, Length - 1);
  B.unshift(A[Length - 1]);
  A.pop(A[Length - 1]);
};
console.log(B);
