const axios = require("axios");
const cheerio = require("cheerio");

function scrape(){
    return axios.get("http://www.nytimes.com").then(function(res){
        var $ = cheerio.load(res.data)
        var articles = [];

        $(".assetWrapper").each(function(i,element){
            var head = $(this).find("h2").text().trim()
            var url = $(this).find("a").attr("href")
            var sum = $(this).find("p").text().trim()
            if(head && sum && url){
                var dataToAdd = {
                    headline:head,
                    summary:sum,
                    url:url
                }
                articles.push(dataToAdd)
            }
        })
        return articles;
    })
}

module.export = scrape;