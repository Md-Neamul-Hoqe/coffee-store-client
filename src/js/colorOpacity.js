const colorOpacity = (colorVar, { opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${colorVar})/${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgb(var(${colorVar})/var(${opacityVariable}, 1))`;
    }
  
    return `rgb(var(${colorVar}))`;
  };

  export default colorOpacity