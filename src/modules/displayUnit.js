export const displayUnit = (unit) => {
  const unitNode = document.createElement('span');
  switch (unit) {
    case 'metric':
      unitNode.textContent = 'C';
      return unitNode;
    case 'us':
      unitNode.textContent = 'F';
      return unitNode;
  }
};
