<script lang="ts">
  import Spades from "$lib/assets/spades.svg";
  import Hearts from "$lib/assets/hearts.svg";
  import Diamonds from "$lib/assets/diamonds.svg";
  import Clubs from "$lib/assets/clubs.svg";

  export let name: string;
  export let digit: string;
  export let idx: number;

  const allIcons = [
    Spades,
    Hearts,
    Clubs,
    Diamonds,
  ];
  const allIconNames = [
    "Spades",
    "Hearts",
    "Clubs",
    "Diamonds"
  ];
  const icon = allIcons[idx % allIcons.length];
  const iconName = allIconNames[idx % allIconNames.length];
</script>



<div class="h-[160px] w-[120px] bg-white flex flex-col items-stretch rounded-xl border border-[#131717] shadow-lg m-2 p-1.5">
  <img class="h-4 w-4" src={icon} alt={iconName} />

  <div class="flex-1" />
  <span class="text-center">{name}</span>
  <div class="flex-1" />

  <img class="place-self-end h-4 w-4" src={icon} alt={iconName} />
</div>