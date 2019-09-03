# question2vk
Вопросы, а потом в ВК
### Что это такое?
Это скрипт который написан на node.js, он задает вопросы через терминал/командную строку и отправляет ответы в виде текста в личные сообщения ВКонтакте
### Как его настроить?
Для начала вам нужно установить пакет `easyvk` через `npm`
```bash
$ npm install
```
![Image alt](https://github.com/incdapp/question2vk/raw/master/images/1.png)

Теперь нужно получить токен пользователя/cообщества, для этого заходим на https://vkhost.github.io

![Image alt](https://github.com/incdapp/question2vk/raw/master/images/2.png)

Нажимаем на Kate Moblie

![Image alt](https://github.com/incdapp/question2vk/raw/master/images/3.png)

Нажимаем "Разрешить"

![Image alt](https://github.com/incdapp/question2vk/raw/master/images/4.png)
![Image alt](https://github.com/incdapp/question2vk/raw/master/images/5.png)

Копируем токен, он находится между `blank.html#access_token=` и `&expires_in=0&user_id=`
```
https://oauth.vk.com/blank.html#access_token=ЗДЕСЬ_БУДЕТ_НАХОДИТСЯ_ВАШ_ТОКЕН&expires_in=0&user_id=юзерайди&email=юзер@мыло.com
```

![Image alt](https://github.com/incdapp/question2vk/raw/master/images/6.png)

Идем в файл `config.json` и меняем токен
```
[
  "ТОКЕН_СЮДА"
]
```

![Image alt](https://github.com/incdapp/question2vk/raw/master/images/7.png)

Теперь можно запустить скрипт

![Image alt](https://github.com/incdapp/question2vk/raw/master/images/8.png)
### Как им пользоваться
#### Вопросы
Они настраиваются таким образом
```javascript
const age = () => { //название функции
  return new Promise((resolve, reject) => { //асинхрон
    rl.question('Сколько тебе лет? ', (answer) => { //вопрос
      if (answer === '') { //проверка если ответ пустой
        console.log('Походу ты ничего не ввел') //обозначение ошибки
        rl.close() //окончание скрипта
      } else { //а если нет, то
      var ans = answer //запись ответа в переменную ans
      const str = fs.readFileSync('./files/user/io.json', 'utf8'); //запись информации с io.json в переменную str
      const line = str.split('age')[1]; //поиск age в переменной str
      console.log(line) //дебаг
      if (isNaN(ans)) { //проверка если было введено не число
        console.log('Ой, произошла неурядица и ты случайно ввел не число') //обозначение ошибки
        rl.close() //окончание скрипта
      } else { //а если нет, то
      if (line === undefined) { //если переменная ответила undefined то
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8')) //парсинг io.json
        jsonparsing.push({age: ans}) //добавление записи в массив
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2)) //запись в io.json
      } else { //а если нет, то
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8')) //парсинг io.json
        jsonparsing.pop() //удаление последней записи
        jsonparsing.push({age: ans}) //добавление записи в массив
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2)) //запись в io.json
      } 
      var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8')) //парсинг io.json
      console.log(jsonparsing) //дебаг
      console.log(`Ответ записан: ${answer}`) //ответ записан
      resolve() //асинхрон
    }
  }})
  })
}
```
#### Сообщение в ВК
Оно настраивается таким образом
```javascript
var token = JSON.parse(fs.readFileSync('./config.json', 'utf-8')) //чтение токена из config.json
          easyvk({ //модуль easyvk
            access_token: token, //обьявление access-токена
            session_file: __dirname + '/.my-session' //сессионный файл
          }).then(async vk => { //асинхрон
            var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8')) //парсинг io.json
            if (jsonparsing[1].otvet = true) { //проверка связанная с вопросами
              var nodemess = 'вы знаете что такое node.js'
            } else {
              var nodemess = 'вы не знаете что такое node.js'
            }
            if (jsonparsing[2].sex = true) {
              var sex = 'вы мужчина'
            } else {
              var sex = 'вы женчина'
            }
            var mess = 'Вас зовут ' + jsonparsing[1].name + ', вам ' + jsonparsing[2].age + ' лет, сейчас ' + jsonparsing[3].year + ' год, ' + nodemess + ', и ' + sex + '.' //сообщение
            let { vkr } = await vk.call('messages.send', { //вызов vk.call('messages.send')
        peer_id: vk.session.user_id, //ID кому отправляется сообщение (самому себе)
        message: mess //переменная сообщения
        });

            console.log('Готово'); //выполнено

        })
```
