import AbstractComponentDecorator from './abstract_component_decorator';

export default class BorderDecorator extends AbstractComponentDecorator {

  constructor(component, size, color) {
    super();
    this._component = component;
    this._size = size;
    this._color = color;
  }

  render() {
    const node = this._component.render();
    node.style.border = `${this._size}px solid ${this._color}`;

    return node;
  }

}