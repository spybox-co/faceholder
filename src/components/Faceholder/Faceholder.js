// import { useEffect } from 'react';
// import { store } from '../../store.js';

import axios from 'axios';
// import { uf } from '../../utils/helpers';

import { Button } from '../Button';
import { Image } from '../Image';
import Skeleton from '../Skeleton';

export const Faceholder = ({
  source,
  size,
  // delay,
  update,
  download,
  copy = false,
  preview = false
}) => {
  // const { state } = useContext(store);
  const defaultSize = 300;
  // const [source, setSource] = useState(null);

  // const timestamp = Date.now();

  const getImage = async () => {
    // TODO: replace image with index in array in store.js
    //return null;
  };

  const imageReload = () => {
    setTimeout(() => {
      getImage();
    }, 500);
  };

  const startDownload = (imageSrc, filename) => {
    console.log('Download action: executed of', imageSrc);

    axios({
      url: `${imageSrc}`,
      method: 'GET',
      responseType: 'blob'
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  const imageToBlob = (imageSrc) => {
    const img = new Image();
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    img.crossOrigin = '';
    img.src = imageSrc;
    return new Promise((resolve) => {
      img.onload = function () {
        c.width = this.naturalWidth;
        c.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0);
        c.toBlob(
          (blob) => {
            // here the image is a blob
            resolve(blob);
          },
          'image/png',
          0.75
        );
      };
    });
  };

  async function copyImage(imageSrc) {
    const blob = await imageToBlob(imageSrc);
    const item = new ClipboardItem({ 'image/png': blob });
    navigator.clipboard.write([item]);
  }

  if (source && source.url) {
    // const label = `Image of fake ${source.gender} face at age ${source.age}`;
    const label = `Generated face of person, name identity ${source.id}`;
    // console.log('imidz sors', source.src);
    return (
      <Item data={source} imageLoaded>
        <Image
          width={size || defaultSize}
          height={size || defaultSize}
          src={source.url}
          alt={label}
          aria-label={label}
        />

        <InfoPanel data={source} />

        <div className="Button-group">
          {update && (
            <Button
              kind="ghost"
              hasOnlyIcon
              renderIcon="Refresh"
              onClick={imageReload}
            >
              Update
            </Button>
          )}
          {copy && (
            <Button
              kind="ghost"
              hasOnlyIcon
              renderIcon="Copy"
              onClick={copyImage}
            >
              Update
            </Button>
          )}

          {download && (
            <Button
              kind="ghost"
              renderIcon="Download"
              hasOnlyIcon
              onClick={() =>
                startDownload(source.url, `faceholder__${source.id}.jpg`)
              }
            >
              Download
            </Button>
          )}

          {preview && (
            <Button
              kind="primary"
              hasOnlyIcon
              renderIcon="EyeOpen"
              onClick={imageReload}
            >
              Update
            </Button>
          )}
          <Button
            anchor
            kind="primary"
            hasOnlyIcon
            renderIcon="Newscreen"
            href={source.src}
            target="_blank"
          >
            Open in new tab
          </Button>
        </div>
      </Item>
    );
  } else {
    return (
      <Item>
        <Skeleton />
      </Item>
    );
  }
};

const Item = ({ children, imageLoaded, data }) => {
  const classes = {
    root: 'Faceholder',
    wrapper: 'Image-wrapper',
    container: 'Image-container',
    image: ['Image', imageLoaded && 'FaceItem'].join(' ').trim()
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.image}>{children}</div>
      </div>
    </div>
  );
};

const InfoPanel = ({ data }) => (
  <div className="Info-panel">
    {/* <span>{`${uf(data.gender)}, ${data.age}`}</span> */}
    <span>{`ID: ${data.name}`}</span>
  </div>
);
