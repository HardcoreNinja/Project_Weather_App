import { getContent } from "../reusableCode/reusableGetters.js";

const createNav = () => {
    const nav = document.createElement("div");
    nav.setAttribute("id", "nav");
    return nav;
}

const createBirdsEye = () => {
    const birdsEye = document.createElement("div");
    birdsEye.setAttribute("id", "birdsEye");
    birdsEye.innerHTML = "birdsEye";
    return birdsEye;
}

const createGap = () => {
    const gap = document.createElement("div");
    gap.setAttribute("id", "gap");
    gap.innerHTML = "gap"
    return gap;
}

const createStats = () => {
    const stats = document.createElement("div");
    stats.setAttribute("id", "stats");
    stats.innerHTML = "stats"
    return stats;
}

const createWeek = () => {
    const week = document.createElement("div");
    week.setAttribute("id", "week");
    week.innerHTML = "week"
    return week;
}

function createGrid() {
    getContent().append(createNav(),
        createBirdsEye(),
        createGap(),
        createStats(),
        createWeek()
    );
}

createGrid();