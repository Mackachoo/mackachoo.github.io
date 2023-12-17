<script lang="ts">
    import "../app.css";
    import NavigationBar from "../components/Navigation.svelte";
    import ContactButton from "../components/Contact.svelte";
</script>

<div class="relative flex flex-col mx-auto w-full">
    <div class="flex flex-rowz">
        <div class="max-w-4xl p-10">
            <slot />
        </div>
        <ContactButton />
    </div>
    <NavigationBar />
</div>
