// Image size presets for different aspect ratios
export const imageSizes = {
  PRODUCT: {
    square: { width: 1000, height: 1000 },
    landscape: { width: 1200, height: 1000 },
    portrait: { width: 600, height: 800 },
    thumb: { width: 200, height: 200 },
    hero: { width: 1280, height: 720 },
  },
};

export const getOriginalImageSize = (imageId) => {
  if (!imageId) return;

  const dimensionString = imageId.split('-')[2];
  const [imgWidthStr, imgHeightStr] = dimensionString.split('x');

  return {
    width: +imgWidthStr,
    height: +imgHeightStr,
  };
};

export const getSanityImage = (
  aspect = 'square',
  image,
  retina = false
) => {
  if (!image) {
    return '';
  }

  const rawSize = getOriginalImageSize(image.asset?.id);

  let requestWidth;
  let requestHeight;

  if (rawSize) {
    // Use actual image dimensions, just scale down if too large
    const maxWidth = aspect === 'hero' ? 1280 : 960;
    const maxHeight = aspect === 'hero' ? 720 : 960;

    if (rawSize.width > maxWidth || rawSize.height > maxHeight) {
      const widthRatio = maxWidth / rawSize.width;
      const heightRatio = maxHeight / rawSize.height;
      const scale = Math.min(widthRatio, heightRatio);

      requestWidth = Math.round(rawSize.width * scale);
      requestHeight = Math.round(rawSize.height * scale);
    } else {
      requestWidth = rawSize.width;
      requestHeight = rawSize.height;
    }

    if (retina) {
      requestWidth = Math.round(requestWidth * 1.25); // Balanced for retina, saves bandwidth
      requestHeight = Math.round(requestHeight * 1.25); // Balanced for retina, saves bandwidth
    }
  } else {
    // Fallback to preset sizes if we can't get dimensions
    const width = imageSizes.PRODUCT[aspect || 'square'].width;
    const height = imageSizes.PRODUCT[aspect || 'square'].height;
    requestWidth = retina ? Math.round(width * 1.25) : width;
    requestHeight = retina ? Math.round(height * 1.25) : height;
  }

  // Don't apply any cropping or focal points - use original image
  let crop = '';
  let rect = '';
  let fpx = '';
  let fpy = '';

  // Add quality parameter for better compression (75 is optimal balance for quality/bandwidth)
  return `${image.asset?.url}?w=${requestWidth}&h=${requestHeight}${rect}${crop}${fpx}${fpy}&q=75&auto=format`;
};
