import React from 'react'
import {Link} from 'react-router-dom'


const WhatIDo = () => {

    

    return (
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
          <div className="service">
            <h3>Java</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              rerum non illo quaerat quas cum commodi explicabo, dolores eaque
              dolorum suscipit assumenda amet id architecto natus perferendis
              quibusdam distinctio iure error doloribus ducimus nobis impedit
              eius earum! Hic nostrum odio odit soluta facilis ipsum quia velit
              qui atque, consequatur eos in esse quo aliquid vitae dolorum?
              Culpa illum laudantium nihil consequatur odio accusamus provident
              sapiente.
            </p>
          </div>

          <div className="service">
            <h3>Python</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non,
              dolorum cupiditate error saepe exercitationem quae, voluptatibus
              explicabo officiis similique aut maxime. Non, doloribus eaque! Id
              nesciunt ut aperiam corporis tempora earum hic ipsum ad pariatur
              cum illo, recusandae cupiditate esse facere voluptatum eaque!
              Ullam, amet. Consequuntur sunt eaque repellendus dolore illo alias
              rerum sequi distinctio optio? Sequi pariatur iste ab, quas minima
              dolorum.
            </p>
          </div>

          <div className="service">
            <h3>Whatever</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              tenetur aspernatur consectetur quaerat. Dolor ex nulla
              repellendus, sed dolores voluptatum laboriosam necessitatibus
              error voluptates porro similique asperiores. Labore ducimus
              laborum doloremque? Eaque doloribus quibusdam impedit vero minus
              ea aliquam nobis quos ipsum, nam aspernatur tempora voluptas nisi
              alias. Illum vero aut, voluptatum omnis, est voluptatem corrupti
              cupiditate optio itaque.
            </p>
          </div>
        </div>
        <Link to="/myWork">
          <button  type="button" className="btn">
            My Work
          </button>
        </Link>
      </section>
    );
}

export default WhatIDo
