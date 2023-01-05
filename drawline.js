function drawLine(svg, x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.classList.add("path");
    console.log(line)

    svg.append(line);

    const length = line.getTotalLength();
    line.style.setProperty("--path-length", length);
    line.setAttribute("stroke", "black");
    console.log(length);
}

const svg = document.querySelector("svg");
drawLine(svg, 0, 80, 100, 20);
drawLine(svg, 80, 00, 20, 100);
