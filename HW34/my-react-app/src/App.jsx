import { HistoryRouter } from 'redux-first-history/rr6';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store, reduxHistory, persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppRoutes from './router';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HistoryRouter history={reduxHistory}>
            <AppRoutes />
            <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
          </HistoryRouter>
        </PersistGate>

      </Provider>

    </>
  );
};

export default App;