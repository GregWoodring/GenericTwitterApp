let todoList = [];

module.exports = {

    postListItem: function(req, res){
        todoList.push(req.body);
        res.send(todoList).status(200);
    },

    getList: function(req, res){
        // console.log(req.query)
        if(req.query.text){
            let { text : queryText } = req.query;
            res.send(todoList.filter(item => item.text.includes(queryText))).status(200);
            console.log(todoList.filter(item => item.text.includes(queryText)))
        } else{
            console.log(todoList);
            res.send(todoList).status(200);
        }
    },

    editListItem: function(req, res){
        let { id } = req.params;
        todoList[id] = req.body;
        res.send(todoList).status(200);
    },

    deleteListItem: function(req, res){
        let { id } = req.params;
        todoList.splice(id, 1);
        res.send(todoList).status(200);
    }
}




