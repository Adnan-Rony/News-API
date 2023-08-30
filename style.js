const handleCtagory = async ()=>

{
    
   

    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");

    const data=await response.json();

    const tabContainer=document.getElementById('tab-container');

    data.data.news_category.slice(0,3).forEach(catagory=>
        {
            const div=document.createElement('div');
            div.className="tabs flex justify-center mt-10"
            div.innerHTML=`
           
            <a onclick="handleLoadNews('${catagory.category_id}')" class="tab ">${catagory.category_name}</a> `

          tabContainer.appendChild(div);

        })

     console.log(data.data.news_category);

 

}
const handleLoadNews = async ( catagoryId)=>
    {
        const response=await fetch(`https://openapi.programming-hero.com/api/news/category/${catagoryId}`)

        const data=await response.json();

        console.log(data.data);



    };





     handleCtagory();