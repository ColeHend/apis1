const getResBtn = document.querySelector('button');
function buttonClicked() {
    console.log("button clicked");
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((res)=>{
        for (let i = 0; i < res.data.results[0].residents.length; i++) {
            axios.get(res.data.results[0].residents[i])
            .then((resid)=>{
                let h2Elem = document.createElement('h2');
                h2Elem.innerText = resid.data.name
                document.getElementById("names").appendChild(h2Elem)
            })
            
        }
    })
}
getResBtn.addEventListener('click',buttonClicked)