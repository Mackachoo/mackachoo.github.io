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
            class="overflow-y-scroll h-screen w-full flex flex-col items-center"
            transition:slide
        >
            <div class="w-full max-w-6xl p-5 sm:p-10 mb-24">
                <slot />
            </div>
        </div>
    {/key}
    <NavigationBar />

    <!-- Hidden Version Button -->
    <div
        class="fixed bottom-0 right-0 bg-button z-50 text-black px-2 opacity-0 hover:opacity-100"
    >
        4.1.4
    </div>
</div>
