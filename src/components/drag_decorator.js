import AbstractComponentDecorator from './abstract_component_decorator';

export default class DragDecorator extends AbstractComponentDecorator {

  constructor(component) {
    super();
    this._component = component;
  }

  render() {
    const node = this._component.render();
    node.draggable = true;

    return node;
  }

}