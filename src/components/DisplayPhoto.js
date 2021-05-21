const DisplayPhoto = ({ photoDetails }) => {
  const { photoData, setCompareData, setDeleteId } = photoDetails;
  console.log(photoData)
  return photoData.map((photo) => {
    const { id, title, url } = photo;
    return (
      <div className='photo-data' key={id}>
        <div className='photo-image'>
          <img src={url} />
        </div>
        <div className='photo-info'>
          <div className='photo-title text-primary'>
            {title}
          </div>
          <div className='photo-id text-primary'>
            <span>{id}</span>
          </div>
          <div className='photo-id text-primary'>
            <span>{url}</span>
          </div>
        </div>
        <div className='btn-container'>
          {
            !photo.compare ? <button className='btn btn-dark' onClick={(e) => {
              photo.compare = true;
              setCompareData(item => [...item, photo]);
            }}>Compare</button>
              : <button className='btn btn-dark' style={{ background: '#B92B28' }} onClick={(e) => {
                photo.compare = false;
                setDeleteId(id);
              }}>Remove</button>
          }
        </div>
      </div>
    );
  });
}

export default DisplayPhoto;
