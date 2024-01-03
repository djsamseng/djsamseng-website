

<script>
  import "../app.css";
  import '@fortawesome/fontawesome-free/css/all.css';
  import RecordPlayer from "$lib/assets/record_player.svg"
</script>

<div class="bg-[#eed4ab] min-h-[100vh] ">
  <header class="flex items-center justify-between px-4 md:px-8 h-24">
    <a href="/" class="flex items-center space-x-2"><img src={RecordPlayer} alt="Record Player" class="h-16 "/><span class="text-nowrap text-3xl font-normal text-[#131717] drop-shadow-lg">DJ Sam Seng</span></a>
    <nav>
    </nav>
  </header>
  <slot />
</div>
