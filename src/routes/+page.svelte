

<script lang="ts">
  import TypingKeyboard from "$lib/components/typing-keyboard.svelte";
	import ExperienceComponent from "$lib/components/experience-component.svelte";
  import SamSengSquare from "$lib/assets/SamSengSquare.jpg";
  import LaunchpadSamIntroSlide from "$lib/assets/LaunchpadSamIntroSlide.jpg";
  import LaunchpadSamIb from "$lib/assets/LaunchpadSamIB.jpg";

  import DownloadOnAppStore from "$lib/assets/Download_on_the_App_Store_Badge.svg";
  import ipad7 from "$lib/assets/screenshot7.png";
  import iphone8 from "$lib/assets/screenshot8.png";
  import iphone9 from "$lib/assets/screenshot9.png";
	import CardSkill from "$lib/components/card-skill.svelte";

  const lifeQuotes = [
    "Look at the person next to you, and love them like God loves them. Dream it, live it, feel it",
    "Find the gold in someone today - Laura Lentz",
    "Defeat evil with love - The Bible",
    "You will continue to suffer if you have an emotional reaction to everything that is said to you. True power is sitting back and observing things with logic. True power is restraint. If words control you that means everyone else can control you. - Warren Buffet",
    "Our world is determined on tearing one another down. Can we be different and lift another up? - Carl Lentz",
    "Stay curious, ask questions, be interested and follow up - Allen Tan",
    "Don't be a pharisee looking to trap others/promote yourself at others' expense - Jordan Peterson",
    "Optimists do better in the long run. Get out of a relative mindset. Demonizing money is playing the status game. Stop sacrificing today for an imaginary tomorrow. Do what you love, do it better than anybody else, then find a way to map that to what society wants. Create a business in 3 months: raise money, assemble a team, and launch. It's fun to see what you can put together. Making money is giant lump sums helps not upgrade your lifestyle and frees you from the lust of money (fear of not having). If someone is talking a lot about how honest they are, they’re probably dishonest. When someone spends too much time talking about their own values or they’re talking themselves up, they’re covering for something. Be very careful about doing things you are fundamentally not going to be proud of, because they will damage you. The first time someone acts this way, I will warn them. By the way, nobody changes. Then I just distance myself from them. I cut them out of my life. Optimistic Contrarian. Problem solving: Discard memory and identity and focus on the problem. Praise specifically, criticize generally (not the person but the general activity). Leverage is how much of an advantage you have over the alternative - Naval Ravikant"

  ]
</script>

<div class="pb-10 xl:pb-20">
  <TypingKeyboard />
</div>

