// import { useEffect } from 'react';
import { settings } from '../../store.js';
import { Wrapper } from '../../containers/Wrapper';

export const Header = () => {

  // useEffect(() => {
  //   console.log('page offset', window.pageYOffset);
  // }, [window]);

  return (
    <header className="Header">
      <Wrapper>
        <div className="Header-container">
          <div className="Heading AppName">
            <p className="logo responsive-heading-04">{settings.appName}</p>
            <span className="slogan responsive-paragraph">{settings.slogan}</span>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
