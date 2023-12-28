<script lang="ts">
    // Get list of subpages and their exported data
    import { projects } from "$lib/portfolio/projects";
    import Reel from "../../components/Reel.svelte";
</script>

<div class="w-full overflow-x-auto flex space-x-6 p-2">
    <!-- Side scrollable project gallery -->
    <!-- Foreach subpage data show icon/name for button (maybe with small description)-->
    {#each Object.entries(projects) as [key, data]}
        <Reel {key} {data} />
    {/each}
</div>
<div class="pt-5">
    <slot />
</div>
