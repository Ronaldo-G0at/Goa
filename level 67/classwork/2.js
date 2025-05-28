function userOperations() {
  const result1 = confirm(123);
  const result2 = confirm( 123);

  const andResult = result1 && result2;
  const orResult = result1 || result2;

  console.log("AND result:", andResult);
  console.log("OR result:", orResult);
}

window.onload = userOperations;
