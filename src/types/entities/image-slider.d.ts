type ImageSlider = {
    title: string;
    description: string;
    images: Slider[];
};

type Slider = {
    id: string;
    url: string;
    sort: int;
};
