import { Application } from '@splinetool/runtime';
const ServicesCanvas = document.getElementById('canvas3d');
const SerivesApp = new Application(ServicesCanvas);

SerivesApp.load('https://prod.spline.design/5Hsom26RGnNHJeLS/scene.splinecode')
    .then(() => {
        const VISUAL_EFFECTS = SerivesApp.findObjectByName("VISUAL_EFFECTS");
        const Animation_3D = SerivesApp.findObjectByName("3D_Animation");
        const Filming = SerivesApp.findObjectByName("Filming");
        const Content_Creation = SerivesApp.findObjectByName("Content_Creation");
        const CGI = SerivesApp.findObjectByName("CGI");

        VISUAL_EFFECTS.style.display = "none"; // This will hide the object and collapse the space it occupies


});