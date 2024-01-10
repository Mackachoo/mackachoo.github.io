<script lang="ts">
    import Moon from "../../components/Moon.svelte";
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
        class={"flex flex-col " +
            String(Math.random() > 0.5 ? "items-start" : "items-end")}
    >
        <div class={"w-1/3 text-black text-center " + randomMargin()}>
            <Moon primary={project.colour}>
                <button
                    on:click={() => {
                        project.open = !project.open;
                        projects = projects;
                    }}
                >
                    {#if !project.open}
                        <h1>{project.title}</h1>
                        <p>{project.snippet}</p>
                    {/if}
                    <img
                        class={project.open ? "opacity-60" : "opacity-30"}
                        src={project.logo}
                        alt={project.title}
                    />
                </button>
            </Moon>
        </div>
    </div>
{/each}
