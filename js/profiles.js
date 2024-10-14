
window.onload = () => {
    loadProfiles();
}

// goes through array of personalities in test.js and loads images
function loadProfiles(element) {
    const mbti = Object.keys(personalities);
    mbti.forEach(personality => {
        const profile_container = document.createElement("div");
        profile_container.setAttribute("class", "profile");

        const profile_img = document.createElement("img");
        profile_img.setAttribute("src", "img/profiles/" + personality + ".png");
        profile_img.setAttribute("alt", personalities[personality]);

        const profile_txt = document.createElement("p");
        profile_txt.innerText = personalities[personality];

        profile_container.appendChild(profile_img);
        profile_container.appendChild(profile_txt);

        const profiles = document.getElementById("profiles");
        profiles.appendChild(profile_container);
    });
}