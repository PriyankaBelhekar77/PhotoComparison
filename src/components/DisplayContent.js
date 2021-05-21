import { useEffect, useState } from 'react';
import DisplayPhoto from './DisplayPhoto';
import DisplayCompareTable from './DisplayCompareTable';
import Spinner from './Spinner';

const DisplayContent = () => {
  const [loading, setStatus] = useState(false);
  const [photoData, setPhotoData] = useState();
  const [compareData, setCompareData] = useState([]);
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    setStatus(true);
    const fetchURL = 'https://jsonplaceholder.typicode.com/photos'
    const getData = () => fetch(fetchURL).then((res) => res.json());
    getData().then(data => {
      const newData = data.filter(val => val.id <= 20)
      newData.forEach(element => {
        element.comapre = false;
      });
      setPhotoData(newData);
    });
    setStatus(false);
  }, []);

  useEffect(() => {
    photoData && setPhotoData(photoData.filter(val => val.id !== deleteId));
    compareData && setCompareData(compareData.filter(val => val.id !== deleteId));
  }, [deleteId]);

  console.log('compareData', photoData);
  return (
    <div>
      {
        loading ? <Spinner /> :
          <div className='wrap-content'>
            {
              photoData && <DisplayPhoto photoDetails={{ photoData, setCompareData, setDeleteId }} />
            }
            {
              compareData.length && <DisplayCompareTable compareData={compareData} />
            }
          </div>
      }
    </div>
  );
}

export default DisplayContent;
