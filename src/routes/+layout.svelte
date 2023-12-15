<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div class="relative flex flex-col max-w-screen-xl mx-auto w-full min-h-screen">
    <Header />
    <slot />
    <Footer />
</div>
