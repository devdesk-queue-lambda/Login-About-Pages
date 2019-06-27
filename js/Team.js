class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;
        if (this.tabData === 'all') {
            this.cards = document.querySelectorAll('.id-card');
        } else {
            this.cards = document.querySelectorAll(
                `.id-card[data-tab="${this.tabData}"]`
            );
        }
        this.cards = Array.from(this.cards).map(map => new TabCard(map));
        this.tabElement.addEventListener('click', () => this.selectTab());
        // console.log(this.tabElement);
    }

    selectTab() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(remove => remove.classList.remove('active-tab'));
        const cards = document.querySelectorAll('.id-card');
        cards.forEach(none => (none.style.display = 'none'));
        this.tabElement.classList.add('active-tab');
        this.cards.forEach(card => card.selectCard());
    }
}
class TabCard {
    constructor(cardElement) {
        this.cardElement = cardElement;
    }
    selectCard() {
        this.cardElement.style.display = 'flex';
    }
}

let tabs = document.querySelectorAll('.tab');
// console.log('SCRIPT RUNNING');
tabs.forEach(tab => new TabLink(tab));
