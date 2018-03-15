import ComponentInterface from './component_interface';

export default class TextComponent extends ComponentInterface {

  constructor(text) {
    super();
    this._text = text;
  }

  render() {
    const textNode = document.createElement('div');
    textNode.innerHTML = this._text;
    
    return textNode;
  }

}