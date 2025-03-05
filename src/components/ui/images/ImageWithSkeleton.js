import React, { useState } from 'react';
import { Skeleton } from '@mui/material';

const ImageWithSkeleton = ({ src, alt, className, skeletonMaxHeight }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative h-full">
            {!imageLoaded && (
                <Skeleton variant="rectangular" width="100%" height={skeletonMaxHeight || "100vh"} />
            )}
            <img
                src={src}
                alt={alt}
                className={`${className} ${imageLoaded ? 'block' : 'hidden'}`}
                onLoad={() => setImageLoaded(true)}
                style={{ display: imageLoaded ? 'block' : 'none' }}
            />
        </div>
    );
};

export default ImageWithSkeleton;
