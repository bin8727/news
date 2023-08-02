import { useAppSelector } from '../../hook/hook';

const List = () => {
  const newsData = useAppSelector(state => state.news.news);
  const newsStatus = useAppSelector(state => state.news.status);
  const newsError = useAppSelector(state => state.news.error);

  const isLoading = newsStatus === 'loading';
  const isError = newsStatus === 'failed';
  const isSucceeced = newsStatus === 'succeeded';

  return (
    <>
     {isLoading && <p>로딩 중...</p>} 
     {isError && <p>오류: {newsError}</p>} 
     {isSucceeced && (
      <ul>
        {newsData.map((news, index) => (
          <li key={index}>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
            <a href={news.url}>자세히 보기</a>
          </li>
        ))}
      </ul>
     )}
    </>
  );
};

export default List;