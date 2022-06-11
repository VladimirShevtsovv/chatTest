export function dateFromSeconds(seconds) {

    let fullDate = new Date(seconds * 1000)
    let date = fullDate.getDate()
    let month = String(fullDate).slice(4, 7)
    let year = String(fullDate.getFullYear()).slice(2)
    let hours = fullDate.getHours()
    let minutes = fullDate.getMinutes()
    return `${date} ${month} ${year}, ${hours}:${minutes}`

}