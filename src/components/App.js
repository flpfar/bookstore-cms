import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App">
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
