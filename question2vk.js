const readline = require('readline')
const fs = require('fs')
const easyvk = require('easyvk')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const menu = () => {
  return new Promise((resolve, reject) => {
    rl.question(`Перед тобой меню
1. Ввести свои данные
2. Отправить их в ВК
Выбор: `, (answer) => {
  if (answer === '') {
    console.log('Походу ты ничего не ввел')
    rl.close()
  } else {
    if (answer === '1') {
      resolve()
    } else {
      if (answer === '2') {
      const str = fs.readFileSync('./files/user/io.json', 'utf8');
      const line = str.split('{')[1];
      if (line === undefined) {
        console.log('Походу там пусто')
        rl.close()
      } else {
        var token = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
        var vkparsing = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
          easyvk({
            access_token: token,
            session_file: __dirname + '/.my-session'
          }).then(async vk => {
            var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
            if (jsonparsing[1].otvet = true) {
              var nodemess = 'вы знаете что такое node.js'
            } else {
              var nodemess = 'вы не знаете что такое node.js'
            }
            if (jsonparsing[2].sex = true) {
              var sex = 'вы мужчина'
            } else {
              var sex = 'вы женчина'
            }
            var mess = 'Вас зовут ' + jsonparsing[1].name + ', вам ' + jsonparsing[2].age + ' лет, сейчас ' + jsonparsing[3].year + ' год, ' + nodemess + ', и ' + sex + '.'
            let { vkr } = await vk.call('messages.send', {
        peer_id: vk.session.user_id,
        message: mess
        });

            console.log('Готово');

        })
        rl.close()
      }
    }
  }}
})
  })
}

const whatisnode = () => {
  return new Promise((resolve, reject) => {
    console.log('Ну что, начнем')
    rl.question('Ты знаешь что такое node.js? (y/n) ', (answer) => {
      if (answer === '') {
        console.log('Походу ты ничего не ввел')
        rl.close()
      } else {
      if (answer === 'y') {
        var ans = true
        var jsonparsing = [
          {otvet: ans}
        ]
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
        console.log(jsonparsing)
        console.log(`Ответ записан: ${answer}`);
        resolve()
      } else if (answer === 'n') {
        var ans = false
        var jsonparsing = [
          {otvet: ans}
        ]
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
        console.log(jsonparsing)
        console.log(`Ответ записан: ${answer}`);
        resolve()
      } else {
        console.log('Походу ты ввел что-то не то')
        rl.close()
      }
    }
    })
  })
}

const name = () => {
  return new Promise((resolve, reject) => {
    rl.question('Как тебя зовут? ', (answer) => {
      if (answer === '') {
        console.log('Походу ты ничего не ввел')
        rl.close()
      } else {
      var ans = answer
      const str = fs.readFileSync('./files/user/io.json', 'utf8');
      const line = str.split('name')[1];
      console.log(line)
      if (line === undefined) {
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
        jsonparsing.push({name: ans})
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
      } else {
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
        jsonparsing.pop()
        jsonparsing.push({name: ans})
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
      }
      var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
      console.log(jsonparsing)
      console.log(`Ответ записан: ${answer}`)
      resolve()
}})})}

const age = () => {
  return new Promise((resolve, reject) => {
    rl.question('Сколько тебе лет? ', (answer) => {
      if (answer === '') {
        console.log('Походу ты ничего не ввел')
        rl.close()
      } else {
      var ans = answer
      const str = fs.readFileSync('./files/user/io.json', 'utf8');
      const line = str.split('age')[1];
      console.log(line)
      if (isNaN(ans)) {
        console.log('Ой, произошла неурядица и ты случайно ввел не число')
        rl.close()
      } else {
      if (line === undefined) {
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
        jsonparsing.push({age: ans})
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
      } else {
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
        jsonparsing.pop()
        jsonparsing.push({age: ans})
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
      }
      var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
      console.log(jsonparsing)
      console.log(`Ответ записан: ${answer}`)
      resolve()
    }
  }})
  })
}

const sex = () => {
  return new Promise((resolve, reject) => {
    rl.question('Твой пол? (м/ж) ', (answer) => {
      if (answer === '') {
        console.log('Походу ты ничего не ввел')
        rl.close()
      } else {
      if (answer === 'м') {
      var sexes = true
      const str = fs.readFileSync('./files/user/io.json', 'utf8');
      const line = str.split('sex')[1];
      console.log(line)
      if (line === undefined) {
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
        jsonparsing.push({sex: sexes})
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
      } else {
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
        jsonparsing.pop()
        jsonparsing.push({sex: sexes})
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
      }
      var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
      console.log(jsonparsing)
      console.log(`Ответ записан: ${answer}`)
      resolve()
    } else if (answer === 'ж') {
    var sexes = false
    const str = fs.readFileSync('./files/user/io.json', 'utf8');
    const line = str.split('sex')[1];
    console.log(line)
    if (line === undefined) {
      var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
      jsonparsing.push({sex: sexes})
      fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
    } else {
      var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
      jsonparsing.pop()
      jsonparsing.push({sex: sexes})
      fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
    }
    var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
    console.log(jsonparsing)
    console.log(`Ответ записан: ${answer}`)
    resolve()
  } else {
    console.log('Походу ты ввел что-то не то')
  }
    }})
  })
}

const year = () => {
  return new Promise((resolve, reject) => {
    rl.question('Какой сейчас год? ', (answer) => {
      if (answer === '') {
        console.log('Походу ты ничего не ввел')
        rl.close()
      } else {
      var ans = answer
      const str = fs.readFileSync('./files/user/io.json', 'utf8');
      const line = str.split('year')[1];
      console.log(line)
      if (isNaN(ans)) {
        console.log('Ой, произошла неурядица и ты случайно ввел не число')
        rl.close()
      } else {
      if (line === undefined) {
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
        jsonparsing.push({year: ans})
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
      } else {
        var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
        jsonparsing.pop()
        jsonparsing.push({year: ans})
        fs.writeFileSync('./files/user/io.json', JSON.stringify(jsonparsing, null, 2))
      }
      var jsonparsing = JSON.parse(fs.readFileSync('./files/user/io.json', 'utf-8'))
      console.log(jsonparsing)
      console.log(`Ответ записан: ${answer}`)
      resolve()}
    }})
  })
}

const vk = () => {
  return new Promise((resolve, reject) => {
    rl.question('')
  })
}


const main = async () => {
  await menu()
  await whatisnode()
  await name()
  await age()
  await year()
  await sex()
  rl.close()
}
main()
