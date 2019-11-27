// npx babel single.js > dist.js && node dist.js

const dis = (a) => console.log(a);

class SingletonInstance {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
}

class Singleton {
  static init(dispatch) {
    if (!this._instance && dispatch) {
      this._instance = new SingletonInstance(dispatch);
    }

    return this._instance;
  }

  static isInitalized() {
    return this._instance != null;
  }

  static get() {
    if (this._instance == null) throw new Error("Instance is not initialized!");
    if (this._instance.constructor.name !== "SingletonInstance") throw new Error("Instance is not typof " + SingletonInstance.name);

    return this._instance;
  }
}


const main = function() {
  try {
    Singleton.get();
  } catch (e) {
    console.error("[error]", e.message);
  }
  
  Singleton.init(dis).dispatch("hello");
  Singleton.get().dispatch("world!");
}

main();