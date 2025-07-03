import Sidebar from '../components/Sidebar';
import Nav from '../components/navfixed';

export default function OverviewPage() {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <article className="mt-24 sm:ml-60 w-screen grid prose prose-sm prose-a:text-blue-600 prose-a:underline prose-ul:list-disc prose-ol:list-decimal prose-headings:my-2 prose-headings:font-semibold font-mono max-w-4xl mx-0 pl-6 text-left">
          <h1>The Hack Club Congressional App Challenge Finalist Award</h1>
          
          <p>
            The Congressional App Challenge Finalist Award is an award given by Hack Club for any student who publishes and open sources their Congressional App Challenge project. This award is recognized by various institutions and also comes with an invite for the Congressional Hackathon. Some of the institutions who recognize:
          </p>

          <div className="flex flex-wrap items-center gap-4 my-6">
            <img height="104" width="367" alt="MIT School of Engineering Logo" src="https://athena.hackclub.com/images/mit.png" />
            <img height="120" width="294" alt="GitHub Logo" src="https://athena.hackclub.com/images/github.png" />
            <img height="112" width="477" alt="Congressional App Challenge" src="https://athena.hackclub.com/images/cac.png" />
            <img alt="Girl Scouts of Greater New York" src="https://athena.hackclub.com/images/gsgny.png" />
            <img alt="The Knowledge House" src="https://athena.hackclub.com/images/knowledgehouse.png" />
            <img alt="Code.org" src="https://athena.hackclub.com/images/codeorg.png" />
          </div>

          <p>In order to get the finalist award, only a few criteria need to be met.</p>

          <h4>* Apply for the Congressional App Challenge (you also need to be eligible for the Congressional App Challenge)</h4>
          <h4>* Open source your project on GitHub with a README.md</h4>
          <h4>* Submit a playable link to your project in the Congressional App Challenge App submission</h4>

          <p>
            For more info about how to open source your project on Github, check out the "Github" page. Info about how to create a published website, android app or IOS app can also be seen on the sidebar.
          </p>

          <p>
            The Hack Club Congressional App Challenge Finalist award also comes with an invitation to the Congressional Hackathon. For every hour you work on your Congressional App Challenge project, logged with Hackatime (see setting up Hackatime), $10 is added to your travel stipend to Washington D.C.
          </p>

          <p>Happy hackings!</p>
        </article>
      </div>
    </div>
  );
} 