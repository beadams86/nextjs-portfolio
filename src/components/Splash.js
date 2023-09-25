
import Link from 'next/link'
import Image from 'next/image'
import DefaultSplashImage from '../assets/splash-bg.jpg';

const Splash = ({
  header,
  subHeader,
  callToAction, /* { label: 'Do Something', to: '/' } */
  bgImage = DefaultSplashImage,
  asideImage,
  className
}) => {
  let cssClass = 'splash';

  if (asideImage) {
    cssClass += ' has-aside-image';
  }

  if (className) {
    cssClass += ` ${className}`;
  }

  return (
    <section
      className={cssClass}
      style={!asideImage ? {backgroundImage: `url(${bgImage.src})`} : undefined}
      >
      <div className="container">
        <h1>{header}</h1>
        <p>{subHeader}</p>
        {callToAction && (
          <Link
            className="button button-primary"
            href={callToAction.to}
          >
            {callToAction.label}
          </Link>
        )}
      </div>
      {asideImage && (
        <div className="aside-image">
          <Image
            src={asideImage}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt="Splash image"
          />
        </div>
      )}
    </section>
  );
};

export default Splash;
