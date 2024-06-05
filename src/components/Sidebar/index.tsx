import { useState } from 'react'
import clsx from 'clsx'

import './style.scss'
import { Props } from './types'

const Sidebar = ({ list, active, onChange }: Props) => {
  const [isOpened, setIsOpened] = useState(false)

  function handleChange(item: string) {
    onChange(item)
    setIsOpened(false)
  }

  return (
    <div className="sidebar">
      <button
        className={clsx(
          'sidebar__button',
          isOpened && 'sidebar__button_active'
        )}
        onClick={() => setIsOpened(prev => !prev)}
        children={<span />}
      />

      <div
        className={clsx(
          'sidebar__list',
          isOpened && 'sidebar__list_active'
        )}
      >
        {list.map(tag => (
          <div
            key={tag}
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
    </div>
  )
};

export default Sidebar
