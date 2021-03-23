import React, { useEffect } from 'react';
import '../static/scss/lab2.scss';
const Lab2 = () => {
  useEffect(() => {
    function resizeMasonryItem(item) {
      /* Get the grid object, its row-gap, and the size of its implicit rows */
      var grid = document.getElementsByClassName('masonry')[0];
      if (grid) {
        var rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
          ),
          rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
          ),
          gridImagesAsContent = item.querySelector('img.masonry-content');

        var rowSpan = Math.ceil(
          (item.querySelector('.masonry-content').getBoundingClientRect()
            .height +
            rowGap) /
            (rowHeight + rowGap)
        );

        /* Set the spanning as calculated above (S) */
        item.style.gridRowEnd = 'span ' + rowSpan;
        if (gridImagesAsContent) {
          item.querySelector('img.masonry-content').style.height =
            item.getBoundingClientRect().height + 'px';
        }
      }
    }

    function resizeAllMasonryItems() {
      let allItems = document.querySelectorAll('.masonry-item');
      if (allItems) {
        for (var i = 0; i > allItems.length; i++) {
          resizeMasonryItem(allItems[i]);
        }
      }
    }

    var masonryEvents = ['load', 'resize'];
    masonryEvents.forEach(function (event) {
      window.addEventListener(event, resizeAllMasonryItems);
    });
  });
  return (
    <>
      <div class='masonry-wrapper'>
        <div class='masonry'>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/325?image=100'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Nesciunt aspernatur eaque similique laudantium a
              </h3>
              <p class='masonry-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda modi inventore, totam vero consequuntur, aut animi
                veritatis tempora nulla facere placeat velit illum explicabo
                dicta enim ipsum. Vitae ducimus, ratione.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/450?image=200'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Consequatur adipisci neque possimus quod ut quidem omnis numquam
                dolorum
              </h3>
              <p class='masonry-description'>
                Consectetur adipisicing elit. Sit enim ipsam mollitia repellat
                nemo, accusantium? Fugit id ipsam libero vitae quas perferendis,
                delectus a amet perspiciatis iusto. Quia, quam, culpa.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/280?image=300'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>Adipisci alias ullam est accusamus</h3>
              <p class='masonry-description'>
                Adipisci repellendus ratione laudantium nisi eaque voluptatem
                fuga quod hic, explicabo amet at laborum maiores ducimus et a
                vel quidem dolorem modi.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/540?image=400'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Dolor sit amet, consectetur adipisicing elit
              </h3>
              <p class='masonry-description'>
                Vitae est numquam, dolore, ipsum tempora molestiae. Ut optio
                natus velit eaque tempora commodi dolor doloremque error quidem
                labore, incidunt odit est nobis numquam. Ullam quas minima,
                neque modi reiciendis consequuntur inventore!
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/380?image=500'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Veritatis aut repellendus, quidem nesciunt consequatur nulla sed
                itaque
              </h3>
              <p class='masonry-description'>
                Expedita voluptate similique ad harum dolorem nam ipsa repellat
                quos, autem eius magni minima, asperiores nobis repudiandae ut
                quibusdam atque! Delectus atque veniam labore suscipit ullam,
                consequuntur dicta, tenetur est nulla, quod obcaecati similique?
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/300?image=600'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Culpa quo animi ut temporibus, et distinctio facere perspiciatis
                saepe sunt unde
              </h3>
              <p class='masonry-description'>
                Iusto magni quasi recusandae autem ipsum asperiores consequatur
                explicabo, vero nam iste quas sequi reiciendis quod, quos!
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/400?image=700'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Molestiae quod consectetur enim modi unde expedita dicta
                placeat?
              </h3>
              <p class='masonry-description'>
                Aliquam laudantium mollitia quo sint maxime omnis repellendus
                beatae. Consequuntur molestias odio sapiente. Officia minima,
                nisi! Tempora vero, architecto ducimus animi nostrum nobis
                aliquid eligendi illo, facilis temporibus.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/300?image=800'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Sit amet, consectetur adipisicing elit. Incidunt, commodi!
              </h3>
              <p class='masonry-description'>
                Accusamus culpa maxime harum minus ipsa ea qui, blanditiis sequi
                debitis. Temporibus quisquam consequatur dolor, aliquid odio
                nulla dolorum animi quasi et! Reiciendis ipsum repellendus
                quaerat explicabo, laboriosam amet, temporibus at sed
                voluptatibus, minima quia.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/280?image=900'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Inventore ducimus, voluptate a nostrum molestiae non
              </h3>
              <p class='masonry-description'>
                Similique officia recusandae, at labore quae, minus aspernatur
                cupiditate repellendus optio nesciunt iure aliquid praesentium,
                omnis, quas est natus temporibus aliquam vero.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/480?image=925'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Voluptatum nisi, nostrum eaque consequatur officiis similique!
              </h3>
              <p class='masonry-description'>
                Soluta eius itaque, molestiae laborum! Facere velit reiciendis
                quis architecto vel minima consequuntur voluptates temporibus
                consequatur, aperiam maiores! Perferendis quos architecto
                quaerat, aliquid earum culpa labore.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/550?image=950'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Perspiciatis non voluptatibus quo ab doloremque accusantium
              </h3>
              <p class='masonry-description'>
                Eligendi similique excepturi cumque nemo modi voluptates
                mollitia atque doloribus, laborum magnam itaque a! Dignissimos
                expedita vel minus impedit laudantium.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/600?image=1000'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Quam id laudantium debitis perferendis neque perspiciatis!
              </h3>
              <p class='masonry-description'>
                Deleniti blanditiis iste cupiditate ea obcaecati corporis, quas
                nobis possimus molestiae. Sed, minima.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/325?image=25'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Nesciunt aspernatur eaque similique laudantium a
              </h3>
              <p class='masonry-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda modi inventore, totam vero consequuntur, aut animi
                veritatis tempora nulla facere placeat velit illum explicabo
                dicta enim ipsum. Vitae ducimus, ratione.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/450?image=50'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Consequatur adipisci neque possimus quod ut quidem omnis numquam
                dolorum
              </h3>
              <p class='masonry-description'>
                Consectetur adipisicing elit. Sit enim ipsam mollitia repellat
                nemo, accusantium? Fugit id ipsam libero vitae quas perferendis,
                delectus a amet perspiciatis iusto. Quia, quam, culpa.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/280?image=75'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>Adipisci alias ullam est accusamus</h3>
              <p class='masonry-description'>
                Adipisci repellendus ratione laudantium nisi eaque voluptatem
                fuga quod hic, explicabo amet at laborum maiores ducimus et a
                vel quidem dolorem modi.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/540?image=100'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Dolor sit amet, consectetur adipisicing elit
              </h3>
              <p class='masonry-description'>
                Vitae est numquam, dolore, ipsum tempora molestiae. Ut optio
                natus velit eaque tempora commodi dolor doloremque error quidem
                labore, incidunt odit est nobis numquam. Ullam quas minima,
                neque modi reiciendis consequuntur inventore!
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/380?image=125'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Veritatis aut repellendus, quidem nesciunt consequatur nulla sed
                itaque
              </h3>
              <p class='masonry-description'>
                Expedita voluptate similique ad harum dolorem nam ipsa repellat
                quos, autem eius magni minima, asperiores nobis repudiandae ut
                quibusdam atque! Delectus atque veniam labore suscipit ullam,
                consequuntur dicta, tenetur est nulla, quod obcaecati similique?
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/300?image=161'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Culpa quo animi ut temporibus, et distinctio facere perspiciatis
                saepe sunt unde
              </h3>
              <p class='masonry-description'>
                Iusto magni quasi recusandae autem ipsum asperiores consequatur
                explicabo, vero nam iste quas sequi reiciendis quod, quos!
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/400?image=175'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Molestiae quod consectetur enim modi unde expedita dicta
                placeat?
              </h3>
              <p class='masonry-description'>
                Aliquam laudantium mollitia quo sint maxime omnis repellendus
                beatae. Consequuntur molestias odio sapiente. Officia minima,
                nisi! Tempora vero, architecto ducimus animi nostrum nobis
                aliquid eligendi illo, facilis temporibus.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/300?image=200'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Sit amet, consectetur adipisicing elit. Incidunt, commodi!
              </h3>
              <p class='masonry-description'>
                Accusamus culpa maxime harum minus ipsa ea qui, blanditiis sequi
                debitis. Temporibus quisquam consequatur dolor, aliquid odio
                nulla dolorum animi quasi et! Reiciendis ipsum repellendus
                quaerat explicabo, laboriosam amet, temporibus at sed
                voluptatibus, minima quia.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/280?image=225'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Inventore ducimus, voluptate a nostrum molestiae non
              </h3>
              <p class='masonry-description'>
                Similique officia recusandae, at labore quae, minus aspernatur
                cupiditate repellendus optio nesciunt iure aliquid praesentium,
                omnis, quas est natus temporibus aliquam vero.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/480?image=250'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Voluptatum nisi, nostrum eaque consequatur officiis similique!
              </h3>
              <p class='masonry-description'>
                Soluta eius itaque, molestiae laborum! Facere velit reiciendis
                quis architecto vel minima consequuntur voluptates temporibus
                consequatur, aperiam maiores! Perferendis quos architecto
                quaerat, aliquid earum culpa labore.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/550?image=275'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Perspiciatis non voluptatibus quo ab doloremque accusantium
              </h3>
              <p class='masonry-description'>
                Eligendi similique excepturi cumque nemo modi voluptates
                mollitia atque doloribus, laborum magnam itaque a! Dignissimos
                expedita vel minus impedit laudantium.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/600?image=300'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Quam id laudantium debitis perferendis neque perspiciatis!
              </h3>
              <p class='masonry-description'>
                Deleniti blanditiis iste cupiditate ea obcaecati corporis, quas
                nobis possimus molestiae. Sed, minima.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/325?image=13'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Nesciunt aspernatur eaque similique laudantium a
              </h3>
              <p class='masonry-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda modi inventore, totam vero consequuntur, aut animi
                veritatis tempora nulla facere placeat velit illum explicabo
                dicta enim ipsum. Vitae ducimus, ratione.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/450?image=26'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Consequatur adipisci neque possimus quod ut quidem omnis numquam
                dolorum
              </h3>
              <p class='masonry-description'>
                Consectetur adipisicing elit. Sit enim ipsam mollitia repellat
                nemo, accusantium? Fugit id ipsam libero vitae quas perferendis,
                delectus a amet perspiciatis iusto. Quia, quam, culpa.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/280?image=39'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>Adipisci alias ullam est accusamus</h3>
              <p class='masonry-description'>
                Adipisci repellendus ratione laudantium nisi eaque voluptatem
                fuga quod hic, explicabo amet at laborum maiores ducimus et a
                vel quidem dolorem modi.
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/540?image=52'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Dolor sit amet, consectetur adipisicing elit
              </h3>
              <p class='masonry-description'>
                Vitae est numquam, dolore, ipsum tempora molestiae. Ut optio
                natus velit eaque tempora commodi dolor doloremque error quidem
                labore, incidunt odit est nobis numquam. Ullam quas minima,
                neque modi reiciendis consequuntur inventore!
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/380?image=65'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Veritatis aut repellendus, quidem nesciunt consequatur nulla sed
                itaque
              </h3>
              <p class='masonry-description'>
                Expedita voluptate similique ad harum dolorem nam ipsa repellat
                quos, autem eius magni minima, asperiores nobis repudiandae ut
                quibusdam atque! Delectus atque veniam labore suscipit ullam,
                consequuntur dicta, tenetur est nulla, quod obcaecati similique?
              </p>
            </div>
          </div>
          <div class='masonry-item'>
            <div class='masonry-content'>
              <img
                src='https://picsum.photos/450/300?image=78'
                alt='Dummy Image'
              />
              <h3 class='masonry-title'>
                Culpa quo animi ut temporibus, et distinctio facere perspiciatis
                saepe sunt unde
              </h3>
              <p class='masonry-description'>
                Iusto magni quasi recusandae autem ipsum asperiores consequatur
                explicabo, vero nam iste quas sequi reiciendis quod, quos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lab2;
