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

} else {

    cards.push(new Cards('0', "Myrel, Shield of Argive", "https://cards.scryfall.io/normal/front/e/6/e632ed57-bb00-4493-adef-7b4805edd7ea.jpg?1674420256", "During your turn, your opponents can't cast spells or activate abilities of artifacts, creatures, or enchantments.\nWhenever Myrel, Shield of Argive attacks, create X 1/1 colorless Soldier artifact creature tokens, where X is the number of Soldiers you control.", "w", 16.98))
    cards.push(new Cards('1', "Adeline, Resplendent Cathar", "https://cards.scryfall.io/normal/front/2/f/2f71585a-3ea8-40f8-8e02-e155477fd8b5.jpg?1640833212", "Vigilance\nAdeline, Resplendent Cathar's power is equal to the number of creatures you control.\nWhenever you attack, for each opponent, create a 1/1 white Human creature token that's tapped and attacking that player or a planeswalker they control.", "w", 8.44))
    cards.push(new Cards('2', "Kodama of the West Tree", "https://cards.scryfall.io/normal/front/a/3/a33e17d9-fb24-45ef-aba6-292009834dc2.jpg?1647657043", "Reach\nModified creatures you control have trample. (Equipment, Auras you control, and counters are modifications.)\nWhenever a modified creature you control deals combat damage to a player, search your library for a basic land card, put it onto the battlefield tapped, then shuffle.", "g", 7.16))
    cards.push(new Cards('3', "Kura, the Boundless Sky", "https://cards.scryfall.io/normal/front/0/6/06b25752-26be-4189-bc8b-828db6f0e612.jpg?1654568249", "Flying, deathtouch\nWhen Kura, the Boundless Sky dies, choose one —\n• Search your library for up to three land cards, reveal them, put them into your hand, then shuffle.\n• Create an X/X green Spirit creature token, where X is the number of lands you control.", "g", 2.00))
    cards.push(new Cards('4', "Jin-Gitaxias, Progress Tyrant", "https://cards.scryfall.io/normal/front/c/5/c57b4876-5387-4f73-b8e2-8e7bdca8b0bc.jpg?1654566749", "Whenever you cast an artifact, instant, or sorcery spell, copy that spell. You may choose new targets for the copy. This ability triggers only once each turn. (A copy of a permanent spell becomes a token.)\nWhenever an opponent casts an artifact, instant, or sorcery spell, counter that spell. This ability triggers only once each turn.", "u", 9.48))
    cards.push(new Cards('5', "Teferi, Temporal Pilgrim", "https://cards.scryfall.io/normal/front/2/3/23a4f1ec-eadf-4f1e-8821-f22293ad2580.jpg?1674420627", "Whenever you draw a card, put a loyalty counter on Teferi, Temporal Pilgrim.\n0: Draw a card.\n−2: Create a 2/2 blue Spirit creature token with vigilance and \"Whenever you draw a card, put a +1/+1 counter on this creature.\"\n−12: Target opponent chooses a permanent they control and returns it to its owner's hand. Then they shuffle each nonland permanent they control into its owner's library.", "u", 7.45))
    cards.push(new Cards('6', "Gix, Yawgmoth Praetor", "https://cards.scryfall.io/normal/front/2/c/2c76f7e0-37e7-4e87-93a3-a25ba0674645.jpg?1674420849", "Whenever a creature deals combat damage to one of your opponents, its controller may pay 1 life. If they do, they draw a card.\n{4}{B}{B}{B}, Discard X cards: Exile the top X cards of target opponent's library. You may play land cards and cast spells from among cards exiled this way without paying their mana costs.", "b", 14.61))
    cards.push(new Cards('7', "Junji, the Midnight Sky", "https://cards.scryfall.io/normal/front/9/0/9033cf27-d9e6-49b8-8ee1-c1f38c9680b9.jpg?1654567204", "Flying, menace\nWhen Junji, the Midnight Sky dies, choose one —\n• Each opponent discards two cards and loses 2 life.\n• Put target non-Dragon creature card from a graveyard onto the battlefield under your control. You lose 2 life.", "b", 5.59))
    cards.push(new Cards('8', "Atsushi, the Blazing Sky", "https://cards.scryfall.io/normal/front/7/3/73b64c17-8a52-4d9d-a28b-7e0e945be059.jpg?1654567533", "Flying, trample\nWhen Atsushi, the Blazing Sky dies, choose one —\n• Exile the top two cards of your library. Until the end of your next turn, you may play those cards.\n• Create three Treasure tokens.", "r", 4.10))
    cards.push(new Cards('9', "Urabrask, Heretic Praetor", "https://cards.scryfall.io/normal/front/d/9/d9a4ec18-1da4-43c6-a79a-03fbd4aef3db.jpg?1664411925", "Haste\nAt the beginning of your upkeep, exile the top card of your library. You may play it this turn.\nAt the beginning of each opponent's upkeep, the next time they would draw a card this turn, instead they exile the top card of their library. They may play it this turn.", "r", 3.18))
    cards.push(new Cards('10', "Karn, Living Legacy", "https://cards.scryfall.io/normal/front/4/9/493341c3-1f59-4d7e-b852-1449a2333be9.jpg?1674074534", "+1: Create a tapped Powerstone token. (It's an artifact with \"{T}: Add {C}. This mana can't be spent to cast a nonartifact spell.\")\n−1: Pay any amount of mana. Look at that many cards from the top of your library, then put one of those cards into your hand and the rest on the bottom of your library in a random order.\n−7: You get an emblem with \"Tap an untapped artifact you control: This emblem deals 1 damage to any target.", "c", 2.68))
    cards.push(new Cards('11', "Liberator, Urza's Battlethopter", "https://cards.scryfall.io/normal/front/c/3/c31e6768-bcab-43c4-bfc1-76e961689ae9.jpg?1674421980", "Flash\nFlying\nYou may cast colorless spells and artifact spells as though they had flash.\nWhenever you cast a spell, if the amount of mana spent to cast that spell is greater than Liberator, Urza's Battlethopter's power, put a +1/+1 counter on Liberator.", "c", 2.04))
    cards.push(new Cards('12', "Child of Alara", "https://cards.scryfall.io/normal/front/b/2/b2373625-af3c-4c2a-a1d1-5288c446955d.jpg?1673148447", "Trample\nWhen Child of Alara dies, destroy all nonland permanents. They can't be regenerated.", "m", 0.88))
    cards.push(new Cards('13', "Garth One-Eye", "https://cards.scryfall.io/normal/front/2/3/23774462-9f17-4b50-a2ac-b2edd706bbfe.jpg?1626098353", "{T}: Choose a card name that hasn't been chosen from among Disenchant, Braingeyser, Terror, Shivan Dragon, Regrowth, and Black Lotus. Create a copy of the card with the chosen name. You may cast the copy. (You still pay its costs.)", "m", 0.52))

    localStorage.setItem('cards', JSON.stringify(cards))
    cardList = JSON.parse(localStorage.getItem('cards'))
}

window.addEventListener('load', loadCards(cardList))
window.addEventListener('load', loadColors)

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
        h3.innerText = card.price.toFixed(2) + '$'

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