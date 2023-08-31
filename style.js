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

    //  console.log(data.data.news_category);

 

}
const handleLoadNews = async ( catagoryId)=>
    {
        const response=await fetch(`https://openapi.programming-hero.com/api/news/category/${catagoryId}`)

        const data=await response.json();

        

            const card=document.getElementById("card-container");
            // 
            card.innerHTML="";

            data.data?.forEach((news)=>
            
           
            {
                console.log(news);
                const div=document.createElement("div");
               card.classList="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20"
                div.innerHTML=`
                <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="${news?.image_url}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${news.title.slice(0,40)}
                  <button class="btn btn-secondary">${news.rating?.badge}</button>
                  </h2>
                 
                  <p>${news.details.slice(0,80)}</p>
                  <h3>total views:${news.total_view?news.total_view:"no views"}</h3>
                 
                </div>
                <div class=" flex gap-5">
                <img src="${news.author?.img}" alt="none" class="w-14 rounded-full " </img> 
                <div>
                <h6>${news.author?.name} </h6>
                <h6>${news.author?.published_date} </h6>
                </div>
                <div >
                <button onclick="handleModal("${news.news_id}")" class="btn btn-primary ">details</div>

                </div>
               

              </div>
                `
                card.appendChild(div)

            })
         

        
            // console.log(data.data);



    };
    const handleModal=async (newsId)=>{

      const response=await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`);

      const data=await response.json();

      console.log(data);

      const modalcontainer=document.getElementById("modal-container")

      const div=document.createElement('div')
        div.innerHTML=`
      
      
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <form method="dialog" class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </div>
          </form>
        </dialog>
        `  
        modalcontainer.appendChild(div) ; 
        const modal=document.getElementById("my_modal_5") ;
        modal.showModal(); 
    }



     handleCtagory();
     handleLoadNews("01");