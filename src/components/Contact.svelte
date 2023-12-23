<script script="ts">
    // @ts-nocheck

    let dialog;
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
            on:click={() => {
                dialog.showModal();
            }}
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

<dialog bind:this={dialog}>
    <div
        class="border-4 border-paradiso bg-mirage text-white flex flex-col justify-between items-center p-5"
    >
        <div class="flex">
            <a
                class="button text-rust border-rust m-3"
                href="mailto:dan@dtbmail.com">Dan@dtbmail.com</a
            >
            <a class="button text-rust border-rust m-3" href="tel:+447738612600"
                >+44 778612600</a
            >
        </div>

        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSePEvpWma6fBbSMWnx7fMzyoIzy4e3hg4TUJZ9UF8xIORpG1A/viewform?embedded=true"
            width="640"
            height="540"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
        >
            Loading…
        </iframe>

        <button
            class="button w-32 mt-5"
            on:click={() => {
                dialog.close();
            }}>Close</button
        >
    </div>
</dialog>
