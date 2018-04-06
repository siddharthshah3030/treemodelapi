// to use this api 
// first send the tree or system of bosses and workers via post as json
// in the format [[boss1,worker1],[boss2,worker2],[boss3,worker3]]
// {
//  "tree": [[1,2],[1,3],[2,4],[2,6],[4,5],[6,7]]
// }
// then send the checking request via post [boss, worker] (json)
// {
//  "obj": [2,6]
// }

let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());


app.post('/populate', function (req, res) {
  tree =   populate(req.body.tree).slice();
  res.send('data  recieved successfully');
});


app.post('/check', function (req, res) {
  

  if (tree.length == 0) {
    res.send("please send the data first")
  } else {
    res.send(checkTree(req.body.obj));
  }
  
      });


// our      tree
     let tree     = [];

function populate(data) {
  let tree = [];

  data.forEach(function (e) {
    if (!tree[e[0]]) {
            tree[e[0]]   = [];



      tree[e[0]].push(e[1]);
    } else 

    {
      tree[e[0]].push(e[1]);
              }



  });

  return tree;
};

function checkTree(data) {
  let flag = false;

  let q = [data[0]];
       

       let p = null;

  // start search
  while (q.length > 0) {
    p = q.shift();

    if (tree[p]) {
      for (let i = 0; i < tree[p].length; i++) {
        if  (tree[p][i] == data[1]) {
          console.log(tree);
          console.log("true inside check");
          return true;
 


        }
      q.push(tree[p][i]);
} } 
  }

  console.log(tree);
  console.log("false");
  return flag;
}








//-------------------------------------

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("API has started!!!");
});


