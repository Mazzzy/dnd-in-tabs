import faker from "faker";

faker.helpers.createCard();

export const getTabs = () =>
  Array.from({ length: faker.random.number({ max: 6, min: 3 }) }).map(() => ({
    name: faker.random.word(),
    count: faker.random.number({ max: 15 })
  }));

export const getTabData = tab => {
  const data = Array.from({ length: tab.count }).map(() =>
    faker.helpers.userCard()
  );
  return data;
};