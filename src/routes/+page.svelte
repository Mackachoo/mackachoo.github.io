<script lang="ts">
    import me from "$lib/Home.webp";
    import cv from "$lib/cv.pdf";
</script>

<div class="flex flex-col-reverse sm:flex-row sm:items-end mb-6">
    <img src={me} alt="Dan B" class="image sm:w-80 mr-6" />
    <div>
        <h1>
            Hi!
            <br />
            I'm <span class="text-tan">Dan Buxton</span>
        </h1>
        <h2 class="my-4 text-moon">
            A Software Engineer currently working at <b>Morgan Stanley</b> with
            a
            <b>Masters in Computational Physics</b> from the University of Edinburgh
        </h2>
    </div>
</div>

<p>
    I have successfully built apps and websites for a number of different
    projects with a wide range of technologies, such as React/React Native,
    Svelte and Flutter. These include a logbook app for extreme sports built
    with Flutter and using Firebase for user authentication, databases and file
    storage and this portfolio website built with Svelte and Typescript. I have
    used Python heavily for data analysis, physics simulations and as a Django
    backend for an AI powered Wikipedia search engine. To make a physics-based
    modular airship game I learnt Unity and C# and while at university I worked
    with Java, C and MIPS as well as AWS and Azure.
</p>

<div class="flex md:mx-10 my-8 justify-evenly border-tan text-tan">
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

<h2 class="border-tan border-b-4 mb-3">Skills</h2>
<ul class="grid sm:grid-cols-2 list-disc list-inside pl-2 mb-6">
    <li>Creativity</li>
    <li>Organisation</li>
    <li>Leadership</li>
    <li>Adaptability</li>
    <li>Practically-minded</li>
    <li>Fast learner</li>
</ul>

<!-- Add proficiency levels -->
<h2 class="border-tan border-b-4 mb-3">Technologies</h2>
<ul class="grid sm:grid-cols-2 list-disc list-inside pl-2">
    <li>Java/Typescript [Svelte, React Native, Tailwind]</li>
    <li>Dart and Flutter</li>
    <li>C# and Unity</li>
    <li>Java</li>
    <li>Python [SciPy, Pandas, MatPlotLib and Django]</li>
    <li>KDB+ and qSQL</li>
    <li>SQL and KDB+ with qSQL</li>
    <li>C, Java and MIPS [Architecture]</li>
    <li>Windows, Linux and MacOS [Hackintosh]</li>
    <li>Cloud Computing [Firebase, GCP and AWS]</li>
    <li>Fusion 360 and [FDM/SLA] 3D Printing</li>
    <li>Adobe Suite [Photoshop, Illustrator and XD]</li>
    <li>Electronics [Raspberry Pis and Drones]</li>
</ul>
