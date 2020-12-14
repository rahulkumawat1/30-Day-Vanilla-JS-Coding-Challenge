const endpoint = "https://raw.githubusercontent.com/rahulkumawat1/30-Day-Vanilla-JS-Coding-Challenge/master/06%20-%20Type%20Ahead/in.json";

const cities = [];

fetch(endpoint)
    .then(responce => responce.json())
    .then(data => cities.push(...data));


function findMatches(wordToSearch){
    return cities.filter(place => {

        const regex = new RegExp(wordToSearch, 'gi');
        return place.city.match(regex) || place.admin_name.match(regex);
    });
}

function displayMatches(){
    const matchArr = findMatches(this.value);

    const html = 
        matchArr.map(place => {
            const regex = new RegExp(this.value,'gi');

            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.admin_name.replace(regex, `<span class="hl">${this.value}</span>`);

            return `
                <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${place.population}</span>
                </li>
            `;
        }).join('');
        suggestions.innerHTML = html;
        clickEventOnli();
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change",displayMatches);
searchInput.addEventListener("keyup",displayMatches);

function clickEventOnli(){
    document.querySelectorAll("li").forEach(link => link.addEventListener("click",function(){
    searchInput.value = this.querySelector(".name").innerText;
    }));
}