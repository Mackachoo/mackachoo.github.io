<script lang="ts">
    export let primary: string = "#646c7e";
    export let secondary: string | undefined = undefined;

    function craterCheck(l: number, x: number, y: number) {
        for (let crater of craters) {
            if (
                x - 20 < crater.x + crater.l &&
                x + l + 20 > crater.x &&
                y - 20 < crater.y + crater.l &&
                y + l + 20 > crater.y
            ) {
                return false;
            }
        }
        return true;
    }

    function makeCrater() {
        while (true) {
            let l = Math.floor(20 + Math.random() * 200);
            let x = Math.floor(100 + Math.random() * (400 - l));
            let y = Math.floor(100 + Math.random() * (400 - l));
            if (craterCheck(l, x, y)) {
                return { x: x, y: y, l: l };
            }
        }
    }

    let craters: Record<string, number>[] = [];
    for (let i = 0; i < Math.floor(2 + Math.random() * 4); i++) {
        craters.push(makeCrater());
    }
</script>

<div class="relative">
    <div class="absolute p-10 w-full">
        <slot />
    </div>
    <div class="">
        <svg viewBox="0 0 600 600">
            {#if secondary}
                <rect width="600" height="600" fill={secondary} />
            {:else}
                <rect width="600" height="600" fill={"#FFFFFF"} />
                <rect width="600" height="600" fill={primary} opacity="0.5" />
            {/if}
            <rect
                width="480"
                height="480"
                x="60"
                y="60"
                opacity="0.5"
                fill={primary}
            />
            {#each craters as crater}
                <rect
                    width={crater.l}
                    height={crater.l}
                    x={crater.x}
                    y={crater.y}
                    fill={primary}
                />
            {/each}
        </svg>
    </div>
</div>
