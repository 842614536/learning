
// 单例模式

class Earth {
  private constructor () {

  }

  private static _earth: Earth

  static createEarth () {
    if (Earth._earth) {
      return Earth._earth
    }
    Earth._earth = new Earth()
    return Earth._earth
  }
}

let earth = Earth.createEarth()
console.log(1)
