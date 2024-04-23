
<script lang="ts">

  import SamSengSquare from "$lib/assets/SamSengSquare.jpg";

  const collabQuickStart = [
    ["Run Cell", "Shift + Enter"],
    ["New Cell", "Hover between cells and click \"+ Code\""],
    ["Save", "Ctrl + S"],
  ];
</script>


<div class="">
  <div class="container max-w-3xl xl:max-w-6xl mx-auto bg-[#1a1c20] rounded-xl px-5 pt-5 pb-20 text-white font-thin">
    <h2 class="text-5xl text-center">Deep Learning In Action</h2>

    <div class="mt-10">
      <div class="text-3xl">Getting Started</div>
      <div class="text-xl">
        <div class="">
          <span>1. Open the </span>
          <a class=" text-blue-600" href="https://colab.research.google.com/drive/1qq4VjQtKJ0y_Da5ZHtePe5cYMblpSS3X?usp=sharing" target="_blank">Starter Notebook</a>
        </div>
        <div class="">2. Go to File. Save a Copy in Drive. Now Get Started!</div>
      </div>
    </div>

    <div class="mt-10">
      <div class="text-3xl">Google Colab Quickstart</div>
      <div class="grid grid-cols-2">
        <div class="border border-gray-500 px-2 py-1 font-bold">Task</div>
        <div class="border border-gray-500 px-2 py-1 font-bold border-l-0 ">Command</div>

        {#each collabQuickStart as qs}
          <div class="border border-gray-500 px-2 py-1 border-t-0">{qs[0]}</div>
          <div class="border border-gray-500 px-2 py-1 border-t-0 border-l-0">{qs[1]}</div>
        {/each}

      </div>
    </div>





  </div>
</div>
