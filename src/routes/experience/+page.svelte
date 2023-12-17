<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    let allFilters: Array<String> = ["Tech", "Hospitality", "Volunteer"];
    let filteredBy: Array<String> = [];
</script>

<!-- Filter Bar -->
<div class="w-full pr-16 flex flex-row text-rust border-rust">
    <i class="text-2xl mx-4 fa-sharp fa-solid fa-chevron-right"></i>
    {#each allFilters as filter}
        <button class="border-2 mx-4 p-1 text-sm hover:italic">{filter}</button>
    {/each}
</div>

<!-- Experience List -->
<div class="pt-5 pb-20">
    {#each data.experiences as experience}
        {#if filteredBy.length === 0}
            <div class="border-paradiso border-b-[3px] border-l-[3px] p-2 mb-5">
                <div class="flex justify-between">
                    <img
                        src={experience.image}
                        alt="{experience.company} logo"
                        class="h-24 p-3"
                    />
                    <div class="">
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
                    <i class="fa-solid fa-chevron-down" />
                </div>
                {experience.description}
            </div>
        {/if}
    {/each}
</div>
