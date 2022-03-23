window.onload = ()=>{
    let members = document.getElementsByClassName('fans_fan_row')
    console.log(members)
    console.log(members.length)
    for (let i = 0; i < members.length; i++ ){
        const alert = document.createElement('span');
        alert.className = 'numeration'
        alert.textContent = `№${i+1}`;
        let a = members[i].appendChild(alert)
        console.log(i)
    }
}
