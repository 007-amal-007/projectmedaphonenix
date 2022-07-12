//fake api doing get and post call vice versa 
//enter the input data and that will enter intot the table after you add
//fake ai for render the data to ui
//https://mocki.io/v1/232b9082-191f-4cf4-a847-2bf6e27af6bb
//post call not working due to it is a fak api

  function fetchData(){
    fetch("https://mocki.io/v1/232b9082-191f-4cf4-a847-2bf6e27af6bb")
        .then(res =>{
            if(!res.ok){
                throw Error('error');
            }
           return res.json()
        })
        .then(data =>{
            console.log(data);
            const html =  data.map(user =>{
                return `<tr>
                <td>${user.title}</td>
                <td>${user.date}</td>
            </tr>`
            }).join('')
            console.log(html);
            document
            .querySelector('#userList')
            .insertAdjacentHTML("afterend",html)
        })
        .catch(error =>{
            console.log(error);
        })
}

fetchData();


//function to call external ai to display dummy data