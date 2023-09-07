
import Link from 'next/link'
import Image from 'next/image'

const Splash = ({
  header,
  subHeader,
  callToAction = { label: 'Do Something', to: '/' },
  asideImage
}) => {
  return (
    <section className='splash'>
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
      <div className="aside-image">
        <Image
          src={asideImage}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </section>
  );
};

export default Splash;
