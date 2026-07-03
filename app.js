// داده‌های اولیه (۵ شهر نمونه)
const weatherData = {
    تهران: { temp: 28, condition: "آفتابی", icon: "bi-sun-fill text-warning", humidity: 25 },
    اصفهان: { temp: 24, condition: "ابری", icon: "bi-cloud-fill text-primary", humidity: 40 },
    مشهد: { temp: 18, condition: "بارانی", icon: "bi-cloud-rain-fill text-info", humidity: 70 },
    شیراز: { temp: 22, condition: "نیمه‌ابری", icon: "bi-cloud-sun-fill text-info", humidity: 35 },
    رشت: { temp: 16, condition: "مه‌آلود", icon: "bi-cloud-fog-fill text-muted", humidity: 85 }
};

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');

searchBtn.addEventListener('click',()=>{
    const city = cityInput.value.trim()

    if(weatherData[city]){
        const data = weatherData[city]
        result.innerHTML = `
            <div class='card mt-3 border-0 shadow-lg rounded-4'>
                <div class='card-body'>
                    <h4 class='card-title text-primary mb-3'> ${city} </h4>
                    <i class='bi ${data.icon} display-3'></i>
                    <p class='mt-3 mb-1'> <strong> وضعیت :  </strong> ${data.condition} </p>
                    <p class='mb-1'> <strong> دما :  </strong> ${data.temp} °C </p>
                    <p> <strong> رطوبت :  </strong> ${data.humidity} % </p>
                </div>
            </div>
            `
    }else{
        result.innerHTML = `
            <div class="alert alert-danger mt-3 rounded-3">
                <i class="bi bi-exclamation-triangle fs-4"></i>
                شهر مورد نظر یافت نشد!!!
            </div>
        `
    }
    
})