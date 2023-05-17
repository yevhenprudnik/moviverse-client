import React, { useState, useEffect } from 'react';
import { api } from '../api';

const CreateCollection = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleCreate = async () => {
    api.post('/collection', {
      title,
      image,
      movies: selectedFields,
    });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api(`/movie?keyword=${searchKeyword}`);

      setMovies(response.data);
    };

    fetchMovies();
  }, [searchKeyword]);

  const handleSubmit = event => {
    event.preventDefault();
    handleCreate();

    setTitle('');
    setImage('');
    setSelectedFields([]);
  };

  const handleFieldSelection = (event, id) => {
    if (event.target.checked) {
      setSelectedFields([...selectedFields, id]);
    } else {
      setSelectedFields(selectedFields.filter(field => field !== id));
    }
  };

  const handleToggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = event => {
    setSearchKeyword(event.target.value);
  };

  return (
    <form className="pa4 black-80 white" onSubmit={handleSubmit}>
      <div className="measure">
        <label htmlFor="title" className="f6 b db mb2">
          Title:
        </label>
        <input
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div className="measure">
        <label htmlFor="image" className="f6 b db mb2">
          image URL:
        </label>
        <input
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          id="image"
          value={image}
          onChange={event => setImage(event.target.value)}
        />
        <div>
          <div onClick={handleToggleList} className="br2 pointer">
            {isOpen ? '▼' : '►'} Movies
          </div>
          {isOpen && (
            <div>
              <input
                type="text"
                placeholder="Search movies"
                value={searchKeyword}
                onChange={handleSearchChange}
              />
              {movies.map(({ title, _id }) => (
                <div key={title}>
                  <label>
                    <input
                      type="checkbox"
                      value={title}
                      checked={selectedFields.includes(_id)}
                      onChange={e => handleFieldSelection(e, _id)}
                    />
                    {title}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        className="f6 link dim br1 ba ph3 pv2 mb2 dib mid-gray"
        type="submit"
      >
        Create Collection
      </button>
    </form>
  );
};

export default CreateCollection;
