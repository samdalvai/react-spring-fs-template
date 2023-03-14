import './App.css';
import Layout from './pages/Layout';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
