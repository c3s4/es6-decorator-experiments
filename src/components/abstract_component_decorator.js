import ComponentInterface from './component_interface';

export default class AbstractComponentDecorator extends ComponentInterface{
  
  constructor(component) {
    super();
    this._component = component;
  }

  render() {
    return this._component.render();
  }

}