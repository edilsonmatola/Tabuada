function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert(`Por favor, insira um numero!`)
    } else {

        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while (c <= 12) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c ++
        }

        /* for (let c = 1; c <= 10; c ++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        } */
    }
}