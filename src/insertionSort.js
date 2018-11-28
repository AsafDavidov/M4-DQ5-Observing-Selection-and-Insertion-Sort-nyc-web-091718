function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let sorted = false;
  for (let i = 0; i < arr.length; i++) {
    let curIndex = i
    let j=i-1
    while (!sorted&&i>0) {
      if(arr[curIndex]<arr[j]){
        temp=arr[curIndex];
        arr[curIndex]=arr[j];
        arr[j]=temp;
        curIndex--
        j--
      }else{
        console.log("farts");
        sorted=true
      }
    }
    sorted=false
  }
}
