type ImageSlider = {
    id: string;
    title: string;
    description: string;
    images: Slider[];
};

type Slider = {
    id: string;
    url: string;
    sort: int;
};

type UpdateImageSlider = {
    id: string;
    title: string;
    description: string;
    images: UpdateSlider[];
};

interface UpdateSlider extends Slider {
    file?: File;
}
