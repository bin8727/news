import { GlobalStyle } from './GlobalStyle';
import List from './components/news/List';
import Search from './components/search/Search';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Search />
      <List />
    </>
  );
};

export default App;