// add = document.getElementById("add");
// var tit;
// var desc;
// function getAndUpdate() {
//     console.log("updating list");
//     tit = document.getElementById('title_todo').value;
//     desc = document.getElementById('description_todo').value;

//     if (tit == "" && desc == "") {
//         console.log("null");
//     }
//     else {
//         // var itemsJsonArray=['title_todo','desc'];
//         itemsJsonArrayStr = localStorage.getItem('itemsJson');
//         itemsJsonArray = JSON.parse(itemsJsonArrayStr);
//         if (itemsJsonArray == null) {
//             console.log("null itemsJsonArray");
//             var itemsJsonArray = [];
//             localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
//             itemsJsonArray.push([tit, desc]);
//             localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
//             tit = document.getElementById('title_todo').value = "";
//             desc = document.getElementById('description_todo').value = "";
//         }
//         else {
//             console.log(itemsJsonArray, 'jojan');
//             itemsJsonArray.push([tit, desc]);
//             localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
//             console.log("item added");
//             tit = document.getElementById('title_todo').value = "";
//             desc = document.getElementById('description_todo').value = "";
//         }
//     }
//     update();
// }

// function update() {
//     //populate the table
//     // var itemsJsonArray=['title_todo','desc'];
//     // localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
//     itemsJsonArrayStr = localStorage.getItem('itemsJson');
//     itemsJsonArray = JSON.parse(itemsJsonArrayStr);
//     console.log(itemsJsonArray);
//     if (itemsJsonArray == null) {
//         console.log("the array is null");
//     }
//     else {
//         let tablebody = document.getElementById("tablebody");
//         let str = "";
//         let arrLength = itemsJsonArray.length;
//         console.log(arrLength);
//         itemsJsonArray.forEach((element, index) => {
//             str += `
//             <tr>
//             <th scope="row">${++index}</th>
//             <td>${element[0]}</td>
//             <td>${element[1]}</td>
//             <td><button class="btn btn-sm btn-danger" onclick="deleteList(${--index})">Delete</button></td>
//         </tr>
//             `;
//         });
//         tablebody.innerHTML = str;
//         tit = document.getElementById('title_todo').value = "";
//         desc = document.getElementById('description_todo').value = "";
//     }

// }
// add.addEventListener("click", getAndUpdate);
// update();
// console.log("bahahah lol");

// function deleteList(itemIndex) {
//     console.log("delete item ", itemIndex);
//     itemsJsonArrayStr = localStorage.getItem('itemsJson');
//     itemsJsonArray = JSON.parse(itemsJsonArrayStr);
//     //Delete item element from the array 

//     itemsJsonArray.splice(itemIndex, 1);

//     localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
//     update();
// }