import * as React from "react";

export const CorrectExperience: React.FC = () => {
    return (
        <>
            <div className="h5 mb-1">Software Engineer <span className="text-muted h6">at Correct</span></div>
            <div className="text-muted text-small mb-2">Nov, 2011 - Feb, 2015</div>
            <div className="mb-1">Team development and support of real-time streaming document processing complex solution consisting of various web and desktop applications.</div>

            <details>
                <summary>Details/Responsibilities</summary>
                <div className="mt-1">
                    <p>Was deeply involved in different processes such as:</p>
                    <ul>
                        <li>integration with third-party and internal systems API (e.g. ABBYY Flexi Capture recognition system)</li>
                        <li>User Interfaces design/prototypes and further implementation in desktop applications</li>
                        <li>image processing (using Emgu CV computer vision library)</li>
                        <li>development of applications that work with scanners (capturing images from different types of scanner devices with postprocessing)</li>
                        <li>development of an internal system for stream processing of data received from various sources, followed by parallel distribution of results for data correction by operators, data storage, integration with external recognition system</li>
                        <li>mentoring, was responsible for specific projects in a team working on Scrum methodology</li>
                    </ul>
                </div>
            </details>

            <div className="mt-1">
                <strong>Tech Stack:</strong>
                <div>
                    C#, WinForms, Silverlight, ASP.NET MVC, ASP.NET Web API, ADO.NET, LINQ, Entity Framework, Dapper, MS SQL Server database, JavaScript, jQuery, HTML, CSS, Bootstrap, Kendo UI, Scrum.
                </div>
            </div>
        </>
    );
};
