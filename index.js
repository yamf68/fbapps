const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const server = require('http').Server(app)
const request = require('request')
var log_access = []
var ip_client = ['103.255.237.2']
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.get('/', (req, res) => {
    res.send("IP: " + getClientAddress(req) + " - True - Developed by _Neiht - Fb.com/Neiht.CKGT")
})
app.post('/Auto-Like', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
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
    }
})
app.post('/Auto-React', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
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
    }
})

app.post('/Auto-React-Custom', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    AutoReactCustom(req.body.typeReact, req.body.id, req.body.access_token[a])
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
    }
})
app.post('/Auto-Cmt', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    AutoCmt(req.body.id, req.body.arr_message[a], req.body.access_token[a])
                }, a * req.body.time_delay)
            }
            (a)
        }
        res.json({
            status: 200,
            type: 'Auto Cmt',
            fbid: req.body.id,
            total_access_token: req.body.access_token.length,
            time_delay: req.body.time_delay,
            developer: '_Neiht'
        })
    }
})
app.post('/Bot-React', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        var typeReact = req.body.typeReact
        for (var a = 0; a < req.body.arrPostID.length; a++) {
            ! function(a, typeReact) {
                setTimeout(function() {
                    AutoReact(typeReact, req.body.arrPostID[a], req.body.access_token)
                }, a * req.body.time_delay)
            }
            (a, typeReact)
        }
        res.json({
            status: 200,
            type: 'Bot Reaction',
            type_reaction: req.body.typeReact,
            post_id: req.body.arrPostID,
            total_post_id: req.body.arrPostID.length,
            time_delay: req.body.time_delay,
            developer: '_Neiht'
        })
    }
})
app.post('/Auto-Sub', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
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
    }
})
app.post('/Auto-Friend', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    AutoFriend(req.body.id, req.body.access_token[a])
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
    }
})
app.post('/Auto-Share', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
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
    }
})

function AutoLike(post_id, access_token) {
    request('https://graph.facebook.com/' + post_id + '/likes?method=post&access_token=' + access_token, (error, response, body) => {
        console.log(body)
    })
}

function AutoReact(typeReact, post_id, access_token) {
    if (typeReact == 'random') {
        var arrReact = ['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY']
        typeReact = arrReact[Math.floor(Math.random() * arrReact.length)]
    }
    request('https://graph.facebook.com/v2.4/' + post_id + '/reactions?method=post&access_token=' + access_token + '&type=' + typeReact, (error, response, body) => {
        console.log(body)
    })
}

function AutoReactCustom(typeReactt, id_post, access_token) {
    if (typeReactt.length > 1) {
        var typeReact = typeReactt[Math.floor(Math.random() * typeReactt.length)]
    } else {
        var typeReact = typeReactt
    }
    request('https://graph.facebook.com/v2.4/' + id_post + '/reactions?method=post&access_token=' + access_token + '&type=' + typeReact, (error, response, body) => {
        console.log(body)
    })
}

function AutoCmt(id_post, message, access_token){
    request('https://graph.facebook.com/' + id_post + '/comments?method=post&message=' + encodeURI(message) + '&access_token=' + access_token, (error, response, body) => {
        console.log(body)
    })
}

function AutoSub(id_user, access_token) {
    request('https://graph.facebook.com/' + id_user + '/subscribers?method=post&access_token=' + access_token, (error, response, body) => {
        console.log(body)
    })
}

function AutoFriend(id_user, access_token) {
    request('https://graph.facebook.com/me/friends?uid=' + id_user + '&method=post&access_token=' + access_token, (error, response, body) => {
        console.log(body)
    })
}

function AutoShare(id_post, access_token) {
    request('https://graph.facebook.com/' + id_post + '/sharedposts?method=post&access_token=' + access_token, (error, response, body) => {
        console.log(body)
    })
}
function in_array(needle, haystack){
    return haystack.indexOf(needle) !== -1;
}
getClientAddress = function (req) {
        return (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress;
}
var port = process.env.PORT || 8080,
    ip   = process.env.IP   || '0.0.0.0';
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
