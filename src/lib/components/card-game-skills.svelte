<script lang="ts">

	import CardSkill from "./card-skill.svelte";

  //bg-[#F2DDBD]
</script>


<div class="pb-10 ">

  <div class="p-4 ">
    <div class="  rounded-md text-[#131717] flex flex-col">
      <div class="p-4 text-xl">Skills</div>

      <div class="place-self-center flex flex-col items-center">
        <span class=" text-xl">TypeScript</span>
        <ul>
          <li>
            <div class="flex flex-col">
              <span class="underline">Bloomberg LP</span>
              <span class="mt-1 max-w-[800px]">At Bloomberg we rewrote Launchpad primarily using JavaScript and TypeScript both on the backend and frontend.</span>
            </div>
          </li>
        </ul>
      </div>

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

