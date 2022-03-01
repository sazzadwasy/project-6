const allMobiles = () => {
    const searchField = document.getElementById('search-field').value

    // console.log(searchField)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`
    fetch(url)
        .then(res => res.json())
        .then(data => showMobileInUi(data.data.slice(0, 20)))
}
const showMobileInUi = (mobiles) => {
    if (mobiles == '') {
        console.log('no result found')
    }
    else {
        const mobileParent = document.getElementById('mobile-container')
        mobileParent.textContent = '';
        for (const mobile of mobiles) {
            // console.log(mobile)
            const div = document.createElement('div')
            div.innerHTML = `<div class="col shadow">
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
    console.log(details)
    const topParent = document.getElementById('detail-container')
    topParent.textContent = ''
    let [Faceid, accelerometer, gyro, proximity, compass, barometer] = details.mainFeatures.sensors
    // console.log(Faceid, accelerometer, gyro, proximity, compass, barometer)

    const div = document.createElement('div')
    div.innerHTML = `<div class="card mb-3 shadow">
    <img src="${details.image}" class="card-img-top w-25 m-auto" alt="...">
    <div class="card-body">
       <P class="fw-bold">Brand:${details.name}</P>
       <P class="fw-bold">Brand:${details.brand}</P>
       <P class="fw-bold">Storage: ${details.mainFeatures.storage}</P>
       <P class="fw-bold">Display: ${details.mainFeatures.displaySize}</P>
       <P class="fw-bold">Chipset: ${details.mainFeatures.chipSet}</P>
       <P class="fw-bold">Usb: ${details.others.USB}</P>
       <P class="fw-bold">Sensors: ${Faceid},${accelerometer},${gyro},${proximity},${compass},${barometer}</P>
       <P class="fw-bold">Release Date: ${details.releaseDate}</P>
      
    </div>
</div>`
    topParent.appendChild(div)

}
