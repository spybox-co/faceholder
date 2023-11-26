import './styles.scss';
import './styles/global.scss';

// import _ from 'lodash';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { store } from './store.js';

//import { getThisPersonDoesNotExist } from './utils/getThisPersonDoesNotExist';
import { getFaces } from './utils/getFaces';

import { Header, Main, Footer } from './layout';
import { Gallery } from './modules';
import { Wrapper } from './containers/Wrapper';
import { Link } from './components/Link';
import { BumperSection } from './components/BumperSection';

import { getFacesFromGlitch } from './utils/getFacesFromGlitch';

// https://stackoverflow.com/questions/44698967/requesting-blob-images-and-transforming-to-base64-with-fetch-api

// Credit this page
// https://hankhank10.github.io/fakeface/

// UI Panel -> Generated.photos
// https://generated.photos/face-generator/61815c600b844b000ced5dc8
// API Request - https://generated.photos/api

// const api_url = `https://fakeface.rest/face/json`;
// const api_query = ``;


const LeadSpace = () => {
  return (
    <section>
      <Wrapper className="Leadspace">
        <div className="Leadspace-container">
          <h1>Welcome to Faceholder</h1>
          <p className="responsive-paragraph-03">Explore and download cool unreal faces</p>
          <div className="responsive-paragraph-03">↓</div>
        </div>
      </Wrapper>
    </section>
  )
}

export default function App() {
  const { state, dispatch } = useContext(store);
  // const [faceholders, setFaceholers] = useState(null);
  // const { isSuccess, setSuccess } = useState(false);

  const { assets, assetsAmount, refresh } = state;

  const getAssets = async () => {
    // UseCallback function here
    await getFacesFromGlitch(assetsAmount).then((images) => {
      console.log(images);
      dispatch({ type: 'upload assets', value: images });
      dispatch({
        type: 'refresh',
        value: false
      });
    });
  };

  const pageReload = () => {
    dispatch({
      type: 'refresh',
      value: true
    });
  };

  // Investigating if data is pushed to the state
  useEffect(() => {
    if (refresh) getAssets();
  }, [refresh]);

  return (
    <div className="App">
      <Header />
      <LeadSpace />
      <Main>
        <Gallery data={assets} />
        {/* <div className="Card aspect-ratio-flex">
          <BumperSection onClick={pageReload} block="nearest" />
        </div> */}
        <About />
      </Main>
      <Footer />
    </div>
  );
}

const About = () => {
  const links = {
    nvidia: 'https://github.com/NVlabs/stylegan',
    stylegan: 'https://en.wikipedia.org/wiki/StyleGAN',
    faces: 'https://en.wikipedia.org/wiki/Human_image_synthesis'
  };
  return (
    <section className="About">
      <Wrapper>
        <div className="section-container">
          <h2>About</h2>
          <div className="content">
            <p className="responsive-paragraph-02">
              Faceholder was created to browse portraits of{' '}
              <Link to={links.faces}>fake human faces</Link>, generated by AI
              using <Link to={links.stylegan}>StyleGan2</Link> made by{' '}
              <Link to={links.nvidia}>Nvidia</Link>.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};