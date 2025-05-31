console.log("Success");

function submitCredentials(event) {
        const userName = document.getElementById('user-name').value;
        const userEmail = document.getElementById('user-email').value;

        const userNameError = document.getElementById('user-name-error');
        const userEmailError = document.getElementById('user-email-error');

        if(userName==="" || userEmail === "") {
                if(userName === "") {
                        userNameError.style.display = "block";
                        userNameError.textContent = "Name Doesn't entered";
                        userNameError.style.color = "red";
                        userNameError.style.fontSize = "10px";
                }
                else if(userEmail === "") {
                        userEmailError.style.display = "block";
                        userEmailError.textContent = "Enter email";
                        userEmailError.style.color = "red"
                        userEmailError.style.fontSize = "10px";

                }
         } 
         
         else {
                  alert(`Name: ${userName}\nEmail: ${userEmail}`);
                  const apiUrl = 'https://fakestoreapi.com/users';
                 fetch(apiUrl).then(Response => {
                        if(!Response.ok) {
                                throw new Error("API fetch error")
                        }

                        return Response.json();
                 })
                 .then(data => {
                        data.forEach(element => {
                                console.log(element.username);
                                
                        });;

                        
                        const userNameExists = data.find(user => {
                                return userName === user.username;
                        });
                        console.log(userNameExists);

                        const userEmailexists = data.find(user => {
                                return userEmail === user.email;
                        });
                        //console.log(userEmailexists);
                        
                        if(userName !== userNameExists.username) {
                                alert("Please enter username like,\njohnd\nmor_2314\nkevinryan\ndonero\nderek\ndavid_r\nsnyder\nhopkins\nkate_h\njimmie_k")
                        }
                                const userCredentials = document.querySelector('.user-credentials');
                        const userDetail = document.createElement('div');
                        userDetail.classList.add("user-container");
                       

                
                        userDetail.innerHTML = `
                        <p>Identity : ${userNameExists.id}</p>
                        <p>User Name : ${userNameExists.username}</p>
                        <p>First Name : ${userNameExists.name.firstname},<span>Last Name : ${userNameExists.name.lastname}</span></p>
                        <p>E-Mail : ${userNameExists.email}</p>
                        <p>Password : ${userNameExists.password}</p>
                        <hr>
                        <h2>Address</h2>
                        <p>Geolocation is Latitude ${userNameExists.address.geolocation.lat},Longitude ${userNameExists.address.geolocation.long}</p>
                        <p>City : ${userNameExists.address.city}</p>
                        <p>Street : ${userNameExists.address.street}</p>
                        <p>Number : ${userNameExists.address.number}</p>
                        <p>Zip Code : ${userNameExists.address.zipcode}</p>
                        <hr>
                        <p>Phone Number : ${userNameExists.phone}</p>
                        <Button id="ok-button" >OKAY</button>`;
                
                        userCredentials.appendChild(userDetail);
                 });
}}

const okButton = document.getElementById('ok-button');
console.log(okButton);
