import DOMRenderer from './ui_framework/dom_renderer';

import TextComponent from './components/text_component';
import BorderDecorator from './components/border_decorator';
import DragDecorator from './components/drag_decorator';

const text = new TextComponent('prova');
DOMRenderer.render(new DragDecorator(new BorderDecorator(text, 1, '#333')), document.getElementById('app'));