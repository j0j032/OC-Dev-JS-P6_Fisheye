1. install WebPack:
2. To run code: npm run start.

Assets:
Path to photographer profile pic:
./src/assets/photograhers/ 'source'

Path to medias:
./src/assets/medias/ 'source'

CODE: ./src/

/data
=> json with photographers and media datas

/html
=> index.html for home page (choose a photographer page)
=> photographer.html (photographer profile)

/scripts

    1.components
        1.a: api => to get data
        1.b: dom => create DOM
        1.c: domLinker => get DOM element

    2.factories
        2.a: medias => create medias cards
        3.b: photographer => create photographer cards

    3.pages
        3.a: index => to run code on home page
        3.b: photographer => to run code on photographerPage
            => get photographer details
            => get medias
            => sort medias
            => likes logic

    4.utils
        4.a: lightBox => lightBox methods
        4.b: modal => modal methods

    /scss
        => style each pages and components

    app.js => get url by id for photographer pages
