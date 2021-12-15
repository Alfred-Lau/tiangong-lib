exports.sleep = function (duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

exports.sleep(5000).then(() => {
  console.log('sleep');
});
