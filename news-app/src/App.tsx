import { GlobalStyle } from './GlobalStyle';
import List from './components/news/List';
import Search from './components/search/Search';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>뉴스 검색</h1>
      <Search />
      <List />
    </>
  );
};

export default App;