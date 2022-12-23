function tab1_To_tab2() {
    var table1 = document.getElementById('table1'),
        table2 = document.getElementById('table2'),
        checkboxes = document.getElementsByName('check-tab1')
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            //create new row and cell
            var newRow = table2.insertRow(table2.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1)
            //add values to  the cell
            cell1.innerHTML = table1.rows[i + 1].cells[0].innerHTML,
            cell2.innerHTML = "<input type='checkbox' name='check-tab2'>"
            //remove the rows from first table
            var index = table1.rows[i + 1].rowIndex
            table1.deleteRow(index)
            i--;
        }
    }

}


function tab2_To_tab1() {
    var table1 = document.getElementById('table1'),
        table2 = document.getElementById('table2'),
        checkboxes = document.getElementsByName('check-tab2')
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            //create new row and cell
            var newRow = table1.insertRow(table1.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1)
            //add values to  the cell
            cell1.innerHTML = table2.rows[i + 1].cells[0].innerHTML
            cell2.innerHTML = "<input type='checkbox' name='check-tab1'>"
            //remove the rows from first table
            var index = table2.rows[i + 1].rowIndex
            table2.deleteRow(index)
            i--;
        }
    }

}


































//
// function tab1_To_tab2() {
//     var table1 = document.getElementById('table1'),
//         table2 = document.getElementById('table2'),
//         checkboxes = document.getElementsByName('check-tab1')
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             //create new row and cell
//             var newRow = table2.insertRow(table2.length),
//                 cell1 = newRow.insertCell(0)
//             //add values to  the cell
//             var cells=table1.getElementsByTagName('td')
//             cell1.innerHTML = `${cells[i].innerHTML}`
//             //remove the rows from first table
//             var index = table1.rows[i + 1].rowIndex
//             table1.deleteRow(index)
//             i--;
//         }
//     }
//
// }
//
//
//
//
// function tab2_To_tab1() {
//     var table1 = document.getElementById('table1'),
//         table2 = document.getElementById('table2'),
//         checkboxes = document.getElementsByName('check-tab2')
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             //create new row and cell
//             var newRow = table1.insertRow(table1.length),
//                 cell1 = newRow.insertCell(0)
//             //add values to  the cell
//
//             var cells2=table2.getElementsByTagName('td')
//             cell1.innerHTML = `${cells2[i].innerHTML}`
//             //remove the rows from first table
//             var index = table2.rows[i + 1].rowIndex
//             table2.deleteRow(index)
//             i--;
//         }
//     }
//
// }
//
//
//
//
//
//
