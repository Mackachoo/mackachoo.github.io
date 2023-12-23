<script>
    export let open = false;
    import { slide } from "svelte/transition";
    const flipState = () => (open = !open);
</script>

<button on:click={flipState} class="w-full">
    <div class="flex justify-between items-center">
        <div class="w-full">
            <slot name="head" />
        </div>
        {#if open}
            <i class="fa-solid fa-chevron-up scale-150 mx-4" />
        {:else}
            <i class="fa-solid fa-chevron-down scale-150 mx-4" />
        {/if}
    </div>
</button>
{#if open}
    <div class="" transition:slide>
        <slot name="details" />
    </div>
{/if}
