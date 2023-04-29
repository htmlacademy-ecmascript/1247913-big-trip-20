
import SortView from '../view/sort-view';
import {render} from '../framework/render.js';
import TripEventsListView from '../view/trip-events-list-view';
import EditPointView from '../view/edit-event-view';
import PointView from '../view/point-view';

export default class BoardPresenter {
  sortComponent = new SortView();
  tripEventsListComponent = new TripEventsListView();

  editPointForm = new EditPointView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.sortComponent, this.boardContainer);
    render(this.tripEventsListComponent, this.boardContainer);
    render(new EditPointView(), this.tripEventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.tripEventsListComponent.getElement());
    }
  }
}
