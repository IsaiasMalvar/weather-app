const convertKelvinToCelsius = (kelvin: number): number => {
  const tempInCelsius = kelvin - 273.15;
  return Math.floor(tempInCelsius);
};

export default convertKelvinToCelsius;
