var friendsData=require("../data/friends");

module.exports=function(app){
    app.post("/api/friends",function(req,res){
        //Push New Survey Submission in Friend Data Array 
        friendsData.push(req.body);

        var matched=friendsData[0];
        var totDif=0;
        var lowest=100;

        //Loop Through Friends to Find Match
        for(var i=0;i<friendsData.length-1;i++){
            totDif=0;
            //Loop Through Current Possible Friend and Users Scores to Get Total Difference
            for(var j=0;j<10;j++){
                let diff=Math.abs(req.body.scores[j]-friendsData[i].scores[j]);

                totDif+=diff;
            }

            //If Total Difference is Lower Than Current Lowest Then Current Possible Friend Becomes the matched
            if(totDif<lowest){
                matched=friendsData[i];
                lowest=totDif;
            }
        }

        res.json(matched);
    });
};