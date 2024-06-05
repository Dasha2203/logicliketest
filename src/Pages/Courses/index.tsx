import React, { useEffect, useState } from 'react'

import { Course as CourseType } from '../../types/course'
import Sidebar from '../../components/Sidebar'
import removeDuplicates from '../../utils/removeDuplicates'
import Course from '../../components/Course'
import Loader from '../../components/Loader'
import './style.scss'

const ALL_TAGS = 'Все темы'

const Courses = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [activeTag, setActiveTag] = useState(tags[0])
  const [courses, setCourses] = useState<CourseType[]>([])
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (activeTag === ALL_TAGS) {
      setFilteredCourses(courses)
      return
    }

    setFilteredCourses(courses.filter(item => item.tags.includes(activeTag)) || [])
  }, [activeTag, courses])

  async function getData() {
    try {
      setIsLoading(true)

      const res = await fetch('https://logiclike.com/docs/courses.json')
      const data: CourseType[] = await res.json()
      setData(data)
      setCourses(data)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  function setData(data: CourseType[]) {
    const allTags = data.map(i => i.tags).flat()
    const formatTags = removeDuplicates(allTags)

    setTags([ALL_TAGS, ...formatTags])
    setActiveTag(formatTags[0])
  }

  if (isLoading) return <Loader />

  return (
    <div className="container">
      <Sidebar
        list={tags}
        active={activeTag}
        onChange={setActiveTag}
      />
      <div className="list-courses">
        {filteredCourses.map(({ id, image, name, bgColor }) => (
          <a key={id} href="#" className="list-courses__link">
            <Course
              img={image}
              title={name}
              bgColor={bgColor}
            />
          </a>
        ))}
      </div>
    </div>
  )
};

export default Courses;
