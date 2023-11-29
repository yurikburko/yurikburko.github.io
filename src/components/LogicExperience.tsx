import * as React from "react";

export const LogicExperience: React.FC = () => {
  return (
    <>
      <div className="h5 mb-1">Full Stack Software Engineer <span className="text-muted h6">at Logic Development</span></div>
      <div className="text-muted text-small mb-2">Feb, 2015 - July, 2023</div>
      <div className="mb-1">Development and support of <a href="https://birdviewpsa.com/" target="_blank">BirdviewPSA</a> product - Resource and Project Management Software for different businesses.</div>

      <details>
        <summary>Details/Responsibilities</summary>
        <div className="mt-1">
          <p>Was deeply involved in different development processes such as:</p>
          <ul>
            <li>implementation of new features with full software development life-cycle using Agile Scrum process</li>
            <li>researching for new frameworks/technologies and tools</li>
            <li>sprint's tasks planning and estimation</li>
            <li>constant collaboration with Product Managers/Project Owners and other teams (integration, design, BI)</li>
            <li>code review, nonstop improvements of pull-requests review process</li>
            <li>processes automatization inside the team/company in order to speed up development and improve the quality of dev processes</li>
            <li>performance improvements/optimizations (.NET Core projects running in K8S, SQL database optimization, front js code optimization, etc.)</li>
            <li>processing of customers's requests/tickets from support</li>
            <li>conduct requirements gathering and participate in design sprints, initiate application/feature improvement suggestions and ideas during planning/development, close collaboration with designers throughout the development process</li>
            <li>participated in global application architecture changing - breaking a Monolith into .NET Core Microservices deployed in Kubernetes</li>
            <li>responsibility for the Vulnerability Reward Program of the product</li>
            <li>team lead activities, mentorship</li>
          </ul>
        </div>
      </details>

      <div className="mt-1">
        <strong>Tech Stack:</strong>
        <div>
          .NET/.NET Core, C#, Unit Testing, MS SQL, Entity Framework, Dapper, Redis, SignalR, GraphQL, JS, jQuery, KnockoutJS, React, Redux, Redux-Saga, Jest, Enzyme, React Testing Library, TypeScript, Webpack, Node.js, Docker, Kubernetes, TeamCity, Azure, Git, TFS, GitHub, DevOps, Azure Pipelines, Scrum, etc.
        </div>
      </div>
    </>
  );
};
