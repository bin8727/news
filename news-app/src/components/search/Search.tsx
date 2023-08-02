import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook/hook";
import { FetchParams } from "../../api/newsAPI";
import { fetchAllNews } from "../../slices/newsSlice";
import { styled } from "styled-components";

type FormData = {
  searchTerm: string;
  enteredFromDate: string;
  enteredToDate: string;
}

const Search: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormData>();
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
  return (
    <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <Label htmlFor="searchTerm">검색어:</Label>
        <input 
          type="text"
          id="searchTerm"
          {...register('searchTerm', {required: true})}
        />
      </div>

      <div>
        <Label htmlFor="enteredFromDate">날짜:</Label>
        <input 
          type="date"
          id="enteredFromDate"
          min='1990-01-01'
          max='2023-12-31'
          {...register('enteredFromDate', {required: true})}
        />
      </div>

      <div>
        <Label htmlFor="enteredToDate">날짜:</Label>
        <input 
          type="date"
          id="enteredToDate"
          min='1990-01-01'
          max='2023-12-31'
          {...register('enteredToDate', {required: true})}
        />
      </div>

      <button type="submit">검색</button>
    </FormContainer>
  );
};

export default Search;

const FormContainer = styled.form`
  
`;

const Label = styled.label``;