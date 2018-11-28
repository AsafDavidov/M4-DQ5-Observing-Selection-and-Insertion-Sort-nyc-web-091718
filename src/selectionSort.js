function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let minIndex;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    minIndex=i
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j]<arr[minIndex]){
        minIndex=j
      }
    }
    temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
  }

}
