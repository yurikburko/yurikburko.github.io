import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useRef } from "react";
import { getAge } from './utils'
import { ProfilesLinks } from "./components/Profiles";
import { Skills } from "./components/Skills";
import { LogicExperience } from "./components/LogicExperience";
import { CorrectExperience } from "./components/CorrectExperience";
import { ItransitionExperience } from "./components/ItransitionExperience";
import { ContactForm } from "./components/ContactForm";

import avatar from './assets/avatar.jpg'
import cv from './assets/Yury_Burko_Resume_09-2023.pdf'

function App() {
  const ageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ageRef.current!.textContent = getAge().toString();
  }, []);

  useEffect(() => {
    // Animations
    AOS.init({
      anchorPlacement: 'top-top',
      duration: 1000
    });
  }, []);

  return (
    <>
  <header className="d-print-none">
    <div className="container text-center text-lg-left">
      <div className="py-3 clearfix">
        <h1 className="site-title mb-0">Yury Burko's Resume website</h1>
        <div className="site-nav">
          <ProfilesLinks />
        </div>
      </div>
    </div>
  </header>
  <div className="page-content">
    <div className="container">
      <div className="cover shadow-lg bg-white">
        <div className="cover-bg p-3 p-lg-4 text-white">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="avatar hover-effect bg-white shadow-sm p-1"><img src={avatar} width="200"
                  height="200" /></div>
            </div>
            <div className="col-lg-8 col-md-7 text-center text-md-start">
              <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">Yury Burko</h2>
              <p data-aos="fade-left" data-aos-delay="100">Full-Stack Software Engineer</p>
              <div className="d-print-none" data-aos="fade-left" data-aos-delay="200"><a
                  className="btn btn-light text-dark shadow-sm mt-1 me-1" href={cv} target="_blank">Download
                  CV</a><a className="btn btn-success shadow-sm mt-1" href="#contact">Hire Me</a></div>
            </div>
          </div>
        </div>
        <div className="about-section pt-4 px-3 px-lg-4 mt-1">
          <div className="row">
            <h2 className="h3 mb-3">About Me</h2>
            <div className="col-md-7">              
              <p>Hello! I’m Yury Burko. I am a Senior Full-Stack Software Engineer with 10+ years of experience in the full software
                development life-cycle. <br />I have experience in both server and front-side development using .NET/C# (mostly) and different client frameworks (mostly React).
                <br />I have strong communication, leadership, decision making and learning skills. I always take responsibility for various aspects of product development and do daily work with punctuality, responsibility, perseverance and commitment.</p>
            </div>
            <div className="col-md-4 offset-md-1">
              <div className="row">
                <div className="col-sm-4">
                  <div className="pb-1">Age</div>
                </div>
                <div className="col-sm-8">
                  <div ref={ageRef} id="age" className="pb-1 text-secondary">...</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Email</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">yurik.burko@gmail.com</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Phone</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">+375336026236</div>
                </div>
                {/* <div className="col-sm-4">
                  <div className="pb-1">Address</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">Minsk, Belarus</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        <Skills />
        <hr className="d-print-none" />
        <div className="work-experience-section px-3 px-lg-4">
          <h2 className="h3 mb-4">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <LogicExperience />
              </div>
            </div>
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <CorrectExperience />
              </div>
            </div>
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <ItransitionExperience />
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="page-break"></div>
        <div className="education-section px-3 px-lg-4 pb-4">
          <h2 className="h3 mb-4">Higher education</h2>
          <div className="timeline">
            <div className="timeline-card timeline-card-success card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Bachelor of Computer Software Engineering <span className="text-muted h6">from Belarusian State University of Informatics and Radioelectronics</span></div>
                <div className="text-muted text-small">2007 - 2012</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
          <h2 className="h3 text mb-3">Contact</h2>
          <div className="row">
            <div className="col-md-7 d-print-none">
              <div className="my-2">
                <ContactForm />
              </div>
            </div>
            <div className="col">
              <div className="mt-2">
                {/* <h3 className="h6">Address</h3>
                <div className="pb-2 text-secondary">140, City Center, New York, U.S.A</div> */}
                <h3 className="h6">Phone</h3>
                <div className="pb-2 text-secondary">+375336026236</div>
                <h3 className="h6">Email</h3>
                <div className="pb-2 text-secondary">yurik.burko@gmail.com</div>
              </div>
            </div>
            <div className="col d-none d-print-block">
              <div className="mt-2">
                <div>
                  <div className="mb-2">
                    <div className="text-dark"><i
                        className="fab fa-linkedin mr-1"></i><span>https://www.linkedin.com/in/yury-burko-6310a980</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark"><i
                        className="fab fa-facebook mr-1"></i><span>https://www.facebook.com/yura.burko.3</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark"><i
                        className="fab fa-instagram mr-1"></i><span>https://www.instagram.com/yuraburko</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark"><i
                        className="fab fa-github mr-1"></i><span>https://github.com/yurikburko</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="pt-4 pb-4 text-muted text-center d-print-none">
    <div className="container">
      <div className="my-3">
        <div className="h4">Yury Burko</div>
        <div className="footer-nav">
          <ProfilesLinks/>
        </div>
      </div>
      <div className="text-small">
        <div className="mb-1">&copy; Yury Burko's Resume website.</div>
        <div>Design - <a href="https://templateflip.com/" target="_blank">TemplateFlip</a></div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default App
