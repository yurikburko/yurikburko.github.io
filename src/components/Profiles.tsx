import * as React from "react";

export const ProfilesLinks: React.FC = () => {
    return (
        <nav role="navigation">
            <ul className="nav justify-content-center">
              <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/yury-burko-6310a980"
                  title="Linkedin"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">Linkedin</span></a>
              </li>
              <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/yura.burko.3" title="Facebook"><i
                    className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></a>
              </li>
              <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/yuraburko" title="Instagram"><i
                    className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></a>
              </li>
              <li className="nav-item"><a className="nav-link" href="https://github.com/yurikburko" title="Github"><i
                    className="fab fa-github"></i><span className="menu-title sr-only">Github</span></a>
              </li>
            </ul>
          </nav>
    );
};
