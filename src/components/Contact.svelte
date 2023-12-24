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

<dialog bind:this={dialog} class="md:w-[80vh]">
    <div
        class="border-4 border-paradiso bg-mirage text-white flex flex-col justify-between items-center p-5"
    >
        <div class="flex scale-90 sm:scale-100">
            <a
                class="button text-rust border-rust sm:m-3"
                href="mailto:dan@dtbmail.com">Dan@dtbmail.com</a
            >
            <a
                class="button text-rust border-rust sm:m-3"
                href="tel:+447738612600">+44 778612600</a
            >
        </div>

        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSePEvpWma6fBbSMWnx7fMzyoIzy4e3hg4TUJZ9UF8xIORpG1A/viewform?embedded=true"
            width="640"
            height="540"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
        >
            Loading…
        </iframe> -->

        <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            class="flex flex-col w-full space-y-4 items-start"
            id="staticform"
        >
            <!-- Replace with accesKey sent to your email -->
            <input
                type="hidden"
                name="accessKey"
                value="ed2f2979-cd07-454c-9050-fd5a8a2f0d94"
            />
            <!-- Required -->
            <div class=" w-full">
                <label>Name</label>
                <div class="control">
                    <input
                        class="input form w-full text-sm md:text-base p-1"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                    />
                </div>
            </div>
            <div class="w-full">
                <label>Contact</label>
                <div class="control">
                    <input
                        class="input form w-full text-sm md:text-base p-1"
                        type="text"
                        name="$contact"
                        placeholder="Enter Your Email or Phone Number"
                        required
                    />
                </div>
            </div>
            <div class="w-full">
                <label>Message</label>
                <div class="control">
                    <textarea
                        class="textarea form w-full text-sm md:text-base p-1"
                        name="message"
                        placeholder="Enter Your Message"
                        required
                    ></textarea>
                </div>

                <!-- Specify @ as reply to value if you want it to be customers email -->
                <input type="hidden" name="replyTo" value="@" />
                <input type="text" name="honeypot" style="display: none;" />

                <!-- Submit -->
                <input
                    type="hidden"
                    name="redirectTo"
                    value="https://mackachoo.github.io/"
                />
                <div class="flex w-full justify-end">
                    <input
                        type="submit"
                        value="Submit"
                        class=" border-tan text-tan my-5 text-sm py-2 px-3 mx-5 border-2 hover:italic"
                    />
                </div>
            </div>
        </form>

        <button
            class="button w-32 mt-5"
            on:click={() => {
                dialog.close();
            }}>Close</button
        >
    </div>
</dialog>