<div class="">

  <div class="bg-[#1a1c20] text-white min-h-[500px]" >
    <div class="hidden lg:block sticky top-10 p-4">
      <div class="inline-block float-right text-center">
        <div class="text-sm">2016</div>
        <div class="text-xs">|</div>
        <div class="">Bloomberg LP</div>
        <div class="text-xs">|</div>
        <div class="text-sm">2021</div>
        <div class="text-xs">|</div>
        <div class="">Founder</div>
        <div class="-my-2">+</div>
        <div class="">Contractor</div>
        <div class="text-xs">|</div>
        <div class="text-sm">2024</div>
      </div>
    </div>
    <div class="p-4">
      <div class="max-w-3xl xl:max-w-6xl mx-auto">
        <div id="experience" class="text-3xl pt-5">Experience</div>
      </div>


      <ExperienceComponent
        title="Bloomberg LP"
        years="2016 - 2021"
        location="New York, New York"
        position="Software Engineer, Team Lead"
        description={null}
        sections={[
          {
            header: "Launchpad Team",
            bullets: [
              "Full stack software engineer on the Launchpad UI infrastructure team. We developed UIs, the infrastructure that supports those UIs and the pipeline that connects that infrastructure all the way to the database layer.",
              "Rearchitected Launchpad into a 21st century desktop environment using TypeScript, JavaScript, C++, Python, SQL, CMake, DPKG and JIRA.",
              "We took a legacy monolith system running C and gob code on sun and ibm servers and migrated to a hybrid system running UI local on the user’s desktop backed by services running on linux servers. One success of this was the ability to launch EMSX (a trading ticket launchpad component) in under 500ms worldwide versus the previous server side infrastructure with launch speed of 2 to 5 seconds especially in Asia / APAC",
              "As a client facing team we were on the front lines, triaging bug reports and investigating client issues. Additionally we helping other engineering teams that use the launchpad infrastructure for their products.",
              "We worked with product and engineering teams from across the company. This took place in five main steps. 1) Intake and \"t-shirt\" size estimation 2) Stakeholder prioritization 3) Design documents and team discussions 4) Break down work into tasks and epics 5) Code, deliver incrementally and iterate. We used JIRA sprints and JIRA projects to organize and execute on deliverables.",
              "Served as the Launchpad team lead managing a team of 5 software engineers",
            ]
          },
          {
            header: "Machine Learning Team",
            bullets: [
              "Developed a python backtesting platform library for financial trading strategies",
              "Developed machine learning models investigating the value of Bloomberg News data",
            ]
          }
        ]}
      >
        <div class="space-y-5 my-5">
          <div class="flex flex-row flex-wrap sm:grid grid-cols-2 space-y-2 sm:space-y-0 sm:space-x-2">
            <img class="" src={LaunchpadSamIntroSlide} alt="Presenting Launchpad" />
            <img class="" src={LaunchpadSamIb} alt="Presenting Launchpad" />
          </div>
        </div>
      </ExperienceComponent>
      <ExperienceComponent
          title="OneLook Thesaurus"
          years="2022 - 2023"
          location="Fairfield, CT"
          position="iOS Developer (Contractor)"
          description={null}
          sections={[
            {
              bullets: [
                "Built the OneLook Theaurus iOS and macOS app with over 8,000 downloads and over 600 active paid subscribers",
                "Features AI powered free text queries, voice search and a keyboard extension",
                "Used SwiftUI, Core Data and StoreKit 2"
              ]
            }
          ]}
      >
        <div class="space-y-5 my-5">
          <div class="">
            <div class="flex flex-col justify-between">
              <h1 class="hidden">OneLook Thesaurus for iOS and macOS</h1>
              <div class="text-3xl text-center">
                <p class="">OneLook Thesaurus</p>
                <p class="text-xl font-sans pt-4 pb-2">for iOS and macOS</p>
              </div>
              <div class="mx-auto w-11/12 px-5 sm:px-0 sm:w-4/5 lg:w-3/4 h-[300px] md:h-[500px] flex-shrink-0 max-w-3xl">
                <div class="relative">
                  <div class="absolute w-full">
                    <img class="max-h-[300px] md:max-h-[500px] mx-auto" src={ipad7} alt="iPad app screenshot"/>
                  </div>

                  <div class="absolute w-full top-20">
                    <img class="max-h-[200px] md:max-h-[400px] -rotate-12 -ml-10 mt-8 " src={iphone9} alt="iPhone app screenshot"/>
                  </div>

                  <div class="absolute w-full top-20">
                    <img class="max-h-[200px] md:max-h-[400px] rotate-12 ml-auto -mr-10 mt-8" src={iphone8} alt="iPhone app screenshot"/>
                  </div>
                </div>
              </div>
              <div class="mx-auto mt-5">
                <a href="https://apps.apple.com/us/app/onelook-thesaurus/id1615071061?platform=iphone" target="_blank">
                  <img class="h-[62px]" src={DownloadOnAppStore} alt="Download on the app store"/>
                </a>
              </div>

            </div>
          </div>
        </div>
      </ExperienceComponent>

      <ExperienceComponent
          title="Cushybots"
          years="2023 - Current"
          location="Phnom Penh, Cambodia"
          position="Software Engineer (Contractor)"
          description={null}
          sections={[
            {
              bullets: [
                "Built a ROS robot control GUI using Python",
                "Integrated a Gazebo robot simulation environment with arm movement and object manipulation"
              ]
            }
          ]}
      />



      <ExperienceComponent
          title="Susquehanna International Group"
          years="Summer 2015"
          location="Philidelphia, PA"
          position="Software Engineering Intern"
          description={null}
          sections={[
            {
              bullets: [
                "Implemented Elasticsearch as a search engine for market and derived data",
                "Wrote multiprocessed Python programs indexing 500GB daily and improved indexing 5-10x",
                "Developed a user interface using Flask, Javascript and Bootstrap featuring autocomplete and data visualization",
                "Wrote a custom query language parsing Python, C++ and English like syntax into Elasticsearch’s query language",
                "Designed performance tests of Elasticsearch vs. parallel IPython on a distributed cluster"
              ]
            }
          ]}
      />

      <ExperienceComponent
          title="Lockheed Martin"
          years="Summer 2014"
          location="Burlington, MA"
          position="Software Engineering Intern"
          description={null}
          sections={[
            {
              bullets: [
                "Designed and developed user interface features for the F-15 Virtual Maintenance Trainer’s instructor tool using C#, .NET(WPF) and MVVM. Process included mockups, design presentations and reviews",
                "Improved application performance 20x for database and GUI refresh operations",
                "Worked on an Agile team of 14 members and participated in daily standups"
              ]
            }
          ]}
      />

    </div>

  </div>

  <div class="p-4 min-h-[500px]">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl xl:max-w-6xl mx-auto">
        <div id="skills" class="text-3xl py-5">Skills</div>
      </div>

      <div class="">
        <div class="text-xl">Programming Languages</div>
        <div class="flex flex-row flex-wrap">
          <CardSkill name="TypeScript" digit=".ts" />
          <CardSkill name="JavaScript" digit=".js" />
          <CardSkill name="Python" digit=".py" />
          <CardSkill name="SwiftUI" digit=".swift" />
          <CardSkill name="C++" digit=".cpp" />
          <CardSkill name="SQL" digit=".sql" />
          <CardSkill name="CSS" digit=".css" />
        </div>
      </div>

      <div class="">
        <div class="text-xl">Frameworks and Technologies</div>
        <div class="flex flex-row flex-wrap">
          <CardSkill name="SvelteKit" digit="SK" />
          <CardSkill name="iOS" digit="iOS" />
          <CardSkill name="Supabase" digit="S" />
          <CardSkill name="NextJS" digit="N" />
          <CardSkill name="ReactJS" digit="R" />
          <CardSkill name="Tailwind CSS" digit="T" />
        </div>
      </div>

      <div class="max-w-3xl xl:max-w-6xl mx-auto">
        <div class="text-3xl py-5">Education</div>
      </div>

      <ExperienceComponent
        title="Rensselaer Polytechnic Institute"
        years="Class of 2015"
        location="3.99/4.0 GPA"
        position="Bachelors of Science, Computer and Systems Engineering"
        description={null}
        sections={[]}
        white={true}>
        <div class=" space-y-5 my-5">
            <ul class="list-disc ml-5">
                <li>Summa Cum Laude</li>
                <li>4.0 Award (2013, 2014)</li>
                <li>Member of founding team of <a class="text-blue-500" href="https://github.com/Submitty/Submitty">Submitty</a> (Homework Server)</li>
                <li>Member of Rensselaer Center for Open Source</li>
            </ul>
        </div>
      </ExperienceComponent>
    </div>
  </div>


  <div class="bg-[#1a1c20] text-white p-4 min-h-[500px]" >
    <div class="hidden lg:block sticky top-10">
      <div class="inline-block float-right text-center">
        <div class="">AI Research</div>
        <div class="text-xs">|</div>
        <div class="">Enjoy CRM</div>
        <div class="text-xs">|</div>
        <div class="">TakeOff</div>
        <div class="text-xs">|</div>
        <div class="">GatherBadger</div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl xl:max-w-6xl mx-auto">
        <div id="projects" class="text-3xl py-5">Projects</div>
      </div>

      <ExperienceComponent
          title="Artificial Intelligence Research"
          years="2021 - Current"
          location={null}
          position="Software Engineer"
          description={null}
          sections={[
            {
              bullets: [
                "Investigated non-gradient methods for decision making",
                "Filed a provisional patent for a new audio frequency transform",
                "Built a framework for an AI agent to browse, listen, type and click in a web browser or desktop environment.",
                "Built the ability for the AI agent to learn and imitate a user or dataset"
              ]
            }
          ]}
        />

        <ExperienceComponent
          title="Enjoy CRM"
          years="2023"
          location={null}
          position="Software Engineer"
          description={null}
          sections={[
            {
              bullets: [
                "Built a Khmer CRM for our church using Typescript, Sveltekit and Supabase using Telegram as the login identifier as most people in Cambodia do not have email addresses",
                "Features web (graphical) and text messaging (chat bot) user interfaces",
                "Built rostering software for church volunteers",
                "Used Typescript, Sveltekit, Supabase and AWS Lambda"
              ]
            }
          ]}
        />

        <ExperienceComponent
          title="TakeOff"
          years="2022-2023"
          location={null}
          position="Software Engineer"
          description={null}
          sections={[
            {
              bullets: [
                "Built an automatic construction plan summary provider for contractors, subcontractors and electricians to count windows, doors, lights, fixtures and calculate square footage",
                "Used Python, Typescript, React, TailwindCSS, Supabase, and AWS Lambda",
                "Built a framework for an AI agent to browse, listen, type and click in a web browser or desktop environment.",
                "Submitted an open source pull request to AWS Lambda allowing options requests in testing. github.com/aws/aws-lambda-runtime-interface-emulator/pull/84"
              ]
            }
          ]}
        />

        <ExperienceComponent
          title="GatherBadger"
          years="2022"
          location={null}
          position="Software Engineer"
          description={null}
          sections={[
            {
              bullets: [
                "Built a gift giving search engine using TypeScript, React, Supabase and TailwindCSS"
              ]
            }
          ]}
        />
    </div>
  </div>


  <div class="p-4 min-h-[420px]">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl xl:max-w-6xl mx-auto">
        <div id="life" class="text-3xl py-5">Life</div>
        <div class="flex flex-col items-center">
          <img class="rounded-full w-[120px] h-[120px] md:w-[230px] md:h-[230px] object-cover " src={SamSengSquare} alt="Sam Seng" />
        </div>

        <div class="flex flex-col items-center text-xl mt-5 text-center">
          <div class="w-5 mt-2">
            <svg viewBox="0 0 404 564" xmlns="http://www.w3.org/2000/svg">
              <title>Christian Cross</title>
              <path stroke="#000" stroke-width="20" d="m202,2V562M2,202H402"/>
            </svg>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="flex flex-col items-center pb-10">
    <div class="flex flex-row text-5xl items-center space-x-5">
      <a href="https://www.linkedin.com/in/samuel-seng-89500875/" target="_blank"><i class="fab fa-linkedin text-blue-900" /></a>
      <a href="https://github.com/djsamseng" target="_blank"><i class="fab fa-github text-black" /></a>
      <a href="https://www.facebook.com/sam.seng.399/" target="_blank"><i class="fab fa-facebook text-blue-900" /></a>
    </div>
  </div>
</div>
