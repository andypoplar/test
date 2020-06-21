const sleep = (timeout = 2000) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, timeout);
});

(async () => {
  for (var i = 0; i < 5; i++) {
    await sleep(1000)
    console.log(i);
  }
  await sleep(1000)
  console.log(i);
})()