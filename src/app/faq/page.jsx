import Sidebar from '../components/Sidebar';
import Nav from '../components/navfixed';

export default function FAQPage() {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <article className="mt-24 sm:ml-60 w-screen grid prose prose-sm prose-a:text-blue-600 prose-a:underline prose-ul:list-disc prose-ol:list-decimal prose-headings:my-2 prose-headings:font-semibold font-mono max-w-4xl mx-0 pl-6 text-left">
          <h1>FAQ</h1>
          
          <div className="space-y-6">
            <div>
              <h3>What is the Congressional App Challenge Finalist Award?</h3>
              <p>
                The Congressional App Challenge Finalist Award is an award given by Hack Club for any student who publishes and open sources their Congressional App Challenge project. This award is recognized by various institutions and also comes with an invite for the Congressional Hackathon.
              </p>
            </div>

            <div>
              <h3>How do I qualify for the award?</h3>
              <p>To qualify, you need to:</p>
              <ul>
                <li>Apply for the Congressional App Challenge (and be eligible)</li>
                <li>Open source your project on GitHub with a README.md</li>
                <li>Submit a playable link to your project in the Congressional App Challenge submission</li>
              </ul>
            </div>

            <div>
              <h3>What institutions recognize this award?</h3>
              <p>
                The award is recognized by MIT School of Engineering, GitHub, Congressional App Challenge, Girl Scouts of Greater New York, The Knowledge House, Code.org, and other institutions.
              </p>
            </div>

            <div>
              <h3>What is the Congressional Hackathon?</h3>
              <p>
                The Congressional Hackathon is an event in Washington D.C. that comes with the Finalist Award. For every hour you work on your Congressional App Challenge project (logged with Hackatime), $10 is added to your travel stipend.
              </p>
            </div>

            <div>
              <h3>How do I log my time with Hackatime?</h3>
              <p>
                You can set up Hackatime to track your coding hours. Check the documentation for more details on setting up time tracking for your project.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 