import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from '../middlewares/promiseMiddleware';
import reducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise({ promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'] })
)(createStore);

export default function configureStore(initialState) {
  let store;

  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    console.log("Go to development");
    const persistState = require('redux-devtools').persistState;
    const DevTools = require('../../containers/ReduxDevTools').default;

    const enhancer = compose(
      DevTools.instrument(),
      persistState(
        window.location.href.match(
          /[?&]debug_session=([^&#]+)\b/
        )
      )
    );
    store = createStoreWithMiddleware(reducer, initialState, enhancer);

    if (module.hot) {
      module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers/index').default)
      );
    }
  } else {
    store = createStoreWithMiddleware(reducer, initialState);
  }

  return store;
}
