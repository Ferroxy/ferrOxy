setInterval(setClock, 60)

const chfr = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
const jours = ["الأحد", "الإثنين", "الثلثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// const mois = ["جانفي", "فيفري", "مارس", "أفريل", "مايو", "جوان", "جويلية", "أوت", "سبتمبر", "أوكتبر", "نوفمبر", "ديسمبر"]

const shahr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "جوان", "جويلية", "أوغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]

const dtArab = document.querySelector('.datar')
const dtFr = document.querySelector('.datfr')

// const hourHand = document.querySelector('[data-hour-hand]')
const pointHand = document.querySelector('[data-point]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const jj = document.querySelector('[data-jour]')
const jjr = document.querySelector('[data-jra]')
const mm = document.querySelector('[data-mois]')

const youm = document.querySelector('.youm')
const jour = document.querySelector('.jour')
const dday = document.querySelector('.dday')

// const imgVerre = document.querySelector('.verre')
// const docLink = document.querySelector("head > link")
// let fond = true
// let sens = 1
// imgVerre.addEventListener('click', () => {
//     switch (fond) {
//         case true:
//             docLink.href = 'public/styleJ.css'
//             fond = !fond
//             break;
//         default:
//             docLink.href = 'public/styleN.css'
//             fond = !fond
//             break;
//     }
//     for (let i = 1; i < 24; i++) {
//         let chr = document.querySelector('.number' + i)
//         let ang = i * 15 + 'deg'
//         chr.style.setProperty('--rotation', ang)
//     }
//    = -1
//     dateur(new Date())
// })

dateur()

function setClock() {

    const currentDate = new Date()

    currentDate.getHours() == 0 ? (currentDate.getMinutes() == 0 ? dateur() : null) : null

    const secRatio = (Date.now() / 10000) * 60;
    const minutesRatio = currentDate.getMinutes() + ((secRatio % 360)) / 360
    const hr = currentDate.getHours()
    const hoursRatio = ((currentDate.getMinutes()) / 24) + ((hr >= 12) ? (hr - 12) * 2.5 : (hr + 12) * 2.5)

    const jjRatio = currentDate.toString().split(' ')[2] * 1
    const mmRatio = (new Date().getMonth() + 1) * 2.5

    setRotation(secondHand, secRatio)
    setRotation(minuteHand, minutesRatio)
    // setRotation(hourHand, hoursRatio)
    setRotation(pointHand, hoursRatio)
    setRotation(jjr, jjRatio)
    setRotation(mm, (mmRatio - 90))
    setRotation(jj, (mmRatio - 90))
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio)
}

function dateur() {
    const event = new Date();
    const options = {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    // console.log(event.toLocaleDateString('ar-EG', options));
    // Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

    youm.innerHTML = (jours[event.getDay()])
    jour.innerHTML = (jours[event.getDay() + 7])
    dday.innerHTML = (jours[event.getDay() + 14])
    mm.innerHTML = shahr[event.getMonth()]
    jj.innerHTML = event.toString().split(' ')[2]

    jjr.innerHTML = (event.toString()[8] == 0) ?
        chfr[event.toString()[9]]
        : chfr[event.toString()[8]] + chfr[event.toString()[9]]

    dtArab.innerHTML = event.toLocaleDateString('ar-EG', options)
    dtFr.innerHTML = event.toLocaleDateString('fr-EG', options)
}