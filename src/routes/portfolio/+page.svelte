<script lang="ts">
    import Moon from "../../components/Moon.svelte";
    import { blur, fly, slide } from "svelte/transition";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import shortcut from "$lib/shortcut.svg";
    export let data: PageData;

    let moonRef: HTMLDivElement[] = [];
    $: outerWidth = 0;

    const animate = (node: any, args: any) =>
        outerWidth > 1024 ? fly(node, args) : slide(node, args);

    let projects = data.projects;
    function randomMargin(random: number): string {
        return [
            "p-2 mr-3 lg:p-8",
            "p-4 mr-5 lg:p-12",
            "p-6 ml-1 lg:p-14",
            "p-8 mr-2 lg:p-16",
            "p-10 ml-4 lg:p-20",
        ][Math.floor(random * 100) % 5];
    }

    onMount(() => {
        projects.forEach((project, index) => {
            let speed = 5 + Math.floor(20 * Math.random()); // generate a random number
            moonRef[index].style.setProperty("--speed", `${speed}s`); // set the --speed property
        });
    });

    function luminosity(hex: string): number {
        const rgb = hex
            .replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                (m, r, g, b) => "#" + r + r + g + g + b + b,
            )
            .substring(1)
            .match(/.{2}/g)
            ?.map((x) => parseInt(x, 16));
        if (!rgb) return 0;
        return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    }
</script>

<svelte:window bind:innerWidth={outerWidth} />
<div class="mb-10">
    {#each projects as project, index}
        {@const side = Math.floor(luminosity(project.colour) * 100) % 2 === 0}
        <div
            bind:this={moonRef[index]}
            class={"flex justify-start items-center flex-col orbit " +
                String(side ? "lg:flex-row" : "lg:flex-row-reverse")}
        >
            <!-- Moon component -->
            <div
                class={"w-full group md:w-[65%] z-10 p-10  " +
                    String(
                        luminosity(project.colour) > 0.5
                            ? "text-black "
                            : "text-white ",
                    ) +
                    randomMargin(luminosity(project.colour))}
            >
                <Moon primary={project.colour}>
                    <button
                        class="w-full aspect-square flex flex-col justify-evenly align-middle p-2"
                        on:click={() => {
                            project.open = !project.open;
                            projects = projects;
                        }}
                    >
                        {#if !project.open}
                            <div
                                class="w-full sm:w-fit sm:mx-4 space-y-5"
                                in:blur
                            >
                                <h1
                                    class={project.title.length > 30
                                        ? "text-lg sm:text-2xl"
                                        : "text-xl sm:text-2xl"}
                                >
                                    {project.title}
                                </h1>
                                <p class="hidden sm:block">{project.snippet}</p>
                            </div>
                            <div in:blur class="flex w-full justify-center">
                                <img
                                    class={"opacity-50 w-24 sm:w-36 " +
                                        String(
                                            project.title.length > 20
                                                ? "hidden sm:block"
                                                : "",
                                        )}
                                    src={project.logo}
                                    alt={project.title}
                                />
                            </div>
                        {:else}
                            <img
                                in:blur
                                class="opacity-90 p-4"
                                src={project.logo}
                                alt={project.title}
                            />
                        {/if}
                    </button>

                    <!-- Hover Tooltip -->
                    <span
                        class={"group-hover:opacity-80 transition-opacity fixed bottom-1 left-3 opacity-0 z-10" +
                            String(
                                luminosity(project.colour) > 0.5
                                    ? "text-black "
                                    : "text-white ",
                            )}
                        ><i class="fa-solid fa-computer-mouse" /> Click to see more</span
                    >
                </Moon>
            </div>

            <!-- Text component -->
            {#if project.open}
                <div transition:slide>
                    <div
                        transition:fly={outerWidth < 1024
                            ? { y: "-10%" }
                            : side
                              ? { x: "300%" }
                              : { x: "-300%" }}
                        class="p-2 sm:p-0 md:w-2/3 lg:w-1/3 mb-5"
                    >
                        <h1
                            class={(side ? "" : "lg:text-right") +
                                " text-tan font-bold mb-4"}
                        >
                            {project.title}
                        </h1>
                        <p
                            class={(side ? "lg:text-left" : "lg:text-right") +
                                " text-justify"}
                        >
                            {project.desc}
                        </p>
                        {#if project.link}
                            <div
                                class={"flex mt-3 justify-end " +
                                    String(side ? "lg:justify-start" : "")}
                            >
                                <a
                                    class="text-tan"
                                    href={project.link}
                                    target="_blank"
                                >
                                    <img
                                        class="w-10"
                                        src={shortcut}
                                        alt="Shortcut"
                                    />
                                </a>
                            </div>
                        {/if}
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</div>
