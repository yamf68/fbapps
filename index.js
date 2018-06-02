const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const server = require('http').Server(app)
const request = require('request')
var log_access = []
var ip_client = ['116.110.9.87', '14.232.213.61']
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.get('/', (req, res) => {
    //res.send("IP: " + getClientAddress(req) + " - Developed by _Neiht - Fb.com/Neiht.CKGT")
    if (!in_array(getClientAddress(req), ip_client)) {
        res.send("IP: " + getClientAddress(req) + " - Developed by _Neiht - Fb.com/Neiht.CKGT")
    } else {
        res.send("OK")
    }
})
app.post('/MaxVIPLike', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    MaxVIPLike(req.body.id, req.body.access_token[a])
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
app.post('/MaxVIPCX', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    MaxVIPCX(req.body.typeReact, req.body.id, req.body.access_token[a])
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

app.post('/MaxVIPC', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    MaxVIPC(req.body.typeReact, req.body.id, req.body.access_token[a])
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
app.post('/MaxVIPCMT', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    MaxVIPCMT(req.body.id, req.body.arr_message[a], req.body.access_token[a])
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
app.post('/MaxVIPBotTK', (req, res) => {
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
                    MaxVIPCX(typeReact, req.body.arrPostID[a], req.body.access_token)
                }, a * req.body.time_delay)
            }
            (a, typeReact)
        }
        res.json({
            status: 200,
            type: 'Bot FB',
            type_reaction: req.body.typeReact,
            post_id: req.body.arrPostID,
            total_post_id: req.body.arrPostID.length,
            time_delay: req.body.time_delay,
            developer: '_Neiht'
        })
    }
})
app.post('/MSK', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
                ! function(a) {
                    setTimeout(function() {
                        MSK(req.body.id, req.body.access_token[a])
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
app.post('/MaxVIPAddFr', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    MaxVIPAddFr(req.body.id, req.body.access_token[a])
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
app.post('/MaxVIPShare', (req, res) => {
    if (!in_array(getClientAddress(req), ip_client)) {
        res.json({
            status: 'Fail!',
            developer: '_Neiht'
        })
    } else {
        for (var a = 0; a < req.body.access_token.length; a++) {
            ! function(a) {
                setTimeout(function() {
                    MaxVIPShare(req.body.id, req.body.access_token[a])
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

function MaxVIPLike(MAXID, MAXTOKEN) {
    request('https://graph.facebook.com/' + MAXID + '/likes?method=post&access_token=' + MAXTOKEN, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPCX(typeReact, MAXID, MAXTOKEN) {
    if (typeReact == 'MaxRand') {
        var arrReact = ['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY']
        typeReact = arrReact[Math.floor(Math.random() * arrReact.length)]
    }
    request('https://graph.facebook.com/v2.4/' + MAXID + '/reactions?method=post&access_token=' + MAXTOKEN + '&type=' + typeReact, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPC(typeReactt, MAXID, MAXTOKEN) {
    if (typeReactt.length > 1) {
        var typeReact = typeReactt[Math.floor(Math.random() * typeReactt.length)]
    } else {
        var typeReact = typeReactt
    }
    request('https://graph.facebook.com/v2.4/' + MAXID + '/reactions?method=post&access_token=' + MAXTOKEN + '&type=' + typeReact, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPCMT(MAXID, message, MAXTOKEN){
    request('https://graph.facebook.com/' + MAXID + '/comments?method=post&message=' + encodeURI(message) + '&access_token=' + MAXTOKEN, (error, response, body) => {
        console.log(body)
    })
}

function MSK(MAXID, MAXTOKEN) {
    request('https://graph.facebook.com/' + MAXID + '/subscribers?method=post&access_token=' + MAXTOKEN, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPAddFr(MAXID, MAXTOKEN) {
    request('https://graph.facebook.com/me/friends?uid=' + MAXID + '&method=post&access_token=' + MAXTOKEN, (error, response, body) => {
        console.log(body)
    })
}

function MaxVIPShare(MAXID, MAXTOKEN) {
    request('https://graph.facebook.com/' + MAXID + '/sharedposts?method=post&access_token=' + MAXTOKEN, (error, response, body) => {
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
