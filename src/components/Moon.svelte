<script lang="ts">
    export let primary = "#646c7e";
    export let secondary = "#b5bfd7";
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
                width="120"
                height="120"
                transform="translate(100 100)"
                fill={primary}
            />
            <rect
                width="80"
                height="80"
                transform="translate(400 260)"
                fill={primary}
            />
            <rect
                width="100"
                height="100"
                transform="translate(250 400)"
                fill={primary}
            />
        </svg>
    </div>
</div>
