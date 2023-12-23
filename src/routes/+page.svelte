<script lang="ts">
    import me from "$lib/Home.jpg";
    import cv from "$lib/cv.pdf";
</script>

<div class="flex flex-col-reverse md:flex-row md:items-end mb-10">
    <img src={me} alt="Dan B" class="image md:w-80 mr-6" />
    <h1>
        Hi!
        <br />
        I'm <span class="text-tan">Dan Buxton</span>
    </h1>
</div>

<p>
    I am a driven and creative individual with a passion for Physics, Computer
    Science, and Mathematics. I have a strong ability to learn and adapt
    quickly, as well as work independently or as part of a team. I am looking
    for a challenging position in the field of technology, both in software and
    hardware, where I can use my skills to make a significant and creative
    contribution.
</p>

<div class="flex md:mx-10 my-10 justify-evenly border-tan text-tan">
    <a
        href="https://www.linkedin.com/in/danbuxton/"
        target="_blank"
        class="button">LinkedIn</a
    >
    <a href="https://github.com/Mackachoo/" target="_blank" class="button"
        >Github</a
    >
    <a href={cv} target="_blank" class="button">CV PDF</a>
</div>

<h2>Experienced Technologies</h2>
<ul class="grid md:grid-cols-2 list-disc list-inside pl-2 mb-24">
    <li>Javascript (Svelte, React Native, Tailwind)</li>
    <li>Dart and Flutter</li>
    <li>C# and Unity</li>
    <li>KDB+ and qSQL</li>
    <li>Python (SciPy, Pandas, MatPlotLib)</li>
    <li>Linux, Networks and Cloud Computing</li>
    <li>Fusion 360 and (FDM/SLA) 3D Printing</li>
    <li>Adobe Suite (particularly Photoshop)</li>
    <li>Electronics (particularly drones and Pi 3)</li>
</ul>
