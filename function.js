function changeCSS() {
    const element = document.getElementById('custom-css');
    const filename = element.getAttribute("href");
    // localStorage.getItem("custom-css");
    var newfile = "";

    // if (cssLink.href.endsWith('style.css')) {
    //     cssLink.href = 'style2.css';
    //     newfile = "style2.css"
    //     element.setAttribute("href", newfile);
    //     localStorage.setItem("filename", newfile);
    // } else {
    //     cssLink.href = 'style.css';
    // }
    if (filename == "style.css") {
        newfile = "style2.css";
        element.setAttribute("href", newfile);
        localStorage.setItem("filename", newfile);
    }
    else {
        newfile = "style.css";
        element.setAttribute("href", newfile);
        localStorage.setItem("filename", newfile);
    }
}

window.onload = function() {
    const stylesheet = localStorage.getItem("filename") || "style.css";
    const element = document.getElementById("custom-css");
    element.setAttribute("href", stylesheet);
}