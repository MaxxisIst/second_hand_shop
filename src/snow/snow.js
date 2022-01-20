/**Фуункция создает снег на странице
 *
 * @param {number} n - максимальная скорость падения
 */
const createSnow = (n) => {

/**Добавляем тег <style> в head
 * top: -30px - пмаксимальному размеру снежинки, чтобы не видно было ее "рождение"
*/
  const style = document.createElement('style');
  style.textContent = `
  body {
    position: relative;
  }
  .snow {
    width: 30px;
    height: 30px;
    position: fixed;
    top: -30px;
    pointer-events: none;
    animation: fall linear 5s;
    background-repeat: no-repeat;
    z-index: 99;
  }
  @keyframes fall {
    100% {
      transform: translateY(100vh)
    }
  }
  `;
  document.head.append(style);

/**count - количество видов снежинок (количество svg файлов)*/
  let i = 1;
  const count = 4;

  createSnowFlake = () => {
    const snow = document.createElement('div');
    snow.classList.add('snow');

    i += 1;
    if (i >= count) i = 1;

    /**Добавляем рандомные свойства снежинкам  */
    // snow.style.left = (Math.random() * window.innerWidth) + 'px';
    // snow.style.opacity = Math.random();
    // snow.style.animationDuration = (Math.random() * n + 2) + 's';
    // snow.style.backgroundImage = `url(snow/img/snow${i}.svg)`;
    snow.style.cssText = `
      left: ${Math.random() * window.innerWidth}px;
      opacity: ${Math.random()};
      animation-duration: ${Math.random() * n + 2}s;
      background-image: url(snow/img/snow${i}.svg);
    `;

    document.body.append(snow);

    /** Время (n + 2)*10 через которе снежинка пропадет */
    setTimeout(() => {
      snow.remove();
    }, (n + 2) * 1000);


  };

  setInterval(createSnowFlake, 100);

};
/**Максимальная скорость падения */

createSnow(10);
