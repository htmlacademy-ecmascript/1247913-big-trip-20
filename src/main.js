import FilterTemplate from './view/filter-view';
import BoardPresenter from './presenter/board-presenter';
import {render} from './framework/render';

const tripMainSectionElement = document.querySelector('.trip-main');
const siteFilterElement = tripMainSectionElement.querySelector('.trip-controls__filters');
const siteMainSectionElement = document.querySelector('.page-main');
const tripEventsElement = siteMainSectionElement.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: tripEventsElement});
render(new FilterTemplate(), siteFilterElement);
boardPresenter.init();
