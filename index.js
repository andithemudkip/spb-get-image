$("#search").click (function () {
    getData (bands, (objectData) => {
        let buttonCall = (name, id, callback) => {
            return $ ('<button/>', {
                text: name,
                id: id,
                click: callback
            });
        }

        bandsData = objectData;

        for (let i = 0; i < objectData.length; i++) {
            let wrapper = $ ("#genres");
            let currentList = $ ("<div/>");
            currentList.append ($ (`${i + 1} - ${objectData [i].toptags ['@attr'].artist}`));
            // let btn = buttonCall (`Extend`, `id${i}`, function () {
            //     console.log ('success');
            // });

            let btn = $ ('<button/>', {
                text: name,
                id: id,
                click: callback
            });

            currentList.append (btn);
            // here you should now append the invisibile div with all the tags or whatever
            // and then append the whole list
            wrapper.append (currentList);
        }
    })
});