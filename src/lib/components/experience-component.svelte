
<script lang="ts">

  export let title: string;
  export let years: string | null;
  export let location: string | null;
  export let position: string;
  export let description: string | null;
  export let sections: {
    header?: string;
    bullets: string[];
  }[];
  export let white: boolean = false;


  let expanded = true;

</script>

<div class={`max-w-3xl xl:max-w-5xl mx-auto  ${white ? "bg-white text-black border border-black" : "bg-[#131717] text-white"} rounded-xl px-5 pt-5 pb-2 my-10`}>
  <div class="max-w-3xl xl:max-w-5xl mx-auto">
    <div class="flex flex-row">
      <div class="text-xl">{title}</div>
      <div class="flex-1" />
      {#if years}
        <div class="text-end">{years}</div>
      {/if}
    </div>
    <div class="flex flex-row">
      <div class="">{position}</div>
      <div class="flex-1" />
      {#if location}
        <div class="text-end">{location}</div>
      {/if}
    </div>

    {#if expanded}
      <button class="text-end w-full  pt-3" type="button" on:click={() => { expanded = !expanded}}>
        <i class="fas fa-angles-up"/>
      </button>
      <slot />
      <div class=" space-y-5 my-5">
        {#if description}
          <span>{description}</span>
        {/if}

        {#each sections as section}
          {#if section.header}
            <div class="text-lg">{section.header}</div>
          {/if}
          <ul class="list-disc ml-5">
            {#each section.bullets as bullet}
              <li>{bullet}</li>
            {/each}
          </ul>
        {/each}
      </div>

    {/if}
    {#if !expanded}
      <button class="text-end w-full  pt-3" type="button" on:click={() => { expanded = !expanded}}>
        <i class="fas fa-angles-down"/>
      </button>
    {/if}
  </div>

</div>
