
<script lang="ts">
  import TypingKeyboard from "$lib/components/typing-keyboard.svelte";
  import CardGameSkills from "$lib/components/card-game-skills.svelte";
	import { onMount } from "svelte";

  let LazyGlobe: any;
  let experienceDiv: HTMLSpanElement;
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
  <CardGameSkills />
</div>

<div class="">
  <div class="bg-[#1a1c20] text-white p-4 min-h-20"  >
    <span class="text-xl" bind:this={experienceDiv}>Experience</span>
    {#if LazyGlobe}
      <LazyGlobe.default />
    {/if}
  </div>
</div>