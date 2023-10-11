exports.render=function (req,res){
    res.render('home');
   
};
exports.renderAbout=function (req,res){
    res.render('about');
   
};

exports.renderService=function(req,res){
    res.render('service');
};
exports.renderProject=function(req,res){

    res.render('project');
};
exports.renderContact=function(req,res){
res.render('contact')
}