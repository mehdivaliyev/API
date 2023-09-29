const fetchData  = async () => {
    const response = await fetch(`${config.URL}${config.Weather_KEY}`)
    const data = await response.json()
    showData(data)
   
}

fetchData()


function showData(data) {
    document.getElementById("title").textContent = data.title
    document.getElementById("date").textContent = data.date
    document.getElementById("picture").src = data.hdurl
    document.getElementById("explanation").textContent = data.explanation
}