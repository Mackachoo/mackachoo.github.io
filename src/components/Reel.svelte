<script lang="ts">
    import { slide } from "svelte/transition";
    export let key: string;
    export let data: Record<string, any>;
    import { goto } from "$app/navigation";
</script>

<button
    on:click={() => {
        goto("/portfolio/" + key);
    }}
    class="border-moon border-4 aspect-square h-32"
>
    <div class="flex flex-col justify-center items-center">
        <img src={data.icon} alt={key} class="h-24 p-2 filter" />
        <p class="shrink">{key}</p>
    </div>
</button>
<!-- {#if open}
    <div class="" transition:slide>
        <slot name="details" />
    </div>
{/if} -->
