import {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';

import './BumperSection.scss';

const BumperSection = ({ block = 'start', onClick }) => {
  const bumpRef = useRef(null);
  const [hovered, setHovered] = useState();
  const scrollSettings = {
    behavior: 'smooth',
    block: block // start, center, end, or nearest. Defaults to start
  };
  const executeScroll = () => bumpRef.current.scrollIntoView(scrollSettings);
  // run this function from an event handler or an effect to execute scroll
  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      }
    }),
    []
  );
  useEffect(() => {
    if (hovered) {
      executeScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  const classes = {
    root: ['BumperSection', hovered && 'hover'].join(' ').trim()
  };

  return (
    <div
      role="button"
      onClick={onClick}
      {...eventHandlers}
      ref={bumpRef}
      className={classes.root}
    >
      <div>
        <Glyph type="↓" />

        <div>Load more</div>
      </div>
    </div>
  );
};

export default BumperSection;

const Glyph = ({ type }) => {
  return <div className="glyph">{type || '↑'}</div>;
};
