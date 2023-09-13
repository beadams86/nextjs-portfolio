import Splash from '../../components/Splash';
import Family from '../../assets/about-image.jpg';

/* About Page */
const About = () => {
  const subHeader = <>
    <p>I'm a passionate & pragmatic software engineer & designer living in the D.C. suburbs. I've been building stuff on the web for over 10 years, with a focus on user interfaces that are easy to use, performant, & well tested.</p>
    <p>In my free time you might find me rollerblading at the skatepark, refurbishing an old german car, or hanging with my amazing family.</p>
  </>;

  return (
    <>
      <Splash
        header={<strong>So who is this guy?</strong>}
        subHeader={subHeader}
        className="about-splash"
        asideImage={Family}
      />
    </>
  );
}

export default About;