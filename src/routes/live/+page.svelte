<script lang="ts">

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

    <div class="mt-10">
      <div class="text-3xl">Answers</div>
      <div class="text-xl">
        <div class="">
          <span>1. Open the </span>
          <a class=" text-blue-600" href="https://colab.research.google.com/drive/15p1lxrIXUWzI_DjbO7BAMfGG5VGJPboP?usp=sharing" target="_blank">Completed Notebook</a>
        </div>
        <div class="">2. Go to File. Save a Copy in Drive.</div>
      </div>
    </div>

    <div class="mt-20 text-center">
      <div class="text-3xl">The Blind Spot</div>
      <div class="text-xl">
        <span class="">Close your </span>
        <span class="font-bold">right</span>
        <span class="">eye and stare at the </span>
        <span class="font-bold">+</span>
      </div>
      <div class="text-xl">
        <div class="flex flex-row flex-nowrap mt-5 items-center">
          <div class="flex-1" />
          <div class="bg-white h-10 w-10 rounded-3xl "></div>
          <div class="ml-[200px] sm:ml-[500px] text-7xl">+</div>
          <div class="flex-1"/>
        </div>
      </div>
    </div>

    <div class="mt-[500px]">
      <div class="text-3xl">Local Setup</div>
      <div class="text-xl grid grid-cols-[min-content_1fr]">
        <span class="my-auto">1. </span>
        <div class="my-1">
          <span class="border border-gray-500 px-2 py-1">pip3 install jupyter</span>
        </div>

        <span class="my-auto">2. </span>
        <div class="my-1">
          <span class="border border-gray-500 px-2 py-1">pip3 install notebook</span>
        </div>

        <span class="my-auto">3. </span>
        <div class="my-1">
          <span class="border border-gray-500 px-2 py-1">python3 -m notebook</span>
        </div>
      </div>
    </div>

  </div>
</div>
