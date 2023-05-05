import './views/brief-view.js';
import './views/add-view.js';
import './views/filter-view.js';
import './views/sort-view.js';
import './views/list-view.js';

/**
 * @type {BriefView}
 */
const briefView = document.querySelector('brief-view');

/**
 * @type {AddView}
*/
const addView = document.querySelector('add-view');

/**
 * @type {FilterView}
*/
const filterView = document.querySelector('filter-view');

/**
 * @type {SortView}
*/
const sortView = document.querySelector('sort-view');

/**
 * @type {ListView}
*/
const listView = document.querySelector('List-view');

briefView.render();
addView.render();
filterView.render();
sortView.render();
listView.render();

// import { render } from './framework/render';
// import PointsModel from './model/points-model';
// import BoardPresenter from './presenter/board-presenter';
// import FilterTemplate from './views/filter-view';

// const tripMainSectionElement = document.querySelector('.trip-main');
// const siteFilterElement = tripMainSectionElement.querySelector('.trip-controls__filters');
// const siteMainSectionElement = document.querySelector('.page-main');
// const tripEventsElement = siteMainSectionElement.querySelector('.trip-events');
// const pointsModel = new PointsModel();
// const boardPresenter = new BoardPresenter({
//   boardContainer: tripEventsElement,
//   pointsModel
// });
// render(new FilterTemplate(), siteFilterElement);
// boardPresenter.init();
