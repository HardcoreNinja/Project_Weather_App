const getContent = () => {
    return document.getElementById("content");
}

const  createBirdsEye = () => {
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
   getContent().append(createBirdsEye(), 
   createGap(), 
   createStats(), 
   createWeek()
   );
}

createGrid();