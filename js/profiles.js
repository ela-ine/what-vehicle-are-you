
window.onload = () => {
    loadProfiles();
}

function loadProfiles(element) {
    personalities.forEach(personality => {
        const profile_container = document.createElement("div");
        profile_container.setAttribute("class", "profile");

        const profile_img = document.createElement("img");
        profile_img.setAttribute("src", "img/profiles/" + personality + ".png");
        profile_img.setAttribute("alt", personality);
        
        const profile_txt = document.createElement("p");
        profile_txt.innerText = personality;

        profile_container.appendChild(profile_img);
        profile_container.appendChild(profile_txt);

        const profiles = document.getElementById("profiles");
        profiles.appendChild(profile_container);
    });
}