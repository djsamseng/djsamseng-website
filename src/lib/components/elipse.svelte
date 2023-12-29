<script lang="ts">
  export let left: string;
  export let top: string;
  export let scale: number;

  const width = 210 / scale;
  const height = 110 / scale;
  const viewBox = `0 -50 ${width} ${height}`;
  const yAdjust = (1 - scale) * 100;
  const cy = 50 + yAdjust;
</script>

<svg viewBox={viewBox} class="absolute opacity-50" style={`left: ${left}; top: ${top};`}>
  <ellipse cx="100" cy={cy} rx="100" ry="50" style={`fill: none; stroke: #fff; stroke-width: 1; transform: rotate3d(1, 1, 1, -45deg);`}/>
</svg>