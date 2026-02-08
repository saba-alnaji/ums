const getUsers = async () => {
    const response = await axios.get(`https://ums12.runasp.net/api/users?limit=1000`);
    return response.data;
}
const displayUsers = async () => {
    const result = await getUsers();
    const users = result.users.map((user) => {
        return `
        <tr>
          <td>${user.name}</td> 
          <td> <img src="${user.imageUrl}" width=""100px/></td>
          <td>
            <button class="btn btn-outline-danger" onclick=deleteUser(${user.id})>Delete</button>
            <a href='./detalis.html?userId=${user.id}' class='btn btn-outline-info'>Detalis</a>
          
          </td>

        </tr>
        `
    }).join(" ")
    console.log(users);
    document.querySelector(".users .users-data").innerHTML = users;
} 
displayUsers();
const deleteUser =async(id)=>{
    const response = await axios.delete(`https://ums12.runasp.net/api/users/ ${id}`);
    console.log(response);
}