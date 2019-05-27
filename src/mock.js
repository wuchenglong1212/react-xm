import Mock from 'mockjs';

let data=[];
(function toData(num) {//参数分别表示  几条数据    字数
    let pc = {
        "pc1": Mock.Random.cword(4),
        "pc2": Mock.Random.cword(4),
        "pc3": Mock.Random.cword(4),
        "pc4": Mock.Random.cword(4)
    };
    let phone = {
        "p1": Mock.Random.cword(4),
        "p2": Mock.Random.cword(4),
    };
    let msg = {
        "msg1": Mock.Random.cword(5,15),
        "msg2": Mock.Random.cword(5,15),
        "msg3": Mock.Random.cword(5,15),
        "msg4": Mock.Random.cword(5,15),
        "msg5": Mock.Random.cword(5,15),
    };
    let det = {
        "det1": {
            head:Mock.Random.cword(4),
            det:Mock.Random.cword(4),
        },
        "det2": {
            head:Mock.Random.cword(4),
            det:Mock.Random.cword(4),
        },
        "det3": {
            head:Mock.Random.cword(4),
            det:Mock.Random.cword(4),
        },
        "det4": {
            head:Mock.Random.cword(4),
            det:Mock.Random.cword(4),
        },
    };
    data.push(pc,phone,msg,det);
})();
// console.log(data);

Mock.mock('/data', 'get', data);