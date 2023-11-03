import { beautyPackageType } from '@/Types/beautyPackage';

interface BeautyPackageItemProps {
  item: beautyPackageType;
}

const BeautyPackageItem: React.FC<BeautyPackageItemProps> = ({ item }) => {
  return (
    <section className='sp container'>
      <p>{item.title}</p>
    </section>
  );
};

export default BeautyPackageItem;
