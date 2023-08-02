import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { Container, Label } from "./style";
import { fetchAllNews } from "../../slices/newsSlice";
import { FetchParams } from "../../api/newsAPI";
import { useAppDispatch } from "../../hook/hook";

type FormData = {
  searchTerm: string;
  enteredFromDate: string;
  enteredToDate: string;
};

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const Search: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue
  } = useForm<FormData>({
    defaultValues: {
      searchTerm: 'Apple',
      enteredFromDate: '',
      enteredToDate: getCurrentDate()
    }
  });
  const dispatch = useAppDispatch();

  const onSubmitHandler = (data: FormData) => {
    const params: FetchParams = {
      query: data.searchTerm,
      fromDate: data.enteredFromDate,
      toDate: data.enteredToDate
    };

    dispatch(fetchAllNews(params));

    reset();
  };

  useEffect(() => {
    setValue('enteredToDate', getCurrentDate());
  }, [setValue]);

  return (
    <Container onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <Label htmlFor="searchTerm">검색어</Label>
        <input 
          type="text"
          id="searchTerm"
          {...register('searchTerm', {required: true})}
        />
      </div>

      <div>
        <Label htmlFor="enteredFromDate">날짜</Label>
        <input 
          type="date"
          id="enteredFromDate"
          min='1990-01-01'
          max='2023-12-31'
          {...register('enteredFromDate', {required: true})}
        />
      </div>

      <div>
        <Label htmlFor="enteredToDate">날짜</Label>
        <input 
          type="date"
          id="enteredToDate"
          min='1990-01-01'
          max='2023-12-31'
          {...register('enteredToDate', {required: true})}
        />
      </div>

      <button type="submit">검색</button>
    </Container>
  );
};

export default Search;