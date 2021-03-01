import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Carousel } from 'react-responsive-carousel';

import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

import 'react-responsive-carousel/lib/styles/carousel.css';

const SmallProjects = () => {
  const { smallProjects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="smallProjects">
      <Container>
        <div className="project-wrapper">
          <Title title="Моя верстка" />
          <Fade bottom={true} duration={1000} delay={500} distance="30px">
            <Carousel
              showArrows={false}
              transitionTime={1700}
              stopOnHover={true}
              autoPlay={isDesktop}
              infiniteLoop={isDesktop}
              labels={true}
              showStatus={false}
              centerMode={false}
            >
              {smallProjects.map((project) => {
                const { title, info, url, repo, img, id } = project;

                return (
                  <div className="row_wrapper" key={id}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '75%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                      }}
                    >
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '75%',
                        height: '100%',
                        overflow: 'hidden',
                        marginBottom: '2.5rem',
                      }}
                    >
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <ProjectImg alt={title} filename={img} />
                        </Tilt>
                      </a>
                      <div
                        style={{
                          marginTop: '2rem',
                          marginBottom: '2rem',
                          textAlign: 'left',
                        }}
                      >
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default SmallProjects;
