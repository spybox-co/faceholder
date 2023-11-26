import { useState, useContext, useEffect } from 'react';

import { store } from '../../store.js';
import { InlineLoading } from '../../components/Loading';
import { Button, IconButton } from '../../components/Button';

export const CommandBar = ({ results }) => {
  const { state, dispatch } = useContext(store);
  const { refresh } = state;
  const [isLoading, setIsLoading] = useState(refresh);

  const pageReload = () => {
    dispatch({
      type: 'refresh',
      value: true
    });
    // setIsLoading(true);
  };

  useEffect(() => {
    if (!refresh) setIsLoading(false);
    if (refresh) setIsLoading(true);
  }, [refresh]);

  const UpdateRefreshButton = () => (
    <>
      <Button
        kind="ghost"
        className="RefreshButton"
        onClick={pageReload}
        renderIcon={isLoading ? null : 'RotateLeft'}
        disabled={isLoading}
      >
        {isLoading ? <InlineLoading /> : `Refresh`}
      </Button>
    </>
  );

  return (
    <CommandBarContainer>
      <div className="left--actions">
        {!isLoading && <Results data={results} />}
      </div>
      <div className="middle--actions"></div>
      <div className="ButtonGroup right--actions">
        {/* {refresh && <InlineLoading />} */}
        {/* <Settings /> */}
        <IconButton
          kind="ghost"
          renderIcon="Settings"
          title="Setting available soon"
          // disabled={refresh ? true : null}
          disabled
        />
        <UpdateRefreshButton />
        {/* <Button kind="secondary" renderIcon="Filters2">
            Filters
          </Button>
          <Button kind="primary" renderIcon="Plus">
            New Query
          </Button> */}
      </div>
    </CommandBarContainer>
  );
};

const Results = ({ data }) => (
  <div className="Results">
    <span>
      Results: <strong>{data}</strong> 
    </span>
  </div>
);

const CommandBarContainer = ({ children }) => (
  <div className="CommandBar">
    <div className="CommandBar-container">{children}</div>
  </div>
);
