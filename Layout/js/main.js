
// set nav__item border color
var navItems = document.getElementsByClassName('nav__item');
var infoCards = document.getElementsByClassName('info-card');
var infoCardPluses = document.getElementsByClassName('info-card__plus');

var navColors = [ '#6017a3', '#701dbb', '#8038c2', '#a34ff0' ];

var currentColor = 0,
    colorDelta = 1;

for (var i = 0; i < navItems.length; i++) {
    navItems[i].style.borderColor = navColors[currentColor];
    currentColor += colorDelta;
    if (currentColor < 0 || currentColor >= navColors.length) {
        colorDelta *= -1;
        currentColor += 2 * colorDelta;
    }
}

for (var item of navItems) {
    item.addEventListener('click', function() {
        for (var cur of navItems) {
            cur.classList.remove('nav__item_active');
        }
        this.classList.add('nav__item_active');
    });
}

var bigCardIndex = 2;

function turnCardBig(k = bigCardIndex) {
    var prevOrder = +infoCards[bigCardIndex].style.order,
        curOrder = +infoCards[k].style.order;

    infoCards[bigCardIndex].classList.remove('info-card_big');
    bigCardIndex = k;
    infoCards[bigCardIndex].classList.add('info-card_big');

    console.log(infoCards);

    var cnt = 0, prev, next;
    for (var card of infoCards) {
        console.log(card.style.order + " vs " + infoCards[bigCardIndex].style.order);
        if (card.style.order < infoCards[bigCardIndex].style.order) {
            cnt++;
        }
        if (+card.style.order + 1 === +infoCards[bigCardIndex].style.order) {
            prev = card;
        }
        if (+card.style.order - 1 === +infoCards[bigCardIndex].style.order) {
            next = card;
        }
    }

    if (cnt % 2 === 1) {
        if (prevOrder < curOrder) {
            var tmp = next.style.order;
            next.style.order = infoCards[bigCardIndex].style.order;
            infoCards[bigCardIndex].style.order = tmp;
        }
        else {
            var tmp = prev.style.order;
            prev.style.order = infoCards[bigCardIndex].style.order;
            infoCards[bigCardIndex].style.order = tmp;
        }
    }
}

for (var i = 0; i < infoCards.length; i++) {
    infoCards[i].classList.remove('info-card_big');
    infoCards[i].style.order = i;
}

turnCardBig();

for (var plus of infoCardPluses) {
    plus.addEventListener('click', function() {
        for (var i = 0; i < infoCardPluses.length; i++) {
            if (this === infoCardPluses[i]) {
                turnCardBig(i);
                break;
            }
        }
    });
}