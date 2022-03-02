const allMobiles = () => {
    const searchField = document.getElementById('search-field').value
    document.getElementById('search-field').value = ''
    document.getElementById('mobile-container').textContent = ''
    document.getElementById('detail-container').textContent = ''
    // console.log(searchField)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`
    fetch(url)
        .then(res => res.json())
        .then(data => showMobileInUi(data.data.slice(0, 20)))
}

const showMobileInUi = (mobiles) => {
    if (mobiles == '') {
        document.getElementById('validation').style.display = 'block'
    }
    else {
        document.getElementById('validation').style.display = 'none'
        const mobileParent = document.getElementById('mobile-container')
        for (const mobile of mobiles) {
            // console.log(mobile)
            const div = document.createElement('div')
            div.innerHTML = `<div class="col shadow p-4">
        <div class="card h-100">
            <img src="${mobile.image}" class="w-50 m-auto" alt="...">
            <div class="card-body">
                <h4>Name: ${mobile.phone_name}</h4>
                <h4>Brand: ${mobile.brand}</h4>
                <button onClick="getDetails('${mobile.slug}')" class="btn btn-outline-secondary ">Explore</button>
            </div>
        </div>
    </div>`
            mobileParent.appendChild(div)
        }
        // document.getElementById('validation').style.display = 'none'
    }
    // console.log(mobiles)
}
const getDetails = (mobileId) => {
    // console.log(mobileId)
    const url = `https://openapi.programming-hero.com/api/phone/${mobileId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetailOnTop(data.data))
}
const showDetailOnTop = (details) => {
    // console.log(details)
    const topParent = document.getElementById('detail-container')
    topParent.textContent = ''
    const div = document.createElement('div')
    div.innerHTML = `<div class="card mb-3 shadow p-4">
    <img src="${details.image}" class="dImage" alt="...">
    <div class="card-body">
       <h4 class="fw-bold text-center"><span class="text-success">Name:</span> ${details.name}</h4>
       <h4 class="fw-bold text-center"><span class="text-success">Brand:</span> ${details.brand}</h4>
       <h5 class="fw-bold text-center"><span class="text-danger">Release Date:</span> ${details.releaseDate ? details.releaseDate : 'Release date is not available'}</h5>
       <h2>Main Features :</h2>
       <p class="fw-bold">Storage: ${details.mainFeatures.storage}</P>
       <P class="fw-bold">Display: ${details.mainFeatures.displaySize}</P>
       <P class="fw-bold">Chipset: ${details.mainFeatures.chipSet}</P>
       <P class="fw-bold">Chipset: ${details.mainFeatures.memory}</P>
       <P class="fw-bold">Sensors: ${details.mainFeatures.sensors}
       <h2>Others :</h2>
       <P class="fw-bold">USB: ${details.others.Bluetooth}</P>
       <P class="fw-bold">WALN: ${details.others.WLAN}</P>
       <P class="fw-bold">USB: ${details.others.USB}</P>
       <P class="fw-bold">GPS: ${details.others.GPS}</P>    
    </div>
</div>`
    topParent.appendChild(div)

}
