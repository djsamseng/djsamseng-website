
<script lang="ts">
  import TypingKeyboard from "$lib/components/typing-keyboard.svelte";
  import CardGameSkills from "$lib/components/card-game-skills.svelte";
	import { onMount } from "svelte";

  let LazyGlobe: any;
  let experienceDiv: HTMLDivElement;
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
    observer.observe(experienceDiv)
  })
</script>

<div class="min-h-[100vh]">
  <TypingKeyboard />
</div>

<div class="mt-20">
  <CardGameSkills />
</div>

<div class="mt-20">
  <div class="bg-[#131717] text-white p-4" bind:this={experienceDiv} >
    <span class="text-xl">Experience</span>
    {#if LazyGlobe}
      <LazyGlobe.default />
    {/if}
  </div>
</div>