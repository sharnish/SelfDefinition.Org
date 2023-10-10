

function addDarkCss() {
    console.log("in function addDarkCss");

    var head = document.head;
    var link = document.createElement("link");

    link.id = "darkCss";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "_dark-styles.css";

    head.appendChild(link);
}
