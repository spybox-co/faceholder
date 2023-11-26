import { settings } from '../../store.js';

import { Wrapper } from '../../containers/Wrapper';

import './Footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <Wrapper>
      <div className="Footer-container">
        <p>
          {settings.appName} | {settings.slogan}
        </p>
        <p>© MMXXII</p>
        <br />
        <p>
          <strong>I d I ™</strong> DOMINIK KIEPUSZEWSKI
        </p>
        <p>° ENJOY</p>
      </div>
    </Wrapper>
  </footer>
);
