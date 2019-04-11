var homeController = function(server){
    console.log('homeController listo');

    /*
    server.route('/')
    .get(function(req,res){
        res.send('Hola Mundo');
    });
    */

    server.route('/')

        .get(function (req, res){
            console.log('============================================================');
            console.log(req.user);
            if(req.user){
                if(req.user.provider == 'facebook'){
                    var name = req.user._json.name;
                    var url_foto = "http://graph.facebook.com/"+ req.user.id + "/picture";                
                }
                if(req.user.provider == 'twitter'){
                    var name = req.user.username;
                    var url_foto = req.user.photos[0].value;
                }
                res.render("home/index", {
                    user : name,
                    url_foto : url_foto
                });
            }else{
                console.log('no se ingreso');
                res.render('home/index');
            }
            
        });
};

module.exports = homeController;