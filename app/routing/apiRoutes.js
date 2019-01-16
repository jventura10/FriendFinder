var friendData=("../data/friends");

module.exports=function(app){
    app.post("/api/friends",function(req,res){
        //Push New Survey Submition in Friend Data Array 
        friendData.push(req.body);

    });
};