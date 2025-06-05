let studentsData = [];
const btn = document.getElementById("submit");
btn.addEventListener('click', function () {
    // accessing  the input values using DOM
    let name = document.getElementById("name").value;
    let batch = document.getElementById("batch").value;
    let age = document.getElementById("age").value;
    let score = document.getElementById("score").value;


    // console.log("meow", name1);
    // console.log("meow", batch);
    // console.log("meow", age);
    // console.log("meow", score);


    const studentData = {
        name: name,
        batch: batch,
        age: age,
        score: score
    }

    // console.log(studentData)

    // storing studentdata objects in an array
    studentsData.push(studentData)

    // clearing the input fields after storing it .So for that we have to access the inputfileds again 

    console.log(studentsData)

    // var table = document.getElementById("table");
    //   var row = table.insertRow(0);
    //   var cell1 = row.insertCell(0);
    //   var cell2 = row.insertCell(1);
    //    var cell3 = row.insertCell(2);
    //     var cell4 = row.insertCell(3);


    //   cell1.innerHTML=name
    //   cell2.innerHTML =batch
    //    cell3.innerHTML = age;
    //     cell4.innerHTML = score

    const outerCont = document.getElementById('out-cont');
    outerCont.innerHTML = studentsData.map((item, idx) => {
        return `
        <div class="row">
            <div class="col" >${idx+1}</div>
            <div class="col" >${item?.name}</div>
            <div class="col" >${item?.batch}</div>
            <div class="col">${item?.age}</div>
            <div class="col">${item?.score}</div>
            <div class="col"><button id="edit">Edit</button>
            <button id="delete">Delete</button> </div>
            
        </div>
    `;
    }).join('');



    document.getElementById("name").value = ''
    document.getElementById("batch").value = ''
    document.getElementById("age").value = ''
    document.getElementById("score").value = ''



})


