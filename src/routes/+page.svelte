
<script lang="ts">
  import TypingKeyboard from "$lib/components/typing-keyboard.svelte";
  import CardGameSkills from "$lib/components/card-game-skills.svelte";
	import { onMount } from "svelte";
	import ExperienceComponent from "$lib/components/experience-component.svelte";
  import SamSengSquare from "$lib/assets/SamSengSquare.jpg";

  let LazyGlobe: any;
  let lazyGlobeStartDiv: HTMLSpanElement;
  let lazyGlobeDiv: HTMLDivElement;
  const loadLazyGlobe = () => import("$lib/components/globe3d.svelte");

  async function onExperienceInView(entries: IntersectionObserverEntry[]) {
    if (LazyGlobe) {
      return;
    }
    if (entries.length === 0 || entries[0].intersectionRatio <= 0) {
      return;
    }
    console.log("Loading globe");
    LazyGlobe = await loadLazyGlobe();
  }


  onMount(() => {
    const observer = new IntersectionObserver(onExperienceInView, {
      root: null,
      threshold: 0.1,
    });
    observer.observe(lazyGlobeStartDiv);
    observer.observe(lazyGlobeDiv);
    return () => {
      observer.disconnect();
    }
  })
</script>

<div class="min-h-[90vh]">
  <TypingKeyboard />
</div>

<div class="">

  <div class="bg-[#1a1c20] text-white p-4 min-h-[500px]" >
    <div class="hidden lg:block sticky top-10">
      <div class="inline-block float-right text-center">
        <div class="text-sm">2016</div>
        <div class="text-xs">|</div>
        <div class="">Bloomberg LP</div>
        <div class="text-xs">|</div>
        <div class="text-sm">2021</div>
        <div class="text-xs">|</div>
        <div class="">Independent</div>
        <div class="">Contractor</div>
        <div class="text-xs">|</div>
        <div class="text-sm">2024</div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl mx-auto">
        <div id="experience" class="text-3xl py-5">Experience</div>
      </div>

      <span class="text-xl" bind:this={lazyGlobeStartDiv}></span>




      <ExperienceComponent
        title="Bloomberg LP"
        years="2016 - 2021"
        position="Software Engineer, Team Lead"
        description="Fortunate to work with great coworkers developing the future of the Bloomberg Terminal."
        sections={[
          {
            header: "Launchpad Team",
            bullets: [
              "Software infrastructure full stack developer. We're developing UIs, the infrastructure that supports those UIs and the pipeline that connects that infrastructure all the way to the database layer.",
              "We're modernizing the terminal from the ground up. The rearchitecting and redesigning of launchpad into a 21st century desktop environment is in our blood.",
              "We're creating a new foundation for launchpad written in Typescript, JavaScript and C++. We're also using Python, SQL, CMake and DPKG.",
              "As a client facing team we're on the front lines, triaging bug reports and investigating client issues. Additionally we're helping other engineering teams that use the launchpad infrastructure for their products.",
              "We're working with product and engineering teams from across the company. This takes place in five main steps. 1) Intake and \"t-shirt\" size estimation 2) Stakeholder prioritization 3) Design documents and team discussions 4) Break down work into tasks and epics 5) Code, deliver incrementally and iterate.",
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
      />
      <ExperienceComponent
          title="OneLook Thesaurus"
          years="2022 - 2023"
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
      />

      <ExperienceComponent
          title="Cushybots"
          years="2023 - Current"
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
    <div class="overflow-x-hidden min-h-[50vh]" bind:this={lazyGlobeDiv}>
      {#if LazyGlobe}
        <LazyGlobe.default />
      {/if}
    </div>

  </div>

  <div class="p-4 min-h-[500px]">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl mx-auto">
        <div id="skills" class="text-3xl py-5">Skills</div>
      </div>
    </div>
  </div>


  <div class="bg-[#1a1c20] text-white p-4 min-h-[500px]" >
    <div class="hidden lg:block sticky top-10">
      <div class="inline-block float-right text-center">
        <div class="">AI Research</div>
        <div class="text-xs">|</div>
        <div class="">GatherBadger</div>
        <div class="text-xs">|</div>
        <div class="">TakeOff</div>
        <div class="text-xs">|</div>
        <div class="">Enjoy CRM</div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl mx-auto">
        <div id="projects" class="text-3xl py-5">Projects</div>
      </div>

    </div>
  </div>


  <div class="p-4 min-h-[500px]">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl mx-auto">
        <div id="life" class="text-3xl py-5">Life</div>
        <div class="flex flex-col items-center">
          <img class="rounded-full w-[120px] h-[120px] md:w-[230px] md:h-[230px] object-cover " src={SamSengSquare} alt="Sam Seng" />
        </div>
      </div>
    </div>
  </div>
</div>
