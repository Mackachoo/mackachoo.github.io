<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    function updateFilters(filter: string) {
        if (filteredBy.includes(filter)) {
            filteredBy = filteredBy.filter((ele) => {
                return ele != filter;
            });
        } else {
            filteredBy.push(filter);
            filteredBy = filteredBy;
        }
    }

    let allFilters: Array<string> = ["Hospitality", "Tech", "Volunteer"];
    let filteredBy: Array<string> = [];
</script>

<!-- Filter Bar -->
<div class="w-full flex flex-row text-rust">
    <i class="text-2xl mx-4 mt-2 fa-sharp fa-solid fa-chevron-right"></i>
    <div class="flex flex-wrap">
        {#each allFilters as filter}
            <button
                type="button"
                class={"button mx-2 sm:mx-4 sm:p-2 my-1 p-1 text-sm hover:italic font-bold " +
                    String(
                        filteredBy.includes(filter)
                            ? "text-tan italic"
                            : "text-rust",
                    )}
                on:click={() => {
                    updateFilters(filter);
                }}>{filter}</button
            >
        {/each}
    </div>
</div>

<!-- Experience List -->
<div class="pt-5 pb-20">
    {#each data.experiences as experience}
        {#if filteredBy.length === 0 || filteredBy.filter( (value) => experience.filters.includes(value), ).length > 0}
            <div
                class="border-paradiso border-b-[3px] border-l-[3px] p-2 mb-5 md:mb-10"
            >
                <div class="flex justify-between">
                    <div class="flex">
                        <img
                            src={experience.image}
                            alt="{experience.company} logo"
                            class="h-16 p-3"
                        />
                        <div>
                            <h2 class="text-paradiso">
                                {experience.company}
                                {experience.companydesc != ""
                                    ? "[" + experience.companydesc + "]"
                                    : ""}
                            </h2>
                            <p class="italic p-2">
                                {experience.position}
                                <i class="fa-sharp fa-solid fa-angle-right" />
                                {experience.dates}
                            </p>
                        </div>
                    </div>
                    <button class="scale-150 m-5">
                        <i class="fa-solid fa-chevron-down" />
                    </button>
                </div>
                {experience.description}
            </div>
        {/if}
    {/each}
</div>
