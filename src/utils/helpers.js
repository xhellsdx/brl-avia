export const getTime = (date) => {
  if (!date) return;
  let beatyTime = date.split(' ')[1];
  if (beatyTime.search(/^\d:/) > -1) beatyTime = `0${beatyTime}`;
  return beatyTime;
};

export const getDate = date => date.split(' ')[0].replace(/-/g, '.');

export const beatyPrice = (num) => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
};
