<script lang="ts">

	import CardSkill from "./card-skill.svelte";
</script>


<div class="">

  <div class="bg-[#240303] rounded-2xl p-4">
    <div class=" bg-green-950 text-white flex flex-col">
      <span class="p-4 text-xl text-white">Skills</span>
      <div class="flex flex-row flex-wrap">
        <div class="flex-1" />

        <div class="z-10 hover:z-20">
          <CardSkill />
        </div>
        <div class="hover:z-20 -ml-10">
          <CardSkill />
        </div>

        <div class="flex-1" />
      </div>
    </div>
  </div>
</div>

