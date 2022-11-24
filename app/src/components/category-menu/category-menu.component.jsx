import './category-menu.style.scss';
import CategoryItem from '../category-item/category-item.component';
import headphones from '../../images/Headphones.png';
import macbook from '../../images/MacBook.png';
import ipad from '../../images/iPad.png';
import watch from '../../images/Watch.png';
import speaker from '../../images/Speaker.png';
import storage from '../../images/HDD.png';
import processor from '../../images/Processor.png';

const categories = [
    {
      id: 1,
      title: 'dasudasidas',
      img: headphones
    },
    {
      id: 2,
      title: 'Macbooks',
      img: macbook
    },
    {
      id: 3,
      title: 'Ipads',
      img: ipad
    },
    {
      id: 4,
      title: 'Watches',
      img: watch
    },
    {
      id: 5,
      title: 'Speakers',
      img: speaker
    },
    {
      id: 6,
      title: 'Storage',
      img: storage
    },
    {
      id: 7,
      title: 'CPUs',
      img: processor
    }
  ]

const CategoryMenu = () => {

    return (
        <div className="categories-container">
            {categories.map( (category) => (
                <CategoryItem key={category.id} category={category}></CategoryItem>
            ))}
        </div>
    )
}

export default CategoryMenu;