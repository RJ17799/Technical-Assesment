// console.log(document.body)


const span = getElementById("test1");
const p = getElementById("test2");
const span3 = getElementById("test3");
const span4 = getElementById("test4");
const button = getElementById("btn");

const div = getElementById("sibling-id");
const childDiv = getElementById("child");
const sub = getElementById("sub");
const childDiv1 = getElementById("child1");
console.log({span,p,span3,span4,div,childDiv,'button':button});
function getElementById(id){
    let value = null;
    let body = document.body.childNodes;
    function traversal(currentNode){
        console.log('currentNode',currentNode);
         currentNode.forEach((val)=>{
            if(val.id == id){
                value = val;
                return; 
            }
            if(val.childNodes.length > 0)
                traversal(val.childNodes);
        })
        return value;
    }
    return traversal(body);
}
