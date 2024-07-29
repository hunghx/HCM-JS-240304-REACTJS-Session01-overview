import React from 'react'

export default function Main() {
    // let , const  : ko cho gán giá trí trước khi khai báo 
    // const name = "Nguyễn Văn A";
    let str = 'Hello'
    // template literals : nối chuỗi
    // let template = `chào ${name}`;
    // arrow function : (...args) => {  statements  }
    const hanldeChange = () => {
        console.log("đã bấm vào nút button");

    }
    // destructoring : phá vỡ cấu trúc {mảng} và {object}

    const array = [1, 2, 3, 4];
    // let a = array[0];
    // let b = array[1];
    let [a, b, ...c] = array;

    console.log(a, b);
    console.log("c",...c);
    

    const obj = {
        id: 1,
        "tên" : 'Huỳnh Tâm Anh'
    }
    
   
    
    
    // rest parameter + spread operator : (...)

    // tính tổng n số truyền vào 
    const sum = (...args: any)=>{
        let s = 0;
        for(let i=0;i< args.length;i++){
            s += args[i];
        }
        return s;
    }
    console.log(sum(1,2,3));
    console.log(sum(1,2,3,4));
    console.log(sum(1,2,3,4,5));

    // sao chép mảng 
    const copyArray = [-10,...array,10] ;  // -10,1,2,3,4,10
    const copyObj = {...obj, sex : true};
    console.log(copyObj);
    
    
    // cho 1 đối tượng 
    let person = {
    
    }
    // tạo hàm thêm thuộc tính cho đối tượng 
    const addProps = (key: string, value : string)=>{
        // thêm thuoc tính cho object person 
        person = {...person, [key] : value }
    }
    addProps ("age",'20');
    addProps ("name",'nguyen văn an');
   
    let arr: number[] = [];
    // ạo hàm thêm 1 số vào đầu mảng : addFirst(n :number)
    // ạo hàm thêm 1 số vào cuối mảng : addLast(n :number)
    const addFirst = (n :number)=>{
        arr = [n , ...arr]
    }
    
    const addLast = (n :number)=>{
        arr = [ ...arr, n]
    }


    return (
        <div>
            {/* {template} */}
            <button onClick={hanldeChange}>Ấn vào đây</button>
        </div>
    )
}
