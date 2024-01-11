<script lang="ts">
    import graduation from "$lib/About.webp";
    import Accordion from "../../components/Accordion.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;

    let view: string = "Education";
</script>

<div class="flex flex-col">
    <!-- A Bit About Me -->
    <div class="mb-5">
        <img
            src={graduation}
            alt="Graduation"
            class="image w-full h-96 md:h-full object-cover md:w-1/3 md:float-right md:ml-10 md:mt-2 mb-5"
        />
        <h2>A Bit About Me</h2>
        <div class="md:w-2/3 md:pr-10">
            <div class="w-full h-1 bg-tan mb-5" />
        </div>
        <p>
            I hope you are doing well? I am currently looking for Software
            Development roles. I have a strong background in Computer Science
            and Physics. I have worked on many different kinds of projects and
            technologies. I've built websites using Svelte and React as well as
            apps using Flutter and React Native. I've also used Python heavily
            for data analysis, physics simulations and as a backend for other
            projects using Djangoo. I have used Java, C and MIPS during my
            studies and as well as C# with Unity.
        </p>
        <br />
        <p>
            Over the years I've been in all levels of project management and
            collaboration, which make me well-prepared for working with
            cross-functional teams and contributing to in dynamic environments.
            I hold a Master's degree in Computational Physics and I am genuinely
            passionate about technology and new ways of using it help people.
        </p>
    </div>

    <!-- Title and Buttons -->
    <div
        class="flex lg:flex-row flex-col justify-between lg:border-tan lg:border-b-4 mb-2 md:mb-5"
    >
        <h2 class="border-tan border-b-4 lg:border-b-0">
            Education and Qualifications
        </h2>
        <div class="flex justify-between space-x-6 scale-75 mt-3 md:mt-0">
            <button
                on:click={() => {
                    view = "Education";
                }}
                class={"button w-40 " +
                    String(
                        view === "Education"
                            ? "border-tan text-tan"
                            : "border-moon text-moon",
                    )}>Education</button
            >
            <button
                on:click={() => {
                    view = "Qualifications";
                }}
                class={"button w-40 " +
                    String(
                        view === "Qualifications"
                            ? "border-tan text-tan"
                            : "border-moon text-moon",
                    )}>Qualifications</button
            >
        </div>
    </div>

    <!-- Education and Qualifications List -->
    {#if view === "Education"}
        <div class="mb-24">
            {#each data.education as item}
                <div class="mb-4">
                    <Accordion>
                        <div
                            slot="head"
                            class="flex flex-col md:flex-row justify-between items-start md:items-center"
                        >
                            <h3 class="mr-5 text-rust text-left">
                                {item.institute}
                            </h3>
                            <p class="italic text-moon text-left md:text-right">
                                {item.course ? item.course + " with" : ""}
                                {item.grade}
                            </p>
                        </div>
                        <div slot="details" class="">
                            <p class="text-shuttle">
                                {item.dates}
                            </p>
                            {#each item.extras as extra}
                                <li class="text-moon pl-4">{extra}</li>
                            {/each}
                        </div>
                    </Accordion>
                </div>
            {/each}
        </div>
    {:else if view === "Qualifications"}
        <div class="mb-24">
            {#each data.qualifications as item}
                <div
                    class="flex flex-col md:flex-row md:items-center mb-4 justify-between"
                >
                    <div class="flex items-center">
                        <img
                            src={item.icon}
                            alt={item.institute}
                            class="w-16 mx-0 md:mx-4 p-1 scale-90 md:scale-100"
                        />
                        <h3 class="mr-5 text-rust">
                            {item.name}
                            {item.level ? "[" + item.level + "]" : ""}
                        </h3>
                    </div>
                    <p class="italic text-moon text-right">
                        {item.institute}
                    </p>
                </div>
            {/each}
        </div>
    {/if}
</div>
