
import { render } from '../framework/render.js';
import EditPointView from '../views/edit-event-view';
import PointView from '../views/point-view';
import SortView from '../views/sort-view';
import TripEventsListView from '../views/trip-events-list-view';

export default class BoardPresenter {
  sortComponent = new SortView();
  tripEventsListComponent = new TripEventsListView();

  editPointForm = new EditPointView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    console.log('this.boardPoints: ', this.boardPoints);

    render(this.sortComponent, this.boardContainer);
    render(this.tripEventsListComponent, this.boardContainer);
    render(new EditPointView(), this.tripEventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.tripEventsListComponent.getElement());
    }
  }
}
