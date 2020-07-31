const getIntMinutes = (durationString) => {
  const minutes = durationString.split(':').slice(1, 2);
  return parseInt(minutes, 10);
};

export const getTotalMinutes = (prepTime, cookTime) => {
  const prepMins = getIntMinutes(prepTime);
  const cookMins = getIntMinutes(cookTime);
  const total = prepMins + cookMins;

  return total.toString();
};
