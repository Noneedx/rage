if(window.mp == null) {
    window.mp = {
        events: {
            call(name:string, ...args:any[]) {
                this.list[name](...args)
            },
            add(name:string, callback: Function) {
                this.list[name] = callback
            },
            list: {},
        },
        trigger(name:string, ...args:any[]) {
            console.log(`${name} ${args}`)
        }
    };
} else {
    window.mp = window.mp;
}
//
//
//
// Регистрируем событие
window.mp.events.add('test', (...args: any[]) => {
    const div = document.createElement("div")
    div.innerHTML = JSON.stringify([...args])
    document.body.append(div)
})
//
// Проверяем событие, что оно работает так как мы ожидаем
// mp.events.call('test', 1, 2, 3)
//
// Вызываем событие сервера
// mp.trigger("test", 1, 2, 3)
