import {
  useEffect,
  useState,
  useContext,
} from 'react';

import { store } from '../../store.js';

import { Wrapper } from '../../containers/Wrapper';
import { CommandBar } from '../../modules';
import { Faceholder } from '../../components/Faceholder';
import { BumperSection } from '../../components/BumperSection';
import Skeleton from '../../components/Skeleton';

// Pagination
// https://www.youtube.com/watch?v=IYCa1F-OWmk&ab_channel=TraversyMedia
// Load More
// https://www.youtube.com/watch?v=9YhlGTC87tw

// New Name
// GaleryItems (Section. List) -> GalleryAsset (Card)

const itemsAmount = 48;
const moreItems = 48;

export const Gallery = () => {
  const { state } = useContext(store);
  const { assets, refresh } = state;
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(itemsAmount);
  const skeletons = Array.from(Array(24).keys());

  // const isLoading = state.refresh;

  useEffect(() => {
    console.log('Asety', assets);

    if (assets) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [assets]);

  // @Param: with refresh option To-do
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  useEffect(() => {
    if (refresh) {
      setLoading(true);
      setCount(itemsAmount);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [refresh]);
  useEffect(() => {
    console.log("Results:", count);
  }, [count]);

  const listProps = {
    data: assets,
    count: count,
    skeletons: skeletons,
    isLoading: isLoading
  };

  // const pageReload = () => {
  //   dispatch({
  //     type: 'refresh',
  //     value: true
  //   });
  // };

  const loadMore = () => {
    setCount(count + moreItems);
  };

  const LoadMoreButton = () => (
    <div className="Card aspect-ratio-flex">
      <BumperSection onClick={loadMore} block="nearest" />
    </div>
  );

  /*
    <Suspense fallback={<Skeleton />}></Suspense>
  */

  return (
    <Wrapper className="Gallery-module">
      <CommandBar results={count} />
      <div className="List-container">
        <ul className="Gallery List">
          <ListComponent {...listProps} />
        </ul>

        {!isLoading && <LoadMoreButton />}
      </div>
    </Wrapper>
  );
};

const ListComponent = ({ data, count, isLoading, skeletons }) => {
  const Loading = () => {
    return (
      <>
        {skeletons.map((skeleton) => (
          <ImageCard key={skeleton}>
            <div className="Image-placeholder">
              <Skeleton />
            </div>
          </ImageCard>
        ))}
      </>
    );
  };

  const Content = () => {
    return (
      <>
        {data.slice(0, count).map((face, i) => (
          <ImageCard key={i}>
            <Faceholder source={face} update={false} download />
          </ImageCard>
        ))}
      </>
    );
  };

  return isLoading ? <Loading /> : <Content />;
  // return <Content />;
};

const ImageCard = ({ children }) => (
  <li className="Card aspect-ratio-1-1 List-item">
    <div className="Faceholder">{children}</div>
  </li>
);
