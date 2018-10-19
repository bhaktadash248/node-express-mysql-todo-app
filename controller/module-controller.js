var data = [{item : 'bhkta'},{item : 'lucky'}, {item: 'dash'}]

module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todo:data});
    });

    app.post('/todo', function(req, res){

    });

    app.delete('/todo', function(req, res){

    });

};