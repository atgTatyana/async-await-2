import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const data = await read(); // ArrayBuffer(180)
    const value = await json(data);
    // {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}
    return JSON.parse(value);
  }
}
