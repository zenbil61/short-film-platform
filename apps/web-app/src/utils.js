import * as Yup from 'yup';

export const getInitialValuesBySchema = (
  schema,
  defaultValue = {},
  formObj = {}
) => {
  const initialValues = {};

  // Şemanın alanlarını döngüye al
  for (const key in schema.fields) {
    if (schema.fields.hasOwnProperty(key)) {
      const field = schema.fields[key];

      // Alanın türünü kontrol et ve uygun başlangıç değeri ata
      if (field instanceof Yup.BooleanSchema) {
        // Boolean alanlar için varsayılan değer olarak null
        initialValues[key] = defaultValue[key] || false;
      } else {
        // Diğer türler için varsayılan değer
        initialValues[key] = defaultValue[key] || '';
      }
    }
  }

  return {
    ...initialValues,
    ...formObj
  };
};
export const validateImage = (file, { maxMb, maxWidth, maxHeight }) => {
  return new Promise((resolve) => {
    // Dosya tipi kontrolü
    if (!file.type.startsWith('image/')) {
      resolve(false);
      return;
    }
    // Dosya boyutu kontrolü (mb-cinsinden)
    if (file.size > maxMb * 1024 * 1024) {
      resolve(false);
      return;
    }
    const img = new Image();
    const objectURL = URL.createObjectURL(file);
    img.onload = () => {
      // Resim boyutları kontrolü
      if (img.width >= maxWidth && img.height >= maxHeight) {
        resolve(true);
      } else {
        resolve(false);
      }
      // Bellek sızıntısını önlemek için nesneyi serbest bırakma
      URL.revokeObjectURL(objectURL);
    };

    img.onerror = () => {
      resolve(false);
    };

    img.src = objectURL;
  });
};
export const getBase64ImageDimensions = (base64Data) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
    };
    // img.onerror = () => {
    //   reject('Failed to load image.');
    // };
    img.src = base64Data;
  });
};
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      // Data URL'den Base64 kısmını çıkar  => event.target.result.split(',')[1]
      resolve(event.target.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    // Dosyayı data URL olarak oku
    reader.readAsDataURL(file);
  });
};
