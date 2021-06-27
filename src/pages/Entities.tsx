import { useEffect, useState } from 'react';
import axios from 'axios';
import EntitiesCard from 'components/EntitiesCard';

export default function Entites() {
  const [photos, setPhotos] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      setPhotos(response.data.thumbnailUrl);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <EntitiesCard
        img="./assets/images/img1.jpg"
        title={'Abc generic componany'}
        adress={'asdad'}
        country={'asdasd'}
      ></EntitiesCard>
    </div>
  );
}
