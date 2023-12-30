<script lang="ts">
    export let primary = "#646c7e";
    export let secondary = "#b5bfd7";
    let craters: Record<string, string> = {
        "w-32 h-32": "translate(100 100)",
        "w-20 h-20": "translate(400 260)",
        "w-24 h-24": "translate(250 400)",
        "w-36 h-36": "translate(200 180)",
        "w-12 h-12": "translate(80 420)",
        "w-10 h-10": "translate(360 120)",
        "w-16 h-16": "translate(260 150)",
    };

    let keys = Object.keys(craters);
    let chosen: string[] = [];
    for (let i = 0; i < 3; i++) {
        chosen.push(keys[Math.floor(Math.random() * keys.length)]);
    }
</script>

<div class="">
    <div class="absolute">
        <slot />
    </div>
    <div class="">
        <svg viewBox="0 0 600 600">
            <rect width="600" height="600" fill={secondary} stroke-width="0" />
            <rect
                width="480"
                height="480"
                transform="translate(60 60)"
                opacity="0.5"
                fill={primary}
            />
            <rect
                class={chosen[0]}
                transform={craters[chosen[0]]}
                fill={primary}
            />
            <rect
                class={chosen[1]}
                transform={craters[chosen[1]]}
                fill={primary}
            />
            <rect
                class={chosen[2]}
                transform={craters[chosen[2]]}
                fill={primary}
            />
        </svg>
    </div>
</div>
