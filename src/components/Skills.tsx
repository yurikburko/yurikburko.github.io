import * as React from "react";

export const Skills: React.FC = () => {
    return (
        <div className="skills-section px-3 px-lg-4">
            <h2 className="h3 mb-3">Professional Skills</h2>
            <div>
                <span className="badge skill-badge rounded-pill bg-primary">.NET/.NET Core</span>
                <span className="badge skill-badge rounded-pill bg-warning text-dark">C#</span>
                <span className="badge skill-badge rounded-pill bg-secondary">ASP.NET Core Web API</span>
                <span className="badge skill-badge rounded-pill bg-success">GraphQL</span>
                <span className="badge skill-badge rounded-pill bg-danger">MS SQL</span>
                <span className="badge skill-badge rounded-pill bg-info text-dark">Dapper</span>
                <span className="badge skill-badge rounded-pill bg-light text-dark">JavaScript</span>
                <span className="badge skill-badge rounded-pill bg-dark">React</span>
                <span className="badge skill-badge rounded-pill bg-primary">Redux</span>
                <span className="badge skill-badge rounded-pill bg-secondary">TypeScript</span>
                <span className="badge skill-badge rounded-pill bg-success">Jest</span>
                <span className="badge skill-badge rounded-pill bg-warning text-dark">Enzyme</span>
                <span className="badge skill-badge rounded-pill bg-danger">React Testing Library</span>
                <span className="badge skill-badge rounded-pill bg-info text-dark">Docker</span>
                <span className="badge skill-badge rounded-pill bg-light text-dark">Kubernetes</span>
                <span className="badge skill-badge rounded-pill bg-dark">Git</span>
                <span className="badge skill-badge rounded-pill bg-primary">Azure</span>
                <span className="badge skill-badge rounded-pill bg-secondary">GitHub</span>
                <span className="badge skill-badge rounded-pill bg-success">Scrum</span>
            </div>
        </div> 
    );
};
