function login () { 
    let log = $('#login').val()
    let pas = $('#passw').val()

    $.get('auth.php', {login: log, password: pas}, function (data) { 
        let otvet = JSON.parse(data)
        //если произошла ошибка
        if ('error' in otvet) { 
            alert(otvet['error']['text'])
        }
        else if ('user' in otvet) { 
            lockalStorage['token'] = otvet['user']['token']
            lockalStorage['expired'] = otvet['user']['expired']
            window.location.href = "tovary.html"
        }
        else { 
            alert('непрежвиденная ошибка')
            console.log(data)
        }
    })
}