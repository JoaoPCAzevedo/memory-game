/**
 * Dependencies
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../store/player/actions';

/**
 * Component
 */
const UserInput: React.FC = () => {
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    dispatch(register({ name }));
    event.preventDefault();
    navigate('/play');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="columns is-vcentered mb-5">
        <div className="field column is-4">
          <div className="control">
            <label className="label" htmlFor="name">
              Name
              <input
                id="name"
                className="input is-success"
                type="text"
                placeholder="Player name"
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="field column mt-3">
          <div className="control">
            <button id="play" type="submit" className="button is-link">
              Play
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserInput;
