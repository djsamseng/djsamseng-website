<script lang="ts">
  import Spades from "$lib/assets/spades.svg";

  export let name: string;
  export let digit: string;
</script>



<div class="h-[160px] w-[120px] bg-white flex flex-col items-center rounded-xl border border-[#131717] shadow-lg m-2">
  <span class="place-self-start ml-1">{digit}</span>
  <img class="place-self-start ml-1 h-4 w-4 -mt-1" src={Spades} alt="Spades" />
  <div class="flex-1" />
  <span class="">{name}</span>
  <div class="flex-1" />
  <img class="place-self-end mr-1 h-4 w-4" src={Spades} alt="Spades" />
  <span class="place-self-end mr-1">{digit}</span>
</div>