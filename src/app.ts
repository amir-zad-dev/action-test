import dayjs from 'dayjs'


class Main{
    start() {

        const date = dayjs("2024-10-12").format('YYYY MM-DDTHH:mm:ss SSS [Z] A')
        console.log(`main.start() => ${date}`)
    }
}

const app = new Main().start()