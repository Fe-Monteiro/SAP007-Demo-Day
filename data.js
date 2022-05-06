export const filterStatus = (data, value) => {
  return data.filter((item) => {
    return item.status === value
  })
};

export const filterSpecie = (data, value) => {
  return data.filter((item) => {
    return item.species === value
  })
};

export const filterGender = (data, value) => {
  return data.filter((item) => {
    return item.gender === value
  })
};

export const ordination = (characters, order) => {
  const listCharacters = [...characters]
  if (order === "AZ") {
    return listCharacters.sort((a, b) => (a.name > b.name ? 1 : -1))
  } else {
    return listCharacters.sort((a, b) => (a.name > b.name ? -1 : 1))
  }
};

export const average = (total, portion) => {
  const averageCalculation = Math.round((portion * 100 / total))
  return averageCalculation
};

export const searchName = (data, condition) => {
  const result = data.filter((character) =>
    character.name.toLowerCase().includes(condition.toLowerCase())
  );
  return result;
};

