const items = [
    {
        id: 1,
        category: "lunch",
        title: "buttermilk pancakes",
        img: "bugger.webp",
        desc: `I'm baby woke milkshk wolf bitters live edge blue
            bottle, hammock`
    },
    {
        id: 2,
        category: "lunch",
        title: "buttermilk pancakes",
        img: "bugger.webp",
        desc: `I'm baby woke milkshk wolf bitters live edge blue
            bottle, hammock`
    },
    {
        id: 3,
        category: "shakes",
        title: "buttermilk pancakes",
        img: "bugger.webp",
        desc: `I'm baby woke milkshk wolf bitters live edge blue
            bottle, hammock`
    },
    {
        id: 4,
        category: "shakes",
        title: "buttermilk pancakes",
        img: "bugger.webp",
        desc: `I'm baby woke milkshk wolf bitters live edge blue
            bottle, hammock`
    },
    {
        id: 5,
        category: "lunch",
        title: "buttermilk pancakes",
        img: "bugger.webp",
        desc: `I'm baby woke milkshk wolf bitters live edge blue
            bottle, hammock`
    },
    {
        id: 6,
        category: "breakfast",
        title: "buttermilk pancakes",
        img: "bugger.webp",
        desc: `I'm baby woke milkshk wolf bitters live edge blue
            bottle, hammock`
    }
]
//console.log(items);

const containerDiv = document.querySelector('.container')
const buttonsBtn = document.querySelector('.buttons')
//console.log(containerDiv);

window.addEventListener('DOMContentLoaded', function(){
    displayItems(items)
    displayButtons()
})






function displayItems(menuItems){
    let displayMenu = menuItems.map((item)=>{
        return `
                    <div class="container-content">
                        <img src=${item.img} style="width: 140px; height: 140px">
                        <div class="description">
                            <h3>${item.title}</h3>
                            <hr>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `
    })
   
    displayMenu = displayMenu.join('')
   containerDiv.innerHTML = displayMenu
}

function displayButtons(){
    const categories = items.reduce((value, item)=>{
        if(!value.includes(item.category)){
            value.push(item.category)
        }return value
    },['all'])


    let allBtns = categories.map((category)=>{
        return `<button class="filter-btn" data-id="${category}">${category}</button>`
    }).join("")

    //allBtns = allBtns.join("")
   buttonsBtn.innerHTML = allBtns

   const btns = document.querySelectorAll('.filter-btn')

   btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const category = e.currentTarget.dataset.id

        // const menuCategory = items.filter((menuItem)=>{
        //     if(menuItem.category === category){
        //         return menuItem
        //     }
        // })
        // if (category === 'all'){
        //     displayItems(items)
        // }else{
        //     displayItems(menuCategory)
        // }

        const menuCategory= items.filter((menuItems)=>{
            if(menuItems.category === category){
                return menuItems
            }
        })

        if(category === 'all'){
            displayItems(items)
        }else{
            displayItems(menuCategory)
        }
    })
   })
}
//displayButtons(items)


