<script lang="ts">
    export let data;
    import "../app.css";
    import { slide, fade } from "svelte/transition";

    import NavigationBar from "../components/Navigation.svelte";
    import ContactButton from "../components/Contact.svelte";
</script>

<div class="flex flex-col items-center">
    <ContactButton />
    {#key data.pathname}
        <div
            class="w-full max-w-6xl md:p-10 scale-90 md:scale-100"
            transition:slide
        >
            <slot />
        </div>
    {/key}
    <NavigationBar />
</div>
