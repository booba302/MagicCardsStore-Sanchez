let shoppingCart = []
let cardList = []
const cards = []
const colors = []

const divCards = document.getElementById('cards')
const colorSelect = document.getElementById('colors')
const nameFilter = document.getElementById('nameFilter')
const colorFilter = document.getElementById('colors')
const qty = document.getElementById('qty')
const modalBody = document.getElementById('modal-body')
const btnEmpty = document.getElementById('btn-empty')
const iconClass = 'fa-solid fa-cart-plus'
qty.hidden = true

if ('cards' in localStorage) {

    cardList = JSON.parse(localStorage.getItem('cards'))

    window.addEventListener('load', loadCards(cardList))
    window.addEventListener('load', loadColors)

} else {

    let nextPage

    fetch('https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aone')
        .then((response) => response.json())
        .then((json) => {

            nextPage = json.next_page

            json.data.forEach(e => {
                cards.push(new Cards(e.id, e.name, e.image_uris.png, e.printed_text, e.color_identity[0], e.prices.usd))
            })

            return fetch(nextPage)
        })
        .then((response) => response.json())
        .then((json) => {

            json.data.forEach(e => {
                cards.push(new Cards(e.id, e.name, e.image_uris.png, e.printed_text, e.color_identity[0], e.prices.usd))
            })

            localStorage.setItem('cards', JSON.stringify(cards))
            cardList = JSON.parse(localStorage.getItem('cards'))

            window.addEventListener('load', loadCards(cardList))
            window.addEventListener('load', loadColors)
        })
}

if ('shoppingCart' in localStorage) {

    shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
    addToCart(shoppingCart)

} else {

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
    shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
    addToCart(shoppingCart)
}

cardList = JSON.parse(localStorage.getItem('cards'))

function loadCards(cardList) {

    divCards.innerHTML = ''

    cardList.forEach(card => {

        const divCard = document.createElement('div')
        divCard.className = 'single_card'

        const img = document.createElement('img')
        img.className = 'card_img ' + card.color
        img.src = card.img

        const h2 = document.createElement('h2')
        h2.className = 'card_name'
        h2.innerText = card.name

        const h3 = document.createElement('h3')
        h3.className = 'card_price'
        h3.innerText = card.price + '$'

        const button = document.createElement('button')
        button.className = 'btn btn-success card_button'
        button.id = card.id

        const i = document.createElement('i')
        i.className = iconClass
        button.appendChild(i)

        divCard.appendChild(img)
        divCard.appendChild(h2)
        divCard.appendChild(h3)
        divCard.appendChild(button)

        divCards.appendChild(divCard)
    })
}

colors.push(new Colors('w', 'Blanco'))
colors.push(new Colors('g', 'Verde'))
colors.push(new Colors('u', 'Azul'))
colors.push(new Colors('b', 'Negro'))
colors.push(new Colors('r', 'Rojo'))
colors.push(new Colors('c', 'Incoloro'))
colors.push(new Colors('m', 'Multicolor'))

function loadColors() {

    colors.forEach(color => {

        const option = document.createElement('option')
        option.value = color.id
        option.innerText = color.name
        colorSelect.appendChild(option)
    })
}

nameFilter.addEventListener('input', cardFilterName)

let color = colorSelect.value

function cardFilterName(e) {

    let color = colorSelect.value
    color === 'Búsqueda por color' ? color = '' : color

    const cards = JSON.parse(localStorage.getItem('cards'))

    let cardFiltered = cards.filter(card => card.name.toLowerCase().includes(e.target.value.toLowerCase()) && card.color.includes(color))

    loadCards(cardFiltered)

    if (cardFiltered.length == 0) {

        divCards.innerText = 'No se han encontrado resultados'
    }
}

colorSelect.onchange = () => {

    const selectedColor = colorFilter.value

    if (selectedColor === 'Búsqueda por color') {

        cardList = JSON.parse(localStorage.getItem('cards'))
        nameFilter.value = ''
        loadCards(cardList)

    } else {

        cardFiltered = cardList.filter(card => card.color.includes(selectedColor))
        nameFilter.value = ''
        loadCards(cardFiltered)
    }
}

let btnAdd = document.querySelectorAll('.card_button')

for (i of btnAdd) {

    i.addEventListener('click', function () {

        let selectedCard = cardList[this.id]
        let index = shoppingCart.map(cart => cart.name).indexOf(selectedCard.name)

        if (index < 0) {

            selectedCard.qty = 1
            shoppingCart.push(selectedCard)
            Swal.fire(
                '¡Se ha agregado al carrito!',
                selectedCard.name,
                'success'
            )

        } else {

            shoppingCart[index].qty++
            Swal.fire(
                '¡Se ha agregado al carrito!',
                selectedCard.name,
                'success'
            )
        }

        shoppingCart.map(cart => cart.name).indexOf(selectedCard.name)

        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
        addToCart(shoppingCart)

    });
}

function addToCart(shoppingCart) {

    modalBody.innerHTML = ''
    let subTotal = 0
    let totalPrice = 0
    let qtyTotal = 0

    shoppingCart.forEach(card => {

        const modalCart = document.createElement('div')
        modalCart.className = 'modal-cart'

        const img = document.createElement('img')
        img.src = card.img

        const divInfo = document.createElement('div')
        divInfo.className = 'info'
        const name = document.createElement('h5')
        name.innerText = card.name
        divInfo.appendChild(name)

        const divQty = document.createElement('div')
        divQty.className = 'qty'
        const qtyMinus = document.createElement('a')
        qtyMinus.href = '#'
        const iconMinus = document.createElement('i')
        iconMinus.className = 'fa-solid fa-circle-minus'
        qtyMinus.appendChild(iconMinus)
        divQty.appendChild(qtyMinus)

        const qty = document.createElement('h5')
        qty.innerText = card.qty
        divQty.appendChild(qty)

        const qtyPlus = document.createElement('a')
        qtyPlus.href = '#'
        const iconPlus = document.createElement('i')
        iconPlus.className = 'fa-solid fa-circle-plus'
        qtyPlus.appendChild(iconPlus)
        divQty.appendChild(qtyPlus)

        const divPrice = document.createElement('div')
        divPrice.className = 'price'
        const total = document.createElement('h5')
        subTotal = card.price * card.qty
        total.innerText = subTotal.toFixed(2) + '$'
        divPrice.appendChild(total)

        modalCart.appendChild(img)
        modalCart.appendChild(divInfo)
        modalCart.appendChild(divQty)
        modalCart.appendChild(divPrice)

        const hr = document.createElement('hr')

        modalBody.appendChild(modalCart)
        modalBody.appendChild(hr)

        totalPrice = totalPrice + subTotal
        qtyTotal = qtyTotal + card.qty
    })

    const totalAmount = document.createElement('p')
    totalAmount.innerText = 'El total a pagar es de ' + totalPrice.toFixed(2) + '$'
    totalAmount.className = 'text-end total'
    modalBody.appendChild(totalAmount)
    qty.innerText = qtyTotal

    qtyTotal > 0 ? qty.hidden = false : qty.hidden = true
}

btnEmpty.addEventListener('click', () => {

    localStorage.removeItem('shoppingCart')
    shoppingCart = []

    addToCart(shoppingCart)

    Swal.fire(
        '¡Se vació el carrito!',
        '',
        'success'
    )
})