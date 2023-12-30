<script lang="ts">

	import CardSkill from "./card-skill.svelte";
</script>


<div class="pb-10">

  <div class="bg-[#240303] rounded-2xl p-4 m-4">
    <div class=" bg-green-950 rounded-md text-white flex flex-col">
      <span class="p-4 text-xl text-white">Skills</span>
      <div class="flex flex-row flex-wrap -mb-10">
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

