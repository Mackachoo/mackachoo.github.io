<script lang="ts">
    import { fly, slide } from "svelte/transition";
    export let open: boolean;
    export let side: boolean;
    let outerWidth: number;
</script>

<svelte:window bind:outerWidth />

{#if outerWidth >= 1024 && open}
    <div
        transition:fly={side ? { x: "300%" } : { x: "-300%" }}
        class="p-2 sm:p-0 md:w-2/3 lg:w-1/3 mb-5"
    >
        <slot />
    </div>
{:else if outerWidth < 1024 && open}
    <div transition:slide class="p-2 sm:p-0 md:w-2/3 lg:w-1/3 mb-5">
        <div transition:fly={{ y: "-30%" }}>
            <slot />
        </div>
    </div>
{/if}
