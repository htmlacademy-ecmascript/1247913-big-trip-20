import Presenter from './presenter.js';
class AddPresenter extends Presenter {
  /**
   * @override
   * @return {AddViewState}
   */
  createViewState() {
    // TODO: Создать динамически
    return {
      isDisabled: false,
    };
  }
}

export default AddPresenter;
