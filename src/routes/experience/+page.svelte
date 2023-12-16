<script>
    let experiences = [
        {
            company: "Eye of the Wind",
            companydesc: "Charter Tall Ship",
            position: "Trainee Deckhand",
            dates: "July 2023 - October 2023",
            description: "",
            filters: ["Hospitality", "Volunteer"],
        },
        {
            company: "Technology from Sage",
            companydesc: "",
            position: "Data Analyst Intern",
            dates: "May 2023 - June 2023",
            description:
                "Collated data from many sources and created dynamic tables and graphs. Used Python to automate data collection, clean up and scraping.",
            filters: ["Tech"],
        },
        {
            company: "",
            companydesc: "",
            position: "",
            dates: "",
            description: "",
            filters: [],
        },
        {
            company: "EUSDC",
            companydesc: "Edinburgh University Skydiving Club",
            position: "President/Treasurer",
            dates: "August 2019 - August 2022",
            description: "",
            filters: ["Volunteer"],
        },
        {
            company: "Reaction Engines",
            companydesc: "",
            position: "Engineering Intern",
            dates: "August 2016",
            description: "",
            filters: ["Tech"],
        },
        {
            company: "QazaqAir Almaty",
            companydesc: "Airline",
            position: "Engineering Intern",
            dates: "July 2016",
            description: "",
            filters: ["Tech"],
        },
        {
            company: "Wessex Water",
            companydesc: "",
            position: "Software Developer Intern",
            dates: "June 2015",
            description: "",
            filters: ["Tech"],
        },
    ];

    let filters = ["Tech", "Hospitality", "Volunteer"];
    let filteredBy = [];
</script>

<!-- Filter Bar -->
<div class="w-full pr-16 flex flex-row text-rust border-rust">
    <i class="text-2xl mx-4 fa-sharp fa-solid fa-chevron-right"></i>
    {#each filters as filter}
        <button class="border-2 mx-4 p-1 text-sm hover:italic">{filter}</button>
    {/each}
</div>

<!-- Experience List -->
<div class="pt-5 pb-20">
    {#each experiences as experience}
        {#if filteredBy.length === 0}
            <div class="border-paradiso border-b-[3px] border-l-[3px] p-2 mb-5">
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
                {experience.description}
            </div>
        {/if}
    {/each}
</div>
