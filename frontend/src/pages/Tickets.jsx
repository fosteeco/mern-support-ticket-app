import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function Tickets() {
  const { isLoading, isSuccess, isError, tickets } = useSelector(
    (state) => state.ticket
  );
  const dispatch = useDispatch();

  /* On unmount have to return a function from useEffect */
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Tickets</h1>
    </div>
  );
}

export default Tickets;
