class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.initialize();
        this.initButtonEvents();
    }

    initialize() {
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000)
    }

    initButtonEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', event => {
                console.log(btn.className.baseVal.replace("btn-", ""));
            });
        });

    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
        this.displayTime = this.currentDate.toLocaleTimeString('pt-BR');
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this.dataAtual = value;
    }

}