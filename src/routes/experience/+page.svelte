<script lang="ts">
    import type { PageData } from "./$types";
    import Accordion from "../../components/Accordion.svelte";
    import { slide, fade } from "svelte/transition";
    export let data: PageData;

    function updateFilters(filter: string) {
        if (filteredBy.includes(filter)) {
            filteredBy = filteredBy.filter((ele) => {
                return ele != filter;
            });
        } else {
            for (let id in allFilters) {
                if (allFilters[id].includes(filter)) {
                    filteredBy.push(filter);
                    filteredBy = filteredBy.filter(
                        (x) => !allFilters[id].includes(x) || x === filter,
                    );
                }
            }
        }
    }

    let allFilters: Record<string, string[]> = {
        industry: ["Hospitality", "Tech"],
        type: ["Full-Time", "Volunteer", "Internship"],
    };
    let filteredBy: string[] = [];
    let opens: boolean[] = [];
</script>

<!-- Filter Bar -->

<div class=" flex flex-row text-tan">
    <i class="text-2xl mx-4 mt-2 fa-sharp fa-solid fa-chevron-right"></i>
    <div class="flex flex-wrap">
        {#each allFilters.industry.concat(allFilters.type) as filter}
            <button
                type="button"
                class={"button mx-1 sm:mx-2 md:mx-4 md:p-2 my-1 p-1 text-sm hover:italic font-bold " +
                    String(
                        filteredBy.includes(filter)
                            ? "text-tan italic"
                            : "text-moon",
                    )}
                on:click={() => {
                    updateFilters(filter);
                }}>{filter}</button
            >
        {/each}
    </div>
</div>

<!-- Experience List -->
<div class="mt-5 mb-20 border-tan border-t-4 p-4">
    {#each data.experiences as experience, i}
        {#if filteredBy.length === 0 || filteredBy.filter( (x) => experience.filters.includes(x), ).length === filteredBy.length}
            <div
                class={"mb-4 pl-1 border-l-2 " +
                    String(opens[i] ? "border-tan" : "border-moon")}
                transition:slide
            >
                <Accordion bind:open={opens[i]}>
                    <div slot="head" class="flex">
                        <img
                            src={experience.image}
                            alt="{experience.company} logo"
                            class="h-16 p-3"
                        />
                        <div class="text-left">
                            <h2 class="text-rust">
                                {experience.position}
                            </h2>
                            <p
                                class={"italic pb-2 pl-2 " +
                                    String(
                                        opens[i]
                                            ? "text-shuttle"
                                            : "text-mooon",
                                    )}
                            >
                                {experience.dates} with {experience.company}
                                {experience.companydesc
                                    ? "[" + experience.companydesc + "]"
                                    : ""}
                            </p>
                        </div>
                    </div>
                    <div slot="details">
                        <p class="pl-5 text-moon">
                            {experience.description}
                        </p>
                        <p class="pt-2 pl-10 text-shuttle italic">
                            [ {#each experience.filters as tag, i}{tag}{#if i != experience.filters.length - 1}{", "}{/if}{/each}
                            ]
                        </p>
                    </div>
                </Accordion>
            </div>
        {/if}
    {/each}
</div>
