
const LANDSCAPE_IMAGE =
  'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';

const PORTRAIT_IMAGE =
  'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';

function setBackgroundByOrientation() {

  const isLandscape = window.innerWidth > window.innerHeight;

  document.body.style.backgroundImage = `url('${
    isLandscape ? LANDSCAPE_IMAGE : PORTRAIT_IMAGE
  }')`;
}

setBackgroundByOrientation();


const orientationQuery = window.matchMedia('(orientation: portrait)');
orientationQuery.addEventListener('change', setBackgroundByOrientation);

window.addEventListener('resize', setBackgroundByOrientation);