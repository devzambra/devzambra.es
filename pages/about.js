import Skills from '../components/Skills'

export default function About () {
  return (
    <>
      <div class='m-5 p-5 rounded-lg bg-gray-300 dark:bg-gray-700'>
        <p>
          Hola, soy <strong>Manuel Zambrano</strong>, desarrollador web y mobile
          viviendo en Barcelona.
        </p>
        <p>
          Soy un apasionado de la tecnología en general y de la programación en
          concreto. Actualmente mis principales intereses son: Angular, Vue,
          React, Frontend en general y también un poco de Swift y apps móviles.
        </p>
        <p>
          Me gusta estar constantemente aprendiendo y, si puedo, también compartir
          conocimientos con los compañeros del sector.
        </p>
      </div>
      <Skills />
    </>
  )
}
