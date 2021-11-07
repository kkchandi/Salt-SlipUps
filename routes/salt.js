var path = require('path')
var child_process = require("child_process");

function anagramCheck(req,res,next) {
    var word = req.query.word;
    word = word.toLowerCase();
    res.locals.word = word;
    
    var pa = __dirname
    pa = pa.slice(0,pa.lastIndexOf('/'))
    
    var spawn = child_process.spawn;
    
    var py_script = path.join(pa, 'resources/get_prediction.py');
    console.log("python path at line 119")
    console.log(py_script)
    
    var process = spawn('python', [py_script, word, letters]);
    
    var result = "";
    
    process.stdout.on('data', function(data) {
        result = data.toString()
        console.log("anagramCheck result at line 130 " + result)
        
        res.locals.ac = result;
        console.log('res.locals arg')
        console.log(res.locals.ac)
        next()
    })
}