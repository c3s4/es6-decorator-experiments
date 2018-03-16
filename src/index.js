import DOMRenderer from './ui_framework/dom_renderer';

import TextComponent from './components/text_component';
import BorderDecorator from './components/border_decorator';
import DragDecorator from './components/drag_decorator';
import BackgroundDecorator from './components/background_decorator';

const compo1 = new DragDecorator(new BorderDecorator(new TextComponent('draggable bordered'), 1, '#333'));
const compo2 = new BackgroundDecorator(new DragDecorator(new TextComponent('draggable background')), 'yellow');
DOMRenderer.render(compo1, document.getElementById('app'));
DOMRenderer.render(compo2, document.getElementById('app'));