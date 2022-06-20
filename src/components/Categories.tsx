import breakfastImg from '../assets/breakfast.svg'
import veganImg from '../assets/vegan.png'
import meatImg from '../assets/meat.png'
import lunchImg from '../assets/lunch.png'
import dessertImg from '../assets/dessert.png'
import chocolateImg from '../assets/chocolate.png'

export function Categories() {
    let categoriesMenu =[
        {name:"Breakfast", img: breakfastImg },
        {name:"Vegan", img: veganImg},
        {name:"Meat", img: meatImg},
        {name:"Dessert", img: dessertImg},
        {name:"Lunch", img: lunchImg},
        {name:"Chocolate", img: chocolateImg},
      ];

    return (
        <div className='flex flex-col w-full justify-center px-20'>
            <div className='flex'>
                <h2 className='flex-1'>Categories</h2>
                <p>More categories</p>
            </div>

            <ul className='flex justify-between items-center text-center'>
                {
                categoriesMenu.map((link)=>(
                    <li key={link.name} className='flex flex-col justify-between h-44 w-full max-w-[180px] px-10 items-center'>
                    <div className='absolute mx-10 w-full max-w-[180px] h-44 opacity-10 bg-gradient-to-t from-[#708246] rounded-3xl'></div>
                    <img src={link.img} className='max-w-24 h-24 drop-shadow-xl' />
                    <a href='/' className='pb-8'>{link.name}</a>
                    </li>
                ))
                }
            </ul>
        </div>
    );
}