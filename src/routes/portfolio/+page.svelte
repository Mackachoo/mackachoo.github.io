<script lang="ts">
    import Moon from "../../components/Moon.svelte";
    import { blur, fly, slide } from "svelte/transition";
    import type { PageData } from "./$types";
    export let data: PageData;

    let projects = data.projects;
    function randomMargin(): string {
        return ["m-8", "m-12", "m-14", "m-16", "m-20", "m-24"][
            Math.floor(Math.random() * 6)
        ];
    }
</script>

{#each projects as project}
    <div
        class={"flex justify-start " +
            String(Math.random() > 0.5 ? "flex-row" : "flex-row-reverse")}
    >
        <div class={"w-96 text-black " + randomMargin()}>
            <Moon primary={project.colour}>
                <button
                    class="w-full aspect-square flex flex-col align-middle"
                    on:click={() => {
                        project.open = !project.open;
                        projects = projects;
                    }}
                >
                    {#if !project.open}
                        <div in:blur>
                            <h1>{project.title}</h1>
                            <p>{project.snippet}</p>
                        </div>
                        <div in:blur class="flex w-full justify-center my-5">
                            <img
                                class="opacity-50 h-24"
                                src={project.logo}
                                alt={project.title}
                            />
                        </div>
                    {:else}
                        <img
                            in:blur
                            class="opacity-70"
                            src={project.logo}
                            alt={project.title}
                        />
                    {/if}
                </button>
            </Moon>
        </div>
        {#if project.open}
            <div transition:slide={{ axis: "x" }} class="py-20 h-96 w-2/3">
                <h1 class="text-start">{project.title}</h1>
                <p>{project.desc}</p>
            </div>
        {/if}
    </div>
{/each}
