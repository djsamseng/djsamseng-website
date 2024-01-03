
<script lang="ts">
  import TypingKeyboard from "$lib/components/typing-keyboard.svelte";
  import CardGameSkills from "$lib/components/card-game-skills.svelte";
	import { onMount } from "svelte";

  let LazyGlobe: any;
  let lazyGlobeStartDiv: HTMLSpanElement;
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
    observer.observe(lazyGlobeStartDiv)
  })
</script>

<div class="min-h-[100vh]">
  <TypingKeyboard />
</div>

<div class="">

  <div class="bg-[#1a1c20] text-white p-4 pb-[240px] min-h-[500px]"  >
    <div class="text-2xl py-5">Experience</div>
    <span class="text-xl" bind:this={lazyGlobeStartDiv}></span>
    <div class="overflow-x-hidden min-h-[50vh]">
      {#if LazyGlobe}
        <LazyGlobe.default />
      {/if}
    </div>
    <div class="sticky top-10">
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
    <div class="">
      <div class="flex flex-row">
        <div class="text-xl">Bloomberg LP</div>
        <div class="flex-1" />
      </div>
      <div class="">Software Engineer, Team Lead</div>
    </div>
    <div class="">
      <div class="text-xl">OneLook Theaurus</div>
      <div class="">iOS Developer</div>
    </div>

    <div class="">
      <div class="text-xl">CushyBots</div>
      <div class="">Software Engineer</div>
    </div>
  </div>
  <div class="bg-[#1a1c20] text-white p-4 pb-[240px]">
    <div class="text-2xl py-5">Projects</div>
    <div class="sticky top-10">
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
    <div class="">
      <div class="text-xl">AI Research</div>
    </div>
    <div class="">
      <div class="text-xl">GatherBadger</div>
    </div>
    <div class="">
      <div class="text-xl">TakeOff</div>
    </div>
    <div class="">
      <div class="text-xl">Enjoy CRM</div>
    </div>
  </div>
  <div class="bg-[#1a1c20] text-white p-4 pb-[240px]">
    <div class="text-xl">Internships</div>
    <div class="">
      <div class="text-xl">Lockheed Martin</div>
    </div>
    <div class="">
      <div class="text-xl">Susquehanna International Group</div>
    </div>
  </div>



  <CardGameSkills />
</div>