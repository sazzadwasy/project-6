const allMobiles = () => {
    const searchField = document.getElementById('search-field').value
    // console.log(searchField)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`
    fetch(url)
        .then(res => res.json())
        .then(data => showMobileInUi(data.data))
}
const showMobileInUi = (mobiles) => {
    // console.log(mobiles)
    const mobileParent = document.getElementById('mobile-container')
    mobileParent.textContent = '';
    for (const mobile of mobiles) {
        console.log(mobile)
        const div = document.createElement('div')
        div.innerHTML = `<div class="col">
        <div class="card h-100">
            <img src="${mobile.image}" class="w-50 m-auto" alt="...">
            <div class="card-body">
                <h4>Name: ${mobile.phone_name}</h4>
                <h4>Brand: ${mobile.brand}</h4>
                <button id="explore-btn" class="btn btn-outline-secondary ">Explore</button>
            </div>
        </div>
    </div>`
        mobileParent.appendChild(div)
    }

}
