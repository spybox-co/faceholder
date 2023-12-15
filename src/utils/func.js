import axios from 'axios';


export const startDownload = (imageSrc, filename) => {
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

export const imageToBlob = (imageSrc) => {
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