<script>
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    let routes = [
        { name: "About Me", path: "/aboutme" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Experience", path: "/experience" },
    ];
</script>

<div class="w-full fixed bottom-0 z-20">
    <!-- Sky Effect-->
    <div class="sky-discrete opacity-10"></div>
    <div class="sky-discrete opacity-25"></div>
    <div class="sky-discrete opacity-50"></div>
    <div class="sky-discrete opacity-1"></div>

    <!-- Planet Navigation Bar -->
    <div class="bg-rust h-16 flex flex-row justify-evenly items-center">
        {#each routes as route}
            {#if $page.url.pathname != route.path}
                <a href={base + route.path} class="navbutton"> {route.name} </a>
            {:else}
                <a href="{base}/" class="navbutton">
                    <i class="fa-solid fa-chevron-down" />
                </a>
            {/if}
        {/each}
    </div>
</div>
