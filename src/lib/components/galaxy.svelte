<script lang="ts">
  import { scale } from "svelte/transition";
import Elipse from "./elipse.svelte";
</script>

<div class=" bg-[#131717]">
  <div class="ml-4 p-4 text-xl text-white">Experience</div>
</div>
<div class="bg-[#131717] relative h-[600px] z-10">

  <Elipse left="" top="0%" scale={1} />
  <div class="absolute text-gray-300 z-20 left-[60%] top-[10%] text-wrap whitespace-normal max-w-[250px] flex flex-col">
    <span class="">Bloomberg LP</span>
    <span class="">5+ Years</span>
    <span class="">Software Engineer / Team Lead</span>

  </div>
  <Elipse left="40%" top="10%" scale={0.2} />


</div>
