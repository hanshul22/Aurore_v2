import Routes from './routes/AppRoutes';

/**
 * App Component - Root component of the application
 * Wrapped with AuthProvider to provide authentication context globally
 */
function App() {
  return (
      <Routes />
  );
}

export default App;
