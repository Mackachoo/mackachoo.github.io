<script lang="ts">
    import "../app.css";
    import NavigationBar from "../components/Navigation.svelte";
    import ContactButton from "../components/Contact.svelte";
</script>

<div class="relative flex flex-col items-center mx-auto w-full">
    <div class="flex max-w-6xl">
        <div class="p-10">
            <slot />
        </div>
        <ContactButton />
    </div>
    <NavigationBar />
</div>
