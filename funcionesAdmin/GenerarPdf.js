function pdf(data){
              
    // aqui se instancia el pdf
      var doc = new jsPDF('p', 'pt', 'a4');//a4 es el formato del pdf de: 595 × 842
      var pageWidth = 595;
      var pageHeight = 842;
      var pageMargin = 20;
      pageWidth -= pageMargin * 2;
      pageHeight -= pageMargin * 2;
      var cellPadding = 10;
      var cellWidth = 118;
      var cellHeight = 82;
      var lineHeight = 20;
      var startX = 0;
      var startY = 0;
      doc.setFontSize(12);
      var page = 1;
      function createCard(item) {
        var requiredWidth = startX + cellWidth + (cellPadding * 2);
        var requiredHeight = startY + cellHeight + (cellPadding * 2);
        if (requiredWidth <= pageWidth) {
          textWriter(item, startX + cellPadding, startY + cellPadding);
          startX = requiredWidth;
        } 
        else {
          if (requiredHeight > pageHeight) {
            doc.addPage();
            page++;
            doc.setPage(page);
            startY = pageMargin;
          } 
          else 
            startY = requiredHeight;
          startX = 0;
          textWriter(item, startX + cellPadding, startY + cellPadding);
          startX = startX + cellWidth + (cellPadding * 2);
        }
      }
      function textWriter(item, xAxis, yAxis) {
        doc.rect(xAxis-4, yAxis-9, cellWidth+20, cellHeight+20);
        doc.text("Usuario", xAxis, yAxis);
        doc.text(item.user, xAxis, yAxis + lineHeight);
        doc.text("Contraseña:", xAxis, yAxis + (lineHeight * 2));
        doc.text(item.password, xAxis, yAxis + (lineHeight * 3));
        doc.text("$"+item.price, xAxis, yAxis + (lineHeight * 4));
        doc.addImage(imgData,'JPEG',xAxis+70, yAxis,60,70);
      }
      for (var i = 0; i < data.length; i++) {
        createCard(data[i]);
      }
      return doc;
      
      //doc.save('grid.pdf'); para que se descargue automaticamente
}

    