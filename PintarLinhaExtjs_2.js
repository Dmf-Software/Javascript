function pintarLinha(value, meta, record, rowIndex, colIndex, store) {
    var colunas = App.gridPanel.getColumns();
    var divergencias = [];
    for (var cont = 0; cont < App.gridPanel.getStore().data.items.length; cont++) {

        divergencias.push(App.gridPanel.getStore().data.items[cont].data.DIVERGENCIAS.split('@'));


    }
    //for (var cont = 0; cont < App.gridPanel.getColumns().length; cont++) {
    //    colunas.push([App.gridPanel.getColumns()[cont].dataIndex,cont])
    //}

    for (var cont = 0; cont < divergencias.length; cont++) {
        if (divergencias[cont][0] !== "") {
            //App.gridPanel.getView().getCell(2, 3).dom.style.color = 'blue'
            //var indexOf = colunas.indexOf(divergencias[cont][0]);
            var indexOf = -1;
            for (var index = 0; index < colunas.length; index++) {
                if (colunas[index].dataIndex === divergencias[cont][0]) {
                    indexOf = colunas[index];
                    break;
                }
            }
         //   var coluna = App.gridPanel.getColumns()[indexOf[1]].ariaEl.dom;
            var coluna = indexOf.ariaEl.dom;
            coluna.style.color = "white";
            coluna.style.background = "#AA3939";
            var cell = document.getElementsByClassName("x-grid-cell x-grid-td x-grid-cell-" + indexOf.id + " x-wrap-cell");
            cell.style.backgroundColor = '#AA3939';
            cell.style.color = 'white';
        }

    }

}
      