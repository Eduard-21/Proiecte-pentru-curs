function readMessage(dataBinary) {

   let bytes: number[] = [];

   for (let i = 0, dataBitIndex = 0, currentByte = 0; i < pixels.length; i += 4) {

      for (let j = 0; j < 3; j++) {

         let bit = pixels[i + j] & 1;

         currentByte = (currentByte << 1) | bit;
         dataBitIndex++;

         if (dataBitIndex % 8 === 0) {
            bytes.push(currentByte);
            currentByte = 0;
         }

      }

   }

   return Buffer.from(bytes);

}

function async decode(targetPath) {

   return new Promise(resolve => {

      /**
       * Открываем изображение и получаем его пиксели
       **/
      fs.createReadStream(targetPath)
         .pipe(new PNG())
         .on('parsed', function() {

            //this - Объект PNG
            //this.data - Объект Buffer, по сути [R, G, B, A, R, G, B, A...]

            /**
             * Читаем данные
             **/
            let binaryTotalData = = readData(this.data);

            /**
              * Узнаем длинну исходного сообщения и обрезаем
             **/
            let length = binaryTotalData.readUInt32BE();
            let binaryMessage = binaryTotalData.slice(4, 4 + length);

            resolve(binaryMessage);

         });

   });


}