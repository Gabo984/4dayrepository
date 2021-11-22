import React from "react";
import { Link } from "react-router-dom";


const MyWork = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portafolio">
        <Link
          className="portafolio__item"
          to={{ pathname: "https://www.youtube.com/embed/yb0yP0MnNNQ" }}
        >
          <iframe
            className="portafolio__iframe"
            width="50%"
            height="200"
            src="https://www.youtube.com/embed/yb0yP0MnNNQ"
            title="Component-first Applications (Kony)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Link>
      </div>
      <div className="portafolio">
        <Link
          className="portafolio__item"
          to={{ pathname: "https://www.youtube.com/embed/f8tBthFiRD8" }}
        >
          <iframe
            className="portafolio__iframe"
            width="50%"
            height="200"
            src="https://www.youtube.com/embed/f8tBthFiRD8"
            title="Component-first Applications"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Link>
      </div>
      <div className="portafolio">
        <Link
          className="portafolio__item"
          to={{ pathname: "https://www.youtube.com/embed/Jcn0_8WnABs" }}
        >
          <iframe
            className="portafolio__iframe"
            width="50%"
            height="200"
            src="https://www.youtube.com/embed/Jcn0_8WnABs"
            title="Quantum Fabric Workflows"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Link>
      </div>
      <div className="portafolio">
        <Link
          className="portafolio__item"
          to={{ pathname: "https://www.youtube.com/embed/d4axKOXP1Jk" }}
        >
          <iframe
            className="portafolio__iframe"
            width="50%"
            height="200"
            src="https://www.youtube.com/embed/d4axKOXP1Jk"
            title="Git and Visualizer Projects"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Link>
      </div>
      <div className="portafolio">
        <Link
          className="portafolio__item"
          to={{ pathname: "https://www.youtube.com/embed/dHCnpwbuG2s" }}
        >
          <iframe
            className="portafolio__iframe"
            width="50%"
            height="200"
            src="https://www.youtube.com/embed/dHCnpwbuG2s"
            title="IBAN Field Component"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Link>
      </div>
      <div className="portafolio">
        <Link
          className="portafolio__item"
          to={{ pathname: "https://www.youtube.com/embed/Cz82DeHGVnU" }}
        >
          <iframe
            className="portafolio__iframe"
            width="50%"
            height="200"
            src="https://www.youtube.com/embed/Cz82DeHGVnU"
            title="Material Design Button with Ripple"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Link>
      </div>
      <div className="portafolio">
        <Link
          className="portafolio__item"
          to={{ pathname: "https://www.youtube.com/embed/hVUrRuLmBWo" }}
        >
          <iframe
            className="portafolio__iframe"
            width="50%"
            height="200"
            src="https://www.youtube.com/embed/hVUrRuLmBWo"
            title="Secret Field Component"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Link>
      </div>
    </section>
  );
};

export default MyWork;
