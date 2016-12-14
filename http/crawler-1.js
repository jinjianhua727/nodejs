var http = require("http")
var cheerio = require("cheerio")
var url = "http://www.imooc.com/learn/348"

function filterChapters (html){
	var $ = cheerio.load(html)
	var chapters = $(".chapter ")
	// [{
	// 	chapterTitle : "",
	// 	videos:[
	// 		{
	// 			title : "",
	// 			id : ""
	// 		}
	// 	]
	// }]
	
	var courseData = [];
	chapters.each(function(){
		var chapter = $(this);
		chapter.find("strong").find(".chapter-info").remove()
		var chapterTitle = chapter.find("strong").text();
		var videos = chapter.find(".video").children("li");
		var chapterData = {
			chapterTitle : chapterTitle,
			videos :[]
		}

		videos.each(function(){
			var video = $(this).find(".J-media-item")
			var videoTitle = video.text();
			var id = video.attr("href").split("video/")[1]
			chapterData.videos.push({
				title : videoTitle,
				id : id
			})
		})
		courseData.push(chapterData)
	})
	return courseData;
}
function printCourseInfo(data) {
	data.forEach(function(item){
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle.replace(/\s/g, ""))

		item.videos.forEach(function(video){
			console.log(" 【" +video.id+"】 " +video.title.replace(/\s/g, ""))
		})
	})
}

http.get(url,function(res){
	var html = "";
	res.on("data",function(data){
		html += data;
	})
	res.on("end",function(){
		var courseData = filterChapters(html)
		printCourseInfo(courseData)
	})
}).on("error",function(){
	console.log("获取课程信息失败")
})