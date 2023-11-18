import menu from './database.js';


const menuContainer = document.getElementById('menu-container');
/**
 * 
 */
// console.log(menu)


const filterButton = document.querySelectorAll(".filter-btn");

document.addEventListener('DOMContentLoaded', () => {
    displayMenu(menu);
})

function displayMenu(menuItems) {
    // console.log(menuItems);

    let displayMenu = menuItems.map((menuItem) => `
   <div class="d-flex align-items-center gap-3 flex-column flex-md-row my-2" id="card">
   <img src="${menuItem.img}" alt="" id="image" class="rounded shadow">
   <div class="">
       <div class="d-flex justify-content-between">
           <h5>${menuItem.title}</h5>
           <p>$${menuItem.price}</p>
       </div>
       <p class="lead">
       ${menuItem.desc}
       </p>
   </div>
</div>
   
   `)

    displayMenu = displayMenu.join('')
    menuContainer.innerHTML = displayMenu;
}


filterButton.forEach((button) => {
    //console.log(button)

    button.addEventListener("click", (e) => {
        const category = e.target.dataset.id;

        searchCategory(category);
    });
});

function searchCategory(categoryInfo) {

    const filteredMenu = menu.filter(

        (menuItem) => menuItem.category === categoryInfo

    );

    if (categoryInfo === "all") {
        displayMenu(menu);
    } else {
        displayMenu(filteredMenu);
    }
}