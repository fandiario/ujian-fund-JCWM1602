function showDataUsers(index) {
    let getTable = document.getElementById ("users-data")
    let getTbody = getTable.getElementsByTagName ("tbody")[0]

    let tr = ""

    for (let i = 0; i < usersData.length; i++) {

        if (i == index) {
            tr += `
            <tr>
                <td>
                    ${i + 1}
                </td>
                <td>
                    <input type="text name="data-username" value="${usersData[index].username}" class="input-edit-user">
                </td>
                <td>
                <input type="text name="data-email" value="${usersData[index].email}" class="input-edit-user">
                </td>
                <td>
                    <select name="data-role" class="input-edit-user">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
            </select>
                </td>
                <td>
                    <input type="button" name="button-save" value="SAVE" onClick="onSaveUsers(${index})">
                    <input type="button" name="button-cancel" value="CANCEL" onClick="showDataUsers()">
                </td>
            </tr>
            `

        } else {
            tr += `
            <tr>
                <td>
                    ${i + 1}
                </td>
                <td>
                    ${usersData[i].username}
                </td>
                <td>
                    ${usersData[i].email}
                </td>
                <td>
                    ${usersData[i].role}
                </td>
                <td>
                    <input type="button" name="button-edit" value="EDIT" onClick="editUsers(${i})">
                    <input type="button" name="button-delete" value="DELETE" onClick="deleteUsers(${i})">
                </td>
            </tr>
            `
        }
        
        
    }

    getTbody.innerHTML = tr
}

showDataUsers()

function addUsers() {
    let inputs = document.getElementsByClassName ("input-data")
    
    let username = inputs[0].value
    let email = inputs[1].value
    let role = inputs[2].value

    if (username && email && role) {
        usersData.push ({
            username: username,
            email: email,
            role: role
        })

        showDataUsers()

        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""

    } else {
        alert ("You have to fill all the required data")
    }
}

document.getElementById ("submit-data").addEventListener("click", addUsers)

function deleteUsers(i) {
    let confirmBox = confirm (`Are you sure you want to delete ${usersData[i].username} ?`)

    if (confirmBox == true) {
        usersData.splice (i, 1) 
        alert (`Data has been deleted.`)

        showDataUsers()
    }

}

function editUsers(i) {
    let confirmBox = confirm (`Are you sure you want to edit ${usersData[i].username} ?`)

    if (confirmBox == true) {
        showDataUsers (i)
    }
}

function onSaveUsers (i) {
    let inputs = document.getElementsByClassName ("input-edit-user")

    let username = inputs[0].value
    let email = inputs[1].value
    let role = inputs[2].value

    if (username && email && role) {
        usersData[i].username = username
        usersData[i].email = email
        usersData[i].role = role

        alert ("Data has been saved")

        showDataUsers()
    }
}
