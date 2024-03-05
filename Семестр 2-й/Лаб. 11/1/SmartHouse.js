class SmartHouse{
    constructor(light, microwave, tv){
        this.light = light;
        this.microwave = microwave;
        this.tv = tv;
    }
    lightOn(){
        this.light.on(this);
    }
    lightOff(){
        this.light.off(this);
    }
    microwaveOn(){
        this.microwave.on(this);
    }
    microwaveOff(){
        this.microwave.off(this);
    }
    tvOn(){
        this.tv.on(this);
    }
    tvOff(){
        this.tv.off(this);
    }
}
let normalMicrowave = {
    on(smartDevice){
        alert("Микроволновка: включена");
    },
    off(){
        alert("Микроволновка: выключена");
    }
}

let normalTv = {
    on(smartDevice){
        alert("Телевизор: включен");
    },
    off(){
        alert("Телевизор: выключен");
    }
}

let normalLight = {
    on(smartDevice){
        alert("Свет: включен");
    },
    off(){
        alert("Свет: выключен");
    }
}

let foolishLight = {
    on(smartDevice){
        alert("Чувааааааааааак");
        smartDevice.tvOn();
        smartDevice.microwaveOn();
        alert("Пацаны будут тусоваться с нами");
        alert("Свет: включен");
    },
    off(){
        alert("Э-э-э, полегче! Чувак, я думал мы друзяяяяя");
        alert("Свет: выключен");
    }
}

let foolishMicrowave = {
    on(smartDevice){
        alert("ахахаха, я включу тиливизер!!!1!");
        smartDevice.tvOn();
        alert("ну и сама включусь.");
        alert("Микроволновая печь: включена");
    },
    off(){
        alert("Ну всё! Я выключаюсь!!!1!!131!");
        alert("Микроволновая печь: выключена");
    }
}


let foolishTv = {
    on(smartDevice){
        alert("ПуЛюМ БуЛюМ!");
        alert("Тиливизер: включен");
    },
    off(){
        alert("Тиливизер: выключен");
        smartDevice.lightOff();
        alert("Я походу свет бахнул🥴");
    }
}

let smartDevice = new SmartHouse(normalLight, normalMicrowave, normalTv);

function setNormalLight() {
    smartDevice.light = normalLight;
}

function setNormalMicrowave() {
    smartDevice.microwave = normalMicrowave;
}

function setNormalTv() {
    smartDevice.tv = normalTv;
}
function setFoolishLight() {
    smartDevice.light = foolishLight;
}
function setFoolishMicrowave() {
    smartDevice.microwave = foolishMicrowave;
}
function setFoolishTv() {
    smartDevice.tv = foolishTv;
}