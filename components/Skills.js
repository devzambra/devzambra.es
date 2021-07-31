import Image from 'next/image'
import { SKILLS } from '../constants/SKILLS'

export default function Skills () {
  return (
    <>
      <div className='flex items-center flex-col mt-10'>
        <div className='flex justify-center flex-wrap'>
          {SKILLS.map(skill => (
            <span
              key={skill.name}
              className='p-4 flex flex-col items-center'
            >
              <Image alt={skill.name} src={`/assets/icons/${skill.icon}`} width={50} height={50} />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
