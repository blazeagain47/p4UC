import React, { useState } from 'react';
import { ChevronDown, Instagram, MessageCircle } from 'lucide-react';

const Project = ({ title, shortDescription, longDescription, logos, features, expanded, onExpand }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 mb-6 transition-all duration-500 ease-in-out 
        ${expanded ? 'col-span-full max-w-4xl mx-auto' : 'w-full'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex space-x-3 -mt-2 -mr-2">
          {logos && logos.map((logo, index) => (
            <img 
              key={index}
              src={`/${logo.toLowerCase()}.png`}
              alt={`${logo} logo`}
              className="h-10 w-10 object-contain"
            />
          ))}
        </div>
      </div>
      <p className={`mb-4 transition-all duration-500 ${expanded ? 'opacity-100' : 'opacity-0 h-0'}`}>
        {expanded ? longDescription : shortDescription}
      </p>
      <button 
        onClick={onExpand} 
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
      >
        {expanded ? 'Show Less' : 'Learn More'}
      </button>
      {expanded && (
        <div className="mt-4 transition-all duration-500 ease-in-out">
          {features && (
            <div>
              <h4 className="font-bold mb-2">Features Include:</h4>
              <ul className="list-disc list-inside">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {title === "Trading w/ AI Agents" && (
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2 italic">Think of all the different thought processes one makes when day trading. Now imagine each thought process was a highly trained AI Agent for that specific field. Now imagine those Agents literally communicating with each other in real time with real data.</p>
              <p className="text-lg font-semibold mb-2">Meet our Agents</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AgentBox 
                  name="Agent Sniper" 
                  description="Specialized in sniping the latest news and financial reports on different companies and crypto." 
                  logo="UCSB"
                />
                <AgentBox 
                  name="Agent Sentiment" 
                  description="Trained for analyzing latest news/data on a stock/crypto and giving a 1-10 price pressure score (1 being high negative pressure and 10 being high positive pressure)." 
                  logo="UCSB"
                />
                <AgentBox 
                  name="Agent Einstein" 
                  description="Trained at recognizing different price patterns and shapes considering multiple different factors." 
                  logo="UCR"
                />
                <AgentBox 
                  name="Agent Predictor" 
                  description="Utilizes advanced machine learning algorithms to forecast short-term and long-term price movements based on historical data, current market conditions, and macroeconomic factors." 
                  logo="UCLA"
                />
                <AgentBox 
                  name="Agent Risk" 
                  description="Continuously assesses and manages risk levels for potential trades, considering factors such as volatility, market liquidity, portfolio exposure, and global economic events." 
                  logo="UCI"
                />
                <AgentBox 
                  name="Agent Arbitrage" 
                  description="Identifies and capitalizes on price discrepancies across different markets and exchanges, executing rapid trades to profit from these inefficiencies." 
                  logo="UCSB"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AgentBox = ({ name, description, logo }) => (
  <div className="bg-gray-100 rounded-lg p-4 relative">
    <h4 className="text-lg font-semibold mb-2">{name}</h4>
    <p>{description}</p>
    <img 
      src={`/${logo.toLowerCase()}.png`}
      alt={`${logo} logo`}
      className="absolute top-1 right-1 h-8 w-8 object-contain"
    />
  </div>
);

const Projects4Website = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-['Roboto'] text-4xl font-black tracking-tighter">p4</span>
          <nav>
            <ul className="flex space-x-6">
              <li className="relative group">
                <button className="flex items-center">
                  Projects <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                  <li><button onClick={() => scrollToSection('public-projects')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Public</button></li>
                  <li><button onClick={() => scrollToSection('projects-in-development')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">In Development</button></li>
                </ul>
              </li>
              <li><button onClick={() => scrollToSection('about-us')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('interested')}>Interested?</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <iframe 
              src="/logo.html" 
              width="1250" 
              height="300" 
              frameBorder="0"
              title="Projects4 Logo"
              className="overflow-hidden"
              scrolling="no"
            ></iframe>
          </div>
          <p className="text-2xl font-semibold mb-6 max-w-2xl mx-auto">
          Projects4 is a UC-wide club dedicated to making cutting-edge projects powered by the latest AI tools. No longer should a lack of knowledge in code stop you from creating the projects of your dreams. 
          </p>
          <button onClick={() => scrollToSection('public-projects')} className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 mb-12">
            View Projects
          </button>
        </section>

        <section id="public-projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Public Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CourseDescribe",
                shortDescription: "UCI's premier tool for course research and planning.",
                longDescription: "CourseDescribe is the ultimate solution for UCI students looking to make informed decisions about their courses and professors. Our comprehensive platform offers a range of features designed to streamline your course planning process and provide valuable insights.",
                features: [
                  "Easy Course Look Up",
                  "Detailed course descriptions",
                  "Highly advanced instructor data (including RateMyProfessor data and sorting capabilities)",
                  "Prerequisites and Corequisites information",
                  "Real-time Class Availability updates",
                  "In-depth Grade Distribution analysis"
                ],
                logos: ['UCI']
              },
              {
                title: "StudyGuideHub",
                shortDescription: "The first accessible and student-wide marketplace for course specific study guides.",
                longDescription: "Originally founded at the University of California, Riverside (UCR), StudyGuideHub began with a mission to provide accessible, high-quality study materials to students. Thanks to our dedicated team and strong user support, we quickly gained recognition on campus. Building on this success, we've now expanded to the University of California, Irvine (UCI), continuing our commitment to empower students with top-notch study guides. Join us as we make studying a hell of a lot easier.",
                logos: ['UCI', 'UCR']
              },
              {
                title: "Indeed AI Bot",
                shortDescription: "Indeed AI Job and Internship Application and Automation",
                longDescription: "Here at Projects4, we don't have the time to spend brainlessly applying to jobs and internships. That's why we created a bot powered by the latest technologies in AI Web Automation integrated with GPT-4 and Phrasly to mass send out job and internship applications with tailored cover letters and company-specific questions generated from our resumes and profiles. We're currently developing automation for popular job sites including LinkedIn, Workday, Handshake, and more.",
                features: [
                  "Mass application submission",
                  "Tailored cover letter generation",
                  "Company-specific question responses",
                  "Integration with multiple job sites"
                ]
              }
            ].map((project, index) => (
              <Project
                key={index}
                {...project}
                expanded={expandedProject === project.title}
                onExpand={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
              />
            ))}
          </div>
        </section>

        <section id="projects-in-development" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Projects in Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project 
              title="ZScoot" 
              shortDescription="UCI and UCR's first mobile and web app for scooter delivery of nearby restaurants and snacks"
              longDescription="ZScoot is set to revolutionize the way UCI and UCR students get their food and snacks. As the first mobile and web app dedicated to scooter-based delivery from nearby restaurants and convenience stores, ZScoot offers a fast, eco-friendly, and cost-effective solution for hungry students on campus. Our platform will connect users with a network of student scooter drivers, ensuring quick deliveries and supporting the student community. With an intuitive interface and real-time tracking, ZScoot aims to make food delivery more accessible and efficient than ever before. The development team for this exciting project is filling up fast, so join now if you're interested in being part of this innovative venture!"
              logos={['UCI', 'UCR']}
              expanded={expandedProject === 'ZScoot'}
              onExpand={() => setExpandedProject(expandedProject === 'ZScoot' ? null : 'ZScoot')}
            />
            <Project 
              title="Trading w/ AI Agents" 
              shortDescription="Creating a one-of-a-kind Trading Automation with AI Agentic Workflow"
              longDescription="This groundbreaking project aims to revolutionize the world of algorithmic trading by creating a sophisticated network of AI agents, each specialized in a crucial aspect of trading decision-making. By leveraging the power of artificial intelligence and machine learning, we're developing a system that can analyze market conditions, assess risks, and execute trades with unprecedented accuracy and speed."
              expanded={expandedProject === 'Trading w/ AI Agents'}
              onExpand={() => setExpandedProject(expandedProject === 'Trading w/ AI Agents' ? null : 'Trading w/ AI Agents')}
            />
          </div>
        </section>

        <section id="about-us" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            Projects4 is a dynamic, UC-wide club dedicated to fostering innovation and creativity through cutting-edge project development. We believe that everyone, regardless of their coding experience, should have the opportunity to bring their ideas to life.
          </p>
          <p className="text-lg mb-4">
            Our club is open to all UC students, from those with little to no coding knowledge to experienced developers. We provide a supportive environment where members can work on existing projects or propose and lead their own initiatives.
          </p>
          <p className="text-lg">
            By leveraging the latest AI tools and technologies, we empower our members to tackle complex problems and create impactful solutions. Join us to expand your skills, collaborate with like-minded individuals, and turn your innovative ideas into reality!
          </p>
        </section>

        <section id="interested" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Interested?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Send</button>
            </form>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <Instagram size={32} />
                </a>
                <a href="#" className="text-indigo-500 hover:text-indigo-600">
                  <MessageCircle size={32} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Projects4</h4>
              <p>Empowering UC students to innovate and create.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul>
                <li><button onClick={() => scrollToSection('top')} className="hover:text-gray-300">Home</button></li>
                <li><button onClick={() => scrollToSection('public-projects')} className="hover:text-gray-300">Projects</button></li>
                <li><button onClick={() => scrollToSection('about-us')} className="hover:text-gray-300">About Us</button></li>
                <li><button onClick={() => scrollToSection('interested')} className="hover:text-gray-300">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Projects4. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects4Website;
