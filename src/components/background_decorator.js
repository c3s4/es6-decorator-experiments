import AbstractComponentDecorator from './abstract_component_decorator';

export default class BackgroundDecorator extends AbstractComponentDecorator {

  constructor(component, color) {
    super();
    this._component = component;
    this._color = color;
  }

  render() {
    const node = this._component.render();
    node.style.backgroundColor = `${this._color}`;

    return node;
  }

}