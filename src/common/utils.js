export const extractId = (url) => {
  const urlArr = url.split('/');
  return urlArr[urlArr.length - 2];
};
