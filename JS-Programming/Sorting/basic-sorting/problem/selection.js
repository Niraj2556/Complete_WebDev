function main() {
    let n = parseInt(readLine());
    let arr = [];
    for (let i = 0; i < n; i++) {
      let num = parseInt(readLine());
      arr.push(num);
    }
    selectionSort(arr, n);
    console.log(arr);
  }
  
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  
  function selectionSort(arr, n) {
    var i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
      min_idx = i;
      for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
          min_idx = j;
      swap(arr, min_idx, i);
    }
  }