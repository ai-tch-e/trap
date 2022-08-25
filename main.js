var fs = require('fs');
var path = require('path');

function new_dir(_dir){
    if(!fs.existsSync(_dir))
    fs.mkdir(`./${_dir}`,(err)=> {
        if(err) throw err;});
}
function remove_dir(_dir){
    if(fs.existsSync(_dir))
    fs.rmdir(`./${_dir}`,(err)=> {
        if(err) throw err;});
}
function new_file(_dir,_file,_content){
        if(!fs.existsSync(`./${_dir}/${_file}`))
        fs.writeFile(path.join(`./${_dir}`,`${_file}`),`${_content}`,(err)=>{
            if(err) throw err;});
}
function write_file(_dir,_file,_content){
    if(fs.existsSync(`./${_dir}/${_file}`))
    fs.appendFile(path.join(`./${_dir}`,`${_file}`),`\n${_content}`,(err)=>{
        if(err) throw err;});
}
function read_file(_dir,_file){
    if(fs.existsSync(`./${_dir}/${_file}`))
    fs.readFile(path.join(`./${_dir}`,`${_file}`),(err,_content)=>{
        if (err) throw err;
        console.log(`value: ${_content}`);
    });
}
function remove_file(_dir,_file){
    if(fs.existsSync(`./${_dir}/${_file}`))
    fs.unlink(path.join(`./${_dir}`,`${_file}`),(err)=>{
        if (err) throw err;});
}

var _dir = 'data';
var _file = 'data.txt';
var _content1 = 'new data';
var _content2 = 'another data';
new_dir(_dir);
new_file(_dir,_file,_content1);
write_file(_dir,_file,_content2);
read_file(_dir,_file);