import { useAppSelector } from '../../hook/hook';
import { Container, Content, Img, Wrap } from './style';

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
      <Container>
        <ul>
          {newsData.map((news, index) => (
            <li key={index}>
              <Wrap>
                <Img>
                  <img src={news.urlToImage} alt='' />
                </Img>
                <Content>
                  <h2>{news.title}</h2>

                  <p>{news.description}</p>

                  {/* <p>{news.content}</p> */}

                  <a href={news.url}>자세히 보기</a>
                </Content>
              </Wrap>
            </li>
          ))}
        </ul>
      </Container>
     )}
    </>
  );
};

export default List;