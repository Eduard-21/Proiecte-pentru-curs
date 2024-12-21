import { PNG } from 'pngjs';
import fs from 'node:fs';

function writeData(imageBinary, dataBinary) {

   for (let i = 0, dataBitIndex = 0; i < imageBinary.length; i += 4) {

      for (let j = 0; j < 3; j++, dataBitIndex++) {

         if (dataBitIndex >= dataBinary.length * 8) {
            return imageBinary;
         }

         /**
          * Получаем текущий бит данных
          **/

         let bit = (dataBinary[Math.floor(dataBitIndex / 8)] >> (7 - (dataBitIndex % 8))) & 1;

         /**
          * Смещаем цвет
          **/
         imageBinary[i + j] = (imageBinary[i + j] & 0xFE) | bit;

      }

   }

   return imageBinary;

}

function async encode(inputPath, outputPath, message) {

   let binaryMessage = Buffer.from(message, 'utf-8');

   return new Promise(resolve => {

      /**
       * Открываем изображение и получаем его пиксели
       **/
      fs.createReadStream(inputPath)
         .pipe(new PNG())
         .on('parsed', function() {

            //this - Объект PNG
            //this.data - Объект Buffer, по сути [R, G, B, A, R, G, B, A...]

            /**
             * Запишем длинну сообщения в первые 4 байта
             **/
            let length = Buffer.alloc(4);
            length.writeUInt32BE(binaryMessage.length, 0);


            let binaryTotalData = Buffer.concat([
               length,
               binaryTotalData
            ]);

            /**
             * Заменяем пиксели
             **/
            writeData(this.data, binaryTotalData);

            /**
             * Сохраняем в файл
             **/
            let stream = fs.createWriteStream(outputPath);

            stream.on('finish', resolve);

            this.png.pack().pipe(stream);

         });

   });
}