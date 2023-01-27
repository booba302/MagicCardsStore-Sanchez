const cards = []
const colors = []
const shoppingCart = []

const divCards = document.getElementById('cards')
const colorSelect = document.getElementById('colors')
const nameFilter = document.getElementById('nameFilter')
const colorFilter = document.getElementById('colors')
const search = document.getElementById('search')
const qty = document.getElementById('qty')

qty.hidden = true

const iconClass = 'fa-solid fa-cart-plus'

cards.push(new Cards('1', "Myrel, Shield of Argive", "https://cards.scryfall.io/normal/front/e/6/e632ed57-bb00-4493-adef-7b4805edd7ea.jpg?1674420256", "During your turn, your opponents can't cast spells or activate abilities of artifacts, creatures, or enchantments.\nWhenever Myrel, Shield of Argive attacks, create X 1/1 colorless Soldier artifact creature tokens, where X is the number of Soldiers you control.", "w", 16.98))
cards.push(new Cards('2', "Adeline, Resplendent Cathar", "https://cards.scryfall.io/normal/front/2/f/2f71585a-3ea8-40f8-8e02-e155477fd8b5.jpg?1640833212", "Vigilance\nAdeline, Resplendent Cathar's power is equal to the number of creatures you control.\nWhenever you attack, for each opponent, create a 1/1 white Human creature token that's tapped and attacking that player or a planeswalker they control.", "w", 8.44))
cards.push(new Cards('3', "Kodama of the West Tree", "https://cards.scryfall.io/normal/front/a/3/a33e17d9-fb24-45ef-aba6-292009834dc2.jpg?1647657043", "Reach\nModified creatures you control have trample. (Equipment, Auras you control, and counters are modifications.)\nWhenever a modified creature you control deals combat damage to a player, search your library for a basic land card, put it onto the battlefield tapped, then shuffle.", "g", 7.16))
cards.push(new Cards('4', "Kura, the Boundless Sky", "https://cards.scryfall.io/normal/front/0/6/06b25752-26be-4189-bc8b-828db6f0e612.jpg?1654568249", "Flying, deathtouch\nWhen Kura, the Boundless Sky dies, choose one —\n• Search your library for up to three land cards, reveal them, put them into your hand, then shuffle.\n• Create an X/X green Spirit creature token, where X is the number of lands you control.", "g", 2.00))
cards.push(new Cards('5', "Jin-Gitaxias, Progress Tyrant", "https://cards.scryfall.io/normal/front/c/5/c57b4876-5387-4f73-b8e2-8e7bdca8b0bc.jpg?1654566749", "Whenever you cast an artifact, instant, or sorcery spell, copy that spell. You may choose new targets for the copy. This ability triggers only once each turn. (A copy of a permanent spell becomes a token.)\nWhenever an opponent casts an artifact, instant, or sorcery spell, counter that spell. This ability triggers only once each turn.", "u", 9.48))
cards.push(new Cards('6', "Teferi, Temporal Pilgrim", "https://cards.scryfall.io/normal/front/2/3/23a4f1ec-eadf-4f1e-8821-f22293ad2580.jpg?1674420627", "Whenever you draw a card, put a loyalty counter on Teferi, Temporal Pilgrim.\n0: Draw a card.\n−2: Create a 2/2 blue Spirit creature token with vigilance and \"Whenever you draw a card, put a +1/+1 counter on this creature.\"\n−12: Target opponent chooses a permanent they control and returns it to its owner's hand. Then they shuffle each nonland permanent they control into its owner's library.", "u", 7.45))
cards.push(new Cards('7', "Gix, Yawgmoth Praetor", "https://cards.scryfall.io/normal/front/2/c/2c76f7e0-37e7-4e87-93a3-a25ba0674645.jpg?1674420849", "Whenever a creature deals combat damage to one of your opponents, its controller may pay 1 life. If they do, they draw a card.\n{4}{B}{B}{B}, Discard X cards: Exile the top X cards of target opponent's library. You may play land cards and cast spells from among cards exiled this way without paying their mana costs.", "b", 14.61))
cards.push(new Cards('8', "Junji, the Midnight Sky", "https://cards.scryfall.io/normal/front/9/0/9033cf27-d9e6-49b8-8ee1-c1f38c9680b9.jpg?1654567204", "Flying, menace\nWhen Junji, the Midnight Sky dies, choose one —\n• Each opponent discards two cards and loses 2 life.\n• Put target non-Dragon creature card from a graveyard onto the battlefield under your control. You lose 2 life.", "b", 5.59))
cards.push(new Cards('9', "Atsushi, the Blazing Sky", "https://cards.scryfall.io/normal/front/7/3/73b64c17-8a52-4d9d-a28b-7e0e945be059.jpg?1654567533", "Flying, trample\nWhen Atsushi, the Blazing Sky dies, choose one —\n• Exile the top two cards of your library. Until the end of your next turn, you may play those cards.\n• Create three Treasure tokens.", "r", 4.10))
cards.push(new Cards('10', "Urabrask, Heretic Praetor", "https://cards.scryfall.io/normal/front/d/9/d9a4ec18-1da4-43c6-a79a-03fbd4aef3db.jpg?1664411925", "Haste\nAt the beginning of your upkeep, exile the top card of your library. You may play it this turn.\nAt the beginning of each opponent's upkeep, the next time they would draw a card this turn, instead they exile the top card of their library. They may play it this turn.", "r", 3.18))
cards.push(new Cards('11', "Karn, Living Legacy", "https://cards.scryfall.io/normal/front/4/9/493341c3-1f59-4d7e-b852-1449a2333be9.jpg?1674074534", "+1: Create a tapped Powerstone token. (It's an artifact with \"{T}: Add {C}. This mana can't be spent to cast a nonartifact spell.\")\n−1: Pay any amount of mana. Look at that many cards from the top of your library, then put one of those cards into your hand and the rest on the bottom of your library in a random order.\n−7: You get an emblem with \"Tap an untapped artifact you control: This emblem deals 1 damage to any target.", "c", 2.68))
cards.push(new Cards('12', "Liberator, Urza's Battlethopter", "https://cards.scryfall.io/normal/front/c/3/c31e6768-bcab-43c4-bfc1-76e961689ae9.jpg?1674421980", "Flash\nFlying\nYou may cast colorless spells and artifact spells as though they had flash.\nWhenever you cast a spell, if the amount of mana spent to cast that spell is greater than Liberator, Urza's Battlethopter's power, put a +1/+1 counter on Liberator.", "c", 2.04))
cards.push(new Cards('13', "Child of Alara", "https://cards.scryfall.io/normal/front/b/2/b2373625-af3c-4c2a-a1d1-5288c446955d.jpg?1673148447", "Trample\nWhen Child of Alara dies, destroy all nonland permanents. They can't be regenerated.", "m", 0.88))
cards.push(new Cards('14', "Garth One-Eye", "https://cards.scryfall.io/normal/front/2/3/23774462-9f17-4b50-a2ac-b2edd706bbfe.jpg?1626098353", "{T}: Choose a card name that hasn't been chosen from among Disenchant, Braingeyser, Terror, Shivan Dragon, Regrowth, and Black Lotus. Create a copy of the card with the chosen name. You may cast the copy. (You still pay its costs.)", "m", 0.52))

localStorage.setItem('cards', JSON.stringify(cards))

const cardList = JSON.parse(localStorage.getItem('cards'))

window.addEventListener('load', loadCards(cardList))
window.addEventListener('load', loadColors)

function loadCards(cardList) {

    divCards.innerHTML = ''

    cardList.forEach(card => {

        const divCard = document.createElement('div')
        divCard.className = 'single_card'

        const img = document.createElement('img')
        img.className = 'card_img '+card.color
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

function cardFilterName(e) {

    const cards = JSON.parse(localStorage.getItem('cards'))

    let cardList = cards.filter(card => card.name.toLowerCase().includes(e.target.value.toLowerCase()))

    loadCards(cardList)
}

search.addEventListener('click', cardFilterColor)

function cardFilterColor(e) {

    e.preventDefault()

    const selectedColor = colorFilter.value
    let cardList

    if (selectedColor === 'Seleccione un color') {

        cardList = JSON.parse(localStorage.getItem('cards'))
        nameFilter.disabled = false 

    } else {        

        cardList = cards.filter(card => card.color.includes(selectedColor)) 
        nameFilter.disabled = true       
    }

    loadCards(cardList)
}