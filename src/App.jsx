import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from './redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
    </>
  );
}

export default App;
