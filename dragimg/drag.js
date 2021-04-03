let displayBox = document.getElementById("display-img");

const getURL = () => {
    let url = document.getElementById("url-link").value;
    displayURL(url);
}

const displayURL = (url) => {
    let img = document.createElement("img");
    img.setAttribute('id', 'preview-img');
    img.src = url;
    displayBox.removeChild(displayBox.children[0]);
    displayBox.appendChild(img);
}

displayBox.addEventListener("ondrop", e => {
    e.preventDefault();
    console.log("item drop");
});

displayBox.addEventListener("dragover", e => {
    e.preventDefault();
});

displayBox.addEventListener("drop", e => {
    e.preventDefault();
    let files = e.dataTransfer.files;
    [...files].forEach(displayFile);
});

const displayFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        displayURL(reader.result);
    }
}