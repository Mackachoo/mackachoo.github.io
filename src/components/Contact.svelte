<script>
    /**
     * @type {number}
     */
    let y;
</script>

<div
    class="bg-moon fixed right-0 grid items-center justify-center
    m-8 h-10 w-10 z-10 animate-pulse hover:animate-none"
>
    <div class="group relative">
        <button
            data-tooltip-target="tooltip-dark"
            data-tooltip-placement="bottom"
            type="button"
            class=""
        >
            <i class="fa-solid fa-sharp fa-terminal text-shuttle m-2" />
        </button>
        <span
            class="group-hover:opacity-100 transition-opacity
    bg-shuttle p-2 text-sm text-mooon absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 m-3 mx-auto">Contact</span
        >
    </div>
</div>

<svelte:window bind:scrollY={y} />
