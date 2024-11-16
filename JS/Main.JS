const actualHour = () => {
  let date = new Date()
  let hour = date.getHours()

  if (hour >= 5 && hour < 12) {
    document.querySelector('#period').innerHTML = 'Manhã'
    document.body.style.backgroundImage = "url('../assets/dia.jpg')"
    document.body.style.backgroundColor = 'lightblue'
  }
  else if (hour >= 12 && hour < 18){ 
    document.querySelector('#period').innerHTML = 'Tarde'
    document.body.style.backgroundImage = "url('../assets/tarde.jpg')"
    document.body.style.backgroundColor = 'darkorange'
  }
  else { 
    document.querySelector('#period').innerHTML = 'Noite'
    document.body.style.backgroundImage = "url('../assets/noite.jpg')"
    document.body.style.backgroundColor = 'black'
  }
}

const reloadHour = () => {
  setInterval(() => {
    let date = new Date()
    let actual = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`

    document.querySelector('#hour').innerHTML = actual 
    document.title = actual
  }, 1000)
}


let addZero = (hourpart) => {
  return hourpart < 10 ? `0${hourpart}`:hourpart
}
