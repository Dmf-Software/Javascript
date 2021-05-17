function pintarLinha(value, meta, record, rowIndex, colIndex, store) {
    var colunas = [];
    var divergencias = [];
    for (var cont = 0; cont < App.gridPanel.getStore().data.items.length; cont++) {

        divergencias.push(App.gridPanel.getStore().data.items[cont].data.DIVERGENCIAS.split('@'));


    }
    for (var cont = 0; cont < App.gridPanel.getColumns().length; cont++) {
        colunas.push(App.gridPanel.getColumns()[cont].config.text)
    }

    for (var cont = 0; cont < divergencias.length; cont++) {
        if (divergencias[cont][0] !== "") {
            //App.gridPanel.getView().getCell(2, 3).dom.style.color = 'blue'
            var indexOf = colunas.indexOf(divergencias[cont][0]);
            App.gridPanel.getView().getCell(cont, indexOf).dom.style.color = 'red';
        }

    }

}
      
