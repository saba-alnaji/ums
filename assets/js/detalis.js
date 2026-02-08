const getUser = async () => {
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId')
    const response = await axios.get(`http://ums12.runasp.net/api/users/${userId}`);
    if (response.status == 200) {
        return response.data;
    }
}
const displayUserData = async()=>{
    const response =await getUser();
    console.log(response);
    document.querySelector(".userName").textContent=response.data.name;
}
displayUserData();