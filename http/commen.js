var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content' :'给自己灌下水',
})

var options = {
	hostname:'http://www.qdfuns.com',
	// port :80,
	path : '/notes/17453/dd6050a67219e9c10f58576eff899089.html',
	method :'POST',
	headers :{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'NAB5_2132_saltkey=F1K4671Y; NAB5_2132_lastvisit=1481669394; NAB5_2132_ulastactivity=4ef1r%2F%2BeFC1c2ZL%2FAY0cZaLxTVbKEHWZDDJVyusoUalvS4MVDWCW; NAB5_2132_auth=8aebEMl6iY2IoTiVUwqVvpw8NV2LrYmfJ7DCRwe%2Ba4cucC9zb830pw2U1911EvOiChr0yWzNgwMVrM2cCg5Mn8hs9g; NAB5_2132_lip=123.123.251.137%2C1479118702; NAB5_2132_lastact=1481673044%09notes.php%09view; NAB5_2132_sid=IGftTH; CNZZDATA1260725038=978293875-1481670496-null%7C1481670496; Hm_lvt_40e1a27575fabc179832167ea1ef3194=1481673077; Hm_lpvt_40e1a27575fabc179832167ea1ef3194=1481673126',
		// 'Host':'www.qdfuns.com',
		'Origin':'http://www.qdfuns.com',
		'Referer':'http://www.qdfuns.com/notes/17453/dd6050a67219e9c10f58576eff899089.html',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('status:' + res.statusCode)
	console.log('headers' + JSON.stringify(res.headers))

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})
	res.on('end',function(){
		console.log('评论完毕')
	})
})

req.on('error',function (e) {
	console.log('error' + e.message)
})
req.write(postData)
req.end()