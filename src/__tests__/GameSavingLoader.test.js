import GameSavingLoader from '../GameSavingLoader';

test('testing GameSavingLoader.load()', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});

test('should handle errors', async () => {
  expect.assertions(1);
  try {
    await GameSavingLoader.load();
    throw new Error('oops');
  } catch (error) {
    expect(error.name).toEqual('Error');
  }
});
