
<script lang="ts">
  import TypingKeyboard from "$lib/components/typing-keyboard.svelte";
  import CardGameSkills from "$lib/components/card-game-skills.svelte";

  const LazyGlobe = () => import("$lib/components/globe3d.svelte");
</script>

<div class="">
  <TypingKeyboard />
</div>

<div class="mt-20">
  <CardGameSkills />
</div>

<div class="mt-20">
  <div class="bg-[#131717] text-white p-4">
    <span class="text-xl">Experience</span>
  </div>
</div>