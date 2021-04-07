export class Utils {
  static fromJson<T>(type: new () => T, jsonData: any): T {
    return Object.assign(new type(), this.processJson<T>(type, jsonData));
  }

  static processJson<T>(type: new () => T, jsonData: any): any {
    const data: any = Object.assign({}, jsonData);
    Object.keys(data).forEach(function (key) {
      if (!(key in new type()) && key != 'id') {
        delete data[key];
      }
      if (!data[key]) {
        delete data[key]
      }
    });
    return data;
  }

  static validateKeyOfEnum<E>(data: E, compare: string): boolean {
    for (const t in data) {
      const isValueProperty = parseInt(t, 10) >= 0;
      if (isValueProperty) {
        return t.toUpperCase() === compare.toUpperCase();
      }
    }
    return false;
  }
}
