import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { api } from '../../api';
import './create-collection-modal.css';

const CreateCollection = ({ setIsModalOpen }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);

  const handleCreate = async () => {
    if (selectedFields.length <= 1) {
      return alert('Add at least 2 films.');
    }
    if (title.length === 0) {
      return alert('Title cannot be empty.');
    }
    api.post('/collection', {
      title,
      image,
      movies: selectedFields.map((item) => item.value),
    });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api(`/movie`);

      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate();

    setTitle('');
    setImage('');
    setSelectedFields([]);
  };

  return (
    <form className='newCollectionForm' onSubmit={handleSubmit}>
      <div className='ma4'>
        <div className='flex flex-column mv4'>
          <label className='f2 fw6 orange' htmlFor='email'>
            Title
          </label>
          <input
            className='f3 new-collection-input'
            type='text'
            id='title'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className='flex flex-column mv4'>
          <label className='f2 fw6 orange' htmlFor='image'>
            Image URL
          </label>
          <input
            className='f4 new-collection-input'
            type='text'
            id='image'
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div className='flex flex-column mv4'>
          <label className='f2 fw6 orange' htmlFor='movies'>
            Select films
          </label>
        <Select
        className='new-collection-selector'
          isMulti
          options={movies.map((movie) => {
            return { value: movie._id, label: movie.title };
          })}
          value={selectedFields}
          onChange={(selectedFields) => {
            setSelectedFields(selectedFields);
            console.log(selectedFields);
          }}
        />
        </div>
        <div className='flex justify-around'>
          <button className='btn1 f3 w5' onClick={() => setIsModalOpen(false)}>Close</button>
          <button className='btn1 f3 w5' type='submit' onClick={()=>{window.location.reload()}}>Create Collection</button>
        </div>
      </div>
    </form>
  );
};

export default CreateCollection;
