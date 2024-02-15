const shiftIcon = (icon: string, time: string): string => {
  const hours = new Date(time).getHours();

  const timeOfDay = hours >= 6 && hours < 18 ? "d" : "n";

  return `${icon.slice(0, -1)}${timeOfDay}`;
};

export default shiftIcon;
