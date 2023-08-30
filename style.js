const handleCtagory = async ()=>

{
    // console.log("adnan-1");

    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");

    const data=await response.json();

    console.log(data);



//    .then(res=>res.json())
//    .then(data =>console.log(data))
//    .catch(err=> console.log(err))



  

    // console.log("adnan-02");
}

handleCtagory();