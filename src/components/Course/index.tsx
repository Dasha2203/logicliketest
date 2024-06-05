import './style.scss'
import { Props } from './types'

const Course = ({ img, title, bgColor = 'white' }: Props) => {
  return (
    <div className="course">
      <div className="course__image" style={{ backgroundColor: bgColor }}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <div className="course__footer">{title}</div>
    </div>
  )
};

export default Course
