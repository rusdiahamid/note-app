import { Plus } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const HomePageAction = () => {
  return (
    <div className="homepage__action">
      <Link
        to="/new"
        className="action"
      >
        <Plus size={32} />
      </Link>
    </div>
  );
};

export default HomePageAction;
