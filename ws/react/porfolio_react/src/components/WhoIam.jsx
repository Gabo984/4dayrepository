import React from 'react'

const WhoIam = () => {
    return (
        
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Digital Product Manager
      </p>

      <div className="about-me__body">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          accusantium sed fugit autem. Molestias deserunt sint dicta placeat
          facilis perferendis a, ipsum suscipit eaque asperiores debitis dolores
          repellendus rerum commodi fuga vero pariatur consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          sunt deleniti in debitis, earum enim saepe. Culpa alias eligendi
          deleniti similique provident. Amet assumenda possimus quod consequatur
          consequuntur asperiores neque.
        </p>
      </div>

      <img
        src="./img/example_photo.jpg"
        alt="MiguelangelFernández standing up"
        className="about-me__img"
      />
    </section>
    )
}

export default WhoIam
