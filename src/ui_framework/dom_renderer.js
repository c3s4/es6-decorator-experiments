export default class DOMRenderer {
  static render(component, domNode) {
    domNode.appendChild(component.render());
  }
}