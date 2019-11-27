var _this = this;

// npx babel single.js > dist.js && node dist.js

const dis = a => console.log(a);

class SingletonInstance {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
}

const Singleton = {
  init: dispatch => {
    if (!_this._instance && dispatch) {
      _this._instance = new SingletonInstance(dispatch);
    }

    return _this._instance;
  },

  get: () => {
    if (_this._instance == null) throw new Error("Instance is not initialized!");
    if (_this._instance.constructor.name !== "SingletonInstance") throw new Error("Instance is not typof " + SingletonInstance.name);

    return _this._instance;
  }
};

const main = function () {
  try {
    Singleton.get();
  } catch (e) {
    console.error("[error]", e.message);
  }
  Singleton.init(dis).dispatch("hello");
  Singleton.get().dispatch("world!");
};

main();

