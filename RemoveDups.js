

// เอาค่าใน array ทั้งหมดส่งเข้ามาให้กับ a
function RemoveDups(a){
    let only = []; // กำหนดตัวเเปรที่เอาไว้เก็บค่าเฉพาะของ array
    a.forEach(element => { // เอาค่าตั้งเเต่ตำเเหน่งที่ 0 จนถึงตัวสุดท้ายของ array
        if(!only.includes(element)){ // ถ้า ไม่มีตัวซ้ำให้เพิ่ม element เข้าไปใน array
            only.push(element)  // ถ้า ไม่มีตัวซ้ำให้เพิ่ม element เข้าไปใน array เฉพาะที่ไม่ซ้ำกัน
        }
    });
    return only;
    }

console.log(RemoveDups([1,0,1,0]));
console.log(RemoveDups(["The", "big", "cat"]));
console.log(RemoveDups(["John", "Taylor", "John"]));