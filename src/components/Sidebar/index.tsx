import clsx from 'clsx'
import './style.scss'
import { Props } from './types'

const Sidebar = ({ list, active, onChange }: Props) => {

  function handleChange(item: string) {
    onChange(item)
  }

  return (
    <div className="sidebar">
      {list.map(tag => (
        <div
          className={clsx(
            'sidebar__item',
            active === tag && 'sidebar__item_active'
          )}
          onClick={() => handleChange(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  )
};

export default Sidebar
