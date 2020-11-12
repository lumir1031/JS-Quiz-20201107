function printStars(count) {
  let str = '';
  let i, j, k;

  for (i = 1; i <= count; i++) {
    for (j = count; j >= i; j--) {
      str += ' '
    }
    for (k = 1; k <= i; k++) {
      str += '*'
    }
    str += '\n';
  }
  console.log(str);
}

printStars(5)
