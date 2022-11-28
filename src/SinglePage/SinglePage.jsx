import React from "react";
import "./SinglePage.css";
import anons from "../img/right_side.svg";
import facebook from '../img/facebook.png'

export default function SinglePage() {
  return (
    <div>
      <body>
        <main>
          <section>
            <div className="single-page-container">
              <div className="main-body">
                <div className="body-text">
                  <p className="main-text">
                    Это отдельная страница, где мы используем ее для
                    предоставления информации, выходящей за рамки основной идеи
                    сайта!
                  </p>
                  <em className="personal-word">Если есть краткое описание темы, мы дадим его так!</em>
                  <p className="instance-word">Например, внизу сайта есть меню для рекламодателей, поэтому, когда пользователь нажмет на него, откроется информационная страница для рекламодателей, и она будет выглядеть вот так!</p>
                  <p className="last-word">Я также должен упомянуть, что данные могут содержать случаи видео и изображений, поэтому я подумал, что было бы хорошо выводить их в точном размере! И я сделал это так!</p>
                </div>
                <img className="right-image" src={anons} alt="anons" />
              </div>
              <img className="facebook-image" src={facebook} alt="" />
            </div>
          </section>
        </main>
        
      </body>
      
    </div>
  );
}
