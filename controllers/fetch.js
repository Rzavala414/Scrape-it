const db = require("../modals");
const scrape = require("../public/js/scrape")


module.exports ={
    scrapeHeadlines: function(req,res){
        return scrape()
        .then(function(articles){
            return db.Headline.create(articles)
        })
        .then(function(dbHeadline){
            if(dbHeadline.length === 0){
                res.json({
                    message:"no new articles"
                })
            }else{
                res.json({
                    message:"added article"
                })
            }
        })
        .catch(function(err){
            res.json({
                message:'scrape completed'
            })
        })
    }
}
