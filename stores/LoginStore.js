import { observable, action } from 'mobx';

class LoginStore {
  @observable idValue = null;
  @observable passwordValue = null;

  constructor() {}

  @action setValue = (e) => {
    // console.log(e);
    this[e.target.name] = e.target.value;
  };
}

export default LoginStore;
