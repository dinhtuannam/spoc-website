import { UploadCardRef } from '@/components/card/upload.card';
import { useRef } from 'react';

const useUploadRef = () => {
    const uploadRefs = useRef<{ [key: string]: UploadCardRef }>({});

    const setUploadImageRef = (id: string, url: string) => {
        uploadRefs.current[id]?.clearSelectedImage(url);
    };

    return { uploadRefs, setUploadImageRef };
};

export default useUploadRef;
