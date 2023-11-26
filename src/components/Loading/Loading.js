import { Spinner } from '../Spinner';

export const InlineLoading = () => (
  <div className="InlineLoading">
    <Spinner />
    {`Loading...`}
  </div>
);
